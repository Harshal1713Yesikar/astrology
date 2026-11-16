import React from 'react';
import { Sparkles } from 'lucide-react';

const SectionHeading = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const alignClass =
    align === 'left'
      ? 'text-left items-start'
      : align === 'right'
      ? 'text-right items-end'
      : 'text-center items-center';

  return (
    <div className={`flex flex-col ${alignClass} mb-12 sm:mb-16 ${className}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-sm text-amber-300 text-xs sm:text-sm font-medium tracking-widest uppercase mb-4 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>{badge}</span>
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl md:text-4xl  lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight max-w-4xl">
        <span className="gold-gradient-text">{title}</span>
      </h2>

      {/* Elegant celestial divider */}
      <div className="flex items-center gap-3 my-4">
        <div className="w-12 h-px bg-gradient-to-r from-transparent to-amber-500/60" />
        <div className="w-2 h-2 rotate-45 bg-amber-400 shadow-gold-glow" />
        <div className="w-12 h-px bg-gradient-to-l from-transparent to-amber-500/60" />
      </div>

      {subtitle && (
        <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl font-light leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
