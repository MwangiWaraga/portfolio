import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, ChevronDown, Database, Terminal, BarChart3, Award, Download, ExternalLink, Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const technicalStack = {
    'Data Engineering': ['sql (BigQuery, PostgreSQL)', 'Python', 'dbt', 'Looker Studio', 'Metabase', 'REST APIs'],
    'Automation & Scripting': ['Google Apps Script', 'FastAPI', 'FlaskAPI', 'Docker', 'Advanced Excel Logic'],
    'Business Operations': ['Variance Analysis', 'Root Cause Analysis', 'Financial Reconciliation', 'Demand Forecasting', 'SLA Monitoring']
  };

  const projects = [
    {
      id: 1,
      company: 'Watu Credit',
      title: 'Automated Validation Pipelines & Escalation Systems',
      challenge: 'Critical turnaround times were delayed by manual data extraction, error-prone spreadsheets, and disconnected operational metrics.',
      solution: 'Engineered an end-to-end automated pipeline using Python, BigQuery, and Google Apps Script. Replaced manual imports with parameterized sql scripts and built a FastAPI-based WhatsApp escalation chatbot.',
      impact: [
        { metric: '90%', label: 'Error Reduction' },
        { metric: 'Hours → Mins', label: 'Turnaround Time' },
        { metric: 'Real-time', label: 'SLA Visibility' }
      ],
      tech: ['Python', 'BigQuery', 'Google Apps Script', 'FastAPI'],
      linkText: 'View Architecture'
    },
    {
      id: 2,
      company: 'mPharma',
      title: 'Inventory Audit Automation & Forecasting',
      challenge: 'Operational stock variances and inaccurate supply/demand forecasts were disrupting the complex medtech supply chain.',
      solution: 'Collated historical sales data to build robust sql-based supply and demand models. Engineered automated inventory audit workflows using Python and designed self-service Metabase dashboards.',
      impact: [
        { metric: '+20%', label: 'Forecast Accuracy' },
        { metric: '-15%', label: 'Stock Variance' },
        { metric: '10 hrs/wk', label: 'Time Saved' }
      ],
      tech: ['sql', 'Python', 'Metabase', 'Data Modeling'],
      linkText: 'View Case Study'
    },
    {
      id: 3,
      company: 'Jakan Enterprise',
      title: 'E-Commerce Data Architecture',
      challenge: 'Managing dropshipping inventory and sales data across multiple storefronts (Jakan Phone Store, Jakan Collection) lacked centralized visibility.',
      solution: 'Initiated an enterprise data architecture project. Built ETL pipelines to ingest multi-channel storefront data into BigQuery, utilized dbt for data transformations, and visualized metrics via Metabase.',
      impact: [
        { metric: 'Unified', label: 'Multi-Channel Data' },
        { metric: 'Automated', label: 'Analytics Foundation' },
        { metric: 'Real-time', label: 'Ad-Spend Tracking' }
      ],
      tech: ['BigQuery', 'dbt', 'Metabase', 'ETL'],
      linkText: 'View Repository'
    }
  ];

  const experience = [
    {
      role: 'Process Analyst',
      company: 'Watu Credit',
      period: 'Jan 2025 – Present',
      description: 'Bridging the gap between heavy infrastructure and daily workflows. Developing BigQuery pipelines and custom automation scripts to eliminate operational bottlenecks.',
      highlight: 'Recognized as Employee of the Month (Jan 2026) for driving operational automation.',
      location: 'Nairobi, Kenya'
    },
    {
      role: 'Data Analyst',
      company: 'mPharma',
      period: 'Jun 2024 – Jan 2025',
      description: 'Led monthly stock-take reconciliations, built robust supply/demand models, and partnered with procurement to diagnose root causes of supply chain discrepancies.',
      location: 'Nairobi, Kenya'
    },
    {
      role: 'Accountant',
      company: 'Cyntiac Digital Solutions',
      period: 'Mar 2019 – Nov 2023',
      description: 'Conducted rigorous monthly variance analysis (Actuals vs. Budget) to diagnose operational bottlenecks and presented actionable cost-saving recommendations.',
      highlight: 'Automated financial reporting in Advanced Excel, cutting the monthly reporting cycle time by 60%.',
      location: 'Nairobi, Kenya'
    }
  ];

  return (
    <div className="portfolio">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Fira+Code:wght@400;500&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --bg-primary: #020617; /* Slate 950 */
          --bg-secondary: #0f172a; /* Slate 900 */
          --bg-tertiary: #1e293b; /* Slate 800 */
          --text-primary: #f8fafc;
          --text-secondary: #94a3b8;
          --accent-primary: #38bdf8; /* Sky 400 */
          --accent-secondary: #0ea5e9; /* Sky 500 */
          --accent-glow: rgba(56, 189, 248, 0.15);
          --border-color: #334155;
          --gradient-start: #38bdf8;
          --gradient-end: #3b82f6;
        }

        body {
          background: var(--bg-primary);
          color: var(--text-primary);
          font-family: 'Inter', sans-serif;
          line-height: 1.6;
          overflow-x: hidden;
        }

        /* Data Matrix Background Pattern */
        .bg-grid {
          position: absolute;
          inset: 0;
          background-size: 40px 40px;
          background-image: linear-gradient(to right, rgba(51, 65, 85, 0.2) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(51, 65, 85, 0.2) 1px, transparent 1px);
          mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent);
          z-index: 0;
        }

        .portfolio {
          position: relative;
          z-index: 1;
        }

        /* Navigation */
        nav {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(2, 6, 23, 0.85);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border-color);
          z-index: 1000;
          padding: 1.25rem 0;
        }

        .nav-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-family: 'Fira Code', monospace;
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--accent-primary);
          letter-spacing: -0.02em;
        }

        .logo span {
          color: var(--text-primary);
        }

        .nav-links {
          display: flex;
          gap: 2.5rem;
          list-style: none;
        }

        .nav-links a {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          transition: color 0.3s;
        }

        .nav-links a:hover {
          color: var(--accent-primary);
        }

        /* Hero Section */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 8rem 2rem 4rem;
          overflow: hidden;
        }

        .hero-glow {
          position: absolute;
          top: 20%;
          left: 50%;
          transform: translateX(-50%);
          width: 60vw;
          height: 60vh;
          background: radial-gradient(circle, rgba(56,189,248,0.15) 0%, rgba(2,6,23,0) 70%);
          z-index: 0;
          pointer-events: none;
        }

        .hero-content {
          max-width: 900px;
          position: relative;
          z-index: 2;
          animation: fadeInUp 1s ease-out;
        }

        .hero-label {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Fira Code', monospace;
          font-size: 0.8rem;
          color: var(--accent-primary);
          background: var(--accent-glow);
          padding: 0.5rem 1.2rem;
          border-radius: 20px;
          border: 1px solid rgba(56, 189, 248, 0.3);
          margin-bottom: 2rem;
        }

        .hero-label span {
          width: 8px;
          height: 8px;
          background: var(--accent-primary);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--accent-primary);
          animation: pulse 2s infinite;
        }

        .hero h1 {
          font-size: clamp(3rem, 6vw, 5rem);
          font-weight: 700;
          margin-bottom: 1rem;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .hero-subtitle {
          font-size: clamp(1.2rem, 2vw, 1.6rem);
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          font-weight: 400;
        }

        .hero-subtitle span {
          color: var(--accent-primary);
        }

        .hero-description {
          font-size: 1.15rem;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          max-width: 750px;
          line-height: 1.8;
        }

        .hero-cta {
          display: flex;
          gap: 1.2rem;
          flex-wrap: wrap;
          margin-bottom: 4rem;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 1rem 2rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
          transition: all 0.3s;
          border: none;
          cursor: pointer;
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
          border-color: var(--text-primary);
          background: rgba(248, 250, 252, 0.05);
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
        }

        /* General Section Styling */
        .section {
          padding: 8rem 2rem;
          max-width: 1200px;
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
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.02em;
        }

        /* Technical Stack */
        .stack-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }

        .stack-category {
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 2.5rem;
          transition: all 0.4s;
          opacity: 0;
          transform: translateY(30px);
          backdrop-filter: blur(10px);
        }

        .stack-category.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .stack-category:hover {
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

        .stack-category h3 {
          font-size: 1.3rem;
          margin-bottom: 1.5rem;
          font-weight: 600;
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
          font-size: 0.9rem;
          border: 1px solid var(--border-color);
          font-family: 'Fira Code', monospace;
          transition: all 0.3s;
        }

        .stack-item:hover {
          border-color: var(--accent-primary);
          color: var(--accent-primary);
        }

        /* Projects */
        .projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }

        .project-card {
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 3rem;
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.6s ease-out;
          backdrop-filter: blur(10px);
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
          margin-bottom: 1.5rem;
        }

        .project-company {
          font-family: 'Fira Code', monospace;
          font-size: 0.9rem;
          color: var(--accent-primary);
          margin-bottom: 0.5rem;
        }

        .project-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .project-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          transition: color 0.3s;
        }

        .project-link:hover {
          color: var(--accent-primary);
        }

        .project-content-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 3rem;
          margin-top: 2rem;
        }

        .project-section-label {
          font-size: 0.85rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.8rem;
          font-weight: 600;
        }

        .project-section-content {
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .project-impact {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          padding: 1.5rem;
          background: var(--bg-primary);
          border-radius: 12px;
          border: 1px solid var(--border-color);
        }

        .impact-metric {
          font-family: 'Fira Code', monospace;
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.2rem;
        }

        .impact-label {
          font-size: 0.8rem;
          color: var(--accent-primary);
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
          font-size: 0.8rem;
          background: var(--bg-tertiary);
          color: var(--text-primary);
          padding: 0.4rem 0.8rem;
          border-radius: 6px;
        }

        /* Experience & Education Grid Layout */
        .resume-layout {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 4rem;
        }

        /* Experience Timeline */
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
          font-weight: 600;
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

        /* Ed/Certs Cards */
        .side-cards-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .side-card {
          background: rgba(15, 23, 42, 0.6);
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
          font-weight: 600;
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

        /* Certificate Link Hover Effect */
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

        /* Footer */
        .footer {
          border-top: 1px solid var(--border-color);
          padding: 3rem 2rem;
          text-align: center;
          color: var(--text-secondary);
          background: var(--bg-secondary);
        }

        .footer p {
          margin-bottom: 1rem;
        }

        .footer-social {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
        }

        .footer-social a {
          color: var(--text-secondary);
          transition: color 0.3s;
        }

        .footer-social a:hover {
          color: var(--accent-primary);
        }

        /* Animations */
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

        /* Responsive */
        @media (max-width: 968px) {
          .project-content-grid, .resume-layout {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        @media (max-width: 768px) {
          .nav-links { display: none; }
          .hero h1 { font-size: 2.5rem; }
          .project-card { padding: 2rem; }
          .project-impact { grid-template-columns: 1fr; }
          .hero-cta { flex-direction: column; }
          .cta-button { width: 100%; justify-content: center; }
        }
      `}</style>

      {/* Background Matrix Effect */}
      <div className="bg-grid"></div>

      {/* Navigation */}
      <nav>
        <div className="nav-content">
          <div className="logo">&lt;JM<span>.data</span>/&gt;</div>
          <ul className="nav-links">
            <li><a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>Home</a></li>
            <li><a href="#stack" onClick={(e) => { e.preventDefault(); scrollToSection('stack'); }}>Stack</a></li>
            <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a></li>
            <li><a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>Experience</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-glow"></div>
        <div className="hero-content">
          <div className="hero-label">
            <span></span> OPEN FOR OPPORTUNITIES
          </div>
          <h1>Jackson Mwangi.</h1>
          <div className="hero-subtitle">Data Analyst <span>|</span> Analytics Engineer <span>|</span> Data Engineer</div>
          <p className="hero-description">
            Results-driven data professional with 5+ years of experience solving complex operational problems in high-growth fintech, supply chain, and asset-financing environments. I specialize in bridging the gap between heavy data infrastructure and daily workflows to turn messy data into dependable systems.
          </p>
          
          <div className="hero-cta">
            <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} className="cta-button cta-primary">
              View My Work
            </a>
            <a href="https://www.linkedin.com/in/waraga/" target="_blank" rel="noopener noreferrer" className="cta-button cta-secondary">
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a href="https://github.com/MwangiWaraga/" target="_blank" rel="noopener noreferrer" className="cta-button cta-secondary">
              <Github size={18} />
              GitHub
            </a>
            <a href="mailto:jackmwangu@gmail.com" className="cta-button cta-secondary">
              <Mail size={18} />
              Email
            </a>
          </div>
        </div>
        
        <div className="scroll-indicator" onClick={() => scrollToSection('stack')}>
          <span style={{ fontSize: '0.75rem', letterSpacing: '0.1em', fontFamily: 'Fira Code' }}>SCROLL</span>
          <ChevronDown size={20} />
        </div>
      </section>

      {/* Technical Stack */}
      <section id="stack" className="section">
        <div className={`section-header ${isVisible.stack ? 'visible' : ''}`}>
          <div className="section-label">01. CAPABILITIES</div>
          <h2 className="section-title">Technical Stack</h2>
        </div>

        <div className="stack-grid">
          {Object.entries(technicalStack).map(([category, skills], index) => (
            <div 
              key={category} 
              className={`stack-category ${isVisible.stack ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="stack-icon">
                {category === 'Data Engineering' && <Database size={24} />}
                {category === 'Automation & Scripting' && <Terminal size={24} />}
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

      {/* Projects */}
      <section id="projects" className="section">
        <div className={`section-header ${isVisible.projects ? 'visible' : ''}`}>
          <div className="section-label">02. WORK</div>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card ${isVisible.projects ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="project-top-row">
                <div>
                  <div className="project-company">{project.company}</div>
                  <h3 className="project-title">{project.title}</h3>
                </div>
                <a href="#" className="project-link">
                  {project.linkText} <ExternalLink size={16} />
                </a>
              </div>

              <div className="project-content-grid">
                <div>
                  <div className="project-section-label">The Challenge</div>
                  <div className="project-section-content">{project.challenge}</div>
                  
                  <div className="project-section-label">The Solution</div>
                  <div className="project-section-content">{project.solution}</div>
                </div>

                <div>
                  <div className="project-section-label">Measurable Impact</div>
                  <div className="project-impact">
                    {project.impact.map((item, idx) => (
                      <div key={idx}>
                        <div className="impact-metric">{item.metric}</div>
                        <div className="impact-label">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience & Education */}
      <section id="experience" className="section">
        <div className={`section-header ${isVisible.experience ? 'visible' : ''}`}>
          <div className="section-label">03. HISTORY</div>
          <h2 className="section-title">Experience & Credentials</h2>
        </div>

        <div className="resume-layout">
          {/* Left Column: Timeline */}
          <div className="experience-timeline">
            {experience.map((exp, index) => (
              <div 
                key={index} 
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

          {/* Right Column: Ed & Certs */}
          <div className="side-cards-container">
            <div className={`side-card ${isVisible.experience ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
              <div className="side-card-header">
                <GraduationCap size={20} className="side-card-icon"/>
                Education
              </div>
              <ul className="side-list">
                <li>
                  <CheckCircle2 size={16} className="list-bullet" />
                  <div className="list-content">
                    <strong>BSc Economics & Statistics</strong>
                    <span>University of Nairobi</span>
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={16} className="list-bullet" />
                  <div className="list-content">
                    <strong>CPA Part II Candidate</strong>
                    <span>NIBS College</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className={`side-card ${isVisible.experience ? 'visible' : ''}`} style={{ transitionDelay: '0.5s' }}>
              <div className="side-card-header">
                <Briefcase size={20} className="side-card-icon"/>
                Verified Certifications
              </div>
              <ul className="side-list">
                <li>
                  <CheckCircle2 size={16} className="list-bullet" />
                  <div className="list-content">
                    <strong>
                      <a href="https://www.datacamp.com/certificate/DEA0013616783195" target="_blank" rel="noopener noreferrer" className="cert-link">
                        Data Engineer Associate <ExternalLink size={12} />
                      </a>
                    </strong>
                    <span>DataCamp</span>
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={16} className="list-bullet" />
                  <div className="list-content">
                    <strong>
                      <a href="https://www.datacamp.com/certificate/DSA0015394234622" target="_blank" rel="noopener noreferrer" className="cert-link">
                        Data Scientist Associate <ExternalLink size={12} />
                      </a>
                    </strong>
                    <span>DataCamp</span>
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={16} className="list-bullet" />
                  <div className="list-content">
                    <strong>
                      <a href="https://www.datacamp.com/certificate/DA0022025807264" target="_blank" rel="noopener noreferrer" className="cert-link">
                        Data Analyst <ExternalLink size={12} />
                      </a>
                    </strong>
                    <span>DataCamp</span>
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={16} className="list-bullet" />
                  <div className="list-content">
                    <strong>
                      <a href="https://www.skills.google/public_profiles/9d35c423-e509-46ae-bd0f-0af045ee1f40" target="_blank" rel="noopener noreferrer" className="cert-link">
                        BigQuery for Data Analysts <ExternalLink size={12} />
                      </a>
                    </strong>
                    <span>Google Cloud</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Jackson Mwangi. Built with React & Lucide.</p>
        <div className="footer-social">
          <a href="https://www.linkedin.com/in/waraga/" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
          <a href="https://github.com/MwangiWaraga/" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
          <a href="mailto:jackmwangu@gmail.com"><Mail size={20} /></a>
        </div>
      </footer>
    </div>
  );
}