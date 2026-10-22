import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { projects, projectFilters } from '../data/projects';
import { certificates } from '../data/certificates';
import {
  Terminal, Database, Brain, Cloud, Activity, Code,
  BarChart, ExternalLink, GraduationCap, MapPin, Mail,
  Briefcase, Network, Cpu, Server, ArrowRight, Sparkles,
  Github, Linkedin, Award, Users, FolderGit2, Mic, Target,
  FileDown, Wrench, Globe, MessagesSquare, Search, ShoppingCart,
  Car, Workflow, FlaskConical, Users2, TrendingUp, Microscope, ListChecks
} from 'lucide-react';

const iconMap = {
  Cloud: <Cloud size={22} />,
  Brain: <Brain size={22} />,
  Database: <Database size={22} />,
  Cpu: <Cpu size={22} />,
  BarChart: <BarChart size={22} />,
  Code: <Code size={22} />,
  Briefcase: <Briefcase size={22} />,
  Sparkles: <Sparkles size={22} />,
  Server: <Server size={22} />
};

const projectIconMap = {
  'lead-retrieval': <Target size={22} />,
  'lead-qualification': <ListChecks size={22} />,
  'telecopilot-ai': <MessagesSquare size={22} />,
  'real-estate-intelligence': <Search size={22} />,
  'contentlens-ai': <Network size={22} />,
  'speech-ai-platform': <Mic size={22} />,
  'black-friday': <ShoppingCart size={22} />,
  'taxitrack': <Car size={22} />,
  'mental-health-analysis': <Brain size={22} />,
  'customer-analytics-pipeline': <Workflow size={22} />,
  'salesforce-databricks': <TrendingUp size={22} />,
  'ai-data-science-lab': <FlaskConical size={22} />,
  'bigmart-sales': <BarChart size={22} />,
  'customer-segmentation': <Users2 size={22} />
};

