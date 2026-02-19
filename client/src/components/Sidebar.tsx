import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, Calendar, Sparkles, Gift, 
  ChevronDown, ChevronRight, Moon, Star, 
  Home, Cake, Camera
} from 'lucide-react';

interface SubItem {
  id: string;
  label: string;
}

interface NavCategory {
  id: string;
  label: string;
  icon: React.ReactNode;
  items: SubItem[];
}

interface SidebarProps {
  activeRitual: string;
  setActiveRitual: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeRitual, setActiveRitual }) => {
  const [openCategory, setOpenCategory] = useState<string | null>('valentine');

  const navigation: NavCategory[] = [
    {
      id: 'valentine',
      label: 'Valentine Week',
      icon: <Heart size={18} className="text-[#FF5885]" />,
      items: [
        { id: 'rose-day', label: 'Rose Day' },
        { id: 'propose-day', label: 'Propose Day' },
        { id: 'chocolate-day', label: 'Chocolate Day' },
        { id: 'teddy-day', label: 'Teddy Day' },
        { id: 'promise-day', label: 'Promise Day' },
        { id: 'hug-day', label: 'Hug Day' },
        { id: 'kiss-day', label: 'Kiss Day' },
        { id: 'valentine-day', label: 'Valentine Day' },
      ]
    },
    {
      id: 'cultural',
      label: 'Festivals',
      icon: <Moon size={18} />,
      items: [
        { id: 'karwa-chauth', label: 'Karwa Chauth' },
        { id: 'mahashivratri', label: 'Mahashivratri' },
        { id: 'teej', label: 'Teej' },
        { id: 'holi', label: 'Holi' },
        { id: 'diwali', label: 'Diwali' },
        { id: 'christmas', label: 'Christmas' },
      ]
    },
    {
      id: 'personal',
      label: 'Milestones',
      icon: <Gift size={18} />,
      items: [
        { id: 'birthday', label: 'Birthday' },
        { id: 'anniversary', label: 'Anniversary' },
        { id: 'marriage-anniversary', label: 'Marriage Anniv.' },
      ]
    }
  ];

  return (
    <aside className="w-72 h-screen bg-black border-r border-white/5 flex flex-col z-50">
      {/* Brand Section */}
      <div className="p-8 flex items-center gap-3 border-b border-white/5">
      <img src="/full_logo.png" alt="logo" className='h-9 w-auto' />
      </div>

      {/* Main Home Link */}
      <button 
        onClick={() => setActiveRitual('home')}
        className={`mx-4 mt-6 flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
          activeRitual === 'home' ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white'
        }`}
      >
        <Home size={18} />
        <span className="text-sm font-medium">Dashboard</span>
      </button>

      {/* Navigation Groups */}
      <nav className="flex-1 px-4 mt-4 space-y-2 overflow-y-auto custom-scrollbar">
        {navigation.map((cat) => (
          <div key={cat.id} className="mb-2">
            <button
              onClick={() => setOpenCategory(openCategory === cat.id ? null : cat.id)}
              className="w-full flex items-center justify-between px-4 py-3 text-slate-500 hover:text-slate-200 transition-colors"
            >
              <div className="flex items-center gap-3">
                {cat.icon}
                <span className="text-xs font-bold uppercase tracking-widest">{cat.label}</span>
              </div>
              {openCategory === cat.id ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
            </button>

            <AnimatePresence>
              {openCategory === cat.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="ml-6 border-l border-white/10 overflow-hidden"
                >
                  {cat.items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveRitual(item.id)}
                      className={`w-full text-left px-6 py-2 text-sm mt-1 transition-all relative ${
                        activeRitual === item.id 
                        ? 'text-[#FF5885] font-semibold' 
                        : 'text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      {activeRitual === item.id && (
                        <motion.div 
                          layoutId="activeGlow"
                          className="absolute left-0 w-1 h-4 bg-[#FF5885] rounded-full shadow-[0_0_10px_#FF5885]"
                        />
                      )}
                      {item.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </nav>

      {/* Bottom Profile Info */}
      <div className="p-6 border-t border-white/5 bg-white/[0.01]">
        <div className="flex items-center gap-3 px-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FF5885] to-rose-900 border border-white/20" />
          <div className="flex flex-col">
            <span className="text-xs font-bold">Kuldeep</span>
            <span className="text-[10px] text-slate-500">Partner: Aditi</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;