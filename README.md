# GenAR Learn

GenAR Learn is an app based on generative AI and augmented reality. This web-first prototype turns the report findings into a practical app concept: short AR learning sessions, generative AI tutoring, accessibility controls, quiz feedback, and progress metrics.

## Why This App

The research found that AR is currently the most practical immersive technology for wide adoption because it is lower cost and more accessible than VR or holography. GenAR Learn uses that conclusion as the product direction, while using generative AI to personalize explanations, quizzes, and revision support.

## Installed Stack

- React + Vite + TypeScript
- CSS Modules-style plain CSS for the first prototype
- `@google/model-viewer` for browser-friendly 3D and AR-ready model display
- `three` for future custom 3D/WebXR scenes
- `lucide-react` for UI icons
- `react-router-dom` for future multi-page routing
- `openai` for future backend/API integration

## Current Prototype

The current app includes:

- Learning dashboard
- AR-ready 3D model preview
- Lesson library cards
- AI tutor panel mockup
- Suggested tutor prompts
- Progress metrics
- Accessibility controls
- Teacher lesson creation flow

## Recommended Next Build Steps

1. Add routing for dashboard, lessons, workspace, teacher tools, and accessibility settings.
2. Replace the placeholder 3D model with subject-specific `.glb` assets.
3. Add a backend API route for AI responses. Do not expose an API key in browser code.
4. Add local lesson seed data and a simple progress store.
5. Add quiz generation with structured AI responses.
6. Add persistence with Supabase or another Postgres backend.
7. Deploy the frontend and API to Vercel, Render, or a similar service.

## Local Commands

```bash
npm install
npm run dev
npm run build
npm run lint
```

PowerShell may block `npm.ps1` on some Windows machines. Use `npm.cmd` instead:

```powershell
npm.cmd run dev
npm.cmd run build
```

## AI Integration Note

Use the OpenAI package only from a backend route or server function. The browser should send lesson context, current step, user question, and accessibility preferences to the backend. The backend should call the model and return a constrained response.

## Evaluation Metrics

- Learning effectiveness: quiz improvement, completion rate, confidence rating
- Accessibility: keyboard completion success, contrast/readability checks, fallback usage
- Engagement: lesson starts, completions, AI questions per lesson, AR interaction duration
- AI quality: helpfulness rating, hallucination reports, response latency
- Reliability: WebXR support rate, fallback success rate, API errors, page load time
