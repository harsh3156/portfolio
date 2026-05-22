import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Global error handler
window.addEventListener('error', (e) => {
  console.error('Global error:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
  console.error('Unhandled promise rejection:', e.reason);
});

try {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
} catch (err) {
  console.error('React render error:', err);
  document.body.innerHTML = '<div style="color:red;padding:20px;background:#030712;"><h1>Error Loading App:</h1><pre style="color:#00f5ff;overflow:auto;">' + err.toString() + '\n\n' + err.stack + '</pre></div>';
}
