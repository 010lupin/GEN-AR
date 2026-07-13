# GenAR Learn

**GenAR Learn** is a web-based prototype that explores how **Generative AI** and **Augmented Reality** can make complex learning topics more interactive, accessible, and measurable.

The project was developed from a university research report titled **"Exploration of Integrating Generative AI in Augmented Reality: A Systematic Review."** The report found that AR is currently the most practical immersive technology for wider educational use because it is more accessible and lower cost than VR or holography, while generative AI can support personalised explanations, quizzes, and revision.

## Project Purpose

The purpose of GenAR Learn is to turn theoretical research findings into a usable learning application. Instead of remaining as a research-only project, the app demonstrates how students could interact with AR learning objects, receive AI-guided explanations, complete a lesson module, and take a quiz to measure understanding.

The current prototype focuses on a **Human Heart Explorer** module, where learners review simplified heart anatomy concepts before taking a randomized quiz.

## Key Features

### [AR] AR Learning Preview

Interactive AR-style preview areas help learners visualise educational objects before or during a lesson. The current prototype includes a 3D-style Human Heart preview and AR use-case carousel.

### [AI] AI Tutor Concept

The interface includes an AI tutor panel designed for future integration with a backend AI service. It is intended to explain lesson content, simplify terminology, generate revision notes, and support follow-up questions.

### [LESSON] Human Heart Module

The Human Heart Explorer module introduces beginner-friendly facts about:

- what the heart does
- the four chambers
- blood flow through the heart and lungs
- valves and blood vessels
- heartbeat rhythm

### [QUIZ] Randomized Quiz

After completing the lesson, users are asked:

> Ready to take quiz?

If the user selects **Yes**, the app starts a randomized multiple-choice quiz. If the user selects **No**, the lesson returns to the start. Quiz results are graded as a percentage out of **100%**.

### [ACCESS] Accessibility Controls

The prototype includes accessibility-focused settings such as reduced motion, captioned AI narration, high contrast controls, and session reminders. These features reflect the research findings around comfort, eye strain, and accessibility barriers in immersive learning.

### [TEACHER] Teacher Workflow Concept

The app includes a teacher tools section showing how future educators could upload learning notes, attach 3D assets, and generate quizzes or guided activities.

### [UX] AR Use-Case Carousel

The front page includes a carousel showing possible AR learning scenarios, including healthcare, engineering, and science education.

## Technology Stack

- **Frontend:** React, Vite, TypeScript
- **Styling:** CSS
- **3D / AR Preview:** `@google/model-viewer`, Three.js
- **Icons:** Lucide React
- **Routing Ready:** React Router
- **AI Ready:** OpenAI package installed for future backend integration

## Research Context

This project is based on findings from a systematic review of Generative AI, AR, VR, and holography. The research identified that:

- AR is more practical for widespread deployment than VR or holography.
- VR can be effective but may cause discomfort, eye strain, or motion sickness.
- Holography is promising but currently expensive and infrastructure-heavy.
- Generative AI can improve learning through personalised explanations and automated content generation.
- More practical prototypes are needed to test learning outcomes and user experience.

GenAR Learn acts as a practical response to those research gaps.

## Local Setup

Install dependencies:

```powershell
npm.cmd install
```

Start the development server:

```powershell
npm.cmd run dev
```

Build for production:

```powershell
npm.cmd run build
```

Run lint checks:

```powershell
npm.cmd run lint
```

The local app usually runs at:

```text
http://localhost:5173
```

## Current Status

The prototype currently includes:

- dashboard interface
- AR use-case carousel
- lesson library
- Human Heart Explorer module
- heart preview section
- randomized quiz flow
- grading out of 100%
- accessibility controls
- teacher workflow concept

## Future Improvements

- Add full routing for lesson pages.
- Replace placeholder 3D visuals with medically accurate `.glb` heart models.
- Add a backend API route for real AI tutor responses.
- Store user progress with Supabase or another database.
- Add teacher upload functionality.
- Deploy publicly using Vercel or Render.

## Collaborator

This project was developed by **Isaac** with support from **Codex** as an AI coding collaborator.

## Academic Use

GenAR Learn is designed as a university project prototype. It demonstrates how research findings can be translated into a deployable educational application and can be used to support a report, presentation, portfolio, or future development work.
