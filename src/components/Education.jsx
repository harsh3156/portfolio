import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { education } from '../data/portfolioData';
import { FiMapPin, FiCalendar, FiBook } from 'react-icons/fi';

function SectionLabel({ children }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-4">
      <span className="w-8 h-0.5 bg-gradient-to-r from-transparent to-[var(--cyan)]" />
      <span className="text-xs font-mono text-[var(--cyan)] uppercase tracking-[0.25em]">{children}</span>
      <span className="w-8 h-0.5 bg-gradient-to-r from-[var(--cyan)] to-transparent" />
    </div>
  );
}

export default function Education() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="education" className="relative py-28 bg-void overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <SectionLabel>Academic Background</SectionLabel>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-[var(--text-primary)]">
            <span className="text-gradient-cyan">Education</span>
          </h2>
        </motion.div>

        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            {/* Main card */}
            <motion.div
              whileHover={{ y: -6 }}
              className="glass-strong rounded-3xl p-8 border border-[var(--border)] hover:border-[rgba(0,245,255,0.25)] transition-all relative overflow-hidden group"
            >
              {/* Animated top bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: `linear-gradient(90deg, transparent, ${edu.color}, var(--violet), transparent)` }}
              />

              {/* Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ background: `radial-gradient(circle at top right, ${edu.color}08, transparent)` }}
              />

              <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center"
                    style={{ background: `${edu.color}10`, border: `2px solid ${edu.color}30` }}>
                    <FiBook size={36} style={{ color: edu.color }} />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-display font-bold text-xl text-[var(--text-primary)] mb-1 group-hover:text-[var(--cyan)] transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="font-semibold" style={{ color: edu.color }}>{edu.institution}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[rgba(0,245,255,0.2)] text-xs font-mono text-[var(--cyan)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--cyan)] animate-pulse" />
                        Currently Enrolled
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-xs text-[var(--text-muted)] mb-5 font-mono">
                    <span className="flex items-center gap-1.5">
                      <FiCalendar size={11} /> {edu.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FiMapPin size={11} /> {edu.location}
                    </span>
                  </div>

                  <p className="text-sm text-[var(--text-secondary)] font-body leading-relaxed mb-6">
                    {edu.description}
                  </p>

                  {/* Skills covered */}
                  <div>
                    <p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-3">
                      Coursework & Skills
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {edu.skills.map(skill => (
                        <span key={skill} className="tech-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Extra: Achievements/Certifications placeholder cards */}
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              {[
                { label: 'Linux Fundamentals', type: 'Self-Study', icon: '🐧' },
                { label: 'MERN Stack Development', type: 'Self-Study', icon: '⚡' },
                { label: 'Project Management', type: 'Practical', icon: '📋' },
              ].map((cert, ci) => (
                <motion.div
                  key={cert.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + ci * 0.1 }}
                  whileHover={{ y: -4, borderColor: 'rgba(0,245,255,0.3)' }}
                  className="glass rounded-2xl p-4 border border-[var(--border)] flex items-center gap-3 group transition-all"
                >
                  <span className="text-2xl">{cert.icon}</span>
                  <div>
                    <p className="text-xs font-display font-semibold text-[var(--text-primary)] group-hover:text-[var(--cyan)] transition-colors">
                      {cert.label}
                    </p>
                    <p className="text-[10px] font-mono text-[var(--text-muted)] mt-0.5">{cert.type}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
