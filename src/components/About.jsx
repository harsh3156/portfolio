import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo, strengths, languages } from '../data/portfolioData';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="w-8 h-0.5 bg-gradient-to-r from-[var(--cyan)] to-transparent" />
      <span className="text-xs font-mono text-[var(--cyan)] uppercase tracking-[0.25em]">{children}</span>
    </div>
  );
}

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" className="relative py-28 bg-void overflow-hidden">
      {/* Decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, var(--cyan), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionLabel>About Me</SectionLabel>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-[var(--text-primary)]">
            The Person Behind the <span className="text-gradient-cyan">Code</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar + Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center md:items-start gap-8"
          >
            {/* Avatar */}
            <div className="relative">
              <div className="w-48 h-48 rounded-3xl bg-gradient-to-br from-[var(--cyan)] to-[var(--violet)] p-0.5">
                <div className="w-full h-full rounded-3xl glass-strong flex items-center justify-center">
                  <span className="font-display font-black text-7xl text-gradient-cyan">HP</span>
                </div>
              </div>
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0 }}
                className="absolute -top-4 -right-4 glass rounded-xl px-3 py-1.5 border border-[rgba(0,245,255,0.2)]"
              >
                <span className="text-xs font-mono text-[var(--cyan)]">BCA Student 🎓</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute -bottom-4 -left-4 glass rounded-xl px-3 py-1.5 border border-[rgba(139,92,246,0.3)]"
              >
                <span className="text-xs font-mono text-[var(--violet-bright)]">MERN Stack ⚡</span>
              </motion.div>
            </div>

            {/* Contact details */}
            <div className="flex flex-col gap-3 w-full">
              {[
                { icon: FiMapPin, text: personalInfo.location, color: 'var(--cyan)' },
                { icon: FiMail, text: personalInfo.email, href: `mailto:${personalInfo.email}`, color: 'var(--violet-bright)' },
                { icon: FiPhone, text: personalInfo.phone, href: `tel:${personalInfo.phone}`, color: 'var(--gold)' },
              ].map(({ icon: Icon, text, href, color }) => (
                <motion.a
                  key={text}
                  href={href || '#'}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg glass flex items-center justify-center border border-[var(--border)]">
                    <Icon size={14} style={{ color }} />
                  </div>
                  {text}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Bio + Strengths */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="font-display font-bold text-xl text-[var(--text-primary)] mb-3">
                Who I Am
              </h3>
              <p className="text-[var(--text-secondary)] font-body leading-relaxed text-base">
                {personalInfo.summary}
              </p>
              <p className="text-[var(--text-secondary)] font-body leading-relaxed text-base mt-3">
                Currently pursuing my Bachelor's in Computer Applications at Veer Narmad South Gujarat University, I blend academic learning with hands-on project experience. I'm deeply passionate about building scalable software, exploring AI/AGI technologies, and leading teams to deliver exceptional results.
              </p>
            </div>

            {/* Strengths */}
            <div>
              <h3 className="font-display font-bold text-xl text-[var(--text-primary)] mb-4">Core Strengths</h3>
              <div className="flex flex-col gap-3">
                {strengths.map((s, i) => (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    whileHover={{ x: 6 }}
                    className="flex items-start gap-4 glass rounded-xl p-4 border border-[var(--border)] hover:border-[rgba(0,245,255,0.2)] transition-all group"
                  >
                    <div className="text-2xl">{s.icon}</div>
                    <div>
                      <div className="font-display font-semibold text-sm mb-0.5" style={{ color: s.color }}>
                        {s.title}
                      </div>
                      <div className="text-xs text-[var(--text-muted)] font-body">{s.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="font-display font-bold text-xl text-[var(--text-primary)] mb-4">Languages</h3>
              <div className="flex flex-col gap-3">
                {languages.map((lang, i) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.6 + i * 0.1 }}
                  >
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-display font-medium text-[var(--text-primary)]">{lang.name}</span>
                      <span className="font-mono text-xs text-[var(--text-muted)]">{lang.level}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-[var(--panel)] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${lang.percent}%` } : {}}
                        transition={{ duration: 1.2, delay: 0.7 + i * 0.1, ease: 'easeOut' }}
                        className="h-full rounded-full"
                        style={{ background: `linear-gradient(90deg, var(--cyan), var(--violet))` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
