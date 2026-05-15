import React, { useEffect, useState } from 'react';
import {
  Mail,
  ChevronDown,
  Database,
  Terminal,
  BarChart3,
  Award,
  ExternalLink,
  Briefcase,
  GraduationCap,
  CheckCircle2,
  Zap,
  Workflow,
  Cloud,
  LineChart,
  FileDown,
  ArrowRight
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState({});

  const publicAsset = (fileName) => `${import.meta.env.BASE_URL}${fileName}`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.03,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'services', label: 'What I Do' },
    { id: 'projects', label: 'Projects' },
    { id: 'stack', label: 'Stack' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  const services = [
    {
      icon: Workflow,
      title: 'Workflow Automation',
      description:
        'I redesign repetitive reporting, validation, and follow-up workflows into scheduled, auditable systems that reduce manual effort and shorten response cycles.',
      points: ['SLA monitoring', 'Escalation bots', 'Automated reporting']
    },
    {
      icon: Cloud,
      title: 'Cloud Data Engineering',
      description:
        'I separate analytical storage from operational serving layers, using tools like BigQuery, Redis, FastAPI, Docker, and GCP to make data faster and more reliable.',
      points: ['ETL pipelines', 'Caching layers', 'Microservices']
    },
    {
      icon: LineChart,
      title: 'Analytics & Decision Systems',
      description:
        'I build dashboards, metric logic, forecasts, and reconciliation checks that help teams detect risk, explain variance, and act before problems escalate.',
      points: ['Metabase dashboards', 'Forecasting', 'Reconciliation']
    }
  ];

  const technicalStack = {
    'Data & Cloud Engineering': [
      'GCP Compute Engine',
      'Cloud Scheduler',
      'SQL',
      'BigQuery',
      'PostgreSQL',
      'Python',
      'Redis',
      'dbt',
      'Metabase'
    ],
    'Architecture & Automation': [
      'FastAPI',
      'Microservices',
      'Docker',
      'Docker Compose',
      'uv Python Packaging',
      'Google Apps Script',
      'REST APIs'
    ],
    'Business Operations': [
      'Variance Analysis',
      'Root Cause Analysis',
      'Financial Reconciliation',
      'Demand Forecasting',
      'SLA Monitoring',
      'Inventory Audit'
    ]
  };

  const projects = [
    {
      id: 1,
      company: 'Watu Credit',
      title: 'WhatsApp FO Verifier Microservice',
      type: 'Cloud Microservice / Internal System',
      challenge:
        'Verifying Field Officers via WhatsApp required instant responses, but direct BigQuery lookups introduced latency, timeout risk, and unnecessary query costs.',
      solution:
        'Built a FastAPI microservice deployed on GCP Compute Engine with Redis as the low-latency serving layer. Automated hourly BigQuery-to-Redis syncing using Python, uv, Docker, and dual-key indexing by phone number and user ID.',
      role:
        'Designed the service architecture, built the API layer, automated the cache refresh workflow, and packaged the service for repeatable deployment.',
      businessValue:
        'Reduced verification friction, removed dependence on live analytical queries, and created a reusable pattern for fast operational lookups across markets.',
      impactContext:
        '<5ms refers to Redis lookup time at the serving layer, excluding WhatsApp provider and network latency. $0 real-time BigQuery cost means verification requests are served from Redis rather than triggering request-time BigQuery reads.',
      visualProof:
        'The linked case study includes a sanitized process map showing BigQuery source data, Python sync logic, Redis caching, FastAPI verification, and WhatsApp response flow.',
      proofItems: ['Process map', 'Cache architecture', 'Measurement context'],
      impact: [
        { metric: '< 5ms', label: 'Lookup latency' },
        { metric: '$0', label: 'Real-time BQ cost' },
        { metric: '3+', label: 'Markets supported' }
      ],
      tech: ['GCP', 'FastAPI', 'Redis', 'BigQuery', 'Docker', 'Python'],
      linkText: 'View Case Study',
      link: 'https://github.com/MwangiWaraga/whatsapp-fo-verifier-case-study'
    },
    {
      id: 2,
      company: 'Watu Credit',
      title: 'Automated Validation Pipelines & Escalation Systems',
      type: 'Operations Automation / Analytics Pipeline',
      challenge:
        'Critical turnaround times were delayed by manual extraction, spreadsheet errors, and disconnected operational metrics.',
      solution:
        'Engineered an automated workflow using Python, BigQuery, and Google Apps Script. Replaced manual imports with parameterized SQL scripts and built a FastAPI-based WhatsApp escalation chatbot.',
      role:
        'Mapped the manual process, automated recurring validation tasks, built escalation logic, and improved visibility into operational bottlenecks.',
      businessValue:
        'Improved speed, reduced avoidable errors, and helped teams act on SLA risks before they became larger operational delays.',
      impactContext:
        'The 90% error reduction compares recurring manual reporting and validation issues before and after automated checks. Hours → minutes reflects moving repeated extraction and validation work into reusable SQL, Python, and Apps Script workflows.',
      visualProof:
        'The linked case study includes a sanitized process map showing source data, BigQuery logic, Python validation, Google Sheets/App Script updates, and escalation flow.',
      proofItems: ['Process map', 'Validation flow', 'Escalation logic'],
      impact: [
        { metric: '90%', label: 'Error reduction' },
        { metric: 'Hours → Mins', label: 'Turnaround time' },
        { metric: 'Real-time', label: 'SLA visibility' }
      ],
      tech: ['Python', 'BigQuery', 'Google Apps Script', 'FastAPI', 'SQL'],
      linkText: 'View Case Study',
      link: 'https://github.com/MwangiWaraga/validation-escalation-pipelines-case-study'
    },
    {
      id: 3,
      company: 'mPharma',
      title: 'Inventory Audit Automation & Forecasting',
      type: 'Supply Chain Analytics / Forecasting',
      challenge:
        'Stock variances and inaccurate supply/demand forecasts were disrupting planning across a complex medtech supply chain.',
      solution:
        'Collated historical sales data, built SQL-based supply and demand models, automated inventory audit workflows using Python, and created self-service Metabase dashboards.',
      role:
        'Owned data preparation, variance diagnosis, dashboarding, and recurring audit reporting for procurement and operations stakeholders.',
      businessValue:
        'Improved inventory decision-making by making stock movements, variances, and demand signals easier to detect and explain.',
      impactContext:
        '+20% forecast accuracy and -15% stock variance were tracked through recurring inventory reporting, stock-take reconciliation, and forecast review cycles.',
      visualProof:
        'Public documentation is not added yet because the work was based on internal operational data. The project is currently summarized as a sanitized business-impact case study.',
      proofItems: ['Forecasting model', 'Variance analysis', 'Audit workflow'],
      impact: [
        { metric: '+20%', label: 'Forecast accuracy' },
        { metric: '-15%', label: 'Stock variance' },
        { metric: '10 hrs/wk', label: 'Time saved' }
      ],
      tech: ['SQL', 'Python', 'Metabase', 'Data Modeling', 'Forecasting'],
      linkText: 'View Case Study',
      link: 'https://github.com/MwangiWaraga/inventory-audit-forecasting-case-study'
    },
    {
      id: 4,
      company: 'Jakan Enterprise',
      title: 'E-Commerce Data Architecture',
      type: 'Data Architecture / Business Intelligence',
      challenge:
        'Managing dropshipping inventory, ad spend, and sales data across multiple storefronts lacked centralized visibility.',
      solution:
        'Initiated an enterprise data architecture project with ETL pipelines for multi-channel storefront data, BigQuery as the warehouse, dbt for transformations, and Metabase for reporting.',
      role:
        'Designed the analytics foundation, defined the core reporting model, and connected operational metrics into a single reporting layer.',
      businessValue:
        'Created a scalable foundation for monitoring product performance, ad spend efficiency, and multi-channel sales activity.',
      impactContext:
        'Impact is currently measured as an analytics foundation: unified data structure, automated reporting direction, and improved visibility across storefront, inventory, and ad-spend metrics.',
      visualProof:
        'A public repository can be added later when the data model, sample data, and transformation logic are ready to share safely.',
      proofItems: ['ETL design', 'Analytics model', 'BI foundation'],
      impact: [
        { metric: 'Unified', label: 'Multi-channel data' },
        { metric: 'Automated', label: 'Analytics foundation' },
        { metric: 'Live', label: 'Ad-spend tracking' }
      ],
      tech: ['BigQuery', 'dbt', 'Metabase', 'ETL', 'Analytics Engineering'],
      linkText: 'View Case Study',
      link: 'https://github.com/MwangiWaraga/ecommerce-data-architecture-case-study'
    }
  ];

  const experience = [
    {
      role: 'Process Analyst',
      company: 'Watu Credit',
      period: 'Jan 2025 – Present',
      description:
        'Bridging the gap between infrastructure and daily workflows by building cloud-native microservices, BigQuery pipelines, and automation systems that reduce operational bottlenecks.',
      highlight:
        'Recognized as Employee of the Month in Jan 2026 for driving operational automation.',
      location: 'Nairobi, Kenya'
    },
    {
      role: 'Data Analyst',
      company: 'mPharma',
      period: 'Jun 2024 – Jan 2025',
      description:
        'Led monthly stock-take reconciliations, built supply/demand models, and partnered with procurement teams to diagnose the root causes of supply chain discrepancies.',
      location: 'Nairobi, Kenya'
    },
    {
      role: 'Accountant',
      company: 'Cyntiac Digital Solutions',
      period: 'Mar 2019 – Nov 2023',
      description:
        'Conducted monthly variance analysis, diagnosed cost and process bottlenecks, and presented recommendations for stronger financial and operational controls.',
      highlight:
        'Automated financial reporting in Advanced Excel, cutting monthly reporting cycle time by 60%.',
      location: 'Nairobi, Kenya'
    }
  ];

  const education = [
    {
      title: 'BSc Economics & Statistics',
      subtitle: 'University of Nairobi'
    },
    {
      title: 'CPA Part II Candidate',
      subtitle: 'NIBS College'
    }
  ];

  const certifications = [
    {
      title: 'Data Engineer Associate',
      issuer: 'DataCamp',
      link: 'https://www.datacamp.com/certificate/DEA0013616783195'
    },
    {
      title: 'Data Scientist Associate',
      issuer: 'DataCamp',
      link: 'https://www.datacamp.com/certificate/DSA0015394234622'
    },
    {
      title: 'Data Analyst',
      issuer: 'DataCamp',
      link: 'https://www.datacamp.com/certificate/DA0022025807264'
    },
    {
      title: 'BigQuery for Data Analysts',
      issuer: 'Google Cloud',
      link: 'https://www.skills.google/public_profiles/9d35c423-e509-46ae-bd0f-0af045ee1f40'
    }
  ];

  return (
    <div className="portfolio">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Fira+Code:wght@400;500;600&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --bg-primary: #020617;
          --bg-secondary: #0f172a;
          --bg-tertiary: #1e293b;
          --text-primary: #f8fafc;
          --text-secondary: #94a3b8;
          --accent-primary: #38bdf8;
          --accent-secondary: #0ea5e9;
          --accent-glow: rgba(56, 189, 248, 0.15);
          --border-color: #334155;
          --success-glow: rgba(56, 189, 248, 0.16);
          --container-width: 1140px;
        }

        html {
          scroll-behavior: smooth;
          width: 100%;
          overflow-x: hidden;
        }

        body {
          width: 100%;
          min-width: 0;
          background: var(--bg-primary);
          color: var(--text-primary);
          font-family: 'Inter', sans-serif;
          line-height: 1.6;
          overflow-x: hidden;
        }

        button,
        a {
          -webkit-tap-highlight-color: transparent;
        }

        .portfolio {
          position: relative;
          z-index: 1;
          width: 100%;
          min-height: 100vh;
          overflow-x: hidden;
          background:
            radial-gradient(circle at top center, rgba(56, 189, 248, 0.08), transparent 35%),
            var(--bg-primary);
        }

        .bg-grid {
          position: fixed;
          inset: 0;
          background-size: 40px 40px;
          background-image:
            linear-gradient(to right, rgba(51, 65, 85, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(51, 65, 85, 0.2) 1px, transparent 1px);
          mask-image: linear-gradient(to bottom, transparent, black 12%, black 88%, transparent);
          -webkit-mask-image: linear-gradient(to bottom, transparent, black 12%, black 88%, transparent);
          z-index: 0;
          pointer-events: none;
        }

        nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: rgba(2, 6, 23, 0.88);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border-color);
          z-index: 1000;
          padding: 1rem 0;
        }

        .nav-content {
          width: min(var(--container-width), calc(100% - 3rem));
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
        }

        .brand-name {
          color: var(--text-primary);
          text-decoration: none;
          font-size: 1rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          white-space: nowrap;
          transition: color 0.3s;
        }

        .brand-name:hover {
          color: var(--accent-primary);
        }

        .nav-links {
          display: flex;
          gap: 1.45rem;
          list-style: none;
          align-items: center;
          flex-wrap: nowrap;
        }

        .nav-links a {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
          transition: color 0.3s;
          white-space: nowrap;
        }

        .nav-links a:hover,
        .nav-links a.active-nav-link {
          color: var(--accent-primary);
        }

        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          padding: 8rem 0 4rem;
          overflow: hidden;
        }

        .hero-glow {
          position: absolute;
          top: 16%;
          left: 50%;
          transform: translateX(-50%);
          width: 60vw;
          height: 60vh;
          background: radial-gradient(circle, rgba(56,189,248,0.14) 0%, rgba(2,6,23,0) 70%);
          z-index: 0;
          pointer-events: none;
        }

        .hero-container {
          width: min(var(--container-width), calc(100% - 3rem));
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 1.55fr) minmax(280px, 0.75fr);
          align-items: center;
          gap: 3rem;
          position: relative;
          z-index: 2;
        }

        .hero-content {
          min-width: 0;
          animation: fadeInUp 1s ease-out;
        }

        .hero-label {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Fira Code', monospace;
          font-size: 0.78rem;
          color: var(--accent-primary);
          background: var(--accent-glow);
          padding: 0.5rem 1.1rem;
          border-radius: 20px;
          border: 1px solid rgba(56, 189, 248, 0.3);
          margin-bottom: 1.5rem;
          white-space: nowrap;
        }

        .hero-label span {
          width: 8px;
          height: 8px;
          background: var(--accent-primary);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--accent-primary);
          animation: pulse 2s infinite;
          flex-shrink: 0;
        }

        .hero h1 {
          font-size: clamp(3.2rem, 5.4vw, 4.5rem);
          font-weight: 800;
          margin-bottom: 0.5rem;
          line-height: 1.02;
          letter-spacing: -0.055em;
          white-space: nowrap;
        }

        .hero-subtitle {
          font-size: clamp(1.05rem, 1.7vw, 1.32rem);
          color: var(--text-secondary);
          margin-bottom: 1.1rem;
          font-weight: 500;
          white-space: nowrap;
        }

        .hero-subtitle span {
          color: var(--accent-primary);
          margin: 0 0.28rem;
        }

        .offerings-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.7rem;
          margin-bottom: 2rem;
          max-width: 650px;
        }

        .offering-tag {
          font-family: 'Fira Code', monospace;
          font-size: 0.78rem;
          color: var(--accent-primary);
          border: 1px solid var(--border-color);
          background: rgba(30, 41, 59, 0.76);
          padding: 0.35rem 0.8rem;
          border-radius: 999px;
          white-space: nowrap;
        }

        .hero-description {
          font-size: 1.06rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          max-width: 650px;
          line-height: 1.75;
        }

        .hero-stats {
          display: flex;
          gap: 2.4rem;
          margin-bottom: 2.4rem;
          padding-bottom: 2.3rem;
          border-bottom: 1px solid var(--border-color);
          max-width: 650px;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1;
          margin-bottom: 0.3rem;
          font-family: 'Fira Code', monospace;
        }

        .stat-label {
          font-size: 0.76rem;
          color: var(--accent-primary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          white-space: nowrap;
        }

        .hero-cta {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          padding: 0.9rem 1.5rem;
          border-radius: 8px;
          font-weight: 800;
          font-size: 0.95rem;
          text-decoration: none;
          transition: all 0.3s;
          border: none;
          cursor: pointer;
          white-space: nowrap;
        }

        .cta-primary {
          background: var(--text-primary);
          color: var(--bg-primary);
        }

        .cta-primary:hover {
          transform: translateY(-2px);
          background: var(--accent-primary);
        }

        .cta-secondary {
          background: transparent;
          color: var(--text-primary);
          border: 1px solid var(--border-color);
        }

        .cta-secondary:hover {
          transform: translateY(-2px);
          border-color: var(--text-primary);
          background: rgba(248, 250, 252, 0.05);
        }

        .hero-image-container {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          animation: fadeInUp 1.2s ease-out;
          min-width: 0;
        }

        .hero-image-wrapper {
          position: relative;
          width: min(310px, 100%);
          aspect-ratio: 1;
          border-radius: 50%;
          padding: 8px;
          background: linear-gradient(135deg, var(--accent-primary), var(--bg-primary));
          box-shadow: 0 0 40px rgba(56, 189, 248, 0.2);
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          border: 4px solid var(--bg-primary);
          background-color: var(--bg-tertiary);
        }

        .floating-badge {
          position: absolute;
          background: rgba(15, 23, 42, 0.94);
          border: 1px solid var(--border-color);
          padding: 0.6rem 1rem;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-primary);
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
          white-space: nowrap;
        }

        .badge-1 {
          top: 10%;
          right: -13%;
          animation: float 4s ease-in-out infinite;
        }

        .badge-2 {
          bottom: 15%;
          left: -9%;
          animation: float 5s ease-in-out infinite reverse;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          cursor: pointer;
          animation: bounce 2s infinite;
          z-index: 2;
          background: none;
          border: none;
        }

        .section {
          padding: 7rem 0;
          width: min(var(--container-width), calc(100% - 3rem));
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .section-header {
          margin-bottom: 4rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .section-header.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .section-label {
          font-family: 'Fira Code', monospace;
          font-size: 0.9rem;
          color: var(--accent-primary);
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }

        .section-label::after {
          content: '';
          height: 1px;
          width: 60px;
          background: var(--accent-primary);
          opacity: 0.5;
        }

        .section-title {
          font-size: clamp(2.2rem, 4vw, 3rem);
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.03em;
          line-height: 1.1;
        }

        .section-intro {
          color: var(--text-secondary);
          max-width: 760px;
          margin-top: 1rem;
          font-size: 1.05rem;
          line-height: 1.75;
        }

        .stack-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
          gap: 1.5rem;
        }

        .stack-category,
        .service-card {
          background: rgba(15, 23, 42, 0.62);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 2.2rem;
          transition: all 0.4s;
          opacity: 0;
          transform: translateY(30px);
          backdrop-filter: blur(10px);
          min-width: 0;
        }

        .stack-category.visible,
        .service-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .stack-category:hover,
        .service-card:hover {
          border-color: rgba(56, 189, 248, 0.5);
          transform: translateY(-5px);
          box-shadow: 0 10px 30px -10px rgba(2, 6, 23, 0.5);
        }

        .stack-icon {
          width: 50px;
          height: 50px;
          background: var(--bg-tertiary);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          color: var(--accent-primary);
          border: 1px solid rgba(56, 189, 248, 0.2);
        }

        .stack-category h3,
        .service-card h3 {
          font-size: 1.3rem;
          margin-bottom: 1rem;
          font-weight: 800;
          line-height: 1.2;
        }

        .service-description {
          color: var(--text-secondary);
          margin-bottom: 1.4rem;
          line-height: 1.7;
        }

        .stack-items {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        .stack-item {
          background: var(--bg-primary);
          color: var(--text-secondary);
          padding: 0.5rem 1rem;
          border-radius: 6px;
          font-size: 0.84rem;
          border: 1px solid var(--border-color);
          font-family: 'Fira Code', monospace;
          transition: all 0.3s;
        }

        .stack-item:hover {
          border-color: var(--accent-primary);
          color: var(--accent-primary);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        .project-card {
          background: rgba(15, 23, 42, 0.62);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 2.6rem;
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.6s ease-out;
          backdrop-filter: blur(10px);
          min-width: 0;
        }

        .project-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .project-card:hover {
          border-color: var(--accent-primary);
        }

        .project-top-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 2rem;
          margin-bottom: 1.5rem;
        }

        .project-company {
          font-family: 'Fira Code', monospace;
          font-size: 0.9rem;
          color: var(--accent-primary);
          margin-bottom: 0.4rem;
        }

        .project-title {
          font-size: clamp(1.45rem, 3vw, 1.85rem);
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.02em;
          line-height: 1.15;
        }

        .project-type {
          display: inline-flex;
          margin-top: 0.9rem;
          color: var(--text-secondary);
          border: 1px solid var(--border-color);
          border-radius: 999px;
          padding: 0.3rem 0.8rem;
          font-size: 0.82rem;
        }

        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 800;
          transition: color 0.3s;
          white-space: nowrap;
        }

        .project-link:hover {
          color: var(--accent-primary);
        }

        .project-link-muted {
          color: var(--text-secondary);
          border: 1px solid var(--border-color);
          border-radius: 999px;
          padding: 0.35rem 0.8rem;
          cursor: default;
          opacity: 0.72;
        }

        .project-link-muted:hover {
          color: var(--text-secondary);
        }

        .project-content-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(280px, 1fr);
          gap: 2.5rem;
          margin-top: 2rem;
        }

        .project-section-label {
          font-size: 0.78rem;
          color: var(--accent-primary);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 0.7rem;
          font-weight: 800;
        }

        .project-section-content {
          color: var(--text-secondary);
          line-height: 1.72;
          margin-bottom: 1.6rem;
        }

        .project-impact {
          display: grid;
          grid-template-columns: repeat(3, minmax(90px, 1fr));
          gap: 1rem;
          padding: 1.4rem;
          background: rgba(2, 6, 23, 0.74);
          border-radius: 12px;
          border: 1px solid var(--border-color);
        }

        .impact-metric {
          font-family: 'Fira Code', monospace;
          font-size: clamp(1.05rem, 1.6vw, 1.3rem);
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 0.2rem;
          line-height: 1.2;
          overflow-wrap: normal;
          word-break: keep-all;
        }

        .impact-label {
          font-size: 0.76rem;
          color: var(--accent-primary);
          line-height: 1.35;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border-color);
        }

        .tech-tag {
          font-family: 'Fira Code', monospace;
          font-size: 0.78rem;
          background: var(--bg-tertiary);
          color: var(--text-primary);
          padding: 0.4rem 0.8rem;
          border-radius: 6px;
        }
       .project-proof-grid {
         display: grid;
         grid-template-columns: repeat(3, minmax(0, 1fr));
         gap: 1rem;
         margin-top: 1.4rem;
       }
        .proof-card {
          margin-top: 1.4rem;
          padding: 1rem;
          border-radius: 12px;
          border: 1px solid rgba(56, 189, 248, 0.18);
          background: rgba(56, 189, 248, 0.05);
        }

        .proof-card strong {
          display: block;
          color: var(--text-primary);
          margin-bottom: 0.4rem;
        }

        .proof-card p {
          color: var(--text-secondary);
          font-size: 0.92rem;
          line-height: 1.65;
        }

        .evidence-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 0.9rem;
        }

        .evidence-pill {
          font-family: 'Fira Code', monospace;
          font-size: 0.72rem;
          color: var(--accent-primary);
          background: rgba(2, 6, 23, 0.72);
          border: 1px solid rgba(56, 189, 248, 0.18);
          border-radius: 999px;
          padding: 0.35rem 0.65rem;
        }

        .resume-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.45fr) minmax(300px, 0.9fr);
          gap: 3.5rem;
        }

        .experience-timeline {
          position: relative;
          padding-left: 2rem;
        }

        .experience-timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 1px;
          background: var(--border-color);
        }

        .experience-item {
          position: relative;
          margin-bottom: 3.5rem;
          opacity: 0;
          transform: translateX(-20px);
          transition: all 0.6s ease-out;
        }

        .experience-item.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .experience-item::before {
          content: '';
          position: absolute;
          left: -2.35rem;
          top: 0.5rem;
          width: 12px;
          height: 12px;
          background: var(--bg-primary);
          border-radius: 50%;
          border: 2px solid var(--accent-primary);
        }

        .experience-period {
          font-family: 'Fira Code', monospace;
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
        }

        .experience-role {
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .experience-company {
          font-size: 1rem;
          color: var(--accent-primary);
          margin-bottom: 1rem;
        }

        .experience-description {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .experience-highlight {
          display: inline-flex;
          align-items: flex-start;
          gap: 0.6rem;
          background: rgba(56, 189, 248, 0.05);
          padding: 0.8rem 1rem;
          border-radius: 8px;
          color: var(--text-primary);
          font-size: 0.9rem;
          border: 1px solid rgba(56, 189, 248, 0.1);
        }

        .highlight-icon {
          color: var(--accent-primary);
          flex-shrink: 0;
          margin-top: 0.1rem;
        }

        .side-cards-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          min-width: 0;
        }

        .side-card {
          background: rgba(15, 23, 42, 0.62);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 2rem;
          backdrop-filter: blur(10px);
        }

        .side-card-header {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
          font-weight: 800;
          font-size: 1.1rem;
        }

        .side-card-icon {
          color: var(--accent-primary);
        }

        .side-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .side-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.8rem;
        }

        .list-bullet {
          color: var(--accent-primary);
          margin-top: 0.2rem;
          flex-shrink: 0;
        }

        .list-content strong {
          display: block;
          color: var(--text-primary);
          font-size: 0.95rem;
          margin-bottom: 0.2rem;
        }

        .list-content span {
          color: var(--text-secondary);
          font-size: 0.85rem;
        }

        .cert-link {
          color: var(--text-primary);
          text-decoration: none;
          transition: color 0.3s;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
        }

        .cert-link:hover {
          color: var(--accent-primary);
        }

        .contact-card {
          width: 100%;
          background: linear-gradient(135deg, rgba(56, 189, 248, 0.1), rgba(15, 23, 42, 0.7));
          border: 1px solid rgba(56, 189, 248, 0.24);
          border-radius: 20px;
          padding: 2.7rem;
          backdrop-filter: blur(10px);
          overflow: hidden;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(300px, 0.8fr);
          gap: 2rem;
          align-items: center;
        }

        .contact-note {
          color: var(--text-secondary);
          line-height: 1.75;
          margin-bottom: 2rem;
          max-width: 660px;
          font-size: 1.05rem;
        }

        .availability-card {
          background: rgba(2, 6, 23, 0.62);
          border: 1px solid var(--border-color);
          border-radius: 14px;
          padding: 1.25rem;
        }

        .availability-item {
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: start;
          gap: 0.75rem;
          color: var(--text-secondary);
          padding: 0.9rem 0;
          border-bottom: 1px solid rgba(51, 65, 85, 0.55);
          line-height: 1.55;
        }

        .availability-item:first-child {
          padding-top: 0;
        }

        .availability-item:last-child {
          padding-bottom: 0;
          border-bottom: none;
        }

        .availability-icon {
          color: var(--accent-primary);
          margin-top: 0.15rem;
          flex-shrink: 0;
          filter: drop-shadow(0 0 8px var(--success-glow));
        }

        .footer {
          border-top: 1px solid var(--border-color);
          padding: 2.4rem 2rem;
          text-align: center;
          color: var(--text-secondary);
          background: var(--bg-secondary);
          position: relative;
          z-index: 2;
        }

        .footer p {
          margin-bottom: 1rem;
          font-size: 0.9rem;
        }

        .footer-social {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
        }

        .footer-social a {
          color: var(--text-secondary);
          transition: color 0.3s, transform 0.3s;
        }

        .footer-social a:hover {
          color: var(--accent-primary);
          transform: translateY(-2px);
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(56, 189, 248, 0.4); }
          70% { box-shadow: 0 0 0 6px rgba(56, 189, 248, 0); }
          100% { box-shadow: 0 0 0 0 rgba(56, 189, 248, 0); }
        }

        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(10px); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @media (max-width: 1120px) {
          .nav-links {
            gap: 1rem;
          }

          .nav-links a {
            font-size: 0.85rem;
          }

          .hero-container {
            grid-template-columns: minmax(0, 1.45fr) minmax(250px, 0.75fr);
            gap: 2rem;
          }

          .hero h1 {
            font-size: clamp(3rem, 5vw, 4rem);
          }

          .hero-subtitle {
            font-size: 1.08rem;
          }

          .hero-image-wrapper {
            width: 280px;
          }
        }

        @media (max-width: 980px) {
          .nav-links {
            display: none;
          }

          .hero {
            min-height: auto;
            padding-top: 7.5rem;
          }

          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2.5rem;
          }

          .hero-image-container {
            order: -1;
          }

          .hero h1,
          .hero-subtitle {
            white-space: normal;
          }

          .hero-label {
            white-space: normal;
            justify-content: center;
          }

          .offerings-row,
          .hero-cta {
            justify-content: center;
          }

          .hero-description {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-stats {
            margin: 0 auto 2.4rem;
            justify-content: center;
          }

          .badge-1 { right: -4%; }
          .badge-2 { left: -4%; }

          .project-content-grid,
          .project-proof-grid,
          .resume-layout,
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          }
        }

        @media (max-width: 768px) {
          :root {
            --container-width: 100%;
          }

          .nav-content,
          .hero-container,
          .section {
            width: min(100% - 2rem, 100%);
          }

          .brand-name {
            font-size: 0.98rem;
          }

          .section {
            padding: 5rem 0;
          }

          .hero {
            padding-top: 7rem;
            padding-bottom: 4rem;
          }

          .hero h1 {
            font-size: 2.75rem;
            letter-spacing: -0.045em;
          }

          .hero-subtitle {
            font-size: 1.02rem;
          }

          .hero-description {
            font-size: 1rem;
          }

          .hero-image-wrapper {
            width: 240px;
          }

          .hero-stats {
            flex-direction: column;
            gap: 1.4rem;
            align-items: center;
            text-align: center;
          }

          .project-card,
          .contact-card,
          .stack-category,
          .service-card {
            padding: 1.6rem;
          }

          .side-card {
            padding: 1.6rem;
          }

          .project-top-row {
            flex-direction: column;
            gap: 1.2rem;
          }

          .project-impact {
            grid-template-columns: 1fr;
          }

          .hero-cta {
            flex-direction: column;
            width: 100%;
          }

          .cta-button {
            width: 100%;
          }

          .floating-badge,
          .scroll-indicator {
            display: none;
          }
        }

        @media (max-width: 420px) {
          .hero h1 {
            font-size: 2.35rem;
          }

          .hero-label {
            font-size: 0.68rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .project-card,
          .contact-card,
          .stack-category,
          .service-card,
          .side-card {
            padding: 1.25rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation: none !important;
            transition: none !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>

      <div className="bg-grid" />

      <nav aria-label="Primary navigation">
        <div className="nav-content">
          <a
            href="#hero"
            className="brand-name"
            onClick={(event) => {
              event.preventDefault();
              scrollToSection('hero');
            }}
          >
            Jackson Mwangi
          </a>

          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={activeSection === item.id ? 'active-nav-link' : ''}
                  onClick={(event) => {
                    event.preventDefault();
                    scrollToSection(item.id);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section id="hero" className="hero">
        <div className="hero-glow" />

        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-label">
              <span /> OPEN FOR DATA, ANALYTICS & AUTOMATION ROLES
            </div>

            <h1>Jackson Mwangi</h1>

            <div className="hero-subtitle">
              Data & Operations Analyst <span>|</span> Analytics Engineer
            </div>

            <div className="offerings-row">
              <span className="offering-tag">Cloud Architecture</span>
              <span className="offering-tag">Pipeline Automation</span>
              <span className="offering-tag">Advanced Analytics</span>
              <span className="offering-tag">Process Intelligence</span>
            </div>

            <p className="hero-description">
              I solve expensive business problems with data systems. My work turns messy operational workflows into automated, reliable, decision-ready pipelines across fintech, medtech, and e-commerce environments.
            </p>

            <div className="hero-stats" aria-label="Professional highlights">
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">90%</div>
                <div className="stat-label">Error Reduction</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3+</div>
                <div className="stat-label">Markets Supported</div>
              </div>
            </div>

            <div className="hero-cta">
              <a
                href="#projects"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection('projects');
                }}
                className="cta-button cta-primary"
              >
                View My Work <ArrowRight size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/waraga/"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button cta-secondary"
              >
                <FaLinkedin size={18} /> LinkedIn
              </a>

              <a
                href="https://github.com/MwangiWaraga/"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button cta-secondary"
              >
                <FaGithub size={18} /> GitHub
              </a>
            </div>
          </div>

          <div className="hero-image-container">
            <div className="hero-image-wrapper">
              <img src={publicAsset('profile.jpg')} alt="Jackson Mwangi" className="hero-image" />

              <div className="floating-badge badge-1">
                <Database size={16} color="var(--accent-primary)" /> GCP / BigQuery
              </div>

              <div className="floating-badge badge-2">
                <Zap size={16} color="var(--accent-primary)" /> Process Automation
              </div>
            </div>
          </div>
        </div>

        <button
          className="scroll-indicator"
          onClick={() => scrollToSection('services')}
          aria-label="Scroll to what I do section"
        >
          <span style={{ fontSize: '0.75rem', letterSpacing: '0.1em', fontFamily: 'Fira Code' }}>
            SCROLL
          </span>
          <ChevronDown size={20} />
        </button>
      </section>

      <section id="services" className="section">
        <div className={`section-header ${isVisible.services ? 'visible' : ''}`}>
          <div className="section-label">01. WHAT I DO</div>
          <h2 className="section-title">I Build Systems That Remove Bottlenecks</h2>
          <p className="section-intro">
            I focus on operational systems where poor data flow costs time and money: slow lookups, repeated manual checks, delayed escalations, weak metric logic, and reporting workflows that are hard to trust.
          </p>
        </div>

        <div className="stack-grid">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className={`service-card ${isVisible.services ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className="stack-icon">
                  <Icon size={24} />
                </div>

                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>

                <div className="stack-items">
                  {service.points.map((point) => (
                    <span key={point} className="stack-item">{point}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="projects" className="section">
        <div className={`section-header ${isVisible.projects ? 'visible' : ''}`}>
          <div className="section-label">02. FEATURED WORK</div>
          <h2 className="section-title">Business Problems Solved With Data Systems</h2>
          <p className="section-intro">
            These projects show the pattern of my work: diagnose the bottleneck, automate the workflow, serve reliable data, make the result measurable, and document the tradeoffs clearly.
          </p>
        </div>
      
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`project-card ${isVisible.projects ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="project-top-row">
                <div>
                  <div className="project-company">{project.company}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-type">{project.type}</span>
                </div>
      
                {project.link ? (
                  <a
                    href={project.link}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} project link`}
                  >
                    {project.linkText} <ExternalLink size={16} />
                  </a>
                ) : (
                  <span className="project-link project-link-muted">
                    {project.linkText}
                  </span>
                )}
              </div>
      
              <div className="project-content-grid">
                <div>
                  <div className="project-section-label">The Challenge</div>
                  <div className="project-section-content">{project.challenge}</div>
      
                  <div className="project-section-label">The Solution</div>
                  <div className="project-section-content">{project.solution}</div>
      
                  <div className="project-section-label">My Role</div>
                  <div className="project-section-content">{project.role}</div>
                </div>
      
                <div>
                  <div className="project-section-label">Measurable Impact</div>
      
                  <div className="project-impact">
                    {project.impact.map((item) => (
                      <div key={`${project.id}-${item.label}`}>
                        <div className="impact-metric">{item.metric}</div>
                        <div className="impact-label">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
      
              <div className="project-proof-grid">
                <div className="proof-card">
                  <strong>Business Value</strong>
                  <p>{project.businessValue}</p>
                </div>
      
                <div className="proof-card">
                  <strong>How Impact Was Measured</strong>
                  <p>{project.impactContext}</p>
                </div>
      
                <div className="proof-card">
                  <strong>Visual Proof</strong>
                  <p>{project.visualProof}</p>
      
                  <div className="evidence-pills">
                    {project.proofItems.map((item) => (
                      <span key={`${project.id}-${item}`} className="evidence-pill">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
      
              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section id="stack" className="section">
        <div className={`section-header ${isVisible.stack ? 'visible' : ''}`}>
          <div className="section-label">03. TECHNICAL STACK</div>
          <h2 className="section-title">Tools I Use To Ship The Work</h2>
          <p className="section-intro">
            My stack combines analytics, data engineering, cloud infrastructure, and business operations — useful for roles that need both technical execution and process understanding.
          </p>
        </div>

        <div className="stack-grid">
          {Object.entries(technicalStack).map(([category, skills], index) => (
            <div
              key={category}
              className={`stack-category ${isVisible.stack ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="stack-icon">
                {category === 'Data & Cloud Engineering' && <Database size={24} />}
                {category === 'Architecture & Automation' && <Terminal size={24} />}
                {category === 'Business Operations' && <BarChart3 size={24} />}
              </div>

              <h3>{category}</h3>

              <div className="stack-items">
                {skills.map((skill) => (
                  <span key={skill} className="stack-item">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="section">
        <div className={`section-header ${isVisible.experience ? 'visible' : ''}`}>
          <div className="section-label">04. HISTORY</div>
          <h2 className="section-title">Experience First, Credentials Second</h2>
          <p className="section-intro">
            The work leads. My background combines finance, operations, analytics, and engineering — with certifications supporting the technical stack behind the projects.
          </p>
        </div>

        <div className="resume-layout">
          <div className="experience-timeline">
            {experience.map((exp, index) => (
              <div
                key={`${exp.company}-${exp.role}`}
                className={`experience-item ${isVisible.experience ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className="experience-period">{exp.period}</div>
                <div className="experience-role">{exp.role}</div>
                <div className="experience-company">{exp.company} • {exp.location}</div>
                <p className="experience-description">{exp.description}</p>

                {exp.highlight && (
                  <div className="experience-highlight">
                    <Award size={18} className="highlight-icon" />
                    <div>{exp.highlight}</div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="side-cards-container">
            <div className="side-card">
              <div className="side-card-header">
                <GraduationCap size={20} className="side-card-icon" /> Education
              </div>

              <ul className="side-list">
                {education.map((item) => (
                  <li key={item.title}>
                    <CheckCircle2 size={16} className="list-bullet" />
                    <div className="list-content">
                      <strong>{item.title}</strong>
                      <span>{item.subtitle}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="side-card">
              <div className="side-card-header">
                <Briefcase size={20} className="side-card-icon" /> Supporting Certifications
              </div>

              <ul className="side-list">
                {certifications.map((cert) => (
                  <li key={cert.title}>
                    <CheckCircle2 size={16} className="list-bullet" />
                    <div className="list-content">
                      <strong>
                        <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
                          {cert.title} <ExternalLink size={12} />
                        </a>
                      </strong>
                      <span>{cert.issuer}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className={`section-header ${isVisible.contact ? 'visible' : ''}`}>
          <div className="section-label">05. CONTACT</div>
          <h2 className="section-title">Let’s Build Better Data Systems</h2>
        </div>

        <div className="contact-card">
          <div className="contact-grid">
            <div>
              <p className="contact-note">
                I am open to Data Analyst, Analytics Engineer, Data Engineer, and Operations Automation roles — especially where data, cloud systems, and business workflows meet.
              </p>

              <div className="hero-cta">
                <a href="mailto:jackmwangu@gmail.com" className="cta-button cta-primary">
                  <Mail size={18} /> Email Me
                </a>

                <a
                  href={publicAsset('Jackson-Mwangi-Resume.pdf')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button cta-secondary"
                >
                  <FileDown size={18} /> Download Resume
                </a>

                <a
                  href="https://github.com/MwangiWaraga/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button cta-secondary"
                >
                  <FaGithub size={18} /> View GitHub
                </a>
              </div>
            </div>

            <div className="availability-card" aria-label="Availability summary">
              <div className="availability-item">
                <CheckCircle2 size={18} className="availability-icon" />
                <span>Based in Nairobi, Kenya</span>
              </div>

              <div className="availability-item">
                <CheckCircle2 size={18} className="availability-icon" />
                <span>Open to data and automation roles</span>
              </div>

              <div className="availability-item">
                <CheckCircle2 size={18} className="availability-icon" />
                <span>Strong fit for fintech, operations, and supply-chain teams</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Jackson Mwangi.</p>

        <div className="footer-social">
          <a
            href="https://www.linkedin.com/in/waraga/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href="https://github.com/MwangiWaraga/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <FaGithub size={20} />
          </a>

          <a href="mailto:jackmwangu@gmail.com" aria-label="Send email">
            <Mail size={20} />
          </a>
        </div>
      </footer>
    </div>
  );
}