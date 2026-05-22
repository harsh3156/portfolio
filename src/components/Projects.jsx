import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '../data/portfolioData';
import { FiExternalLink, FiGithub, FiZap } from 'react-icons/fi';

function SectionLabel({ children }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-4">
      <span className="w-8 h-0.5 bg-gradient-to-r from-transparent to-[var(--cyan)]" />
      <span className="text-xs font-mono text-[var(--cyan)] uppercase tracking-[0.25em]">{children}</span>
      <span className="w-8 h-0.5 bg-gradient-to-r from-[var(--cyan)] to-transparent" />
    </div>
  );
}

function ProjectCard({ project, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="relative glass-strong rounded-3xl overflow-hidden border border-[var(--border)] group transition-all duration-300"
      style={{ '--card-color': project.color }}
    >
      {/* Top glow bar */}
      <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }} />

      {/* Glow bg on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, ${project.color}10, transparent)` }}
      />

      <div className="p-7 relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
              style={{ background: `${project.color}12`, border: `1px solid ${project.color}30` }}>
              {project.icon}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-display font-bold text-lg text-[var(--text-primary)] group-hover:text-[var(--cyan)] transition-colors">
                  {project.title}
                </h3>
              </div>
              <span
                className="text-[10px] font-mono px-2 py-0.5 rounded-full"
                style={{ color: project.color, background: `${project.color}12`, border: `1px solid ${project.color}30` }}
              >
                {project.status}
              </span>
            </div>
          </div>

          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="w-8 h-8 rounded-lg glass flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--cyan)] border border-[var(--border)]"
            >
              <FiGithub size={14} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="w-8 h-8 rounded-lg glass flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--cyan)] border border-[var(--border)]"
            >
              <FiExternalLink size={14} />
            </motion.button>
          </div>
        </div>

        <p className="text-sm text-[var(--text-secondary)] font-body leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.highlights.map(h => (
            <span key={h} className="flex items-center gap-1.5 text-[10px] font-mono text-[var(--text-muted)]">
              <FiZap size={9} style={{ color: project.color }} />
              {h}
            </span>
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map(t => (
            <span key={t} className="tech-tag text-[10px]"
              style={{ color: project.color, borderColor: `${project.color}40`, background: `${project.color}08` }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom shine */}
      <div className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ background: `linear-gradient(90deg, transparent, ${project.color}60, transparent)` }}
      />
    </motion.div>
  );
}

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="projects" className="relative py-28 overflow-hidden" style={{ background: 'var(--surface)' }}>
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute left-0 top-1/3 w-96 h-96 rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, var(--cyan), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <SectionLabel>My Work</SectionLabel>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-[var(--text-primary)]">
            Featured <span className="text-gradient-cyan">Projects</span>
          </h2>
          <p className="mt-4 text-[var(--text-secondary)] font-body max-w-lg mx-auto">
            Handcrafted digital experiences — from system-level code to full-stack web applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href={`https://github.com/harsh3156`}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,245,255,0.3)' }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-display font-semibold text-[var(--cyan)] border border-[rgba(0,245,255,0.3)] hover:bg-[rgba(0,245,255,0.06)] transition-all"
          >
            <FiGithub size={16} />
            View All on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
