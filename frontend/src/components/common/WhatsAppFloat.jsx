import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppLink, BRAND_INFO } from '../../utils/constants';

const WhatsAppFloat = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-50 flex items-end flex-col gap-2 group">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="relative hidden sm:flex items-center gap-2 bg-slate-900/95 border border-amber-500/30 text-white text-xs py-2 px-3.5 rounded-2xl shadow-xl backdrop-blur-md animate-bounce duration-1000 max-w-xs">
          <span>Need guidance? Chat with Nitika Mehra on WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Close tooltip"
            className="text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-slate-900 border-r border-b border-amber-500/30 transform rotate-45" />
        </div>
      )}

      {/* Floating Button */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Astronit on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-emerald-600 to-green-500 text-white shadow-lg hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] transform hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-emerald-300/40"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-current" />
      </a>
    </aside>
  );
};

export default WhatsAppFloat;
