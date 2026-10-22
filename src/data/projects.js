// `filters` drives the filter chips on the home page.
// Projects without `github` are company work and show a "private" note instead.
export const projectFilters = ['All', 'Production', 'GenAI & LLMs', 'ML & MLOps', 'Data Science', 'Data Engineering'];

export const projects = [
  {
    id: 'speech-ai-platform',
    title: 'Egyptian Arabic Speech Recognition',
    category: 'Production · Elshayeb',
    filters: ['Production', 'GenAI & LLMs', 'ML & MLOps'],
    shortDescription: 'Transcribes Egyptian Arabic videos for the company’s editing team, using voice activity detection, CTC alignment and a multimodal LLM.',
    description: 'Built at Elshayeb and used every day by the video editing team. Audio is split with voice activity detection, transcribed by a multimodal LLM and aligned word by word with CTC forced alignment, producing accurate timed subtitles for Egyptian Arabic content.',
    tech: ['Python', 'Multimodal LLMs', 'VAD', 'CTC Forced Alignment', 'Gemini'],
    highlights: [
      '8% macro WER and 3% CER on Egyptian Arabic',
      'Cut manual transcription costs by ~66%',
      'Word-level timing with CTC forced alignment for subtitles',
      'Used internally by the company’s video editing team'
    ]
  },
  {
    id: 'lead-retrieval',
    title: 'Multi-Tenant Lead Retrieval',
    category: 'Production · Elshayeb',
    filters: ['Production', 'GenAI & LLMs'],
    shortDescription: 'Matches each lead to the right client on a multi-tenant SaaS platform, using hybrid search, reranking and a custom relevance score.',
    description: 'Built at Elshayeb for the company’s multi-tenant SaaS lead platform. Every client (tenant) has its own questionnaire describing the leads it wants. The first stage retrieves candidate leads with hybrid search that combines BM25 keyword matching and dense embeddings; the second stage reranks them and applies a custom relevance scoring algorithm that compares each lead’s answers with the tenant’s questions. This replaced rigid hard filters and returns more relevant leads.',
    tech: ['Python', 'Hybrid Search', 'BM25', 'Dense Embeddings', 'Reranking'],
    highlights: [
      'Two-stage retrieval: hybrid BM25 + dense search, then reranking',
      'Custom relevance scoring that matches lead answers to tenant questionnaires',
      'More accurate matches than the previous hard-filter baseline',
      'Multi-tenant design: each client gets results based on its own criteria'
    ]
  },
  {
    id: 'lead-qualification',
    title: 'AI Lead Qualification Service',
    category: 'Production · Elshayeb',
    filters: ['Production', 'GenAI & LLMs'],
    shortDescription: 'Uses Gemini to write onboarding questionnaires tailored to each client, with validated structured outputs and versioned prompts.',
    description: 'Built at Elshayeb to automate how new clients are onboarded to the lead platform. The service uses Gemini to generate an onboarding questionnaire tailored to each tenant’s business. Outputs are forced into Pydantic schemas and generation is constrained to the tenant’s context, so the questionnaires are consistent and safe to use directly in the product. Prompts are versioned in Langfuse, which is also used to track quality and cost.',
    tech: ['Python', 'Gemini', 'Pydantic', 'Langfuse', 'Prompt Engineering'],
    highlights: [
      'Tenant-specific onboarding questionnaires generated automatically',
      'Pydantic structured outputs and context-constrained generation',
      'Prompt versioning and cost tracking with Langfuse',
      'Feeds the lead retrieval system with each tenant’s criteria'
    ]
  },
  {
    id: 'sales-analytics',
    title: 'AI Sales Analytics & Voice Reports',
    category: 'Production · Elshayeb',
    filters: ['Production', 'GenAI & LLMs', 'Data Science'],
    shortDescription: 'Uses Gemini to review each sales rep’s performance and spot short-term trends, then delivers the summary as an automated voice report.',
    description: 'Built at Elshayeb for sales managers who review large teams. The service analyzes each sales representative’s performance with Gemini, identifies short-term performance trends, and writes a summary that is turned into an automated voice report with text-to-speech. Managers get a quick spoken briefing instead of going through every rep’s numbers.',
    tech: ['Python', 'Gemini', 'Text-to-Speech', 'Prompt Engineering'],
    highlights: [
      'Per-representative performance analysis with Gemini',
      'Short-term trend detection across the sales team',
      'Automated TTS voice reports for sales managers',
      'Less time spent reviewing large sales teams'
    ]
  },
  {
    id: 'sczone-port-analytics',
    title: 'SCZONE Port Analytics Platform',
    category: 'Production · ISFP',
    filters: ['Production', 'Data Engineering', 'Data Science'],
    shortDescription: 'Collects operational data from ports across Egypt into an Oracle warehouse and turns it into automated Tableau dashboards and cargo forecasts.',
    description: 'Built at ISFP for the Suez Canal Economic Zone (SCZONE). Alteryx workflows collect operational data from ports across Egypt into an Oracle data warehouse. Alteryx ETL pipelines then transform it into mart tables, and Tableau Prep flows turn the marts into Hyper extracts. Tableau Server dashboards give a statistical and historical view of port activity: vessel movements, passengers, cargo and containers, gates, trucks and invoices. Refreshes run automatically on a schedule, row-level security limits each user to their own data, and the dashboards are integrated into the client’s systems. The historical data also feeds forecasts of next month’s and next year’s cargo volumes with ARIMA and moving averages in Tableau.',
    tech: ['Alteryx', 'Oracle', 'SQL', 'Tableau Prep', 'Tableau Server', 'Hyper', 'ARIMA', 'Row-Level Security'],
    highlights: [
      'End-to-end pipeline: ports → Oracle warehouse → mart tables → Hyper extracts → Tableau Server',
      'Dashboards for vessels, passengers, cargo, containers, gates, trucks and invoices',
      'Scheduled automatic refreshes and row-level security with JWT Connected Apps',
      'Cargo volume forecasts for the next month and year with ARIMA and moving averages'
    ]
  },
  {
    id: 'alexandria-port-platform',
    title: 'Alexandria Port Operation Platform',
    category: 'Production · ISFP',
    filters: ['Production', 'Data Engineering'],
    shortDescription: 'Moves Alexandria Port’s dashboards to an open-source data stack, expected to save about $16K a year in license costs.',
    description: 'At ISFP we are moving Alexandria Port’s existing dashboards from the licensed stack (Alteryx and Tableau) to an open-source stack. ETL pipelines are rebuilt with Apache Hop and Python and saved as Parquet files that are queried with DuckDB. Dashboards run on Apache Superset with Redis and Celery, styled with custom HTML/CSS and JSON configuration, and integrated into the client’s systems. Everything runs in Docker on the client’s server.',
    tech: ['Apache Hop', 'Python', 'Parquet', 'DuckDB', 'Apache Superset', 'Redis', 'Celery', 'Docker', 'HTML/CSS'],
    highlights: [
      'Open-source stack: Apache Hop and Python ETL, Parquet and DuckDB, all on Docker',
      'Apache Superset with Redis and Celery, custom HTML/CSS styling and JSON configuration',
      'Dashboards integrated into the client’s systems',
      'Expected to save about $16K a year in license costs'
    ]
  },
  {
    id: 'telecopilot-ai',
    title: 'TeleCopilot AI',
    category: 'GenAI · RAG',
    filters: ['GenAI & LLMs'],
    shortDescription: 'Arabic/English RAG copilot that helps telecom customer-service agents find answers fast, with cited sources and a RAGAS evaluation.',
    description: 'An agent-assist copilot that answers customer-service questions from telecom knowledge bases in Arabic and English. Documents are chunked with LangChain splitters and indexed in Qdrant with hybrid dense + BM25 search fused by Reciprocal Rank Fusion, then reranked with Cohere. Gemini generates grounded answers with citations and a resolution status that tells the agent when to escalate to a human. The service is a tested FastAPI app traced with Langfuse, with GitHub Actions CI and a reproducible RAGAS evaluation notebook.',
    tech: ['Python', 'FastAPI', 'Qdrant', 'Cohere Embed + Rerank', 'Gemini', 'LangChain', 'Langfuse', 'RAGAS', 'Pytest', 'Docker', 'GitHub Actions'],
    highlights: [
      'Hybrid dense + BM25 retrieval in Qdrant with RRF fusion and Cohere rerank-v3.5',
      'RAGAS evaluation on a human-verified set: 0.87 context recall, 0.69 context precision, 100% source hit rate',
      'Cited answers with a resolution status for human escalation',
      'Langfuse tracing, Pytest suite and green GitHub Actions CI'
    ],
    github: 'https://github.com/Ziadashraf301/TeleCopilot-AI'
  },
  {
    id: 'real-estate-intelligence',
    title: 'Real Estate Intelligence System',
    category: 'GenAI · Search',
    filters: ['GenAI & LLMs', 'Data Engineering'],
    shortDescription: 'Search platform for Egyptian property listings that understands Arabic and English queries, from scraping pipeline to fast, cached search.',
    description: 'An AI-powered search platform for Egyptian real estate. A Dockerized Dagster pipeline scrapes and validates 10.9K+ listings into ClickHouse. Search combines LLM filter extraction, INT8-quantized multilingual-e5 embeddings, Milvus BM25 and an ONNX bge-reranker to handle dialectal Egyptian Arabic queries. A FastAPI layer with JWT/RBAC, rate limiting and a two-tier cache serves results, with MLflow tracing and RAGAS benchmarking. A Power BI dashboard covers market insights.',
    tech: ['Python', 'Dagster', 'ClickHouse', 'Milvus', 'ONNX', 'FastAPI', 'Redis', 'MLflow', 'RAGAS', 'Docker', 'Power BI'],
    highlights: [
      'MRR from 0.059 to 0.412 (6.9x) and NDCG@10 from 0.052 to 0.223 (4.3x) over a keyword baseline',
      'P50 latency from 11.6s to under 10ms with Redis exact-match + Milvus semantic caching',
      '94.0% data quality score with Pydantic validation on 10.9K+ listings',
      '82.1% answer relevancy in end-to-end RAGAS evaluation'
    ],
    github: 'https://github.com/Ziadashraf301/Realestate-llm-pipeline'
  },
  {
    id: 'contentlens-ai',
    title: 'ContentLens AI',
    category: 'GenAI · Multi-Agent',
    filters: ['GenAI & LLMs'],
    shortDescription: 'Team of AI agents that read, summarize, translate and analyze marketing documents in parallel, with automatic fallback between models.',
    description: 'A marketing document platform built on 9 specialized LangGraph agents that extract, summarize, translate and analyze uploaded documents in parallel. LangChain agents fail over automatically from a local Ollama model to Cohere, and outputs are checked with rule-based validation plus an LLM-as-a-judge step. The FastAPI backend handles PDF, DOCX, images and text with Tesseract OCR, is traced with Langfuse, tested with Pytest in GitHub Actions, and has a React + TypeScript front end.',
    tech: ['Python', 'LangGraph', 'LangChain', 'Ollama', 'Cohere', 'FastAPI', 'Tesseract OCR', 'Langfuse', 'React', 'TypeScript', 'AWS'],
    highlights: [
      '9 agents running 6 at a time, cutting end-to-end P90 latency by ~70%',
      '82.5% extraction quality with rule-based checks and LLM-as-a-judge',
      'Automatic Ollama-to-Cohere failover with retries',
      'Cost-efficient AWS EC2 proof of concept with no per-token API fees'
    ],
    github: 'https://github.com/Ziadashraf301/ContentLens_AI'
  },
  {
    id: 'black-friday',
    title: 'Black Friday Retail Intelligence',
    category: 'ML · MLOps',
    filters: ['ML & MLOps', 'Data Science', 'GenAI & LLMs'],
    shortDescription: 'Retail ML platform for personalized pricing, product recommendations and customer personas, with fast model serving and a shopping assistant.',
    description: 'A retail intelligence and personalization platform built on 550K+ Black Friday transactions. It combines a LightGBM personalized pricing engine, Apriori cross-sell rules, Item2Vec product similarity and 10 customer personas from hierarchical clustering, explained with SHAP and validated with Pandera. Models are tracked in MLflow with champion/challenger promotion and Evidently drift monitoring, served on ONNX Runtime behind async FastAPI with Redis caching, and exposed through a LangGraph shopping assistant with guardrails.',
    tech: ['Python', 'LightGBM', 'scikit-learn', 'SHAP', 'ONNX Runtime', 'MLflow', 'Evidently', 'FastAPI', 'Redis', 'PostgreSQL', 'LangGraph', 'Gemini', 'Locust'],
    highlights: [
      'Inference latency from 14.2ms to 1.3ms with ONNX Runtime',
      'Apriori cross-sell, Item2Vec similarity and 10 SHAP-explained customer personas',
      'MLflow champion/challenger promotion with Evidently drift monitoring',
      'Chatbot under 500ms with 0.00% errors at 50 concurrent users (Locust)'
    ],
    github: 'https://github.com/Ziadashraf301/Black-Friday'
  },
  {
    id: 'taxitrack',
    title: 'TaxiTrack',
    category: 'MLOps · Forecasting',
    filters: ['ML & MLOps', 'Data Science', 'Data Engineering'],
    shortDescription: 'Forecasts NYC taxi demand by zone and hour, with an automated data pipeline, drift monitoring and automatic retraining.',
    description: 'An end-to-end data and MLOps platform on NYC TLC taxi data. Monthly Airflow pipelines load parquet files into MinIO and model them with dbt into ClickHouse marts. A LightGBM zone-hour demand forecaster uses a 168-hour lookback buffer to prevent temporal leakage. MLflow manages champion and production aliases, and Evidently detects covariate, concept and data-quality drift that triggers retraining in Airflow. Models are compiled to ONNX for serving, and NetworkX graph analysis finds the busiest mobility corridors.',
    tech: ['Python', 'Airflow', 'dbt', 'ClickHouse', 'MinIO', 'LightGBM', 'ONNX', 'MLflow', 'Evidently', 'FastAPI', 'Streamlit', 'NetworkX', 'Docker'],
    highlights: [
      'Leak-free zone-hour demand forecasting with temporal validation',
      'Drift detection with Evidently that triggers Airflow retraining',
      'ONNX serving at 0.065ms P50 and ~8,900 requests/second',
      'PageRank and betweenness analysis over 61,000+ transit flows'
    ],
    github: 'https://github.com/Ziadashraf301/TaxiTrack'
  },
  {
    id: 'mental-health-analysis',
    title: 'AI-Powered Mental Health Analysis',
    category: 'NLP · Deep Learning',
    filters: ['ML & MLOps', 'Data Science'],
    shortDescription: 'Detects signs of depression in text, sentiment in tweets and emotions in faces, served as cloud APIs with a full MLOps pipeline.',
    description: 'An end-to-end mental health analysis system with three ML services: depression detection with BERT fine-tuned using LoRA, tweet sentiment analysis, and facial emotion recognition with a CNN. Training pipelines are orchestrated with Apache Airflow and tracked with MLflow and WandB, and the models are served by Dockerized FastAPI microservices deployed on AWS with GitHub Actions CI/CD.',
    tech: ['PyTorch', 'Hugging Face', 'LoRA', 'scikit-learn', 'TensorFlow', 'FastAPI', 'Airflow', 'MLflow', 'Docker', 'AWS', 'PostgreSQL'],
    highlights: [
      'Depression detection recall (TPR) up 31.9% with BERT + LoRA',
      'Emotion detection CNN at 87% accuracy',
      'API response time from 0.8s to 0.5s with async I/O and startup model loading',
      '3 training pipelines orchestrated with Airflow; CI/CD to AWS ECR and EC2'
    ],
    github: 'https://github.com/Ziadashraf301/Mental-exploring'
  },
  {
    id: 'customer-analytics-pipeline',
    title: 'Customer Analytics & Churn Pipeline',
    category: 'Data Engineering · ML',
    filters: ['Data Engineering', 'Data Science'],
    shortDescription: 'Real-time and batch pipeline that tracks customer behavior and groups customers by churn risk for targeted marketing.',
    description: 'A hybrid pipeline for customer analytics and churn. Simulated website visits and purchases stream through Kafka and are aggregated in real time with Flink. dbt builds staging, intermediate and mart layers, and Debezium CDC syncs Postgres to ClickHouse. Data is exported to Iceberg tables on MinIO, where Spark ML K-Means segments customers for churn-risk and targeted campaigns. Airflow orchestrates the jobs and Superset shows real-time and historical KPIs.',
    tech: ['Kafka', 'Flink', 'Debezium', 'PostgreSQL', 'ClickHouse', 'dbt', 'MinIO', 'Iceberg', 'Spark ML', 'Airflow', 'Superset', 'Docker'],
    highlights: [
      'Real-time event processing with Kafka and Flink',
      'Incremental dbt models and Debezium CDC into ClickHouse',
      'Spark ML K-Means customer segments on an Iceberg lakehouse',
      'Superset dashboards for real-time and historical KPIs'
    ],
    github: 'https://github.com/Ziadashraf301/Customer_Analytics_Churn_Pipeline'
  },
  {
    id: 'ai-data-science-lab',
    title: 'AI & Data Science Lab',
    category: 'Research · From Scratch',
    filters: ['Data Science', 'ML & MLOps'],
    shortDescription: 'Open-source lab where I build core ML algorithms from first principles and study speech AI models from MFCCs to Whisper.',
    description: 'A research repository where I implement and explain core algorithms from first principles and compare them with library versions. It covers PCA (SVD and eigendecomposition), t-SNE in pure NumPy, probabilistic classifiers (LDA, QDA, Naive Bayes, logistic regression), tree ensembles (XGBoost, LightGBM, CatBoost), an NLP safety-classifier benchmark, and a speech emotion recognition track from classical audio features to CNNs, attention and SSL models such as Wav2Vec2, HuBERT, WavLM and Whisper.',
    tech: ['Python', 'NumPy', 'PyTorch', 'scikit-learn', 'Hugging Face', 'XGBoost', 'LightGBM'],
    highlights: [
      'PCA from scratch: 90% feature reduction (30 → 3) with under 1% accuracy loss',
      't-SNE in pure NumPy matching scikit-learn cluster separation',
      'Speech emotion recognition from MFCCs to Wav2Vec2, HuBERT, WavLM and Whisper',
      'Spam and jailbreak classifier benchmark (DeBERTa vs Gemini Flash-Lite)'
    ],
    github: 'https://github.com/Ziadashraf301/AI-Data-Science-Lab'
  }
];
