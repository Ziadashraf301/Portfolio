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
    id: 'recommendation-engine',
    title: 'Recommendation Engine',
    category: 'Machine Learning',
    type: 'ai',
    shortDescription: 'Hybrid recommendation system combining collaborative filtering, content-based filtering, and embedding search.',
    description: 'Developed a hybrid recommendation engine integrating collaborative filtering, content-based filtering, and embedding-based semantic search. Built to serve personalized recommendations at scale with optimized retrieval and ranking pipelines.',
    tech: ['Python', 'Embeddings', 'Collaborative Filtering', 'Content-Based', 'FastAPI'],
    highlights: [
      'Hybrid approach combining multiple recommendation strategies',
      'Embedding-based semantic search for content discovery',
      'Scalable architecture for production workloads',
      'Personalized ranking pipeline with real-time updates'
    ]
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
  },
  {
    id: 'black-friday',
    title: 'Black Friday Analysis',
    category: 'Data Science & Analytics',
    type: 'ai',
    shortDescription: 'Statistical analysis of Black Friday transactions using ML algorithms to generate actionable marketing insights.',
    description: 'Comprehensive statistical analysis of Black Friday transaction data to generate actionable insights for marketing teams. Leverages machine learning algorithms including Random Forest and other ensemble methods for customer behavior prediction and segmentation.',
    tech: ['Python', 'scikit-learn', 'Random Forest', 'Pandas', 'Data Visualization'],
    highlights: [
      'Customer segmentation based on purchasing behavior',
      'Predictive modeling for transaction value estimation',
      'Marketing-actionable insights from transaction patterns',
      'Feature importance analysis for business strategy'
    ],
    github: 'https://github.com/Ziadashraf301/Black-Friday'
  }
];
