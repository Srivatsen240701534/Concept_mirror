import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { MasteryLevel, MasteryRecord } from '../../types';
import {
  Brain,
  CheckCircle,
  AlertTriangle,
  Clock,
  Eye,
  Maximize2,
  RotateCw,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Play,
  Layers,
} from 'lucide-react';

interface KnowledgeNeuralMirrorProps {
  masteryMap: Record<string, MasteryRecord>;
  onSelectConcept?: (conceptName: string) => void;
  onPracticeConcept?: (conceptName: string) => void;
  height?: string;
  isFullPage?: boolean;
}

// Scratch reusable math objects to avoid garbage collection inside render loop
const _vec3A = new THREE.Vector3();
const _vec3B = new THREE.Vector3();
const _colorA = new THREE.Color();
const _raycaster = new THREE.Raycaster();
const _mouse = new THREE.Vector2();

export const KnowledgeNeuralMirror: React.FC<KnowledgeNeuralMirrorProps> = ({
  masteryMap,
  onSelectConcept,
  onPracticeConcept,
  height = '620px',
  isFullPage = false,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [selectedNode, setSelectedNode] = useState<{
    name: string;
    level: MasteryLevel;
    score: number;
    subject: string;
    topic: string;
    answersCount: number;
    correctCount: number;
    lastTested: string;
  } | null>(null);

  const [filter, setFilter] = useState<'All' | 'Mastered' | 'Developing' | 'Needs Revision'>('All');
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [rotationSpeed, setRotationSpeed] = useState<number>(0.8);
  const [isControlsCollapsed, setIsControlsCollapsed] = useState<boolean>(false);
  const [cameraPreset, setCameraPreset] = useState<'Constellation' | 'Core' | 'TopDown'>('Constellation');

  const sceneStateRef = useRef<{
    renderer?: THREE.WebGLRenderer;
    scene?: THREE.Scene;
    camera?: THREE.PerspectiveCamera;
    coreGroup?: THREE.Group;
    nodesGroup?: THREE.Group;
    synapsesGroup?: THREE.Group;
    nodeMeshes: { mesh: THREE.Mesh; data: any }[];
    targetCameraPos: THREE.Vector3;
    targetLookAt: THREE.Vector3;
    isSoftwareGl: boolean;
    frameId: number;
    isHovered: boolean;
  }>({
    nodeMeshes: [],
    targetCameraPos: new THREE.Vector3(0, 5, 22),
    targetLookAt: new THREE.Vector3(0, 0, 0),
    isSoftwareGl: false,
    frameId: 0,
    isHovered: false,
  });

  // Handle color palette for mastery levels
  const getMasteryColor = (level: MasteryLevel): string => {
    switch (level) {
      case 'Mastered':
        return '#10b981'; // Emerald
      case 'Developing':
        return '#06b6d4'; // Cyan
      case 'Needs Revision':
        return '#f59e0b'; // Amber
      case 'Not Yet Tested':
      default:
        return '#6366f1'; // Indigo
    }
  };

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Detect software WebGL safely
    const isSoftwareGl = (() => {
      try {
        const gl = document.createElement('canvas').getContext('webgl2');
        if (!gl) return true;
        const ext = gl.getExtension('WEBGL_debug_renderer_info');
        const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
        const gpu = String(gl.getParameter(param));
        gl.getExtension('WEBGL_lose_context')?.loseContext();
        return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
      } catch {
        return false;
      }
    })();

    sceneStateRef.current.isSoftwareGl = isSoftwareGl;

    // Dimensions
    const width = container.clientWidth || 800;
    const heightPx = container.clientHeight || 600;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#0b0f19');
    scene.fog = new THREE.FogExp2('#0b0f19', 0.025);
    sceneStateRef.current.scene = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / heightPx, 0.1, 1000);
    camera.position.set(0, 6, 22);
    sceneStateRef.current.camera = camera;
    sceneStateRef.current.targetCameraPos.set(0, 6, 22);
    sceneStateRef.current.targetLookAt.set(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      powerPreference: 'high-performance',
      alpha: false,
    });
    renderer.setSize(width, heightPx);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = !isSoftwareGl;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);
    sceneStateRef.current.renderer = renderer;

    // Studio Environment (RoomEnvironment)
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    pmremGenerator.dispose();

    // Studio 3-Point Lighting
    const keyLight = new THREE.DirectionalLight('#e0e7ff', 2.8);
    keyLight.position.set(12, 18, 14);
    keyLight.castShadow = !isSoftwareGl;
    if (keyLight.castShadow) {
      keyLight.shadow.mapSize.width = 1024;
      keyLight.shadow.mapSize.height = 1024;
      keyLight.shadow.camera.near = 0.5;
      keyLight.shadow.camera.far = 40;
      keyLight.shadow.bias = -0.0005;
      keyLight.shadow.normalBias = 0.02;
    }
    scene.add(keyLight);

    const fillLight = new THREE.HemisphereLight('#818cf8', '#0f172a', 1.2);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight('#c084fc', 2.0);
    rimLight.position.set(-14, -8, -12);
    scene.add(rimLight);

    // Soft Radial Contact Shadow Grounding Plane
    const shadowGeo = new THREE.PlaneGeometry(30, 30);
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.7)');
      gradient.addColorStop(0.5, 'rgba(0, 0, 0, 0.25)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 128, 128);
    }
    const shadowTexture = new THREE.CanvasTexture(canvas);
    shadowTexture.colorSpace = THREE.SRGBColorSpace;
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTexture,
      transparent: true,
      opacity: 0.6,
      depthWrite: false,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = -6;
    scene.add(shadowMesh);

    // ==========================================
    // 1. Composite Cognitive Core (6 procedural parts in a THREE.Group)
    // ==========================================
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);
    sceneStateRef.current.coreGroup = coreGroup;

    // Part 1: Outer Gimbal Ring (Brushed Titanium finish)
    const ring1Geo = new THREE.TorusGeometry(3.6, 0.12, 16, 64);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: '#6366f1',
      metalness: 0.9,
      roughness: 0.2,
      emissive: '#312e81',
      emissiveIntensity: 0.3,
    });
    const ring1Mesh = new THREE.Mesh(ring1Geo, ring1Mat);
    coreGroup.add(ring1Mesh);

    // Part 2: Middle Inclined Gimbal Ring
    const ring2Geo = new THREE.TorusGeometry(3.0, 0.1, 16, 64);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: '#a855f7',
      metalness: 0.85,
      roughness: 0.25,
      emissive: '#581c87',
      emissiveIntensity: 0.35,
    });
    const ring2Mesh = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2Mesh.rotation.x = Math.PI / 3;
    ring2Mesh.rotation.y = Math.PI / 4;
    coreGroup.add(ring2Mesh);

    // Part 3: Inner Prismatic Icosahedron (Faceted Neural Prism)
    const prismGeo = new THREE.IcosahedronGeometry(1.8, 1);
    const prismMat = new THREE.MeshPhysicalMaterial({
      color: '#38bdf8',
      metalness: 0.4,
      roughness: 0.15,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      wireframe: false,
    });
    const prismMesh = new THREE.Mesh(prismGeo, prismMat);
    coreGroup.add(prismMesh);

    // Part 4: Inner Wireframe Lattice
    const wireMat = new THREE.MeshBasicMaterial({
      color: '#c084fc',
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const wireMesh = new THREE.Mesh(prismGeo, wireMat);
    wireMesh.scale.setScalar(1.05);
    coreGroup.add(wireMesh);

    // Part 5: Glowing Cognitive Nucleus
    const nucleusGeo = new THREE.SphereGeometry(0.8, 24, 24);
    const nucleusMat = new THREE.MeshStandardMaterial({
      color: '#ffffff',
      emissive: '#818cf8',
      emissiveIntensity: 1.8,
      roughness: 0.1,
    });
    const nucleusMesh = new THREE.Mesh(nucleusGeo, nucleusMat);
    coreGroup.add(nucleusMesh);

    // Part 6: Polar Axis Spires
    const spireGeo = new THREE.CylinderGeometry(0.06, 0.06, 4.8, 16);
    const spireMat = new THREE.MeshStandardMaterial({
      color: '#94a3b8',
      metalness: 0.95,
      roughness: 0.15,
    });
    const spireMesh = new THREE.Mesh(spireGeo, spireMat);
    coreGroup.add(spireMesh);

    // ==========================================
    // 2. Satellite Concept Nodes & Neural Synapses
    // ==========================================
    const nodesGroup = new THREE.Group();
    scene.add(nodesGroup);
    sceneStateRef.current.nodesGroup = nodesGroup;

    const synapsesGroup = new THREE.Group();
    scene.add(synapsesGroup);
    sceneStateRef.current.synapsesGroup = synapsesGroup;

    const conceptEntries = Object.entries(masteryMap);
    const nodeMeshes: { mesh: THREE.Mesh; data: any }[] = [];

    // Fallback if empty
    const displayConcepts: [string, any][] =
      conceptEntries.length > 0
        ? conceptEntries
        : [
            ['Slow Start Phase', { level: 'Developing', score: 65, topicTitle: 'TCP', subject: 'Networking' }],
            ['Congestion Avoidance', { level: 'Needs Revision', score: 42, topicTitle: 'TCP', subject: 'Networking' }],
            ['Packet Loss Signals', { level: 'Mastered', score: 92, topicTitle: 'TCP', subject: 'Networking' }],
            ['Fast Retransmit', { level: 'Mastered', score: 88, topicTitle: 'TCP', subject: 'Networking' }],
            ['AIMD Fairness', { level: 'Developing', score: 70, topicTitle: 'TCP', subject: 'Networking' }],
          ];

    const nodePositions: THREE.Vector3[] = [];
    const count = displayConcepts.length;
    const radius = 8.5;

    displayConcepts.forEach(([name, data], index) => {
      const phi = Math.acos(-1 + (2 * index) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi) * 0.6 + (Math.sin(index) * 1.5);
      const z = radius * Math.cos(phi);
      const pos = new THREE.Vector3(x, y, z);
      nodePositions.push(pos);

      // Node composite representation (3 parts: outer orbit beacon, solid core, inner light)
      const nodeSubGroup = new THREE.Group();
      nodeSubGroup.position.copy(pos);

      const colorHex = getMasteryColor(data.level || 'Not Yet Tested');

      // Part A: Solid Core Sphere
      const sphereGeo = new THREE.SphereGeometry(0.65, 20, 20);
      const sphereMat = new THREE.MeshStandardMaterial({
        color: colorHex,
        roughness: 0.3,
        metalness: 0.5,
        emissive: colorHex,
        emissiveIntensity: 0.45,
      });
      const nodeMesh = new THREE.Mesh(sphereGeo, sphereMat);
      nodeMesh.castShadow = !isSoftwareGl;
      nodeMesh.userData = {
        name,
        level: data.level || 'Not Yet Tested',
        score: data.score ?? 50,
        subject: data.subject || 'STEM',
        topic: data.topicTitle || 'Concept',
        answersCount: data.answersCount || 1,
        correctCount: data.correctCount || 1,
        lastTested: data.lastTested || new Date().toISOString(),
      };
      nodeSubGroup.add(nodeMesh);

      // Part B: Orbital Ring for the node
      const orbRingGeo = new THREE.TorusGeometry(0.9, 0.04, 12, 32);
      const orbRingMat = new THREE.MeshBasicMaterial({
        color: colorHex,
        transparent: true,
        opacity: 0.7,
      });
      const orbRingMesh = new THREE.Mesh(orbRingGeo, orbRingMat);
      orbRingMesh.rotation.x = Math.PI / 2 + index * 0.4;
      nodeSubGroup.add(orbRingMesh);

      nodesGroup.add(nodeSubGroup);
      nodeMeshes.push({ mesh: nodeMesh, data: nodeMesh.userData });
    });

    sceneStateRef.current.nodeMeshes = nodeMeshes;

    // Neural Synapse Connecting Lines
    const synapseLinesGeo = new THREE.BufferGeometry();
    const linePositions: number[] = [];
    const lineColors: number[] = [];

    for (let i = 0; i < nodePositions.length; i++) {
      // Connect each node to core
      linePositions.push(0, 0, 0);
      linePositions.push(nodePositions[i].x, nodePositions[i].y, nodePositions[i].z);

      const col = new THREE.Color('#6366f1');
      lineColors.push(col.r, col.g, col.b);
      lineColors.push(col.r, col.g, col.b);

      // Connect to neighbor node
      const nextIdx = (i + 1) % nodePositions.length;
      linePositions.push(nodePositions[i].x, nodePositions[i].y, nodePositions[i].z);
      linePositions.push(nodePositions[nextIdx].x, nodePositions[nextIdx].y, nodePositions[nextIdx].z);

      const colNext = new THREE.Color('#38bdf8');
      lineColors.push(colNext.r, colNext.g, colNext.b);
      lineColors.push(colNext.r, colNext.g, colNext.b);
    }

    synapseLinesGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    synapseLinesGeo.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3));

    const synapseMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.35,
      linewidth: 1,
    });
    const synapsesMesh = new THREE.LineSegments(synapseLinesGeo, synapseMat);
    synapsesGroup.add(synapsesMesh);

    // ==========================================
    // Raycasting & Interaction
    // ==========================================
    const handlePointerDown = (event: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      _mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      _mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      _raycaster.setFromCamera(_mouse, camera);
      const meshesToTest = sceneStateRef.current.nodeMeshes.map((n) => n.mesh);
      const intersects = _raycaster.intersectObjects(meshesToTest, true);

      if (intersects.length > 0) {
        const hit = intersects[0].object as THREE.Mesh;
        if (hit.userData && hit.userData.name) {
          setSelectedNode(hit.userData as any);
          if (onSelectConcept) {
            onSelectConcept(hit.userData.name);
          }
          // Smoothly animate camera toward the selected node
          _vec3A.copy(hit.parent?.position || hit.position);
          sceneStateRef.current.targetLookAt.copy(_vec3A);
          sceneStateRef.current.targetCameraPos.set(
            _vec3A.x + 3.5,
            _vec3A.y + 2.5,
            _vec3A.z + 6.0
          );
        }
      }
    };

    const handlePointerMove = (event: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      _mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      _mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      _raycaster.setFromCamera(_mouse, camera);
      const meshesToTest = sceneStateRef.current.nodeMeshes.map((n) => n.mesh);
      const intersects = _raycaster.intersectObjects(meshesToTest, true);
      const isOver = intersects.length > 0;
      renderer.domElement.style.cursor = isOver ? 'pointer' : 'grab';
    };

    renderer.domElement.addEventListener('pointerdown', handlePointerDown);
    renderer.domElement.addEventListener('pointermove', handlePointerMove);

    // Drag to rotate camera / scene
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;

      if (nodesGroup) {
        nodesGroup.rotation.y += deltaX * 0.005;
        nodesGroup.rotation.x += deltaY * 0.005;
      }
      if (synapsesGroup) {
        synapsesGroup.rotation.y += deltaX * 0.005;
        synapsesGroup.rotation.x += deltaY * 0.005;
      }
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    renderer.domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Resize listener
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth || 800;
      const h = container.clientHeight || 600;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // ==========================================
    // Lossless 60fps Animation Loop with Exponential Damping
    // ==========================================
    let lastTime = performance.now();

    function tick() {
      const now = performance.now();
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      // Rotate Cognitive Core
      if (coreGroup) {
        ring1Mesh.rotation.z += 0.01;
        ring2Mesh.rotation.y += 0.012;
        prismMesh.rotation.y += 0.008;
        prismMesh.rotation.x += 0.004;
        wireMesh.rotation.y -= 0.006;
      }

      // Auto-rotate satellite constellation
      if (autoRotate && nodesGroup && synapsesGroup && !isDragging) {
        const step = dt * rotationSpeed * 0.4;
        nodesGroup.rotation.y += step;
        synapsesGroup.rotation.y += step;
      }

      // Exponential damping for camera movement (1 - exp(-k * dt))
      const dampFactor = 1 - Math.exp(-4 * dt);
      camera.position.lerp(sceneStateRef.current.targetCameraPos, dampFactor);
      _vec3B.lerp(sceneStateRef.current.targetLookAt, dampFactor);
      camera.lookAt(_vec3B);

      renderer.render(scene, camera);

      if (isSoftwareGl) {
        // Safe software WebGL pacing
        sceneStateRef.current.frameId = window.setTimeout(tick, 45);
      } else {
        sceneStateRef.current.frameId = requestAnimationFrame(tick);
      }
    }

    tick();

    return () => {
      if (isSoftwareGl) {
        clearTimeout(sceneStateRef.current.frameId);
      } else {
        cancelAnimationFrame(sceneStateRef.current.frameId);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      renderer.domElement.removeEventListener('pointerdown', handlePointerDown);
      renderer.domElement.removeEventListener('pointermove', handlePointerMove);
      renderer.domElement.removeEventListener('mousedown', onMouseDown);
      renderer.dispose();
      scene.clear();
    };
  }, [masteryMap, autoRotate, rotationSpeed]);

  // Camera presets
  const applyPreset = (preset: 'Constellation' | 'Core' | 'TopDown') => {
    setCameraPreset(preset);
    setSelectedNode(null);
    sceneStateRef.current.targetLookAt.set(0, 0, 0);

    if (preset === 'Constellation') {
      sceneStateRef.current.targetCameraPos.set(0, 5, 22);
    } else if (preset === 'Core') {
      sceneStateRef.current.targetCameraPos.set(0, 2, 9);
    } else if (preset === 'TopDown') {
      sceneStateRef.current.targetCameraPos.set(0, 24, 0.1);
    }
  };

  return (
    <div
      className={`relative w-full rounded-2xl overflow-hidden border border-slate-800 bg-[#0b0f19] ${
        isFullPage ? 'h-full min-h-[680px]' : ''
      }`}
      style={{ height: isFullPage ? '100%' : height }}
    >
      {/* 3D Canvas Mount Point */}
      <div ref={mountRef} className="absolute inset-0 w-full h-full" />

      {/* Top Left Title Badge */}
      <div className="absolute top-4 left-4 z-10 flex items-center space-x-2 bg-slate-900/90 border border-slate-700/80 rounded-xl px-3.5 py-2 text-xs font-medium text-slate-200 shadow-xl pointer-events-auto">
        <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
        <span className="font-semibold text-white">3D Neural Constellation</span>
        <span className="text-slate-400">|</span>
        <span className="text-slate-400">Click any node to inspect mastery</span>
      </div>

      {/* Top Right Quick Stats */}
      <div className="absolute top-4 right-4 z-10 hidden sm:flex items-center space-x-3 bg-slate-900/90 border border-slate-700/80 rounded-xl px-3.5 py-2 text-xs text-slate-300 shadow-xl pointer-events-auto">
        <div className="flex items-center space-x-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>Mastered</span>
        </div>
        <div className="flex items-center space-x-1.5">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span>Developing</span>
        </div>
        <div className="flex items-center space-x-1.5">
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span>Needs Revision</span>
        </div>
      </div>

      {/* Selected Node Details Modal Card */}
      {selectedNode && (
        <div className="absolute top-16 left-4 z-20 max-w-sm w-full bg-slate-900 border border-indigo-500/50 rounded-2xl p-5 shadow-2xl text-slate-100 pointer-events-auto">
          <div className="flex items-start justify-between">
            <div>
              <span
                className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider mb-2"
                style={{
                  backgroundColor: `${getMasteryColor(selectedNode.level)}22`,
                  color: getMasteryColor(selectedNode.level),
                }}
              >
                {selectedNode.level}
              </span>
              <h4 className="text-base font-bold text-white leading-tight">
                {selectedNode.name}
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                {selectedNode.subject} &bull; {selectedNode.topic}
              </p>
            </div>
            <button
              onClick={() => setSelectedNode(null)}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition"
            >
              ✕
            </button>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-800 grid grid-cols-2 gap-3 text-xs">
            <div className="bg-slate-800/60 p-2.5 rounded-xl">
              <span className="text-slate-400 block text-[11px]">Mastery Score</span>
              <span className="text-lg font-bold text-white">{selectedNode.score}%</span>
            </div>
            <div className="bg-slate-800/60 p-2.5 rounded-xl">
              <span className="text-slate-400 block text-[11px]">Accuracy Ratio</span>
              <span className="text-lg font-bold text-white">
                {selectedNode.correctCount} / {selectedNode.answersCount}
              </span>
            </div>
          </div>

          <div className="mt-4 flex space-x-2">
            <button
              onClick={() => {
                if (onPracticeConcept) onPracticeConcept(selectedNode.name);
              }}
              className="flex-1 flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold py-2.5 px-3 rounded-xl transition shadow-lg shadow-indigo-600/30"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Practice Concept</span>
            </button>
            <button
              onClick={() => applyPreset('Constellation')}
              className="px-3 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium rounded-xl transition"
            >
              Reset
            </button>
          </div>
        </div>
      )}

      {/* Ergonomic Unified Collapsible Bottom Dock (Adhering to Three.js UX Guidelines) */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 w-[94%] max-w-[860px] pointer-events-auto">
        {/* Collapse toggle tab */}
        <div className="flex justify-center -mb-2">
          <button
            onClick={() => setIsControlsCollapsed(!isControlsCollapsed)}
            className="flex items-center space-x-1.5 px-3 py-1 bg-slate-900 border border-slate-700 rounded-t-lg text-[11px] font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition shadow-lg"
          >
            {isControlsCollapsed ? (
              <>
                <ChevronUp className="w-3.5 h-3.5" />
                <span>Show Controls</span>
              </>
            ) : (
              <>
                <ChevronDown className="w-3.5 h-3.5" />
                <span>Hide Controls</span>
              </>
            )}
          </button>
        </div>

        {!isControlsCollapsed && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-3.5 sm:px-5 shadow-2xl flex flex-wrap items-center justify-between gap-3 text-xs">
            {/* Camera Presets */}
            <div className="flex items-center space-x-1.5">
              <span className="text-slate-400 font-medium mr-1 hidden sm:inline">Camera:</span>
              <button
                onClick={() => applyPreset('Constellation')}
                className={`px-3 py-1.5 rounded-xl font-medium transition ${
                  cameraPreset === 'Constellation'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Constellation
              </button>
              <button
                onClick={() => applyPreset('Core')}
                className={`px-3 py-1.5 rounded-xl font-medium transition ${
                  cameraPreset === 'Core'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Core
              </button>
              <button
                onClick={() => applyPreset('TopDown')}
                className={`px-3 py-1.5 rounded-xl font-medium transition ${
                  cameraPreset === 'TopDown'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Top-Down
              </button>
            </div>

            {/* Auto-Rotation Control */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setAutoRotate(!autoRotate)}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl font-medium transition ${
                  autoRotate
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                }`}
              >
                <RotateCw className={`w-3.5 h-3.5 ${autoRotate ? 'animate-spin' : ''}`} />
                <span>{autoRotate ? 'Rotating' : 'Paused'}</span>
              </button>

              <div className="hidden md:flex items-center space-x-2">
                <span className="text-slate-400 text-[11px]">Speed:</span>
                <input
                  type="range"
                  min="0.2"
                  max="2.5"
                  step="0.1"
                  value={rotationSpeed}
                  onChange={(e) => setRotationSpeed(parseFloat(e.target.value))}
                  className="w-16 h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
              </div>
            </div>

            {/* Quick Action */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => applyPreset('Constellation')}
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition font-medium"
              >
                Reset Camera
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
