import '@google/model-viewer'
import {
  Accessibility,
  Activity,
  BookOpen,
  Brain,
  ChevronRight,
  ClipboardCheck,
  Eye,
  GraduationCap,
  LayoutDashboard,
  MessageSquareText,
  Rotate3D,
  Search,
  Sparkles,
  UploadCloud,
} from 'lucide-react'
import './App.css'

type Lesson = {
  title: string
  subject: string
  level: string
  duration: string
  score: string
  asset: string
  objective: string
}

const lessons: Lesson[] = [
  {
    title: 'Human Heart Explorer',
    subject: 'Healthcare',
    level: 'Beginner',
    duration: '18 min',
    score: '86%',
    asset: '3D anatomy model',
    objective: 'Identify chambers, valves, blood flow, and clinical examples.',
  },
  {
    title: 'Solar System Scale Lab',
    subject: 'Science',
    level: 'Intermediate',
    duration: '22 min',
    score: '74%',
    asset: 'Orbital AR scene',
    objective: 'Compare orbit, scale, gravity, and planet relationships.',
  },
  {
    title: 'Engine Part Assembly',
    subject: 'Engineering',
    level: 'Advanced',
    duration: '28 min',
    score: 'Not started',
    asset: 'Exploded 3D model',
    objective: 'Understand assembly order, part function, and fault diagnosis.',
  },
]

const metrics = [
  { label: 'Lessons completed', value: '12', icon: ClipboardCheck },
  { label: 'Avg. quiz score', value: '82%', icon: Activity },
  { label: 'AI questions asked', value: '46', icon: MessageSquareText },
  { label: 'Comfort rating', value: '4.4/5', icon: Eye },
]

const tutorPrompts = [
  'Explain the selected structure in simpler terms.',
  'Generate five revision questions for this lesson.',
  'Give me a healthcare example that uses this concept.',
]

