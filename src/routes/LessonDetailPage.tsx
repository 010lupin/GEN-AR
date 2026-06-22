import type React from 'react'
import {
  Activity,
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  ClipboardList,
  HeartPulse,
  Layers3,
  Play,
  ScanLine,
} from 'lucide-react'

type ModuleStep = {
  title: string
  description: string
  checkpoint: string
}

type QuizSummaryItem = {
  label: string
  value: string
}

const lessonObjectives = [
  'Identify the four chambers of the heart and describe their roles.',
  'Trace oxygen-poor and oxygen-rich blood through the heart, lungs, and body.',
  'Explain how valves keep blood moving in the correct direction.',
  'Connect heart structure to a simple healthcare scenario.',
]

const heartFacts = [
  'The left ventricle has the thickest muscle wall because it pumps blood to the whole body.',
  'Heart valves work like one-way doors that prevent blood from flowing backward.',
  'The pulmonary circuit sends blood to the lungs, while the systemic circuit sends blood to the body.',
]

const moduleSteps: ModuleStep[] = [
  {
    title: 'Place the model',
    description: 'Anchor the heart on a flat surface, then rotate it to compare front, side, and top views.',
    checkpoint: 'Learner can point out the major vessels.',
  },
  {
    title: 'Inspect chambers',
    description: 'Use guided labels to compare atria and ventricles, then hide labels for recall practice.',
    checkpoint: 'Learner can name all four chambers.',
  },
  {
    title: 'Trace circulation',
    description: 'Follow animated flow markers from the body to the lungs and back out through the aorta.',
    checkpoint: 'Learner can describe the full blood-flow path.',
  },
  {
    title: 'Apply the concept',
    description: 'Review a short valve problem scenario and decide which part of the pathway is affected.',
    checkpoint: 'Learner can connect anatomy to function.',
  },
]

const quizSummary: QuizSummaryItem[] = [
  { label: 'Questions', value: '5' },
  { label: 'Estimated time', value: '4 min' },
  { label: 'Passing score', value: '80%' },
]

const pageStyles = {
  page: {
    minHeight: '100vh',
    padding: '32px',
    color: '#172033',
    background: '#f6f8fb',
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  shell: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr) 360px',
    gap: '24px',
    maxWidth: '1180px',
    margin: '0 auto',
  },
  hero: {
    display: 'grid',
    gap: '24px',
    padding: '28px',
    border: '1px solid #dbe3ef',
    borderRadius: '8px',
    background: '#ffffff',
  },
  eyebrow: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    width: 'fit-content',
    margin: 0,
    color: '#2563eb',
    fontSize: '0.78rem',
    fontWeight: 800,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
  },
  title: {
    maxWidth: '760px',
    margin: 0,
    color: '#0f172a',
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    lineHeight: 1,
  },
  intro: {
    maxWidth: '760px',
    margin: 0,
    color: '#475569',
    fontSize: '1.06rem',
    lineHeight: 1.6,
  },
  metaGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gap: '12px',
  },
  metaItem: {
    display: 'grid',
    gap: '4px',
    padding: '14px',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    background: '#f8fafc',
  },
  label: {
    color: '#64748b',
    fontSize: '0.78rem',
    fontWeight: 800,
    textTransform: 'uppercase',
  },
  value: {
    color: '#111827',
    fontWeight: 800,
  },
  section: {
    display: 'grid',
    gap: '14px',
    padding: '24px',
    border: '1px solid #dbe3ef',
    borderRadius: '8px',
    background: '#ffffff',
  },
  sectionTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    margin: 0,
    color: '#0f172a',
    fontSize: '1.2rem',
  },
  list: {
    display: 'grid',
    gap: '10px',
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
  listItem: {
    display: 'grid',
    gridTemplateColumns: '24px minmax(0, 1fr)',
    gap: '10px',
    alignItems: 'start',
    color: '#334155',
    lineHeight: 1.5,
  },
  preview: {
    display: 'grid',
    minHeight: '340px',
    placeItems: 'center',
    padding: '24px',
    border: '1px dashed #94a3b8',
    borderRadius: '8px',
    color: '#334155',
    background:
      'linear-gradient(135deg, rgba(37, 99, 235, 0.08), rgba(20, 184, 166, 0.1)), #f8fafc',
    textAlign: 'center',
  },
  previewIcon: {
    display: 'inline-grid',
    width: '72px',
    height: '72px',
    placeItems: 'center',
    marginBottom: '16px',
    borderRadius: '8px',
    color: '#ffffff',
    background: '#2563eb',
  },
  steps: {
    display: 'grid',
    gap: '12px',
  },
  step: {
    display: 'grid',
    gridTemplateColumns: '44px minmax(0, 1fr)',
    gap: '14px',
    padding: '16px',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    background: '#ffffff',
  },
  stepNumber: {
    display: 'grid',
    width: '44px',
    height: '44px',
    placeItems: 'center',
    borderRadius: '8px',
    color: '#ffffff',
    background: '#0f766e',
    fontWeight: 900,
  },
  stepTitle: {
    margin: '0 0 6px',
    color: '#0f172a',
    fontSize: '1rem',
  },
  bodyText: {
    margin: 0,
    color: '#475569',
    lineHeight: 1.55,
  },
  checkpoint: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    marginTop: '10px',
    color: '#0f766e',
    fontSize: '0.9rem',
    fontWeight: 800,
  },
  aside: {
    display: 'grid',
    alignContent: 'start',
    gap: '18px',
  },
  cta: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    minHeight: '48px',
    width: '100%',
    border: 0,
    borderRadius: '8px',
    color: '#ffffff',
    background: '#2563eb',
    fontWeight: 900,
  },
  quizGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gap: '10px',
  },
  quizItem: {
    display: 'grid',
    gap: '4px',
    padding: '12px',
    borderRadius: '8px',
    background: '#eef6ff',
  },
} satisfies Record<string, React.CSSProperties>

