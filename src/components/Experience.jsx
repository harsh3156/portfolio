import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experience } from '../data/portfolioData';
import { FiMapPin, FiCalendar, FiBriefcase } from 'react-icons/fi';

function SectionLabel({ children }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-4">
      <span className="w-8 h-0.5 bg-gradient-to-r from-transparent to-[var(--cyan)]" />
      <span className="text-xs font-mono text-[var(--cyan)] uppercase tracking-[0.25em]">{children}</span>
      <span className="w-8 h-0.5 bg-gradient-to-r from-[var(--cyan)] to-transparent" />
    </div>
  );
}

function ExperienceCard({ exp, index, inView }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -60 : 60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.1 + index * 0.15, duration: 0.6, ease: 'easeOut' }}
      className={`relative flex ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-0 md:gap-8 items-start`}
    >
      {/* Card */}
      <div className={`w-full md:w-[calc(50%-2rem)] ${isEven ? 'md:text-right' : 'md:text-left'}`}>
        <motion.div
          whileHover={{ y: -6, boxShadow: `0 20px 60px ${exp.color}20` }}
          className="glass-strong rounded-2xl p-6 border border-[var(--border)] hover:border-[rgba(0,245,255,0.2)] transition-all group relative overflow-hidden shine-effect"
        >
          {/* Glow accent */}
          <div className="absolute top-0 left-0 w-1 h-full rounded-l-2xl"
            style={{ background: exp.color }} />

          <div className={`flex items-start gap-3 mb-4 ${isEven ? 'md:flex-row-reverse' : ''}`}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: `${exp.color}15`, border: `1px solid ${exp.color}40` }}>
              <FiBriefcase style={{ color: exp.color }} size={18} />
            </div>
            <div className={isEven ? 'md:text-right' : ''}>
              <h3 className="font-display font-bold text-lg text-[var(--text-primary)] group-hover:text-[var(--cyan)] transition-colors">
                {exp.role}
              </h3>
              <p className="text-sm font-semibold" style={{ color: exp.color }}>{exp.company}</p>
            </div>
          </div>

          <div className={`flex flex-wrap gap-3 text-xs text-[var(--text-muted)] mb-4 font-mono ${isEven ? 'md:justify-end' : ''}`}>
            <span className="flex items-center gap-1.5">
              <FiCalendar size={11} /> {exp.period}
            </span>
            <span className="flex items-center gap-1.5">
              <FiMapPin size={11} /> {exp.location}
            </span>
          </div>

          <p className="text-sm text-[var(--text-secondary)] font-body leading-relaxed mb-4">{exp.description}</p>

          <ul className={`space-y-2 mb-5 ${isEven ? 'md:text-right' : ''}`}>
            {exp.highlights.map((h, i) => (
              <li key={i} className={`text-xs text-[var(--text-muted)] font-body flex items-start gap-2 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: exp.color }} />
                {h}
              </li>
            ))}
          </ul>

          <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : ''}`}>
            {exp.tags.map(tag => (
              <span key={tag} className="tech-tag text-[10px]" style={{ color: exp.color, borderColor: `${exp.color}40`, background: `${exp.color}08` }}>
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Center dot */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 flex-col items-center" style={{ top: '1.5rem' }}>
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ delay: 0.2 + index * 0.15, type: 'spring' }}
          className="w-5 h-5 rounded-full border-2 z-10"
          style={{
            background: exp.color,
            borderColor: exp.color,
            boxShadow: `0 0 15px ${exp.color}80`,
          }}
        />
      </div>

      {/* Spacer for other side */}
      <div className="hidden md:block w-[calc(50%-2rem)]" />
    </motion.div>
  );
}

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="experience" className="relative py-28 bg-void overflow-hidden">
      <div className="absolute right-0 top-1/4 w-80 h-80 rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, var(--gold), transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <SectionLabel>Work History</SectionLabel>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-[var(--text-primary)]">
            My <span className="text-gradient-cyan">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5"
            style={{ background: 'linear-gradient(to bottom, var(--cyan), var(--violet), transparent)' }}
          />

          <div className="flex flex-col gap-12">
            {experience.map((exp, i) => (
              <ExperienceCard key={exp.id} exp={exp} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