function App() {
  return (
    <main className="app-shell">
      <aside className="sidebar" aria-label="Main navigation">
        <div className="brand">
          <div className="brand-mark">
            <Sparkles size={22} aria-hidden="true" />
          </div>
          <div>
            <strong>GenAR Learn</strong>
            <span>AI + AR education</span>
          </div>
        </div>

        <nav className="nav-list">
          <a href="#dashboard" className="active">
            <LayoutDashboard size={18} aria-hidden="true" />
            Dashboard
          </a>
          <a href="#lessons">
            <BookOpen size={18} aria-hidden="true" />
            Lessons
          </a>
          <a href="#workspace">
            <Rotate3D size={18} aria-hidden="true" />
            AR Workspace
          </a>
          <a href="#teacher">
            <UploadCloud size={18} aria-hidden="true" />
            Teacher Tools
          </a>
          <a href="#accessibility">
            <Accessibility size={18} aria-hidden="true" />
            Accessibility
          </a>
        </nav>
      </aside>

      <section className="content">
        <header className="topbar">
          <div>
            <p className="eyebrow">Deployable university project prototype</p>
            <h1>Generative AI-powered AR learning assistant</h1>
          </div>
          <button className="primary-action" type="button">
            <Sparkles size={18} aria-hidden="true" />
            Start lesson
          </button>
        </header>

        <section className="hero-band" id="dashboard">
          <div className="hero-copy">
            <div className="status-pill">
              <Brain size={16} aria-hidden="true" />
              Research-backed MVP
            </div>
            <h2>Turn theory into short, accessible AR learning sessions.</h2>
            <p>
              GenAR focuses on the strongest path from your findings: practical
              browser AR, AI-guided explanations, short comfort-aware lessons,
              and measurable learning outcomes.
            </p>
            <div className="hero-actions">
              <button type="button">
                Open workspace
                <ChevronRight size={18} aria-hidden="true" />
              </button>
              <button className="secondary" type="button">
                View evaluation plan
              </button>
            </div>
          </div>

          <div className="ar-preview" aria-label="Interactive 3D preview area">
            <model-viewer
              src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
              camera-controls
              ar
              shadow-intensity="0.8"
              exposure="0.9"
              alt="A 3D model used as a placeholder AR learning object"
            />
            <div className="preview-overlay">
              <span>AR-ready 3D lesson object</span>
              <strong>Tap, rotate, ask AI</strong>
            </div>
          </div>
        </section>

        <section className="metric-grid" aria-label="Learning progress metrics">
          {metrics.map((metric) => {
            const Icon = metric.icon
            return (
              <article className="metric-card" key={metric.label}>
                <Icon size={20} aria-hidden="true" />
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
              </article>
            )
          })}
        </section>

        <section className="workspace-grid" id="workspace">
          <div className="panel lesson-panel" id="lessons">
            <div className="panel-header">
              <div>
                <p className="eyebrow">Lesson library</p>
                <h2>Choose a guided AR topic</h2>
              </div>
              <label className="search-box">
                <Search size={17} aria-hidden="true" />
                <input type="search" placeholder="Search lessons" />
              </label>
            </div>

            <div className="lesson-list">
              {lessons.map((lesson, index) => (
                <article className="lesson-card" key={lesson.title}>
                  <div className="lesson-number">{index + 1}</div>
                  <div>
                    <div className="lesson-title-row">
                      <h3>{lesson.title}</h3>
                      <span>{lesson.score}</span>
                    </div>
                    <p>{lesson.objective}</p>
                    <div className="lesson-meta">
                      <span>{lesson.subject}</span>
                      <span>{lesson.level}</span>
                      <span>{lesson.duration}</span>
                      <span>{lesson.asset}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="panel tutor-panel">
            <div className="panel-header compact">
              <div>
                <p className="eyebrow">AI tutor</p>
                <h2>Context-aware help</h2>
              </div>
              <MessageSquareText size={22} aria-hidden="true" />
            </div>

            <div className="chat-window" aria-label="AI tutor conversation">
              <div className="chat-message assistant">
                <strong>GenAR Tutor</strong>
                <p>
                  I can explain the AR object, simplify terminology, generate a
                  quiz, or adapt the activity for accessibility preferences.
                </p>
              </div>
              <div className="chat-message learner">
                <strong>Learner</strong>
                <p>Explain how this lesson improves learning outcomes.</p>
              </div>
            </div>

            <div className="prompt-stack">
              {tutorPrompts.map((prompt) => (
                <button type="button" key={prompt}>
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="bottom-grid">
          <article className="panel" id="accessibility">
            <div className="panel-header compact">
              <div>
                <p className="eyebrow">Comfort and access</p>
                <h2>Built around research barriers</h2>
              </div>
              <Accessibility size={22} aria-hidden="true" />
            </div>
            <div className="settings-grid">
              <label>
                <span>Reduced motion</span>
                <input type="checkbox" defaultChecked />
              </label>
              <label>
                <span>Captioned AI narration</span>
                <input type="checkbox" defaultChecked />
              </label>
              <label>
                <span>High contrast controls</span>
                <input type="checkbox" />
              </label>
              <label>
                <span>Session reminder</span>
                <input type="checkbox" defaultChecked />
              </label>
            </div>
          </article>

          <article className="panel" id="teacher">
            <div className="panel-header compact">
              <div>
                <p className="eyebrow">Teacher tools</p>
                <h2>Create AR lessons faster</h2>
              </div>
              <GraduationCap size={22} aria-hidden="true" />
            </div>
            <div className="teacher-flow">
              <span>Upload notes or PDFs</span>
              <ChevronRight size={18} aria-hidden="true" />
              <span>Attach 3D model</span>
              <ChevronRight size={18} aria-hidden="true" />
              <span>Generate quiz</span>
            </div>
          </article>
        </section>
      </section>
    </main>
  )
}

export default App
