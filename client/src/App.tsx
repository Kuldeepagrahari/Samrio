import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LandingPage from './pages/LandingPage';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';

type AppStage = 'landing' | 'auth' | 'dashboard';

const App: React.FC = () => {
  const [stage, setStage] = useState<AppStage>('landing');

  // Triggers the return to the landing page
  const handleLogout = () => {
    setStage('landing');
  };

  return (
    <div className="bg-black min-h-screen text-white overflow-hidden selection:bg-[#FF5885]/30">
      <AnimatePresence mode="wait">
        
        {stage === 'landing' && (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="h-full w-full"
          >
            <LandingPage onLaunch={() => setStage('auth')} />
          </motion.div>
        )}

        {stage === 'auth' && (
          <motion.div
            key="auth"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="h-full w-full"
          >
            {/* Assuming Auth accepts an onAuthSuccess prop from previous steps */}
            <Auth onAuthSuccess={() => setStage('dashboard')} />
          </motion.div>
        )}

        {stage === 'dashboard' && (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full"
          >
            <Dashboard onLogout={handleLogout} />
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
};

export default App;