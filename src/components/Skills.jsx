import { Suspense, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import { skills, techStack } from '../data/portfolioData';

function SectionLabel({ children }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-4">
      <span className="w-8 h-0.5 bg-gradient-to-r from-transparent to-[var(--cyan)]" />
      <span className="text-xs font-mono text-[var(--cyan)] uppercase tracking-[0.25em]">{children}</span>
      <span className="w-8 h-0.5 bg-gradient-to-r from-[var(--cyan)] to-transparent" />
    </div>
  );
}

const categoryColors = {
  Frontend: '#00f5ff',
  Backend: '#68A063',
  Language: '#F7DF1E',
  Framework: '#8b5cf6',
  Database: '#4479A1',
  DevOps: '#f0f6fc',
  System: '#FCC624',
  'Soft Skill': '#f59e0b',
  Skill: '#ef4444',
  Tools: '#0079BF',
};

function SkillBar({ skill, index, inView }) {
  const color = categoryColors[skill.category] || '#00f5ff';
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 + index * 0.06 }}
      className="glass rounded-2xl p-5 border border-[var(--border)] hover:border-[rgba(0,245,255,0.2)] transition-all group card-hover"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className="font-display font-semibold text-sm text-[var(--text-primary)] group-hover:text-[var(--cyan)] transition-colors">
            {skill.name}
          </span>
          <span
            className="text-[10px] font-mono px-2 py-0.5 rounded-full"
            style={{ color, background: `${color}15`, border: `1px solid ${color}30` }}
          >
            {skill.category}
          </span>
        </div>
        <span className="font-mono text-xs" style={{ color }}>{skill.level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-[var(--panel)] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1.4, delay: 0.2 + index * 0.06, ease: [0.34, 1.56, 0.64, 1] }}
          className="h-full rounded-full relative"
          style={{ background: `linear-gradient(90deg, ${color}80, ${color})` }}
        >
          <span
            className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full shadow-lg"
            style={{ background: color, boxShadow: `0 0 8px ${color}` }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

// 3D Tech Stack Orbit
function TechOrb({ name, color, angle, radius }) {
  const ref = useRef();
  const speed = 0.003 + Math.random() * 0.002;
  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.elapsedTime * speed + angle;
      ref.current.position.x = Math.cos(t) * radius;
      ref.current.position.z = Math.sin(t) * radius;
      ref.current.position.y = Math.sin(t * 0.5) * 0.5;
    }
  });
  return (
    <group ref={ref}>
      <mesh>
        <sphereGeometry args={[0.18, 16, 16]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.4} />
      </mesh>
      <Text
        position={[0, 0.35, 0]}
        fontSize={0.18}
        color={color}
        anchorX="center"
        anchorY="middle"
        font={undefined}
      >
        {name}
      </Text>
    </group>
  );
}

function TechOrbitScene() {
  const coreRef = useRef();
  useFrame(({ clock }) => {
    if (coreRef.current) {
      coreRef.current.rotation.y = clock.elapsedTime * 0.2;
    }
  });
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[0, 0, 0]} color="#00f5ff" intensity={3} />
      <pointLight position={[3, 3, 3]} color="#8b5cf6" intensity={1} />
      <group ref={coreRef}>
        <mesh>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshStandardMaterial color="#00f5ff" emissive="#00f5ff" emissiveIntensity={0.6} wireframe />
        </mesh>
      </group>
      {techStack.map((tech, i) => (
        <TechOrb
          key={tech.name}
          name={tech.name}
          color={tech.color}
          angle={(i / techStack.length) * Math.PI * 2}
          radius={2.2 + (i % 2) * 0.8}
        />
      ))}
    </>
  );
}

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="skills" className="relative py-28 overflow-hidden" style={{ background: 'var(--surface)' }}>
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, var(--violet), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <SectionLabel>Technical Expertise</SectionLabel>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-[var(--text-primary)]">
            Skills & <span className="text-gradient-cyan">Technologies</span>
          </h2>
          <p className="mt-4 text-[var(--text-secondary)] font-body max-w-lg mx-auto">
            A curated arsenal of tools and technologies I wield to build world-class software.
          </p>
        </motion.div>

        {/* 3D Tech Orbit */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="w-full h-72 md:h-96 mb-16 rounded-3xl glass border border-[var(--border)] overflow-hidden"
        >
          <Canvas camera={{ position: [0, 2, 7], fov: 55 }}>
            <Suspense fallback={null}>
              <TechOrbitScene />
            </Suspense>
          </Canvas>
        </motion.div>

        {/* Skill bars grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
