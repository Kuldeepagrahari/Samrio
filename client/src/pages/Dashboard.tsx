import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { motion, AnimatePresence } from 'framer-motion';

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const [activeRitual, setActiveRitual] = useState<string>('home');

  return (
    <div className="flex h-screen bg-black overflow-hidden text-white">
      <Sidebar 
        activeRitual={activeRitual} 
        setActiveRitual={setActiveRitual} 
        onLogout={onLogout} 
      />
      
      <main className="flex-1 relative overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRitual}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-10"
          >
            {activeRitual === 'home' ? (
              <div className="max-w-4xl">
                <h2 className="text-[#FF5885] font-bold tracking-[0.2em] text-xs uppercase mb-2">Command Center</h2>
                <h1 className="text-5xl font-bold mb-8 italic">Your Private Space</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 hover:border-[#FF5885]/40 transition-all cursor-pointer group">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-[#FF5885] transition-colors">Invite Partner</h3>
                    <p className="text-slate-400 text-sm">Generate a unique entanglement link to sync your devices.</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-[75vh] flex flex-col items-center justify-center border border-white/5 rounded-[3rem] bg-gradient-to-b from-white/[0.02] to-transparent">
                <h2 className="text-4xl md:text-5xl font-bold italic capitalize text-white">
                  {activeRitual.replace('-', ' ')}
                </h2>
                <p className="text-slate-500 mt-4 max-w-md text-center">
                  Ritual environment is loading. Connect with your partner to initialize real-time syncing.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Dashboard;