import { useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { personalInfo, stats } from '../data/portfolioData';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';

export default function Hero() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const socialLinks = [
    { icon: FiGithub, href: personalInfo.github, label: 'GitHub' },
    { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
    { icon: FiPhone, href: `tel:${personalInfo.phone}`, label: 'Phone' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-grid bg-void"
    >
      {/* Radial gradient overlays */}
      <div className="absolute inset-0 bg-gradient-radial from-[rgba(0,245,255,0.05)] via-transparent to-transparent"
        style={{ background: 'radial-gradient(ellipse 60% 60% at 70% 50%, rgba(0,245,255,0.06) 0%, transparent 70%)' }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-40"
        style={{ background: 'linear-gradient(to top, var(--void), transparent)' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center w-full">
        <div ref={ref}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-[rgba(0,245,255,0.2)] mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--cyan)] animate-pulse" />
            <span className="text-xs font-mono text-[var(--cyan)] tracking-wider">
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h1 className="font-display font-extrabold leading-none mb-2">
              <span className="block text-5xl md:text-7xl lg:text-8xl text-[var(--text-primary)]">
                HARSH
              </span>
              <span className="block text-5xl md:text-7xl lg:text-8xl text-gradient-cyan">
                PRAJAPATI
              </span>
            </h1>
          </motion.div>

          {/* Typing animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35 }}
            className="my-4 flex items-center gap-3"
          >
            <span className="text-[var(--text-muted)] font-mono text-sm">&gt;</span>
            <TypeAnimation
              sequence={personalInfo.roles.flatMap(r => [r, 2000])}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-xl md:text-2xl font-display font-semibold text-[var(--cyan)]"
            />
          </motion.div>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.45 }}
            className="text-base md:text-lg text-[var(--text-secondary)] font-body max-w-md leading-relaxed mb-2"
          >
            {personalInfo.summary}
          </motion.p>

          {/* Location */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-sm font-mono text-[var(--text-muted)] mb-8 flex items-center gap-2"
          >
            <span className="text-[var(--cyan)]">📍</span> {personalInfo.location}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.55 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            <motion.a
              href="#projects"
              onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,245,255,0.5)' }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3 rounded-full font-display font-bold text-void bg-gradient-to-r from-[var(--cyan)] to-[var(--cyan-dim)] text-sm tracking-wide transition-all"
            >
              View Projects →
            </motion.a>
            <motion.a
              href="#contact"
              onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3 rounded-full font-display font-bold text-[var(--cyan)] border border-[rgba(0,245,255,0.3)] bg-transparent text-sm tracking-wide hover:bg-[rgba(0,245,255,0.08)] transition-all"
            >
              Let's Talk
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.65 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                title={label}
                whileHover={{ y: -3, color: '#00f5ff' }}
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--cyan)] hover:border-[rgba(0,245,255,0.4)] border border-[var(--border)] transition-all"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Stats - Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="hidden md:flex flex-col items-end justify-end h-full pb-8 gap-4"
        >
          <div className="grid grid-cols-2 gap-4 mt-auto">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="glass rounded-2xl p-5 text-center border border-[rgba(0,245,255,0.1)] hover:border-[rgba(0,245,255,0.3)] transition-all group"
              >
                <div className="font-display font-extrabold text-3xl text-gradient-cyan mb-1">
                  {inView && (
                    <CountUp end={stat.value} duration={2.5} delay={0.5 + i * 0.1} />
                  )}
                  {stat.suffix}
                </div>
                <div className="text-xs text-[var(--text-muted)] font-mono uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono text-[var(--text-muted)]">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border border-[var(--cyan)] rounded-full flex items-start justify-center pt-2 opacity-60"
        >
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-[var(--cyan)] rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
