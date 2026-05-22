import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo } from '../data/portfolioData';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin, FiSend, FiCheck, FiLoader, FiAlertCircle } from 'react-icons/fi';

function SectionLabel({ children }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-4">
      <span className="w-8 h-0.5 bg-gradient-to-r from-transparent to-[var(--cyan)]" />
      <span className="text-xs font-mono text-[var(--cyan)] uppercase tracking-[0.25em]">{children}</span>
      <span className="w-8 h-0.5 bg-gradient-to-r from-[var(--cyan)] to-transparent" />
    </div>
  );
}

const contactDetails = [
  { icon: FiMail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, color: '#00f5ff' },
  { icon: FiPhone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}`, color: '#8b5cf6' },
  { icon: FiMapPin, label: 'Location', value: personalInfo.location, href: '#', color: '#f59e0b' },
  { icon: FiGithub, label: 'GitHub', value: 'harsh3156', href: personalInfo.github, color: '#f0f6fc' },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'oreoharsh', href: personalInfo.linkedin, color: '#0A66C2' },
];

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [focused, setFocused] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setSending(true);
    setError(null);

    const emailSubject = `${import.meta.env.VITE_CONTACT_SUBJECT_PREFIX || 'Portfolio Contact'}: ${form.subject}`;

    fetch("https://formsubmit.co/ajax/harshkaklotar09@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
        _subject: emailSubject
      })
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      setSending(false);
      if (data.success === 'true' || data.success === true) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        console.error("FormSubmit error:", data);
        setError("Failed to send message. Please try again.");
        setTimeout(() => setError(null), 5000);
      }
    })
    .catch((err) => {
      setSending(false);
      console.error("FormSubmit exception:", err);
      setError("An error occurred while sending. Please try again later.");
      setTimeout(() => setError(null), 5000);
    });
  };

  const inputClass = (field) =>
    `w-full bg-[var(--panel)] border rounded-xl px-4 py-3.5 text-sm font-body text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none transition-all duration-200 ${
      focused === field
        ? 'border-[rgba(0,245,255,0.5)] shadow-[0_0_15px_rgba(0,245,255,0.1)]'
        : 'border-[var(--border)] hover:border-[rgba(0,245,255,0.2)]'
    }`;

  return (
    <section id="contact" className="relative py-28 overflow-hidden" style={{ background: 'var(--surface)' }}>
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-10"
        style={{ background: 'radial-gradient(ellipse, var(--cyan), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <SectionLabel>Get In Touch</SectionLabel>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-[var(--text-primary)]">
            Let's <span className="text-gradient-cyan">Connect</span>
          </h2>
          <p className="mt-4 text-[var(--text-secondary)] font-body max-w-lg mx-auto">
            Have a project in mind? Looking to hire a passionate developer? Let's talk about how we can work together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <div className="glass-strong rounded-3xl p-8 border border-[var(--border)] h-full">
              <h3 className="font-display font-bold text-xl text-[var(--text-primary)] mb-6">
                Contact Information
              </h3>

              <div className="flex flex-col gap-4 mb-8">
                {contactDetails.map(({ icon: Icon, label, value, href, color }, i) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.07 }}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110"
                      style={{ background: `${color}12`, border: `1px solid ${color}30` }}>
                      <Icon size={16} style={{ color }} />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">{label}</p>
                      <p className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                        {value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Availability */}
              <div className="rounded-2xl p-4 border border-[rgba(0,245,255,0.15)] bg-[rgba(0,245,255,0.04)]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[var(--cyan)] animate-pulse" />
                  <span className="text-xs font-mono text-[var(--cyan)] uppercase tracking-wider">Open to Opportunities</span>
                </div>
                <p className="text-xs text-[var(--text-muted)] font-body">
                  Currently available for internships, freelance projects, and entry-level positions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="glass-strong rounded-3xl p-8 border border-[var(--border)] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: 'linear-gradient(90deg, transparent, var(--cyan), var(--violet), transparent)' }}
              />

              <h3 className="font-display font-bold text-xl text-[var(--text-primary)] mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-2 block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      required
                      className={inputClass('name')}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-2 block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@company.com"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      required
                      className={inputClass('email')}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-2 block">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Project Collaboration / Hiring / ..."
                    value={form.subject}
                    onChange={e => setForm({ ...form, subject: e.target.value })}
                    onFocus={() => setFocused('subject')}
                    onBlur={() => setFocused(null)}
                    required
                    className={inputClass('subject')}
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-2 block">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    required
                    className={`${inputClass('message')} resize-none`}
                  />
                </div>

                <AnimatePresence>
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="rounded-xl p-4 border border-[rgba(239,68,68,0.2)] bg-[rgba(239,68,68,0.05)] text-red-400 text-xs font-mono flex items-center gap-2"
                    >
                      <FiAlertCircle size={16} className="flex-shrink-0" />
                      <span>{error}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button
                  type="submit"
                  disabled={sending || submitted}
                  whileHover={sending || submitted ? {} : { scale: 1.02, boxShadow: '0 0 30px rgba(0,245,255,0.4)' }}
                  whileTap={sending || submitted ? {} : { scale: 0.98 }}
                  className={`relative flex items-center justify-center gap-2 w-full py-4 rounded-xl font-display font-bold transition-all overflow-hidden ${
                    sending || submitted 
                      ? 'bg-neutral-800 text-neutral-500 border border-neutral-700 cursor-not-allowed'
                      : 'text-void bg-gradient-to-r from-[var(--cyan)] to-[var(--cyan-dim)] shadow-[0_0_20px_rgba(0,245,255,0.15)]'
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {submitted ? (
                      <motion.span
                        key="sent"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2"
                      >
                        <FiCheck size={16} /> Message Sent!
                      </motion.span>
                    ) : sending ? (
                      <motion.span
                        key="sending"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2"
                      >
                        <FiLoader size={16} className="animate-spin text-[var(--cyan)]" /> Sending Message...
                      </motion.span>
                    ) : (
                      <motion.span
                        key="send"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2"
                      >
                        <FiSend size={16} /> Send Message
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
