# Agent 1 Prompt: GenAR Learn Build Handoff

You are Agent 1 for the GenAR project.

## Project Context

The project is based on a university report titled "Exploration of Integrating Generative AI in Augmented Reality: A Systematic Review." The report found that AR is currently the most practical technology for broad deployment, while VR has comfort barriers and holography has cost/infrastructure barriers. Generative AI can improve personalization, engagement, and content generation in immersive learning.

Build direction: create a deployable web app called **GenAR Learn**, an AI-powered AR learning assistant for accessible education.

Project path:

`C:\Users\Gorilla Rig\Dropbox\My PC (Isaac-pc)\Documents\GenAR`

Saved prompt requested by user:

`C:\Users\Gorilla Rig\Dropbox\My PC (Isaac-pc)\Desktop\GenAR\AGENT_1_PROMPT.md`

## Product Vision

GenAR Learn should help learners explore complex topics using browser-based AR/3D objects and an AI tutor that explains, simplifies, quizzes, and adapts learning content. The app should feel like a usable learning workspace, not a theoretical demo.

## MVP Features

- Dashboard with active lessons, progress, and recommended topics.
- Lesson library with subject, difficulty, duration, and accessibility tags.
- AR/3D lesson workspace using browser-friendly model display.
- AI tutor panel for explanations, summaries, quizzes, and revision prompts.
- Accessibility controls: reduced motion, captions, high contrast, readable layout, session reminders.
- Teacher tools for uploading notes, attaching 3D assets, and generating quiz material.
- Progress tracking for completed lessons, quiz scores, comfort rating, and confidence.

## Installed Web Stack

- React + Vite + TypeScript
- `@google/model-viewer` for AR-ready browser model viewing
- `three` and `@types/three` for future WebXR/custom 3D scenes
- `lucide-react` for icons
- `react-router-dom` for future routes
- `openai` for future server-side AI integration

Mobile options are intentionally excluded for now.

## Suggested Page Structure

- `/` dashboard
- `/lessons` lesson library
- `/lessons/:id` lesson detail
- `/learn/:lessonId` AR learning workspace
- `/teacher` lesson/content management
- `/settings/accessibility` accessibility preferences
- `/about` short research framing and ethical notes

## Data Model

- `User`: role, preferences, created date
- `Lesson`: title, subject, description, difficulty, tags, learning objectives
- `LessonStep`: order, content type, text, AI prompt, AR asset reference
- `ARAsset`: name, type, model URL, thumbnail, scale, placement metadata
- `AIInteraction`: user ID, lesson ID, prompt, response summary, timestamp
- `Quiz`: lesson ID, questions, answers, scoring rules
- `Progress`: user ID, lesson ID, status, score, confidence, completed steps
- `AccessibilityPreference`: contrast, font size, captions, reduced motion

## AI Integration Approach

Do not call OpenAI directly from browser code. Add a backend route or server function that receives:

- lesson context
- current lesson step
- learner question
- learner level
- accessibility preferences

The route should return constrained educational responses and structured quiz output. Responses should explain uncertainty and avoid unsupported claims.

## AR Integration Approach

Start with `@google/model-viewer` for AR-ready `.glb`/`.gltf` objects and fallback 3D viewing. Use Three.js later for richer custom WebXR scenes. Every AR object should be tied to a learning objective, not decorative.

## Deployment Plan

1. Finish the React prototype and build pages.
2. Add one complete sample lesson, ideally healthcare/anatomy because it aligns strongly with the report.
3. Add backend AI route and environment variable handling.
4. Add local seed data.
5. Add persistence through Supabase Postgres or another deployable database.
6. Add evaluation metrics and simple analytics events.
7. Deploy to Vercel or Render.

## Evaluation Metrics

- Quiz improvement and completion rate
- Learner confidence rating
- Comfort rating and session duration
- AI helpfulness rating
- Accessibility preference usage
- AR fallback success rate
- Teacher lesson creation success rate

## Important Collaboration Rule

You are not alone in the codebase. Do not revert work made by others. If later asked to edit files, inspect the current files first and make scoped changes.
