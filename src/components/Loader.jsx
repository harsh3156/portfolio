import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);

  const phases = [
    'Initializing systems...',
    'Loading components...',
    'Rendering portfolio...',
    'Welcome.',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        const next = p + Math.random() * 15 + 5;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(onDone, 600);
          return 100;
        }
        setPhase(Math.floor((next / 100) * (phases.length - 1)));
        return next;
      });
    }, 180);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 z-[9999] bg-void flex flex-col items-center justify-center"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Radial glow */}
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,245,255,0.04), transparent)' }}
      />

      <div className="relative z-10 flex flex-col items-center gap-8 px-8 max-w-md w-full">
        {/* Logo mark */}
        <motion.div
          animate={{ scale: [1, 1.05, 1], boxShadow: ['0 0 20px rgba(0,245,255,0.3)', '0 0 50px rgba(0,245,255,0.7)', '0 0 20px rgba(0,245,255,0.3)'] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--cyan)] to-[var(--violet)] flex items-center justify-center"
        >
          <span className="font-display font-black text-3xl text-void">HP</span>
        </motion.div>

        {/* Name */}
        <div className="text-center">
          <h1 className="font-display font-black text-3xl text-gradient-cyan">HARSH PRAJAPATI</h1>
          <p className="text-xs font-mono text-[var(--text-muted)] mt-1 tracking-widest">MERN STACK DEVELOPER</p>
        </div>

        {/* Progress bar */}
        <div className="w-full">
          <div className="flex justify-between text-[10px] font-mono text-[var(--text-muted)] mb-2">
            <span>{phases[phase]}</span>
            <span>{Math.floor(progress)}%</span>
          </div>
          <div className="h-0.5 bg-[var(--panel)] rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ width: `${progress}%`, background: 'linear-gradient(90deg, var(--cyan), var(--violet))' }}
            />
          </div>
        </div>

        {/* Dots */}
        <div className="flex gap-2">
          {[0, 1, 2].map(i => (
            <motion.div
              key={i}
              animate={{ opacity: [0.2, 1, 0.2], y: [0, -5, 0] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
              className="w-1.5 h-1.5 rounded-full bg-[var(--cyan)]"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
