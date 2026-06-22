import '@google/model-viewer'
import { useEffect, useMemo, useState } from 'react'
import {
  Accessibility,
  Activity,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Eye,
  GraduationCap,
  Home,
  Layers3,
  MessageSquareText,
  Pause,
  Play,
  Rotate3D,
  Search,
  Sparkles,
  UploadCloud,
} from 'lucide-react'
import arAstronomy from './assets/ar-astronomy.svg'
import arEngineering from './assets/ar-engineering.svg'
import arHealthcare from './assets/ar-healthcare.svg'
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

type UseCase = {
  title: string
  subject: string
  goal: string
  image: string
  difficulty: string
  duration: string
  objectType: string
}

type LessonStep = {
  title: string
  body: string
  focus: string
}

type QuizQuestion = {
  prompt: string
  options: string[]
  answerIndex: number
  explanation: string
}

const lessons: Lesson[] = [
  {
    title: 'Human Heart Explorer',
    subject: 'Healthcare',
    level: 'Beginner',
    duration: '18 min',
    score: 'Ready',
    asset: '3D anatomy model',
    objective: 'Identify chambers, valves, blood flow, and clinical examples.',
  },
  {
    title: 'Solar System Scale Lab',
    subject: 'Science',
    level: 'Intermediate',
    duration: '22 min',
    score: 'Preview',
    asset: 'Orbital AR scene',
    objective: 'Compare orbit, scale, gravity, and planet relationships.',
  },
  {
    title: 'Engine Part Assembly',
    subject: 'Engineering',
    level: 'Advanced',
    duration: '28 min',
    score: 'Preview',
    asset: 'Exploded 3D model',
    objective: 'Understand assembly order, part function, and fault diagnosis.',
  },
]

const useCases: UseCase[] = [
  {
    title: 'AR Anatomy Studio',
    subject: 'Healthcare',
    goal: 'Study labelled organs in a room-scale lesson before taking a quiz.',
    image: arHealthcare,
    difficulty: 'Beginner',
    duration: '18 min',
    objectType: '3D heart and body systems',
  },
  {
    title: 'Engineering Assembly Lab',
    subject: 'Engineering',
    goal: 'Inspect mechanical components before practising assembly order.',
    image: arEngineering,
    difficulty: 'Advanced',
    duration: '28 min',
    objectType: 'Exploded turbine model',
  },
  {
    title: 'Solar Scale Classroom',
    subject: 'Science',
    goal: 'Compare planet distance, orbit, and scale with guided prompts.',
    image: arAstronomy,
    difficulty: 'Intermediate',
    duration: '22 min',
    objectType: 'Orbital AR scene',
  },
]

const lessonSteps: LessonStep[] = [
  {
    title: 'Orient the model',
    body: 'Place the heart model on a desk or inspect it in 3D fallback mode. Start by noticing the major chambers and vessels.',
    focus: 'Model placement, scale, and labels',
  },
  {
    title: 'Identify chambers',
    body: 'Compare the atria and ventricles. The ventricles pump blood out of the heart, while the atria receive blood returning to it.',
    focus: 'Right atrium, left atrium, right ventricle, left ventricle',
  },
  {
    title: 'Trace blood flow',
    body: 'Follow blood from the body to the lungs, back to the heart, and then out to the body. This turns abstract diagrams into a spatial sequence.',
    focus: 'Circulation pathway',
  },
  {
    title: 'Connect to practice',
    body: 'Use a short clinical example to explain why valve direction, blocked arteries, and oxygen flow matter in healthcare education.',
    focus: 'Applied healthcare context',
  },
]

const quiz: QuizQuestion[] = [
  {
    prompt: 'Which chamber pumps oxygen-rich blood to the body?',
    options: ['Right atrium', 'Left ventricle', 'Right ventricle'],
    answerIndex: 1,
    explanation: 'The left ventricle sends oxygen-rich blood into the aorta and around the body.',
  },
  {
    prompt: 'Why are valves important in the heart?',
    options: ['They stop backflow', 'They create oxygen', 'They store blood sugar'],
    answerIndex: 0,
    explanation: 'Valves keep blood moving in the correct direction through the heart.',
  },
  {
    prompt: 'What is the main learning benefit of using AR for anatomy?',
    options: ['It removes assessment', 'It makes structures spatial and interactive', 'It replaces all teachers'],
    answerIndex: 1,
    explanation: 'AR helps learners inspect structures spatially while still using teacher and AI guidance.',
  },
]

