import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { motion, AnimatePresence } from 'framer-motion';

interface DashboardProps {
  userName: string;
}

const Dashboard: React.FC<DashboardProps> = ({ userName }) => {
  const [activeRitual, setActiveRitual] = useState<string>('home');

  return (
    <div className="flex h-screen bg-black overflow-hidden">
      <Sidebar activeRitual={activeRitual} setActiveRitual={setActiveRitual} />
      
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
              <div>
                <header className="mb-12">
                  <h2 className="text-samrio font-bold tracking-widest text-xs uppercase mb-2">Command Center</h2>
                  <h1 className="text-5xl font-bold">Welcome back, {userName}</h1>
                </header>
                
                {/* Your Grid of Functionality Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10">
                    <h3 className="text-xl font-bold mb-2">Invite Partner</h3>
                    <p className="text-slate-400 text-sm mb-6">Send a link to your partner to entangle your spaces.</p>
                    <button className="px-6 py-2 bg-white text-black rounded-full font-bold text-sm">Copy Invite Link</button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-[80vh] flex flex-col items-center justify-center border border-white/5 rounded-[3rem] bg-gradient-to-b from-white/[0.02] to-transparent">
                <h2 className="text-4xl font-bold italic capitalize">{activeRitual.replace('-', ' ')}</h2>
                <p className="text-slate-500 mt-4">Preparing your private celebration space...</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Dashboard;