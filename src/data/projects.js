// `filters` drives the filter chips on the home page.
export const projectFilters = ['All', 'Production', 'GenAI & LLMs', 'ML & MLOps', 'Data Science', 'Data Engineering'];

export const projects = [
  {
    id: 'speech-ai-platform',
    title: 'Egyptian Arabic Speech Recognition',
    category: 'Production · Elshayeb',
    filters: ['Production', 'GenAI & LLMs', 'ML & MLOps'],
    metric: '8% macro WER',
    shortDescription: 'Production ASR system at Elshayeb for Egyptian Arabic video transcription, combining VAD, CTC forced alignment and a multimodal LLM.',
    description: 'Built at Elshayeb and used every day by the video editing team. Audio is split with voice activity detection, transcribed by a multimodal LLM and aligned word by word with CTC forced alignment, producing accurate timed subtitles for Egyptian Arabic content. This is company work, so the code is private.',
    tech: ['Python', 'Multimodal LLMs', 'VAD', 'CTC Forced Alignment', 'Gemini'],
    highlights: [
      '8% macro WER and 3% CER on Egyptian Arabic',
      'Cut manual transcription costs by ~66%',
      'Word-level timing with CTC forced alignment for subtitles',
      'Used internally by the company\'s video editing team'
    ]
  },
  {
    id: 'lead-retrieval',
    title: 'Multi-Tenant Lead Retrieval',
    category: 'Production · Elshayeb',
    filters: ['Production', 'GenAI & LLMs'],
    metric: 'Hybrid search + reranking',
    shortDescription: 'Two-stage search for a multi-tenant SaaS platform that matches each lead to the right client using hybrid search, reranking and a custom relevance score.',
    description: 'Built at Elshayeb for the company's multi-tenant SaaS lead platform. Every client (tenant) has its own questionnaire describing the leads it wants. The first stage retrieves candidate leads with hybrid search that combines BM25 keyword matching and dense embeddings; the second stage reranks them and applies a custom relevance scoring algorithm that compares each lead's answers with the tenant's questions. This replaced rigid hard filters and returns more relevant leads. This is company work, so the code is private.',
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
    metric: 'Structured LLM outputs',
    shortDescription: 'Gemini service that generates tailored onboarding questionnaires for each tenant, with Pydantic-validated outputs and Langfuse prompt management.',
    description: 'Built at Elshayeb to automate how new clients are onboarded to the lead platform. The service uses Gemini to generate an onboarding questionnaire tailored to each tenant's business. Outputs are forced into Pydantic schemas and generation is constrained to the tenant's context, so the questionnaires are consistent and safe to use directly in the product. Prompts are versioned in Langfuse, which is also used to track quality and cost. This is company work, so the code is private.',
    tech: ['Python', 'Gemini', 'Pydantic', 'Langfuse', 'Prompt Engineering'],
    highlights: [
      'Tenant-specific onboarding questionnaires generated automatically',
      'Pydantic structured outputs and context-constrained generation',
      'Prompt versioning and cost tracking with Langfuse',
      'Feeds the lead retrieval system with each tenant's criteria'
    ]
  },
  {
    id: 'telecopilot-ai',
    title: 'TeleCopilot AI',
    category: 'GenAI · RAG',
    filters: ['GenAI & LLMs'],
    metric: 'Context recall 0.87 (RAGAS)',
    shortDescription: 'Bilingual Arabic/English RAG copilot for telecom customer-service agents, with hybrid search, reranking, cited answers and a RAGAS evaluation suite.',
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
    metric: 'MRR 0.059 → 0.412 (6.9x)',
    shortDescription: 'Egyptian property search platform: Dagster scraping pipeline into ClickHouse, Milvus hybrid search with reranking, two-tier caching and RAGAS evaluation.',
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
    metric: '~70% lower P90 latency',
    shortDescription: 'Multi-agent platform that analyzes marketing documents with 9 parallel LangGraph agents, OCR, translation and automatic LLM failover.',
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
    metric: 'ONNX 14.2ms → 1.3ms',
    shortDescription: 'Retail ML platform on 550K+ transactions: LightGBM pricing, recommendations, customer personas, ONNX serving and a LangGraph shopping assistant.',
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
    metric: '0.065ms P50 inference',
    shortDescription: 'NYC taxi lakehouse with leak-free demand forecasting, drift-triggered retraining, sub-millisecond ONNX serving and an executive dashboard.',
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
    metric: '+31.9% depression recall',
    shortDescription: 'Depression detection, sentiment analysis and facial emotion recognition with LoRA fine-tuning and a full MLOps pipeline on AWS.',
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
    metric: 'Streaming + batch',
    shortDescription: 'Hybrid streaming and batch pipeline with Kafka, Flink, CDC, dbt marts, an Iceberg lakehouse and Spark ML customer segments for churn risk.',
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
    id: 'salesforce-databricks',
    title: 'Salesforce Lead Analytics on Databricks',
    category: 'Data Science · Databricks',
    filters: ['Data Science', 'Data Engineering'],
    metric: 'Markov-chain lead flow',
    shortDescription: 'Hourly Salesforce lead ingestion with Delta Live Tables and Markov-chain modeling of lead status transitions.',
    description: 'An hourly incremental pipeline that ingests Salesforce leads with Databricks Delta Live Tables into Delta Lake. It aggregates lead counts by status, captures every status change from the lead history, and models the transitions as a Markov chain in PySpark to estimate how leads move toward conversion. Results feed an interactive dashboard for the sales team.',
    tech: ['Databricks', 'Delta Live Tables', 'PySpark', 'Delta Lake', 'SQL', 'Markov Chains'],
    highlights: [
      'Hourly incremental ingestion with Delta Live Tables',
      'Markov-chain transition probabilities between lead statuses',
      'Hourly sales KPIs and an interactive dashboard'
    ],
    github: 'https://github.com/Ziadashraf301/Salesforce-Lead-Processing-with-Databricks'
  },
  {
    id: 'ai-data-science-lab',
    title: 'AI & Data Science Lab',
    category: 'Research · From Scratch',
    filters: ['Data Science', 'ML & MLOps'],
    metric: 'Algorithms from scratch',
    shortDescription: 'Open-source lab implementing ML algorithms from first principles (PCA, t-SNE, LDA/QDA, trees) plus a speech AI track from MFCCs to Whisper.',
    description: 'A research repository where I implement and explain core algorithms from first principles and compare them with library versions. It covers PCA (SVD and eigendecomposition), t-SNE in pure NumPy, probabilistic classifiers (LDA, QDA, Naive Bayes, logistic regression), tree ensembles (XGBoost, LightGBM, CatBoost), an NLP safety-classifier benchmark, and a speech emotion recognition track from classical audio features to CNNs, attention and SSL models such as Wav2Vec2, HuBERT, WavLM and Whisper.',
    tech: ['Python', 'NumPy', 'PyTorch', 'scikit-learn', 'Hugging Face', 'XGBoost', 'LightGBM'],
    highlights: [
      'PCA from scratch: 90% feature reduction (30 → 3) with under 1% accuracy loss',
      't-SNE in pure NumPy matching scikit-learn cluster separation',
      'Speech emotion recognition from MFCCs to Wav2Vec2, HuBERT, WavLM and Whisper',
      'Spam and jailbreak classifier benchmark (DeBERTa vs Gemini Flash-Lite)'
    ],
    github: 'https://github.com/Ziadashraf301/AI-Data-Science-Lab'
  },
  {
    id: 'bigmart-sales',
    title: 'BigMart Sales Prediction',
    category: 'Data Science · Regression',
    filters: ['Data Science'],
    metric: '1,559 products · 10 stores',
    shortDescription: 'Sales analysis and prediction for 1,559 products across 10 stores, from Excel exploration to reusable training and prediction scripts.',
    description: 'An end-to-end data science project that starts with Excel-based exploration and cleaning, then compares four regression models to predict product sales across 10 stores. The final pipeline is packaged as reusable train and predict scripts, with business insights on what drives sales.',
    tech: ['Python', 'pandas', 'scikit-learn', 'XGBoost', 'Excel'],
    highlights: [
      'Exploratory analysis and cleaning in Excel and pandas',
      'Four regression models compared; Random Forest best (test MAE ~756)',
      'Reusable train/predict scripts'
    ],
    github: 'https://github.com/Ziadashraf301/BigMart-Sales-Analysis-Prediction'
  },
  {
    id: 'customer-segmentation',
    title: 'Customer Segmentation (RFM)',
    category: 'Data Science · Clustering',
    filters: ['Data Science'],
    metric: 'RFM + K-Means personas',
    shortDescription: 'Grocery customer segmentation with RFM features, PCA and K-Means into actionable marketing personas.',
    description: 'Segments grocery store customers from historical purchases. Recency, frequency and monetary features are log-transformed and reduced with PCA, then clustered with K-Means. Three clusters were chosen for business use and turned into personas with marketing actions for each.',
    tech: ['Python', 'pandas', 'scikit-learn', 'PCA', 'K-Means'],
    highlights: [
      'RFM feature engineering with log transforms',
      'PCA + K-Means clustering with silhouette analysis',
      'Actionable personas for targeted marketing'
    ],
    github: 'https://github.com/Ziadashraf301/Customer-segmentation'
  }
];
