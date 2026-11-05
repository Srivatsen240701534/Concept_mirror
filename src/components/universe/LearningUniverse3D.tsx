// src/components/universe/LearningUniverse3D.tsx
// MY LEARNING UNIVERSE - Interactive 3D Student Progress Visualization (ZenMap)
// 5 Subjects, 75 Topics, 25 Units mapped dynamically to a rotatable holographic constellation

import React, { useEffect, useRef, useState, useMemo } from 'react';
import * as THREE from 'three';
import {
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Play,
  Pause,
  Maximize2,
  Minimize2,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ArrowRight,
  BookOpen,
  CheckSquare,
  FileEdit,
  Award,
  AlertTriangle,
  Info,
  Compass,
  Palette,
} from 'lucide-react';
import {
  SubjectId,
  SubjectUnderstandingSummary,
  Topic,
  TopicUnderstandingMetric,
  UserStudyState,
} from '../../types';
import { ALL_SUBJECTS, getSubjectById } from '../../data/curriculum/subjects';
import { ALL_TOPICS, getTopicById } from '../../data/curriculum/topics';
import { NavTabId } from '../layout/Navbar';

interface LearningUniverse3DProps {
  studyState: UserStudyState;
  subjectSummaries: Record<SubjectId, SubjectUnderstandingSummary>;
  topicMetrics: Record<string, TopicUnderstandingMetric>;
  onNavigate: (tab: NavTabId, options?: { subjectId?: SubjectId; topicId?: string }) => void;
  onSelectTopicToLearn: (topic: Topic) => void;
}

// Subject sector definitions with distinct 3D orbital positioning and hues
const SUBJECT_SECTOR_CONFIG: Record<
  SubjectId,
  {
    angle: number; // radians around the Y axis
    elevation: number; // inclination angle
    radius: number; // distance from center
    hexColor: string;
    threeColor: number;
    glowColor: number;
    ringTilt: number;
  }
> = {
  cn: {
    angle: (0 * 2 * Math.PI) / 5,
    elevation: 0.12,
    radius: 9.6,
    hexColor: '#3b82f6', // Electric Blue
    threeColor: 0x3b82f6,
    glowColor: 0x60a5fa,
    ringTilt: 0.35,
  },
  ai: {
    angle: (1 * 2 * Math.PI) / 5,
    elevation: 0.25,
    radius: 10.2,
    hexColor: '#8b5cf6', // Soft Violet
    threeColor: 0x8b5cf6,
    glowColor: 0xa78bfa,
    ringTilt: -0.4,
  },
  toc: {
    angle: (2 * 2 * Math.PI) / 5,
    elevation: -0.15,
    radius: 9.4,
    hexColor: '#06b6d4', // Cyan / Sky
    threeColor: 0x06b6d4,
    glowColor: 0x22d3ee,
    ringTilt: 0.5,
  },
  mc: {
    angle: (3 * 2 * Math.PI) / 5,
    elevation: -0.22,
    radius: 9.9,
    hexColor: '#10b981', // Emerald Teal
    threeColor: 0x10b981,
    glowColor: 0x34d399,
    ringTilt: -0.3,
  },
  gk: {
    angle: (4 * 2 * Math.PI) / 5,
    elevation: 0.08,
    radius: 9.2,
    hexColor: '#f59e0b', // Radiant Amber
    threeColor: 0xf59e0b,
    glowColor: 0xfbbf24,
    ringTilt: 0.25,
  },
};

type AtmosphereTheme = 'cosmic' | 'aurora' | 'solaris';