export default function LessonDetailPage() {
  return (
    <main style={pageStyles.page}>
      <div style={pageStyles.shell}>
        <div style={{ display: 'grid', gap: '24px' }}>
          <section aria-labelledby="lesson-title" style={pageStyles.hero}>
            <p style={pageStyles.eyebrow}>
              <HeartPulse aria-hidden="true" size={18} />
              Healthcare lesson
            </p>
            <h1 id="lesson-title" style={pageStyles.title}>
              Human Heart Explorer
            </h1>
            <p style={pageStyles.intro}>
              A beginner-friendly AR anatomy lesson where learners place a 3D heart,
              inspect labelled structures, trace circulation, and finish with a short
              knowledge check.
            </p>
            <div aria-label="Lesson details" style={pageStyles.metaGrid}>
              <div style={pageStyles.metaItem}>
                <span style={pageStyles.label}>Level</span>
                <strong style={pageStyles.value}>Beginner</strong>
              </div>
              <div style={pageStyles.metaItem}>
                <span style={pageStyles.label}>Duration</span>
                <strong style={pageStyles.value}>18 min</strong>
              </div>
              <div style={pageStyles.metaItem}>
                <span style={pageStyles.label}>Mode</span>
                <strong style={pageStyles.value}>AR + 3D fallback</strong>
              </div>
            </div>
          </section>

          <section aria-labelledby="objectives-title" style={pageStyles.section}>
            <h2 id="objectives-title" style={pageStyles.sectionTitle}>
              <BookOpenCheck aria-hidden="true" size={22} />
              Lesson objectives
            </h2>
            <ul style={pageStyles.list}>
              {lessonObjectives.map((objective) => (
                <li key={objective} style={pageStyles.listItem}>
                  <CheckCircle2 aria-hidden="true" color="#0f766e" size={20} />
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="steps-title" style={pageStyles.section}>
            <h2 id="steps-title" style={pageStyles.sectionTitle}>
              <Layers3 aria-hidden="true" size={22} />
              Module steps
            </h2>
            <div style={pageStyles.steps}>
              {moduleSteps.map((step, index) => (
                <article key={step.title} style={pageStyles.step}>
                  <div aria-hidden="true" style={pageStyles.stepNumber}>
                    {index + 1}
                  </div>
                  <div>
                    <h3 style={pageStyles.stepTitle}>{step.title}</h3>
                    <p style={pageStyles.bodyText}>{step.description}</p>
                    <span style={pageStyles.checkpoint}>
                      <ClipboardList aria-hidden="true" size={16} />
                      {step.checkpoint}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        <aside aria-label="Lesson preview and quiz" style={pageStyles.aside}>
          <section aria-labelledby="preview-title" style={pageStyles.section}>
            <h2 id="preview-title" style={pageStyles.sectionTitle}>
              <ScanLine aria-hidden="true" size={22} />
              AR preview
            </h2>
            <div style={pageStyles.preview}>
              <div>
                <span style={pageStyles.previewIcon}>
                  <Activity aria-hidden="true" size={36} />
                </span>
                <h3 style={pageStyles.stepTitle}>3D heart model placeholder</h3>
                <p style={pageStyles.bodyText}>
                  Reserved for a model-viewer scene, AR launch control, and labelled
                  anatomy hotspots.
                </p>
              </div>
            </div>
            <button type="button" style={pageStyles.cta}>
              <Play aria-hidden="true" size={18} />
              Start module
              <ArrowRight aria-hidden="true" size={18} />
            </button>
          </section>

          <section aria-labelledby="facts-title" style={pageStyles.section}>
            <h2 id="facts-title" style={pageStyles.sectionTitle}>
              <HeartPulse aria-hidden="true" size={22} />
              Key facts
            </h2>
            <ul style={pageStyles.list}>
              {heartFacts.map((fact) => (
                <li key={fact} style={pageStyles.listItem}>
                  <CheckCircle2 aria-hidden="true" color="#2563eb" size={20} />
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="quiz-title" style={pageStyles.section}>
            <h2 id="quiz-title" style={pageStyles.sectionTitle}>
              <ClipboardList aria-hidden="true" size={22} />
              Quiz summary
            </h2>
            <div style={pageStyles.quizGrid}>
              {quizSummary.map((item) => (
                <div key={item.label} style={pageStyles.quizItem}>
                  <span style={pageStyles.label}>{item.label}</span>
                  <strong style={pageStyles.value}>{item.value}</strong>
                </div>
              ))}
            </div>
            <p style={pageStyles.bodyText}>
              The quiz checks chamber recognition, circulation order, valve function,
              and one applied healthcare example.
            </p>
          </section>
        </aside>
      </div>
    </main>
  )
}
