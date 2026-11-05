# ConceptMirror AI — 100% Offline Educational Platform

> **"Understand what you know. Discover what you don’t."**

**ConceptMirror AI** is a complete, lightweight, 100% offline educational web application engineered for undergraduate curriculum mastery.

It bundles all educational content locally and requires **zero external API keys, zero cloud databases, and zero external AI models**. All evaluations are performed by an in-browser heuristic and rule-based assessment engine.

---

## 1. Curriculum Coverage

The application includes exactly **5 subjects**, with **5 units per subject** and **3 topics per unit** (**total: 25 units and 75 topics**):

1. **Computer Networks (CN)**
   - Unit 1: Network Fundamentals & Physical Layer
   - Unit 2: Data Link Layer & Medium Access Control
   - Unit 3: Network Layer & Internet Routing
   - Unit 4: Transport Layer & Reliability Protocols
   - Unit 5: Application Layer & Network Security
2. **Fundamentals of AI (AI)**
   - Unit 1: Foundations, Agents & State-Space Search
   - Unit 2: Adversarial Search & Games
   - Unit 3: Knowledge Representation & Logical Inference
   - Unit 4: Probabilistic Reasoning & Uncertainty
   - Unit 5: Machine Learning Foundations & Ethical AI
3. **Theory of Computation (TOC)**
   - Unit 1: Automata Theory & Regular Languages
   - Unit 2: Context-Free Languages & Pushdown Automata
   - Unit 3: Turing Machines & Computability Theory
   - Unit 4: Decidability & Undecidability
   - Unit 5: Computational Complexity Theory
4. **Mobile Computing (MC)**
   - Unit 1: Wireless Communications & Cellular Foundations
   - Unit 2: Medium Access Control & Wireless MAC Protocols
   - Unit 3: Mobile IP & Wireless Routing
   - Unit 4: Mobile Transport & Application Protocols
   - Unit 5: Mobile Security, IoT & Edge Computing
5. **General Knowledge (GK)**
   - Unit 1: World Geography & Environmental Systems
   - Unit 2: Modern History & Global Treaties
   - Unit 3: Constitution, Polity & Governance
   - Unit 4: Macroeconomics, Trade & Fiscal Policy
   - Unit 5: Science, Technology & Space Exploration

---

## 2. Key Modules & Features

### 📖 1. Three-Tier Learning Section (75 Topics)
- Every topic supports **Beginner**, **Intermediate**, and **Advanced** difficulty modes.
- Includes comprehensive theory, formal definitions, key concepts with examples, text/ASCII architecture diagrams, real-world applications, exam important points, and quick revision notes.
- Complete/uncomplete topic tracking and bookmarking.

### 📝 2. MCQ Practice (750 Questions)
- Exactly **10 distinct MCQs per topic** (150 per subject, 750 total).
- Each question includes 4 options, verified correct index, detailed pedagogical explanations, and difficulty ratings.
- Modes supported: Topic-wise, Unit-wise, Subject-wise, Random, Timed (with countdown timer), and Untimed.
- Detailed score breakdown, accuracy %, correct/incorrect review, time spent, and automatic flagging of revision topics.

### ✍️ 3. Part B — 11-Mark Answer Analyser (50 Questions)
- **10 Part B questions per subject** (50 total), each carrying a maximum of **11 marks**.
- Evaluated locally by a rule-based engine performing text normalization, stemming, synonym matching, phrase detection, and negation checks.
- Concept rubrics with weights strictly summing to **11.0 marks**.
- Color-coded concept breakdown:
  - 🟢 **Covered Concepts** (Full rubric marks)
  - 🟡 **Partially Covered Concepts** (With matched & missing keywords)
  - 🔴 **Missing Concepts** (With required technical principles)
- Answer completeness %, word count, elapsed timer, specific improvement suggestions, and reference model answer revealed strictly post-submission.
- Formative offline evaluation disclaimer.

### 🎯 4. Student Understanding Analysis Engine
- Calculates transparent understanding score using the formula:
  - **30% MCQ Accuracy**
  - **30% Part B Concept Coverage**
  - **25% Part B Marks**
  - **10% Consistency**
  - **5% Response Fluency (Pacing)**
- Classification: *Strong Understanding*, *Good Understanding*, *Developing Understanding*, *Needs Improvement*, and *Not Yet Evaluated*.
- Clear *Provisional* badge when topic has partial test data.

### 🔄 5. Revision & Bookmarks
- Automatically compiles priority revision lists based on MCQ mistakes and low composite understanding scores.
- Pinned bookmarks list for quick access.

### 📊 6. Performance History
- Audit log of all completed MCQ tests and Part B submissions.
- Detail modals to inspect answers, times, and rubric evaluations.

### ⚙️ 7. System Verification & Self-Test Suite
- **Content Coverage Report**: Live verification audit of all 5 subjects, 25 units, 75 topics, 750 MCQs, and 50 Part B questions.
- **Automated In-Browser Self-Test Runner**: Real-time assertions on curriculum integrity, rubric weight sums (= 11), evaluation engine sanity, and LocalStorage persistence.
- **Backup & Restore**: Export/import study progress via clean JSON files.
- **Reset**: Safe data clear with confirmation modal.

---

## 3. Tech Stack

- **Frontend**: React 19, TypeScript, Vite, Tailwind CSS v4, Lucide React.
- **Architecture**: Single Page Application (SPA) with 100% bundled local datasets.
- **Backend / Dev Server**: Node.js, Express, tsx.
- **Port**: 3000 (`http://localhost:3000`).