export const LearningUniverse3D: React.FC<LearningUniverse3DProps> = ({
  studyState,
  subjectSummaries,
  topicMetrics,
  onNavigate,
  onSelectTopicToLearn,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [selectedSubjectId, setSelectedSubjectId] = useState<SubjectId>('cn');
  const [hoveredSubject, setHoveredSubject] = useState<{ id: SubjectId; name: string; progress: number } | null>(null);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [controlsCollapsed, setControlsCollapsed] = useState<boolean>(false);
  const [isZenExpanded, setIsZenExpanded] = useState<boolean>(false);
  const [atmosphere, setAtmosphere] = useState<AtmosphereTheme>('cosmic');
  const [webGlSupported, setWebGlSupported] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // References for camera control interaction
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animFrameIdRef = useRef<number>(0);
  const isDraggingRef = useRef<boolean>(false);
  const prevPointerRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const rotationVelocityRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const targetRotationRef = useRef<{ x: number; y: number }>({ x: 0.35, y: 0 });
  const currentRotationRef = useRef<{ x: number; y: number }>({ x: 0.35, y: 0 });
  const targetDistanceRef = useRef<number>(24);
  const currentDistanceRef = useRef<number>(24);
  const universeGroupRef = useRef<THREE.Group | null>(null);
  const clickableObjectsRef = useRef<Map<THREE.Object3D, SubjectId>>(new Map());

  // Subject details for selected subject
  const currentSubjectMeta = useMemo(() => getSubjectById(selectedSubjectId), [selectedSubjectId]);
  const currentSummary = subjectSummaries[selectedSubjectId];
  const subjectTopics = useMemo(
    () => ALL_TOPICS.filter((t) => t.subjectId === selectedSubjectId),
    [selectedSubjectId]
  );
  const completedTopicsInSubject = useMemo(
    () => subjectTopics.filter((t) => studyState.completedTopics[t.id]),
    [subjectTopics, studyState.completedTopics]
  );
  const completionPercentage = Math.round(
    (completedTopicsInSubject.length / (subjectTopics.length || 1)) * 100
  );

  // Derive strongest and improvement topics
  const { strongestTopic, weakestTopic } = useMemo(() => {
    const metrics = subjectTopics
      .map((t) => topicMetrics[t.id])
      .filter((m) => m && m.category !== 'Not Yet Evaluated');

    if (metrics.length === 0) return { strongestTopic: null, weakestTopic: null };

    const sorted = [...metrics].sort((a, b) => b.compositeScore - a.compositeScore);
    const strongest = sorted[0];
    const weakest = sorted.length > 1 ? sorted[sorted.length - 1] : null;

    return {
      strongestTopic: strongest ? getTopicById(strongest.topicId) : null,
      weakestTopic: weakest && weakest.compositeScore < 70 ? getTopicById(weakest.topicId) : null,
    };
  }, [subjectTopics, topicMetrics]);

  // Smooth camera glide to focus on a subject
  const handleFocusSubject = (subId: SubjectId) => {
    setSelectedSubjectId(subId);
    const config = SUBJECT_SECTOR_CONFIG[subId];
    // Rotate camera to directly face this subject sector
    targetRotationRef.current = {
      x: Math.max(-0.4, Math.min(0.4, config.elevation * 0.8)),
      y: -config.angle + Math.PI / 2,
    };
    targetDistanceRef.current = 20;
  };

  // Reset Camera View handler
  const handleResetCamera = () => {
    targetRotationRef.current = { x: 0.35, y: 0 };
    targetDistanceRef.current = 24;
  };

  const handleZoom = (direction: 'in' | 'out') => {
    targetDistanceRef.current =
      direction === 'in'
        ? Math.max(14, targetDistanceRef.current - 4)
        : Math.min(34, targetDistanceRef.current + 4);
  };

  // Three.js Scene Setup & Loop
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Detect WebGL support
    const testCanvas = document.createElement('canvas');
    const gl = testCanvas.getContext('webgl2') || testCanvas.getContext('webgl');
    if (!gl) {
      setWebGlSupported(false);
      setIsLoading(false);
      return;
    }

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 500;

    // 1. Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.fog = new THREE.FogExp2(
      atmosphere === 'aurora' ? 0x051318 : atmosphere === 'solaris' ? 0x140e08 : 0x070b14,
      0.018
    );

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 8, 24);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    rendererRef.current = renderer;

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);
    renderer.domElement.style.outline = 'none';
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    setIsLoading(false);

    // 4. Lighting Rig
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const coreLight = new THREE.PointLight(
      atmosphere === 'aurora' ? 0x34d399 : atmosphere === 'solaris' ? 0xfbbf24 : 0x818cf8,
      3.2,
      45
    );
    coreLight.position.set(0, 0, 0);
    scene.add(coreLight);

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 1.3);
    rimLight.position.set(15, 22, 15);
    scene.add(rimLight);

    const secondaryRim = new THREE.DirectionalLight(0xc084fc, 0.9);
    secondaryRim.position.set(-15, -12, -10);
    scene.add(secondaryRim);

    // 5. Build Universe Structure
    const universeGroup = new THREE.Group();
    universeGroupRef.current = universeGroup;
    scene.add(universeGroup);

    // Center Knowledge Core (Holographic Quantum Planet)
    const coreGroup = new THREE.Group();
    universeGroup.add(coreGroup);

    // Inner glowing core sphere
    const coreGeo = new THREE.SphereGeometry(2.35, 32, 32);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x1e1b4b,
      emissive: 0x4f46e5,
      emissiveIntensity: 0.85,
      roughness: 0.2,
      metalness: 0.8,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreGroup.add(coreMesh);

    // Geodesic hologram wireframe lattice (outer icosahedron)
    const latticeGeo = new THREE.IcosahedronGeometry(2.95, 2);
    const latticeMat = new THREE.MeshBasicMaterial({
      color: 0x818cf8,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const latticeMesh = new THREE.Mesh(latticeGeo, latticeMat);
    coreGroup.add(latticeMesh);

    // Counter-rotating inner sacred geometry octahedron
    const octaGeo = new THREE.OctahedronGeometry(2.0, 0);
    const octaMat = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const octaMesh = new THREE.Mesh(octaGeo, octaMat);
    coreGroup.add(octaMesh);

    // 3 Gyroscopic Equatorial & Polar Gimbal Rings
    const ringGeo1 = new THREE.TorusGeometry(3.6, 0.04, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({ color: 0x6366f1, transparent: true, opacity: 0.55 });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    coreGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(4.2, 0.035, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.45 });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = Math.PI / 6;
    coreGroup.add(ring2);

    const ringGeo3 = new THREE.TorusGeometry(4.7, 0.03, 16, 100);
    const ringMat3 = new THREE.MeshBasicMaterial({ color: 0xc084fc, transparent: true, opacity: 0.35 });
    const ring3 = new THREE.Mesh(ringGeo3, ringMat3);
    ring3.rotation.z = Math.PI / 2;
    coreGroup.add(ring3);

    // Ambient Multi-Tier Starfield / Particle Cloud
    const starCount = 420;
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);
    const palette = [
      new THREE.Color(0x3b82f6),
      new THREE.Color(0x8b5cf6),
      new THREE.Color(0x06b6d4),
      new THREE.Color(0x10b981),
      new THREE.Color(0xf59e0b),
      new THREE.Color(0xffffff),
    ];

    for (let i = 0; i < starCount; i++) {
      const r = 4.5 + Math.random() * 18;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI * 0.85;

      starPositions[i * 3] = r * Math.cos(phi) * Math.cos(theta);
      starPositions[i * 3 + 1] = r * Math.sin(phi);
      starPositions[i * 3 + 2] = r * Math.cos(phi) * Math.sin(theta);

      const col = palette[Math.floor(Math.random() * palette.length)];
      starColors[i * 3] = col.r;
      starColors[i * 3 + 1] = col.g;
      starColors[i * 3 + 2] = col.b;
    }

    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));
    const starMat = new THREE.PointsMaterial({
      size: 0.16,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
    });
    const starSystem = new THREE.Points(starGeo, starMat);
    universeGroup.add(starSystem);

    // Clickable map for raycasting
    const clickMap = new Map<THREE.Object3D, SubjectId>();
    clickableObjectsRef.current = clickMap;

    // Moving energy pulse packets along the 5 constellation beams
    const beamPulseMeshes: Array<{
      mesh: THREE.Mesh;
      start: THREE.Vector3;
      end: THREE.Vector3;
      speed: number;
    }> = [];

    // Animated orbiting satellites collection (completed topic moons)
    const topicSatelliteList: Array<{
      mesh: THREE.Mesh;
      center: THREE.Vector3;
      radius: number;
      speed: number;
      initialAngle: number;
      tiltY: number;
    }> = [];

    // 6. Build 5 Subject Constellations / Sector Clusters
    ALL_SUBJECTS.forEach((subject) => {
      const config = SUBJECT_SECTOR_CONFIG[subject.id];
      const summary = subjectSummaries[subject.id];
      const subTopics = ALL_TOPICS.filter((t) => t.subjectId === subject.id);
      const completedSubTopics = subTopics.filter((t) => studyState.completedTopics[t.id]);
      const progressRatio = completedSubTopics.length / (subTopics.length || 1);

      const sectorGroup = new THREE.Group();

      // Position center of sector
      const posX = config.radius * Math.cos(config.angle);
      const posZ = config.radius * Math.sin(config.angle);
      const posY = config.radius * config.elevation;
      const sectorPos = new THREE.Vector3(posX, posY, posZ);
      sectorGroup.position.copy(sectorPos);
      universeGroup.add(sectorGroup);

      // Connecting energy beam from central core to subject hub
      const beamPoints = [new THREE.Vector3(0, 0, 0), sectorPos];
      const beamGeo = new THREE.BufferGeometry().setFromPoints(beamPoints);
      const beamMat = new THREE.LineBasicMaterial({
        color: config.glowColor,
        transparent: true,
        opacity: 0.3 + progressRatio * 0.45,
      });
      const beamLine = new THREE.Line(beamGeo, beamMat);
      universeGroup.add(beamLine);

      // Energy pulse packet moving along beam
      const pulseGeo = new THREE.SphereGeometry(0.18, 12, 12);
      const pulseMat = new THREE.MeshBasicMaterial({
        color: config.glowColor,
        transparent: true,
        opacity: 0.85,
      });
      const pulseMesh = new THREE.Mesh(pulseGeo, pulseMat);
      universeGroup.add(pulseMesh);
      beamPulseMeshes.push({
        mesh: pulseMesh,
        start: new THREE.Vector3(0, 0, 0),
        end: sectorPos.clone(),
        speed: 0.35 + Math.random() * 0.15,
      });

      // Subject Planetary Hub (Central Beacon)
      const hubSize = 1.1 + progressRatio * 0.45;
      const hubGeo = new THREE.SphereGeometry(hubSize, 28, 28);
      const hubMat = new THREE.MeshStandardMaterial({
        color: config.threeColor,
        emissive: config.glowColor,
        emissiveIntensity: 0.65 + progressRatio * 0.55,
        roughness: 0.3,
        metalness: 0.6,
      });
      const hubMesh = new THREE.Mesh(hubGeo, hubMat);
      hubMesh.name = `subject-hub-${subject.id}`;
      sectorGroup.add(hubMesh);
      clickMap.set(hubMesh, subject.id);

      // Saturn-like Planetary Disc Ring around subject
      const discInner = hubSize + 0.35;
      const discOuter = hubSize + 0.85;
      const discGeo = new THREE.RingGeometry(discInner, discOuter, 32);
      const discMat = new THREE.MeshBasicMaterial({
        color: config.glowColor,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.38 + progressRatio * 0.42,
      });
      const discMesh = new THREE.Mesh(discGeo, discMat);
      discMesh.rotation.x = Math.PI / 2 + config.ringTilt;
      sectorGroup.add(discMesh);

      // Progress Segment Arc (Partial Torus representing completed topics)
      const arcAngle = Math.max(0.2, progressRatio * Math.PI * 2);
      const arcGeo = new THREE.TorusGeometry(hubSize + 1.05, 0.07, 12, 48, arcAngle);
      const arcMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.9,
      });
      const arcMesh = new THREE.Mesh(arcGeo, arcMat);
      arcMesh.rotation.x = Math.PI / 2;
      sectorGroup.add(arcMesh);

      // 15 Topic Nodes & Orbiting Moonlets
      subTopics.forEach((topic, idx) => {
        const isDone = Boolean(studyState.completedTopics[topic.id]);
        const metric = topicMetrics[topic.id];
        const needsRevision =
          metric &&
          (metric.category === 'Needs Improvement' ||
            (metric.category === 'Developing Understanding' && metric.compositeScore < 60));

        // Concentric sub-orbits around the hub
        const subOrbitRadius = idx < 8 ? 2.15 : 2.9;
        const subAngle = (idx * 2 * Math.PI) / (idx < 8 ? 8 : 7);

        const nodeRadius = isDone ? 0.22 : 0.12;
        const nodeGeo = new THREE.SphereGeometry(nodeRadius, 12, 12);

        let nodeColor = 0x64748b; // Incomplete: dim slate
        let nodeEmissive = 0x1e293b;
        let nodeEmissiveIntensity = 0.2;

        if (isDone) {
          nodeColor = config.glowColor;
          nodeEmissive = 0xffffff;
          nodeEmissiveIntensity = 0.95;
        } else if (needsRevision) {
          nodeColor = 0xf43f5e; // Alert rose
          nodeEmissive = 0xff0055;
          nodeEmissiveIntensity = 1.0;
        }

        const nodeMat = new THREE.MeshStandardMaterial({
          color: nodeColor,
          emissive: nodeEmissive,
          emissiveIntensity: nodeEmissiveIntensity,
          roughness: 0.35,
          metalness: 0.6,
        });

        const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);

        if (isDone) {
          // Energetic Moonlet: Dynamically orbits in 3D around the subject hub
          sectorGroup.add(nodeMesh);
          topicSatelliteList.push({
            mesh: nodeMesh,
            center: new THREE.Vector3(0, 0, 0),
            radius: subOrbitRadius,
            speed: (0.4 + (idx % 4) * 0.15) * (idx % 2 === 0 ? 1 : -1),
            initialAngle: subAngle,
            tiltY: ((idx % 3) - 1) * 0.3,
          });
        } else {
          // Static constellation node
          const nodeX = subOrbitRadius * Math.cos(subAngle);
          const nodeZ = subOrbitRadius * Math.sin(subAngle);
          const nodeY = ((idx % 3) - 1) * 0.4;
          nodeMesh.position.set(nodeX, nodeY, nodeZ);
          sectorGroup.add(nodeMesh);
        }
      });
    });

    // 7. Raycaster for hover & click detection
    const raycaster = new THREE.Raycaster();
    const mouseVector = new THREE.Vector2();

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      let clientX = 0;
      let clientY = 0;

      if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ('clientX' in e) {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      mouseVector.x = ((clientX - rect.left) / rect.width) * 2 - 1;
      mouseVector.y = -((clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouseVector, camera);
      const intersects = raycaster.intersectObjects(Array.from(clickMap.keys()), false);

      if (intersects.length > 0) {
        const hitObj = intersects[0].object;
        const subId = clickMap.get(hitObj);
        if (subId) {
          const sub = getSubjectById(subId);
          const done = ALL_TOPICS.filter((t) => t.subjectId === subId && studyState.completedTopics[t.id]).length;
          const pct = Math.round((done / 15) * 100);
          setHoveredSubject({ id: subId, name: sub.name, progress: pct });
          renderer.domElement.style.cursor = 'pointer';
          return;
        }
      }
      setHoveredSubject(null);
      renderer.domElement.style.cursor = isDraggingRef.current ? 'grabbing' : 'grab';
    };

    const handleClick = (e: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouseVector.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseVector.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouseVector, camera);
      const intersects = raycaster.intersectObjects(Array.from(clickMap.keys()), false);

      if (intersects.length > 0) {
        const hitObj = intersects[0].object;
        const subId = clickMap.get(hitObj);
        if (subId) {
          handleFocusSubject(subId);
        }
      }
    };

    const domEl = renderer.domElement;
    domEl.addEventListener('mousemove', handlePointerMove);
    domEl.addEventListener('click', handleClick);

    // 8. Pointer / Touch Drag & Momentum Handling
    // REVERSED: Moving mouse left rotates object clockwise, moving mouse right rotates anticlockwise!
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      isDraggingRef.current = true;
      domEl.style.cursor = 'grabbing';
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      prevPointerRef.current = { x: clientX, y: clientY };
    };

    const onPointerDrag = (e: MouseEvent | TouchEvent) => {
      if (!isDraggingRef.current) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      const deltaX = (clientX - prevPointerRef.current.x) * 0.006;
      const deltaY = (clientY - prevPointerRef.current.y) * 0.006;

      // REVERSED HORIZONTAL ROTATION DIRECTION:
      // Moving mouse left (deltaX < 0) => targetRotation.y -= deltaX increases angle (rotates clockwise)
      // Moving mouse right (deltaX > 0) => targetRotation.y -= deltaX decreases angle (rotates anticlockwise)
      targetRotationRef.current.y -= deltaX;
      targetRotationRef.current.x = Math.max(-0.8, Math.min(0.8, targetRotationRef.current.x + deltaY));

      rotationVelocityRef.current = { x: deltaY, y: -deltaX };
      prevPointerRef.current = { x: clientX, y: clientY };
    };

    const onPointerUp = () => {
      isDraggingRef.current = false;
      domEl.style.cursor = 'grab';
    };

    // Zoom on wheel (clamped)
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      targetDistanceRef.current = Math.max(14, Math.min(34, targetDistanceRef.current + e.deltaY * 0.015));
    };

    domEl.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerDrag);
    window.addEventListener('mouseup', onPointerUp);
    domEl.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('touchmove', onPointerDrag, { passive: true });
    window.addEventListener('touchend', onPointerUp);
    domEl.addEventListener('wheel', onWheel, { passive: false });

    // Double-click to reset view
    const onDblClick = () => {
      handleResetCamera();
    };
    domEl.addEventListener('dblclick', onDblClick);

    // 9. Resize Observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const w = entry.contentRect.width;
        const h = entry.contentRect.height;
        if (w > 0 && h > 0) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        }
      }
    });
    resizeObserver.observe(container);

    // 10. Animation Loop
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const delta = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;
      const elapsedTimeSec = currentTime * 0.001;

      // Idle auto-rotation when not dragging
      if (autoRotate && !isDraggingRef.current) {
        targetRotationRef.current.y += 0.0025;
      }

      // Smooth exponential damping on rotation & zoom
      currentRotationRef.current.x += (targetRotationRef.current.x - currentRotationRef.current.x) * 0.08;
      currentRotationRef.current.y += (targetRotationRef.current.y - currentRotationRef.current.y) * 0.08;
      currentDistanceRef.current += (targetDistanceRef.current - currentDistanceRef.current) * 0.1;

      // Position camera spherically around origin
      const phi = currentRotationRef.current.x;
      const theta = currentRotationRef.current.y;
      const d = currentDistanceRef.current;

      camera.position.x = d * Math.cos(phi) * Math.sin(theta);
      camera.position.y = d * Math.sin(phi);
      camera.position.z = d * Math.cos(phi) * Math.cos(theta);
      camera.lookAt(0, 0, 0);

      // Pulsing and spinning core elements
      coreGroup.rotation.y += delta * 0.2;
      latticeMesh.rotation.x -= delta * 0.15;
      octaMesh.rotation.y -= delta * 0.3;
      ring1.rotation.z += delta * 0.25;
      ring2.rotation.z -= delta * 0.3;
      ring3.rotation.y += delta * 0.2;

      // Dynamic breathing core glow
      coreMat.emissiveIntensity = 0.75 + Math.sin(elapsedTimeSec * 2.5) * 0.25;

      // Orbit completed topic satellites around their subject hubs
      topicSatelliteList.forEach((sat) => {
        const currentAngle = sat.initialAngle + elapsedTimeSec * sat.speed;
        sat.mesh.position.x = sat.center.x + sat.radius * Math.cos(currentAngle);
        sat.mesh.position.z = sat.center.z + sat.radius * Math.sin(currentAngle);
        sat.mesh.position.y = sat.center.y + Math.sin(currentAngle * 2) * sat.tiltY;
      });

      // Animate energy pulses flowing along constellation beams
      beamPulseMeshes.forEach((pulse) => {
        const cycle = (elapsedTimeSec * pulse.speed) % 1.0;
        pulse.mesh.position.lerpVectors(pulse.start, pulse.end, cycle);
        pulse.mesh.scale.setScalar(0.7 + Math.sin(cycle * Math.PI) * 0.6);
      });

      renderer.render(scene, camera);
      animFrameIdRef.current = requestAnimationFrame(animate);
    };

    animFrameIdRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      cancelAnimationFrame(animFrameIdRef.current);
      resizeObserver.disconnect();
      domEl.removeEventListener('mousemove', handlePointerMove);
      domEl.removeEventListener('click', handleClick);
      domEl.removeEventListener('mousedown', onPointerDown);
      window.removeEventListener('mousemove', onPointerDrag);
      window.removeEventListener('mouseup', onPointerUp);
      domEl.removeEventListener('touchstart', onPointerDown);
      window.removeEventListener('touchmove', onPointerDrag);
      window.removeEventListener('touchend', onPointerUp);
      domEl.removeEventListener('wheel', onWheel);
      domEl.removeEventListener('dblclick', onDblClick);
      if (domEl.parentNode) {
        domEl.parentNode.removeChild(domEl);
      }
      renderer.dispose();
      starGeo.dispose();
      coreGeo.dispose();
      latticeGeo.dispose();
      octaGeo.dispose();
    };
  }, [studyState, subjectSummaries, topicMetrics, autoRotate, atmosphere]);

  return (
    <div className="space-y-6">
      {/* 3D Universe Viewport Container */}
      <div
        className={`relative rounded-3xl overflow-hidden border border-slate-800 bg-gradient-to-b from-[#0b0f19] via-[#090d16] to-[#0d121f] shadow-2xl transition-all duration-500 ${
          isZenExpanded ? 'ring-2 ring-indigo-500/30' : ''
        }`}
      >
        {/* Ambient Top Glow Accents based on atmosphere theme */}
        <div
          className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none transition-colors duration-700 ${
            atmosphere === 'aurora'
              ? 'bg-emerald-500/10'
              : atmosphere === 'solaris'
              ? 'bg-amber-500/10'
              : 'bg-blue-500/10'
          }`}
        />
        <div
          className={`absolute top-10 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none transition-colors duration-700 ${
            atmosphere === 'aurora'
              ? 'bg-cyan-500/10'
              : atmosphere === 'solaris'
              ? 'bg-orange-500/10'
              : 'bg-violet-500/10'
          }`}
        />

        {/* Header Ribbon within 3D Viewport */}
        <div className="relative z-10 px-6 pt-6 pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pointer-events-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300 shadow-lg">
              <Sparkles className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-black tracking-wide text-white uppercase">
                  My Learning Universe
                </h2>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">
                  3D ZenMap
                </span>
                {/* Subtle Zen focus breathing indicator */}
                <span className="hidden md:inline-flex items-center gap-1.5 text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-900/80 text-slate-300 border border-slate-700">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  Zen Focus
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Drag to rotate clockwise/anticlockwise &bull; Scroll to zoom &bull; Click any subject beacon to focus
              </p>
            </div>
          </div>

          {/* Top Right Atmosphere & Mode Toggles */}
          <div className="flex items-center gap-2 self-start sm:self-auto text-xs">
            {/* Atmosphere theme selector */}
            <div className="flex items-center p-1 rounded-xl bg-slate-900/90 border border-slate-800 backdrop-blur-md">
              <button
                onClick={() => setAtmosphere('cosmic')}
                title="Cosmic Midnight Theme"
                className={`px-2 py-1 rounded-lg text-[10px] font-bold transition-colors cursor-pointer ${
                  atmosphere === 'cosmic' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Cosmic
              </button>
              <button
                onClick={() => setAtmosphere('aurora')}
                title="Aurora Emerald Theme"
                className={`px-2 py-1 rounded-lg text-[10px] font-bold transition-colors cursor-pointer ${
                  atmosphere === 'aurora' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Aurora
              </button>
              <button
                onClick={() => setAtmosphere('solaris')}
                title="Solaris Amber Theme"
                className={`px-2 py-1 rounded-lg text-[10px] font-bold transition-colors cursor-pointer ${
                  atmosphere === 'solaris' ? 'bg-amber-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Solaris
              </button>
            </div>

            {/* Expand / Zen Canvas Toggle */}
            <button
              onClick={() => setIsZenExpanded(!isZenExpanded)}
              title={isZenExpanded ? 'Restore Compact View' : 'Expand 3D Zen View'}
              className="p-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              {isZenExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Active Hover Tooltip */}
        {hoveredSubject && (
          <div className="absolute top-20 left-1/2 -translate-x-1/2 z-20 pointer-events-none px-4 py-2 rounded-xl bg-slate-900/95 border border-indigo-500/40 backdrop-blur-md text-white shadow-2xl flex items-center gap-3 animate-fadeIn">
            <span
              className="w-3 h-3 rounded-full shadow"
              style={{ backgroundColor: SUBJECT_SECTOR_CONFIG[hoveredSubject.id].hexColor }}
            />
            <div className="text-xs">
              <span className="font-bold">{hoveredSubject.name}</span>
              <span className="text-slate-400 ml-2">Curriculum: {hoveredSubject.progress}%</span>
            </div>
            <span className="text-[10px] text-indigo-300 font-semibold">(Click to focus)</span>
          </div>
        )}

        {/* WebGL Canvas Viewport */}
        {webGlSupported ? (
          <div
            className={`w-full transition-all duration-500 cursor-grab active:cursor-grabbing relative ${
              isZenExpanded ? 'h-[580px] sm:h-[640px]' : 'h-[420px] sm:h-[480px] lg:h-[520px]'
            }`}
          >
            <div ref={mountRef} className="w-full h-full" />
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-slate-950/80 z-30 pointer-events-none">
                <div className="text-center space-y-3">
                  <div className="w-10 h-10 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin mx-auto" />
                  <p className="text-xs font-semibold text-slate-300 tracking-wide">
                    Initializing 3D Zen Constellation...
                  </p>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* 2D Fallback if WebGL is unavailable */
          <div className="w-full h-[420px] flex items-center justify-center p-6 text-center text-slate-400">
            <div className="max-w-md space-y-3">
              <Info className="w-8 h-8 text-blue-400 mx-auto" />
              <h3 className="text-base font-bold text-white">Interactive Constellation Map</h3>
              <p className="text-xs text-slate-400">
                Your browser context does not support hardware WebGL. You can still inspect and navigate your subjects using the selector below.
              </p>
            </div>
          </div>
        )}

        {/* Collapsible Ergonomic Controls Dock (Pinned to Bottom Center) */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 w-[94%] max-w-2xl transition-all">
          <div className="flex justify-center mb-1.5">
            <button
              onClick={() => setControlsCollapsed(!controlsCollapsed)}
              className="px-3 py-1 rounded-full bg-slate-900/85 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700/60 text-[11px] font-semibold flex items-center gap-1 backdrop-blur-md transition-colors cursor-pointer shadow-lg"
            >
              {controlsCollapsed ? (
                <>
                  <ChevronUp className="w-3.5 h-3.5" />
                  <span>Show Zen Controls</span>
                </>
              ) : (
                <>
                  <ChevronDown className="w-3.5 h-3.5" />
                  <span>Zen Minimalist Mode</span>
                </>
              )}
            </button>
          </div>

          {!controlsCollapsed && (
            <div className="p-2 sm:p-2.5 rounded-2xl bg-slate-900/90 border border-slate-700/70 backdrop-blur-xl shadow-2xl flex flex-wrap items-center justify-between gap-2 text-xs">
              {/* Subject Focus Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto py-0.5">
                {ALL_SUBJECTS.map((sub) => {
                  const isSelected = sub.id === selectedSubjectId;
                  const cfg = SUBJECT_SECTOR_CONFIG[sub.id];
                  return (
                    <button
                      key={sub.id}
                      onClick={() => handleFocusSubject(sub.id)}
                      className={`px-3 py-1.5 rounded-xl font-bold transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer text-xs ${
                        isSelected
                          ? 'bg-white text-slate-950 shadow-md scale-102 ring-2 ring-indigo-500/50'
                          : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <span
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ backgroundColor: cfg.hexColor }}
                      />
                      <span>{sub.shortName}</span>
                    </button>
                  );
                })}
              </div>

              {/* Camera & Orbit Utility Controls */}
              <div className="flex items-center gap-1 shrink-0 self-end sm:self-center">
                <button
                  onClick={() => setAutoRotate(!autoRotate)}
                  title={autoRotate ? 'Pause Orbit' : 'Resume Auto-Orbit'}
                  className={`p-2 rounded-xl border text-xs transition-colors cursor-pointer ${
                    autoRotate
                      ? 'bg-blue-500/20 text-blue-300 border-blue-400/30'
                      : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
                  }`}
                >
                  {autoRotate ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={() => handleZoom('in')}
                  title="Zoom In"
                  className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => handleZoom('out')}
                  title="Zoom Out"
                  className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
                >
                  <ZoomOut className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={handleResetCamera}
                  title="Reset Camera Angle"
                  className="px-2.5 py-1.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white border border-slate-700 text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span className="hidden sm:inline">Reset</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Selected Subject Intelligence Panel (Deep Academic Diagnostics) */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 transition-colors">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-start gap-4">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-extrabold text-lg shadow-lg shrink-0"
              style={{ backgroundColor: currentSubjectMeta.accentColor }}
            >
              {currentSubjectMeta.id.toUpperCase()}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {currentSubjectMeta.code}
                </span>
                <span className="text-slate-300 dark:text-slate-700">&bull;</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  5 Units &bull; 15 Topics &bull; 150 MCQs &bull; 10 Part B
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                {currentSubjectMeta.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
                {currentSubjectMeta.tagline}
              </p>
            </div>
          </div>

          {/* Quick Subject Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={() => onNavigate('learn', { subjectId: selectedSubjectId })}
              className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              <span>Study Subject</span>
            </button>
            <button
              onClick={() => onNavigate('mcq', { subjectId: selectedSubjectId })}
              className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs border border-slate-200 dark:border-slate-700 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <CheckSquare className="w-4 h-4 text-blue-500" />
              <span>Take MCQs</span>
            </button>
            <button
              onClick={() => onNavigate('partb', { subjectId: selectedSubjectId })}
              className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs border border-slate-200 dark:border-slate-700 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <FileEdit className="w-4 h-4 text-violet-500" />
              <span>Part B (11-M)</span>
            </button>
          </div>
        </div>

        {/* 4 Diagnostic Stat Cards for Selected Subject */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 block mb-1">
              Curriculum Progress
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-slate-900 dark:text-white">
                {completionPercentage}%
              </span>
              <span className="text-xs text-slate-400">
                ({completedTopicsInSubject.length}/15 topics)
              </span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden mt-3">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${completionPercentage}%`,
                  backgroundColor: currentSubjectMeta.accentColor,
                }}
              />
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 block mb-1">
              Subject Understanding
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-slate-900 dark:text-white">
                {currentSummary.evaluatedTopicsCount > 0 ? `${currentSummary.overallScore}%` : '—'}
              </span>
              <span className="text-xs font-bold text-indigo-500">
                {currentSummary.evaluatedTopicsCount > 0 ? currentSummary.category : 'Pending Practice'}
              </span>
            </div>
            <p className="text-[11px] text-slate-400 mt-2">
              Evaluated across {currentSummary.evaluatedTopicsCount} topics
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 block mb-1 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-emerald-500" />
              <span>Strongest Topic</span>
            </span>
            {strongestTopic ? (
              <div>
                <span className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">
                  {strongestTopic.title}
                </span>
                <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold mt-1 block">
                  Score: {topicMetrics[strongestTopic.id]?.compositeScore}% &bull; {topicMetrics[strongestTopic.id]?.category}
                </span>
              </div>
            ) : (
              <p className="text-xs text-slate-400 italic mt-2">Not enough activity yet</p>
            )}
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 block mb-1 flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
              <span>Focus Needed</span>
            </span>
            {weakestTopic ? (
              <div>
                <span className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">
                  {weakestTopic.title}
                </span>
                <button
                  onClick={() => onSelectTopicToLearn(weakestTopic)}
                  className="text-[11px] text-amber-600 dark:text-amber-400 font-semibold mt-1 flex items-center gap-1 hover:underline cursor-pointer"
                >
                  <span>Review Notes</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            ) : (
              <p className="text-xs text-slate-400 italic mt-2">Not enough activity yet</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
