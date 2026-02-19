import React from 'react';
import { motion } from 'framer-motion';
import { Chrome, Instagram, Facebook, ArrowRight } from 'lucide-react';

interface AuthProps {
  onAuthSuccess: (provider: string) => void;
}

const Auth: React.FC<AuthProps> = ({ onAuthSuccess }) => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 relative overflow-hidden">
      {/* Dynamic Background Aura */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#FF5885]/10 blur-[150px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[150px] rounded-full" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white/[0.03] border border-white/10 backdrop-blur-3xl p-10 rounded-[3rem] shadow-2xl z-10"
      >
        <div className="text-center mb-10">
          <img src="/full_logo.png" className="h-14 rounded-xl mx-auto mb-6 drop-shadow-[0_0_10px_#FF5885]" alt="Samrio" />
          <h2 className="text-4xl font-bold tracking-tighter mb-2">Join Your Space</h2>
          <p className="text-slate-400 text-sm">Securely connect with your partner or family and friends</p>
        </div>

        <div className="space-y-4">
          {/* Google Login */}
          <SocialButton 
            icon={<Chrome size={20} />} 
            label="Continue with Google" 
            color="hover:bg-white hover:text-black"
            onClick={() => onAuthSuccess('google')}
          />

          {/* Instagram Login */}
          <SocialButton 
            icon={<Instagram size={20} />} 
            label="Continue with Instagram" 
            color="hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:to-[#ee2a7b] hover:text-white"
            onClick={() => onAuthSuccess('instagram')}
          />

          {/* Facebook Login */}
          <SocialButton 
            icon={<Facebook size={20} />} 
            label="Continue with Facebook" 
            color="hover:bg-[#1877F2] hover:text-white"
            onClick={() => onAuthSuccess('facebook')}
          />
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex items-center justify-between text-xs text-slate-500 font-medium">
          <span>PRIVATE & ENCRYPTED</span>
          <span className="flex items-center gap-1">
            POWERED BY <span className="text-white">SAMRIO</span>
          </span>
        </div>
      </motion.div>
    </div>
  );
};

// Reusable Button Component for Socials
const SocialButton = ({ icon, label, color, onClick }: { 
  icon: React.ReactNode, 
  label: string, 
  color: string, 
  onClick: () => void 
}) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/5 border border-white/5 font-bold transition-all duration-300 transform hover:scale-[1.02] ${color}`}
  >
    {icon}
    <span className="flex-1 text-left">{label}</span>
    <ArrowRight size={16} className="opacity-30" />
  </button>
);

export default Auth;