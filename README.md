# ConceptMirror AI

> **"Understand what you know. Discover what you don’t."**

**ConceptMirror AI** is an intelligent, full-stack adaptive educational platform designed to determine how well students *actually* understand concepts.

Unlike traditional quiz applications that only score binary multiple-choice answers, ConceptMirror AI captures and evaluates the student's underlying reasoning, diagnoses flawed mental schemas (misconceptions), dynamically adapts subsequent questions to test boundary conditions, and renders an interactive **3D Knowledge Constellation (Three.js)** reflecting verified comprehension.

---

## 1. Key Innovations & Features

### 🧠 1. Cognitive Reasoning Analysis (Flagship Feature)
- Collects students' explanations of *why* they chose their answer.
- Distinguishes lucky guesses from true foundational comprehension.
- Grades on an evidence-based scale: `Correct`, `Partially Correct`, `Incorrect`, or `Misconception Detected`.

### 🔍 2. Inferred Misconception Detector
- Identifies inverted mental models (e.g. confusing exponential Slow Start with linear Congestion Avoidance in TCP).
- Clarifies the flawed mental model vs. scientific reality with intuitive physical analogies.
- Provides interactive **Quick Recalibration Challenges** to verify that the mental model is corrected.

### 🌌 3. Interactive 3D Knowledge Neural Mirror (Three.js WebGL)
- Features a procedural multi-part Cognitive Core with PBR materials, `ACESFilmicToneMapping`, studio lighting, and zero external asset dependencies.
- Orbiting concept satellite nodes color-coded by verified mastery:
  - 🟢 **Mastered** (&ge;80% index)
  - 🔵 **Developing** (50% – 79%)
  - 🟠 **Needs Revision** (&lt;50%)
- Interactive raycasting: click any node to focus the camera, inspect past evaluation transcripts, and trigger immediate targeted practice.
- Includes a 2D topological graph toggle and collapsible bottom control dock.

### 🎯 4. Truly Adaptive Examination Engine
- Generates questions one at a time.
- If a student exhibits conceptual confusion, the examiner shifts toward a simpler diagnostic question.
- If a student demonstrates mastery, the examiner escalates to complex edge-case scenarios.

### 📅 5. Smart Spaced Revision Planner
- Calculates priority revision schedules based on error recency and memory retention decay.
- Micro-study sessions with quick reschedule options (+2 days).

### 📊 6. Longitudinal History & Presentation Exports
- Full transcript inspection: review every prompt, student answer, and AI breakdown.
- Export all learning history to **CSV**.
- Print-ready and **PDF** export styling for college faculty presentations.

### 🛡️ 7. Deterministic DEMO MODE (Zero API Key Barrier)
- Fully functional offline demonstration pre-loaded with **TCP Congestion Control**.
- Complete with structured explanations, 5 sequential adaptive questions, partial credit examples, misconception resolution challenges, and sample 3D knowledge map.
- Clearly labeled `DEMO DATA` vs `LIVE AI MODE`.

---

## 2. Technology Stack

- **Frontend:**
  - React 19 + TypeScript
  - Tailwind CSS v4
  - Lucide React Icons
  - Recharts for data analytics & performance tracking
- **3D Graphics:**
  - Three.js (r160+) with `RoomEnvironment`, `PMREMGenerator`, PBR Shaders, and exponential camera damping
- **Backend & Server-side AI:**
  - Node.js Express server (`server.ts`)
  - Google GenAI SDK (`@google/genai`) using model `gemini-3.8-flash`
  - Structured JSON validation schema
- **Persistence & Storage:**
  - Browser `localStorage` with defensive data recovery and instant seed/reset utilities

---

## 3. How to Run Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### Steps

1. Clone or extract the repository:
   ```bash
   git clone <repo-url>
   cd conceptmirror-ai
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## 4. How to Use DEMO MODE vs LIVE AI MODE

- **DEMO MODE:**
  - Enabled by default if no Gemini API key is configured.
  - Can be toggled at any time using the **LIVE / DEMO** button in the top navigation bar.
  - Requires zero internet connection, zero API keys, and zero configuration.
  - Provides a complete, verified simulation of the TCP Congestion Control examination.

- **LIVE AI MODE:**
  - Inside Google AI Studio, the Gemini integration is configured automatically.
  - To run Live AI mode outside AI Studio, create a `.env` file in the root directory:
    ```env
    GEMINI_API_KEY="your-google-gemini-api-key"
    PORT=3000
    ```
  - Restart the application (`npm run dev`). The server will automatically detect the key and activate Live AI mode with model `gemini-3.8-flash`.

---

## 5. College Faculty Demonstration Walkthrough

When presenting this project to faculty or examiners:

1. **Overview Dashboard:** Show the live-calculated metrics (Topics Studied, Concepts Mastered, Needs Revision, Performance Progression).
2. **Launch AI Examiner:** Select **TCP Congestion Control** (or enter a custom topic).
3. **Simulate a Misconception:** On Question 2, answer that *"Slow Start increases window size slowly by 1 packet per RTT"*.
4. **Inspect Diagnostic Output:** Observe how ConceptMirror catches the inverted mental model, isolates the flawed reasoning, and adapts Question 3.
5. **Explore the 3D Constellation:** Navigate to **Knowledge Map**, rotate the 3D neural core, and click on nodes to review past answers.
6. **Solve the Verification Challenge:** Go to **Misconception Analysis** and answer the recalibration challenge to demonstrate resolution.
7. **Export Report:** Click **Print Report** or **Export CSV** to demonstrate academic compliance and reporting.

---

## License

Apache-2.0 License. Built for presentation-grade academic demonstration.
