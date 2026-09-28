import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { certificates } from '../data/certificates';
import {
  Terminal, Database, Brain, Cloud, Activity, Code,
  BarChart, ExternalLink, GraduationCap, MapPin, Mail,
  Briefcase, Network, Cpu, Server, ArrowRight, Sparkles,
  Github, Linkedin, Award, Users, FolderGit2, Mic, Target,
  FileDown, Wrench, Globe
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
  'contentlens-ai': <Network size={22} />,
  'real-estate-intelligence': <Database size={22} />,
  'mental-health-analysis': <Brain size={22} />,
  'speech-ai-platform': <Mic size={22} />,
  'black-friday': <Target size={22} />,
  'taxitrack': <BarChart size={22} />
};

export default function Home() {
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
              Building production-grade ML, NLP, and GenAI systems end-to-end — from prototyping deep learning architectures to scalable cloud deployments.
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
              <span><Briefcase size={16} /> 2+ Years Exp</span>
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
            <p className="exp-date">Feb 2026 – Present · Alexandria</p>
            <p>
              Architecting end-to-end AI solutions for media operations and CRM workflows.
              Building Speech AI (ASR + TTS), production RAG & Agentic AI applications,
              recommendation systems, and multi-tenant SaaS lead retrieval with hybrid search.
              Deploying Dockerized services on AWS with full MLOps/LLMOps monitoring stack.
            </p>
          </div>
          <div className="card glass">
            <div className="card-icon"><Database size={28} /></div>
            <h3>BI / ETL Developer — ISFP</h3>
            <p className="exp-date">Jul 2026 – Present · Alexandria</p>
            <p>
              Delivering BI solutions for government entities in ports and logistics.
              Developing ETL workflows with Alteryx, building Tableau dashboards on Tableau Server,
              and performing time series forecasting to support operational reporting and decision-making.
            </p>
          </div>
          <div className="card glass">
            <div className="card-icon"><Activity size={28} /></div>
            <h3>Data Scientist — SimpliLearn</h3>
            <p className="exp-date">Dec 2022 – Jun 2024 · Alexandria</p>
            <p>
              Delivered 15+ data science projects with 95% client acceptance rate.
              Optimized ML models using Python and R, achieving 5–30% error reduction.
              Built 10+ interactive dashboards with Power BI, Tableau, and Excel.
            </p>
          </div>
          <div className="card glass">
            <div className="card-icon"><Globe size={28} /></div>
            <h3>Data Scientist — Freelancer.com</h3>
            <p className="exp-date">Jun 2022 – Apr 2024 · Remote</p>
            <p>
              Deployed ML systems on AWS with automated retraining pipelines.
              Built semantic segmentation models (UNet), customer segmentation with Spark (100M+ customers),
              time series forecasting with LightGBM, and real-time IoT dashboards.
              5-star ratings from 8 clients with comprehensive documentation.
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
            <h3>ML & Deep Learning</h3>
            <p>PyTorch, TensorFlow, scikit-learn, XGBoost, CNNs, Transfer Learning, YOLO, UNet, OCR.</p>
          </div>
          <div className="card glass">
            <div className="card-icon"><Network size={28} /></div>
            <h3>NLP & GenAI</h3>
            <p>LLMs, RAG, AI Agents, Transformers, BERT, LoRA/PEFT, Hugging Face, LangChain, LangGraph.</p>
          </div>
          <div className="card glass">
            <div className="card-icon"><Cloud size={28} /></div>
            <h3>MLOps & Cloud</h3>
            <p>Docker, Kubernetes, FastAPI, MLflow, CI/CD, AWS, GCP, Prometheus, Grafana, Langfuse.</p>
          </div>
          <div className="card glass">
            <div className="card-icon"><Server size={28} /></div>
            <h3>Data Engineering & BI</h3>
            <p>Airflow, Dagster, Spark, Kafka, PostgreSQL, Milvus, BigQuery, Tableau, Power BI.</p>
          </div>
          <div className="card glass">
            <div className="card-icon"><BarChart size={28} /></div>
            <h3>Data Science</h3>
            <p>Regression, Classification, Time Series, Clustering, Ensemble Methods, A/B Testing, Feature Engineering.</p>
          </div>
          <div className="card glass">
            <div className="card-icon"><Mic size={28} /></div>
            <h3>Speech AI</h3>
            <p>ASR, TTS, Voice Activity Detection, CTC Alignment, Speaker Diarization, Multimodal Processing.</p>
          </div>
          <div className="card glass">
            <div className="card-icon"><Wrench size={28} /></div>
            <h3>Software Engineering</h3>
            <p>FastAPI, Flask, REST APIs, Docker, GitHub Actions, CI/CD, Redis, PostgreSQL, MongoDB, Nginx.</p>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS SECTION ===== */}
      <section id="projects" className="section section-alt">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Production-grade AI systems from research to deployment
        </p>
        <div className="section-divider"></div>
        <div className="projects-grid">
          {projects.map(project => (
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
