export const projects = [
  {
    id: 'contentlens-ai',
    title: 'ContentLens AI',
    category: 'AI & Generative AI',
    type: 'ai',
    shortDescription: 'Multi-agent SaaS platform that processes marketing documents using 9 parallel LangGraph agents with OCR, translation, and automatic LLM fallback.',
    description: 'An intelligent, multi-agent conversational SaaS platform built to integrate with CRM systems. Processes marketing documents through 9 LangGraph-orchestrated agents running in parallel with automatic Ollama-to-Cohere fallback. Features FastAPI backend with OCR support, multilingual translation, multi-format handling, and Langfuse observability.',
    tech: ['Python', 'FastAPI', 'LangChain', 'LangGraph', 'Qdrant', 'AWS', 'React', 'Docker', 'Redis'],
    highlights: [
      'Sub-3 minute response times under load (~70% latency reduction)',
      '82.5% extraction quality and 99% workflow reliability',
      'Langfuse observability for real-time performance monitoring',
      'Zero LLM API costs through cost-optimized AWS infrastructure'
    ],
    github: 'https://github.com/Ziadashraf301/ContentLens_AI'
  },
  {
    id: 'real-estate-intelligence',
    title: 'Real Estate Intelligence',
    category: 'Data Engineering & AI',
    type: 'ai',
    shortDescription: 'End-to-end ETL pipeline scraping 9K+ Egyptian property records into BigQuery, with a semantic search RAG system achieving <1s latency.',
    description: 'AI-powered Egyptian real estate search platform combining web scraping, vector search, and conversational AI. Built a Dockerized Dagster pipeline ingesting 9K+ property records into BigQuery. Preprocessed Arabic ads and indexed them in Milvus with multilingual embeddings. Flask-based RAG system with Gemini 2.0 Flash for property recommendations.',
    tech: ['Python', 'Docker', 'Milvus', 'BigQuery', 'Dagster', 'Gemini', 'Flask', 'Power BI'],
    highlights: [
      '<1s search latency and 2-4s end-to-end response time',
      '92% data quality with Pydantic validation',
      '6-page Power BI dashboard with executive insights',
      '100% pipeline automation with scheduled daily runs'
    ],
    github: 'https://github.com/Ziadashraf301/Realestate-llm-pipeline'
  },
  {
    id: 'mental-health-analysis',
    title: 'Mental Health AI',
    category: 'Machine Learning & MLOps',
    type: 'ai',
    shortDescription: 'Depression detection, sentiment analysis, and emotion recognition system with full MLOps pipeline deployed on AWS.',
    description: 'End-to-end mental health analysis system featuring three ML services: depression detection (BERT + LoRA fine-tuning), sentiment analysis, and emotion detection from facial images. Includes Apache Airflow orchestration, MLflow experiment tracking, CI/CD via GitHub Actions, and Dockerized FastAPI microservices deployed on AWS EC2.',
    tech: ['PyTorch', 'TensorFlow', 'MLflow', 'Airflow', 'FastAPI', 'AWS', 'Docker', 'PostgreSQL'],
    highlights: [
      'Improved depression detection (TPR) by 31.9% with LoRA fine-tuning',
      'Trained 2 CNN models for facial emotion recognition (inference <2s)',
      'Full CI/CD pipeline with GitHub Actions → ECR → EC2',
      'Orchestrated 3 ML training pipelines with Apache Airflow'
    ],
    github: 'https://github.com/Ziadashraf301/Mental-exploring'
  },
  {
    id: 'speech-ai-platform',
    title: 'Speech AI Platform',
    category: 'AI & Speech Processing',
    type: 'ai',
    shortDescription: 'Production speech AI system with automatic speech recognition (ASR), text-to-speech (TTS), and voice activity detection.',
    description: 'Built a production-grade Speech AI platform at Elshayeb featuring ASR, TTS, voice activity detection, and speaker alignment using CTC. Designed scalable FastAPI microservices serving real-time speech processing APIs, containerized with Docker and deployed on AWS.',
    tech: ['Python', 'FastAPI', 'ASR', 'TTS', 'CTC Alignment', 'Docker', 'AWS'],
    highlights: [
      'Real-time ASR with low-latency transcription',
      'Text-to-Speech synthesis with natural voice quality',
      'Voice Activity Detection for clean audio processing',
      'Speaker alignment using CTC for accurate timing'
    ]
  },
  {
    id: 'black-friday',
    title: 'Black Friday Sales Prediction & MLOps Engine',
    category: 'Machine Learning & MLOps',
    type: 'ai',
    shortDescription: 'Production MLOps platform featuring ONNX C++ model serving, persistent Redis caching, hybrid recommendation engine, and Gower customer personas.',
    description: 'An enterprise-grade MLOps and real-time personalization platform built on 550,000+ retail transactions. Integrates sub-millisecond ONNX C++ inference microservices, a hybrid recommendation engine combining association rules and vector embeddings, Gower customer segmentation, MLflow experiment tracking, and an interactive Reflex Python web application.',
    tech: ['Python', 'FastAPI', 'ONNX Runtime', 'Redis', 'MLflow', 'Scikit-Learn', 'LightGBM', 'Reflex', 'Docker'],
    highlights: [
      'Sub-millisecond ONNX C++ model serving with persistent Redis caching (>94% latency reduction)',
      'Hybrid recommendation engine combining Apriori association rules, Item2Vec embeddings, and PageRank',
      'Hierarchical customer segmentation clustering 5,800+ profiles into 10 empirical behavioral personas',
      'Automated pipeline orchestration with MLflow model registry and Evidently AI drift monitoring',
      '0.00% error rate under Locust load testing with 50+ req/sec total platform throughput'
    ],
    github: 'https://github.com/Ziadashraf301/Black-Friday'
  },
  {
    id: 'taxitrack',
    title: 'TaxiTrack',
    category: 'Data Engineering & ML',
    type: 'ai',
    shortDescription: 'Full-stack data platform combining modern data engineering with machine learning to transform NYC taxi data into business intelligence.',
    description: 'A full-stack data platform that combines modern data engineering practices with advanced machine learning to transform NYC taxi trip data into actionable business intelligence. Features automated data pipelines, predictive models, and interactive analytics dashboards.',
    tech: ['Python', 'Data Engineering', 'Machine Learning', 'Analytics', 'Dashboards'],
    highlights: [
      'End-to-end data pipeline from raw NYC taxi data to insights',
      'ML models for trip prediction and demand forecasting',
      'Interactive analytics dashboards for business intelligence',
      'Modern data engineering best practices'
    ],
    github: 'https://github.com/Ziadashraf301/TaxiTrack'
  }
];
