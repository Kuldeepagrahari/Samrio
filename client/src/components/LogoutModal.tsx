import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LogoutModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const LogoutModal: React.FC<LogoutModalProps> = ({ isOpen, onConfirm, onCancel }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-[#0A0A0A] border border-white/10 p-8 rounded-[2rem] max-w-sm w-full text-center shadow-2xl"
          >
            <h3 className="text-xl font-bold mb-3 text-white">Leave your space?</h3>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed">
              You will be returned to the main page. Your rituals and private room connection will remain securely saved.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={onCancel} 
                className="flex-1 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all text-sm font-medium text-white"
              >
                Stay
              </button>
              <button 
                onClick={onConfirm} 
                className="flex-1 py-3 rounded-xl bg-[#FF5885] hover:bg-[#ff3d71] text-white text-sm font-bold shadow-[0_0_20px_rgba(255,88,133,0.3)] transition-all"
              >
                Logout
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LogoutModal;