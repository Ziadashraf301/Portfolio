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
  Car, Workflow, FlaskConical, Ship, Anchor, TrendingUp, Microscope, ListChecks
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
  'ai-data-science-lab': <FlaskConical size={22} />,
  'sales-analytics': <TrendingUp size={22} />,
  'sczone-port-analytics': <Ship size={22} />,
  'alexandria-port-platform': <Anchor size={22} />
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
              I design and ship the company's production AI systems, from the first prototype to monitored
              services. My main work is an Egyptian Arabic speech recognition system used every day by the
              video editing team, and the AI behind the company's SaaS lead platform: search that matches
              each lead to the right client, LLM services that build tailored onboarding questionnaires, and
              sales analytics that turn each rep's performance into a short voice report.
            </p>
          </div>
          <div className="card glass">
            <div className="card-icon"><Database size={28} /></div>
            <h3>Data Engineer / BI Developer — ISFP</h3>
            <p className="exp-date">Jul 2026 – Present · Alexandria · Remote</p>
            <p>
              I build the data and reporting layer for government port authorities in the Suez Canal Economic
              Zone: ETL pipelines and data marts, revenue KPIs from invoice data, and secure Tableau dashboards
              where each user sees only their own data. I'm now moving Alexandria Port's dashboards to an
              open-source stack to cut license costs.
            </p>
          </div>
          <div className="card glass">
            <div className="card-icon"><Users size={28} /></div>
            <h3>AI Engineer Mentor — HumaVolve</h3>
            <p className="exp-date">Jun 2026 – Sep 2026 · Remote</p>
            <p>
              I ran an AI bootcamp for fresh graduates, teaching how a model goes from a notebook to a deployed
              service. I reviewed their designs and code and helped them debug real projects until they were
              ready to ship.
            </p>
          </div>
          <div className="card glass">
            <div className="card-icon"><Microscope size={28} /></div>
            <h3>AI Engineer — Egyptian Armed Forces (R&D Lab)</h3>
            <p className="exp-date">Jun 2024 – Jan 2025 · Cairo</p>
            <p>
              I built AI proofs of concept for research teams: deep learning models that find anomalies in
              medical images, time-series models that flag unusual marine sensor readings, and a BERT
              sentiment model that won 2nd place in an internal AI competition.
            </p>
          </div>
          <div className="card glass">
            <div className="card-icon"><Activity size={28} /></div>
            <h3>Data Scientist — SimpliLearn</h3>
            <p className="exp-date">Dec 2022 – Jun 2024 · Remote</p>
            <p>
              I delivered 15+ data science projects for academic and research clients. My work covered cleaning
              the data, building and tuning models in Python and R, and explaining the results in clear
              dashboards.
            </p>
          </div>
          <div className="card glass">
            <div className="card-icon"><Globe size={28} /></div>
            <h3>Data Scientist — Freelancer.com</h3>
            <p className="exp-date">Jun 2022 – Apr 2024 · Remote</p>
            <p>
              I worked with international clients on end-to-end machine learning: models on AWS that retrain
              automatically, aerial image segmentation that needs only a few labeled points, and customer
              segmentation with Spark on very large datasets.
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
                <p>{project.shortDescription}</p>
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
