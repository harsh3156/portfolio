import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

// Simple test to see if basic rendering works
export default function App() {
  const [loading, setLoading] = useState(false);

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#030712', color: '#f0f6fc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div>
        <h1>Portfolio Loading...</h1>
        <p>Testing basic render</p>
      </div>
    </div>
  );
}