export default function Home() {
  const [filter, setFilter] = useState('All');
  const visibleProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.filters.includes(filter));

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="home">
      {/* ===== HERO SECTION ===== */}
      <section className="hero">
        <div className="hero-bg-glow"></div>
        <div className="hero-inner">
          <div className="hero-text">
            <h1>
              Ziad Ashraf<br />
              <span className="text-gradient">AI Engineer &<br />Data Scientist</span>
            </h1>
            <p className="hero-subtitle">
              I build production AI and data science systems end to end: LLM, RAG and agent applications,
              Arabic speech recognition, predictive models with MLOps, and the data pipelines behind them.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href="mailto:ziadashraf98765@gmail.com" className="btn btn-secondary">
                <Mail size={18} /> Contact Me
              </a>
              <a
                href={import.meta.env.BASE_URL + 'Ziad_Ashraf_Resume.pdf'}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <FileDown size={18} /> Resume
              </a>
            </div>
            <div className="hero-meta">
              <span><MapPin size={16} /> Cairo, Egypt</span>
              <span><Briefcase size={16} /> 3+ Years Exp</span>
              <span><GraduationCap size={16} /> B.Sc. Data Science</span>
            </div>
          </div>
          <div className="hero-photo-wrapper">
            <img
              src={import.meta.env.BASE_URL + 'my_photo.jpg'}
              alt="Ziad Ashraf"
              className="hero-photo"
            />
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE SECTION (includes freelancing) ===== */}
      <section id="experience" className="section section-alt">
        <h2 className="section-title">Working Experience</h2>
        <div className="section-divider"></div>
        <div className="experience-grid">
          <div className="card glass">
            <div className="card-icon"><Brain size={28} /></div>
            <h3>AI Engineer — Elshayeb</h3>
            <p className="exp-date">Feb 2026 – Present · Alexandria · Remote</p>
            <p>
              Built an Egyptian Arabic speech recognition system (VAD, CTC forced alignment and a
              multimodal LLM) that reached 8% WER and cut manual transcription costs by ~66%.
              Designed multi-tenant SaaS lead retrieval with hybrid search (BM25 + dense) and reranking,
              and Gemini lead-qualification services with Pydantic structured outputs and Langfuse.
            </p>
          </div>
          <div className="card glass">
            <div className="card-icon"><Database size={28} /></div>
            <h3>Data Engineer / BI Developer — ISFP</h3>
            <p className="exp-date">Jul 2026 – Present · Alexandria · Remote</p>
            <p>
              Delivering data, BI and analytics solutions for government port authorities across the
              Suez Canal Economic Zone. Building ETL pipelines with Alteryx, Oracle SQL, Python and dbt,
              analyzing invoice data for revenue KPIs, and deploying Tableau Server dashboards with
              row-level security.
            </p>
          </div>
          <div className="card glass">
            <div className="card-icon"><Users size={28} /></div>
            <h3>AI Engineer Mentor — HumaVolve</h3>
            <p className="exp-date">Jun 2026 – Sep 2026 · Remote</p>
            <p>
              Led an AI bootcamp for fresh graduates on the production ML lifecycle, RAG systems and
              containerized FastAPI deployments, and mentored trainees through architecture reviews,
              code reviews and pipeline debugging.
            </p>
          </div>
          <div className="card glass">
            <div className="card-icon"><Microscope size={28} /></div>
            <h3>AI Engineer — Egyptian Armed Forces (R&D Lab)</h3>
            <p className="exp-date">Jun 2024 – Jan 2025 · Cairo</p>
            <p>
              Built healthcare deep learning pipelines with YOLO and UNet, time-series anomaly detection
              (ARIMA, ETS) on marine sensor data, and a fine-tuned BERT sentiment model that won
              2nd place in an institutional AI engineering competition.
            </p>
          </div>
          <div className="card glass">
            <div className="card-icon"><Activity size={28} /></div>
            <h3>Data Scientist — SimpliLearn</h3>
            <p className="exp-date">Dec 2022 – Jun 2024 · Remote</p>
            <p>
              Delivered 15+ data science projects for academic and research clients with a 95% acceptance
              rate. Cut baseline prediction error by 5–30% through model tuning and feature engineering
              in Python and R, and built Power BI and Tableau dashboards.
            </p>
          </div>
          <div className="card glass">
            <div className="card-icon"><Globe size={28} /></div>
            <h3>Data Scientist — Freelancer.com</h3>
            <p className="exp-date">Jun 2022 – Apr 2024 · Remote</p>
            <p>
              Deployed ML systems on AWS EC2 with automated retraining, cut annotation time by 90% with
              point-supervised UNet segmentation, and segmented 100M+ customers with Spark K-Means.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SKILLS SECTION ===== */}
      <section id="skills" className="section">
        <h2 className="section-title">Technical Expertise</h2>
        <div className="section-divider"></div>
        <div className="skills-grid">
          <div className="card glass">
            <div className="card-icon"><Cpu size={28} /></div>
            <h3>GenAI & Agents</h3>
            <p>LLMs, RAG, AI Agents, LangGraph, LangChain, CrewAI, MCP, Function Calling, OpenAI, Gemini, Cohere, LoRA/PEFT, Hugging Face.</p>
          </div>
          <div className="card glass">
            <div className="card-icon"><Search size={28} /></div>
            <h3>Search & Retrieval</h3>
            <p>Hybrid Search (BM25 + Dense), Reranking, Embeddings, Qdrant, Milvus, Semantic & Exact-Match Caching, RAGAS Evaluation.</p>
          </div>
          <div className="card glass">
            <div className="card-icon"><BarChart size={28} /></div>
            <h3>Data Science & ML</h3>
            <p>Python, SQL, Statistics, scikit-learn, LightGBM, XGBoost, Time Series Forecasting, Clustering, SHAP, Feature Engineering.</p>
          </div>
          <div className="card glass">
            <div className="card-icon"><Network size={28} /></div>
            <h3>Deep Learning, Vision & Speech</h3>
            <p>PyTorch, TensorFlow, Transformers, BERT, CNNs, YOLO, UNet, OCR, ASR, TTS, Voice Activity Detection, CTC Forced Alignment, Multimodal LLMs, Wav2Vec2, Whisper, ONNX Runtime.</p>
          </div>
          <div className="card glass">
            <div className="card-icon"><Cloud size={28} /></div>
            <h3>MLOps & Cloud</h3>
            <p>FastAPI, Docker, Kubernetes, GitHub Actions CI/CD, AWS, MLflow, Evidently, Langfuse, Prometheus, Grafana.</p>
          </div>
          <div className="card glass">
            <div className="card-icon"><Server size={28} /></div>
            <h3>Data Engineering & BI</h3>
            <p>Airflow, Dagster, dbt, Spark, Kafka, Flink, ClickHouse, BigQuery, Oracle, PostgreSQL, Alteryx, Tableau, Power BI.</p>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS SECTION ===== */}
      <section id="projects" className="section section-alt">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Production systems I built at Elshayeb, followed by my GenAI, machine learning, data science and data engineering projects
        </p>
        <div className="section-divider"></div>
        <div className="project-filters" role="tablist" aria-label="Filter projects">
          {projectFilters.map(f => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={filter === f}
              className={`filter-chip${filter === f ? ' active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {visibleProjects.map(project => (
            <Link to={`/project/${project.id}`} key={project.id} className="card glass project-card">
              <div className="project-header">
                <div className="project-icon">
                  {projectIconMap[project.id] || <Code size={22} />}
                </div>
                <span className="project-category">{project.category}</span>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                {project.metric && <div className="project-metric">{project.metric}</div>}
                <p>{project.shortDescription}</p>
                <div className="project-tech">
                  {project.tech.slice(0, 4).map((t, idx) => (
                    <span key={idx} className="tech-tag">{t}</span>
                  ))}
                  {project.tech.length > 4 && <span className="tech-tag">+{project.tech.length - 4}</span>}
                </div>
                <div className="project-link-hint">
                  View Details <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== CERTIFICATES SECTION ===== */}
      <section id="certificates" className="section">
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">
          12 professional certifications from IBM, Google, DeepLearning.AI, and more
        </p>
        <div className="section-divider"></div>
        <div className="cert-grid">
          {certificates.map(cert => (
            <div key={cert.id} className="card glass cert-card">
              <div className="cert-icon">
                {iconMap[cert.icon] || <Award size={22} />}
              </div>
              <div className="cert-info">
                <h3>{cert.title}</h3>
                <p>{cert.issuer} • {cert.date}</p>
                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-verify"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Verify →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
