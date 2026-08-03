import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects';

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="section" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', marginBottom: '1.5rem' }}>Project not found</h2>
        <Link to="/" className="btn btn-primary">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="section" style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <Link to="/" className="btn btn-secondary" style={{ marginBottom: '2rem' }}>
        <ArrowLeft size={18} /> Back to Portfolio
      </Link>

      <div className="glass" style={{ padding: '3rem', borderRadius: '20px' }}>
        <div style={{ color: 'var(--accent-color)', fontWeight: '700', textTransform: 'uppercase', marginBottom: '0.75rem', fontSize: '0.8rem', letterSpacing: '2px' }}>
          {project.category}
        </div>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.8rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
          {project.title}
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px', lineHeight: '1.8' }}>
          {project.description}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2.5rem' }}>
          {project.tech.map((t, idx) => (
            <span key={idx} className="tech-tag" style={{ fontSize: '0.85rem', padding: '0.4rem 1rem' }}>{t}</span>
          ))}
        </div>

        {project.highlights && (
          <div style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', marginBottom: '1.5rem', fontSize: '1.5rem' }}>Key Achievements</h2>
            <ul style={{ listStyle: 'none', display: 'grid', gap: '0.75rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              {project.highlights.map((highlight, idx) => (
                <li key={idx} style={{
                  display: 'flex',
                  gap: '0.75rem',
                  alignItems: 'flex-start',
                  background: 'var(--accent-subtle)',
                  padding: '1.25rem',
                  borderRadius: '12px',
                  border: '1px solid var(--border-color)',
                  fontSize: '0.92rem',
                  lineHeight: '1.6'
                }}>
                  <CheckCircle2 size={20} color="var(--accent-color)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.github && (
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <Github size={18} /> View on GitHub
            </a>
          </div>
        )}

        {project.embedUrl && (
          <div style={{ marginTop: '3rem' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', marginBottom: '1.5rem', fontSize: '1.5rem' }}>Interactive Dashboard</h2>
            <div style={{
              position: 'relative',
              width: '100%',
              paddingBottom: '62.25%',
              height: 0,
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid var(--border-color)',
              background: '#fff'
            }}>
              <iframe
                title={project.title}
                src={project.embedUrl}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                allowFullScreen={true}>
              </iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
