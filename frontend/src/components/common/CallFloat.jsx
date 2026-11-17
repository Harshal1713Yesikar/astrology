import React, { useState } from 'react';
import { Phone, ChevronUp, ChevronDown } from 'lucide-react';
import { BRAND_INFO } from '../../utils/constants';

const CallFloat = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside aria-label="Direct call options" className="fixed bottom-6 left-6 z-50">
      {isOpen && (
        <div className="mb-2 bg-slate-900/95 border border-amber-500/30 rounded-2xl p-3 shadow-2xl backdrop-blur-md flex flex-col gap-2 min-w-[210px] animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="text-[11px] text-amber-300 font-semibold uppercase tracking-wider px-1">
            Call Consultant Nitika Mehara
          </div>
          <a
            href={`tel:${BRAND_INFO.phone1}`}
            className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-slate-100 hover:text-amber-300 border border-amber-500/20 text-sm font-medium transition-all"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>+91 {BRAND_INFO.phone1}</span>
          </a>
          <a
            href={`tel:${BRAND_INFO.phone2}`}
            className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-slate-100 hover:text-amber-300 border border-amber-500/20 text-sm font-medium transition-all"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>+91 {BRAND_INFO.phone2}</span>
          </a>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Call Options"
        className="flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-cosmic-darkest font-semibold px-4 py-3 rounded-full shadow-lg hover:shadow-gold-glow transition-all duration-300 transform hover:scale-105 active:scale-95 border border-amber-300/40 text-sm"
      >
        <Phone className="w-4 h-4" />
        <span className="hidden md:inline font-bold">Call Us</span>
        {isOpen ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
      </button>
    </aside>
  );
};

export default CallFloat;