const metrics = [
  { label: 'MVP lesson steps', value: '4', icon: ClipboardCheck },
  { label: 'Quiz questions', value: '3', icon: Activity },
  { label: 'AR use cases', value: '3', icon: Layers3 },
  { label: 'Comfort controls', value: '4', icon: Eye },
]

const tutorPrompts = [
  'Explain the left ventricle in simpler terms.',
  'Generate revision notes for blood flow.',
  'Give me a healthcare example about valve problems.',
]

function App() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isCarouselPlaying, setIsCarouselPlaying] = useState(true)
  const [activeStep, setActiveStep] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})

  const selectedUseCase = useCases[activeSlide]
  const completedSteps = activeStep + 1
  const quizScore = useMemo(() => {
    return quiz.reduce((score, question, index) => {
      return answers[index] === question.answerIndex ? score + 1 : score
    }, 0)
  }, [answers])
  const quizComplete = Object.keys(answers).length === quiz.length

  useEffect(() => {
    if (!isCarouselPlaying) {
      return
    }

    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % useCases.length)
    }, 5500)

    return () => window.clearInterval(intervalId)
  }, [isCarouselPlaying])

  const moveSlide = (direction: 'previous' | 'next') => {
    setIsCarouselPlaying(false)
    setActiveSlide((current) => {
      if (direction === 'previous') {
        return current === 0 ? useCases.length - 1 : current - 1
      }

      return (current + 1) % useCases.length
    })
  }

  return (
    <main className="app-shell">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <aside className="sidebar" aria-label="GenAR navigation">
        <div className="brand">
          <div className="brand-mark">
            <Sparkles size={22} aria-hidden="true" />
          </div>
          <div>
            <strong>GenAR Learn</strong>
            <span>AI + AR education</span>
          </div>
        </div>

        <nav className="nav-list" aria-label="Primary">
          <a href="#dashboard" className="active">
            <Home size={18} aria-hidden="true" />
            Home
          </a>
          <a href="#use-cases">
            <Layers3 size={18} aria-hidden="true" />
            Use cases
          </a>
          <a href="#lessons">
            <BookOpen size={18} aria-hidden="true" />
            Lessons
          </a>
          <a href="#workspace">
            <Rotate3D size={18} aria-hidden="true" />
            AR lab
          </a>
          <a href="#teacher">
            <UploadCloud size={18} aria-hidden="true" />
            Teacher tools
          </a>
          <a href="#accessibility">
            <Accessibility size={18} aria-hidden="true" />
            Accessibility
          </a>
        </nav>
      </aside>

      <section className="content" id="main-content">
        <section className="hero-band" id="dashboard">
          <div className="hero-copy">
            <div className="status-pill">
              <Brain size={16} aria-hidden="true" />
              Research-backed MVP
            </div>
            <p className="eyebrow">Deployable university project prototype</p>
            <h1>Generative AI-powered AR learning assistant</h1>
            <p>
              GenAR turns your research into a practical learning app: short AR
              activities, guided AI explanations, quizzes, accessibility
              settings, and progress evidence for evaluation.
            </p>
            <div className="hero-actions">
              <a href="#workspace" className="button-link primary">
                Start Human Heart lesson
                <ChevronRight size={18} aria-hidden="true" />
              </a>
              <a href="#use-cases" className="button-link secondary">
                Explore AR use cases
              </a>
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
              <strong>Rotate, inspect, ask AI</strong>
            </div>
          </div>
        </section>

        <section
          className="use-case-carousel"
          id="use-cases"
          aria-roledescription="carousel"
          aria-label="AR learning use cases"
          onKeyDown={(event) => {
            if (event.key === 'ArrowLeft') {
              moveSlide('previous')
            }

            if (event.key === 'ArrowRight') {
              moveSlide('next')
            }
          }}
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">Front carousel</p>
              <h2>AR use cases for learning</h2>
            </div>
            <div className="carousel-controls">
              <button
                type="button"
                onClick={() => moveSlide('previous')}
                aria-label="Show previous AR use case"
              >
                <ArrowLeft size={18} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => setIsCarouselPlaying((current) => !current)}
                aria-label={isCarouselPlaying ? 'Pause carousel' : 'Play carousel'}
              >
                {isCarouselPlaying ? (
                  <Pause size={18} aria-hidden="true" />
                ) : (
                  <Play size={18} aria-hidden="true" />
                )}
              </button>
              <button
                type="button"
                onClick={() => moveSlide('next')}
                aria-label="Show next AR use case"
              >
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>

          <article className="carousel-slide" aria-live="polite">
            <img src={selectedUseCase.image} alt={`${selectedUseCase.title} visual`} />
            <div className="carousel-copy">
              <span className="subject-tag">{selectedUseCase.subject}</span>
              <h3>{selectedUseCase.title}</h3>
              <p>{selectedUseCase.goal}</p>
              <dl className="use-case-facts">
                <div>
                  <dt>Object</dt>
                  <dd>{selectedUseCase.objectType}</dd>
                </div>
                <div>
                  <dt>Level</dt>
                  <dd>{selectedUseCase.difficulty}</dd>
                </div>
                <div>
                  <dt>Time</dt>
                  <dd>{selectedUseCase.duration}</dd>
                </div>
              </dl>
              <a href="#workspace" className="button-link primary compact-link">
                Preview workflow
                <ChevronRight size={17} aria-hidden="true" />
              </a>
            </div>
          </article>

          <div className="carousel-dots" aria-label="Carousel slide selector">
            {useCases.map((useCase, index) => (
              <button
                type="button"
                key={useCase.title}
                className={index === activeSlide ? 'active' : ''}
                onClick={() => {
                  setActiveSlide(index)
                  setIsCarouselPlaying(false)
                }}
                aria-label={`Show ${useCase.title}`}
                aria-current={index === activeSlide}
              />
            ))}
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
                    <div className="card-actions">
                      <a href="#workspace" className="text-action">
                        Start
                      </a>
                      <a href="#use-cases" className="text-action secondary-text-action">
                        Preview AR
                      </a>
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

        <section className="learning-flow" aria-labelledby="heart-workflow-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Next MVP phase</p>
              <h2 id="heart-workflow-title">Human Heart Explorer workflow</h2>
            </div>
            <span className="progress-pill">
              {completedSteps}/{lessonSteps.length} steps previewed
            </span>
          </div>

          <div className="flow-grid">
            <article className="panel step-panel">
              <div className="step-list" aria-label="Lesson steps">
                {lessonSteps.map((step, index) => (
                  <button
                    type="button"
                    key={step.title}
                    className={index === activeStep ? 'active' : ''}
                    onClick={() => setActiveStep(index)}
                  >
                    <span>{index + 1}</span>
                    {step.title}
                  </button>
                ))}
              </div>
              <div className="active-step">
                <p className="eyebrow">Current step</p>
                <h3>{lessonSteps[activeStep].title}</h3>
                <p>{lessonSteps[activeStep].body}</p>
                <div className="focus-box">
                  <strong>Focus:</strong> {lessonSteps[activeStep].focus}
                </div>
              </div>
            </article>

            <article className="panel quiz-panel">
              <div className="panel-header compact">
                <div>
                  <p className="eyebrow">Assessment</p>
                  <h2>Quick quiz</h2>
                </div>
                {quizComplete && <CheckCircle2 size={24} aria-hidden="true" />}
              </div>

              <div className="quiz-stack">
                {quiz.map((question, questionIndex) => (
                  <fieldset key={question.prompt}>
                    <legend>{question.prompt}</legend>
                    {question.options.map((option, optionIndex) => (
                      <label key={option}>
                        <input
                          type="radio"
                          name={`question-${questionIndex}`}
                          checked={answers[questionIndex] === optionIndex}
                          onChange={() =>
                            setAnswers((current) => ({
                              ...current,
                              [questionIndex]: optionIndex,
                            }))
                          }
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                    {answers[questionIndex] !== undefined && (
                      <p className="answer-feedback">{question.explanation}</p>
                    )}
                  </fieldset>
                ))}
              </div>

              <div className="score-strip">
                <strong>
                  Score: {quizScore}/{quiz.length}
                </strong>
                <span>{quizComplete ? 'Ready to save progress' : 'Answer all questions'}</span>
              </div>
            </article>
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
