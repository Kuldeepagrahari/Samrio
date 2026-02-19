import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LandingPage from './pages/LandingPage';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';

// Define the stages of our user journey
type AppStage = 'landing' | 'auth' | 'dashboard';

const App: React.FC = () => {
  const [stage, setStage] = useState<AppStage>('landing');
  const [user, setUser] = useState<{ name: string; provider: string } | null>(null);

  // Function to handle successful social login
  const handleAuthSuccess = (provider: string) => {
    // In a real app, you'd get the name from the social provider's API
    setUser({ name: 'User', provider });
    setStage('dashboard');
  };

  return (
    <div className="bg-black min-h-screen text-white overflow-hidden">
      <AnimatePresence mode="wait">
        {stage === 'landing' && (
          <motion.div
            key="landing"
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <LandingPage onLaunch={() => setStage('auth')} />
          </motion.div>
        )}

        {stage === 'auth' && (
          <motion.div
            key="auth"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Auth onAuthSuccess={handleAuthSuccess} />
          </motion.div>
        )}

        {stage === 'dashboard' && (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Dashboard userName={user?.name || 'Guest'} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;