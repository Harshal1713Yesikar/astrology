import React from 'react';

const StarryBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep cosmic gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,7,100,0.35),rgba(3,7,18,1))]" />

      {/* Subtle cosmic nebulae */}
      <div className="cosmic-orb w-[650px] h-[650px] -top-40 -left-40 bg-purple-900/25" />
      <div className="cosmic-orb w-[700px] h-[700px] top-1/3 -right-60 bg-amber-600/10" />
      <div className="cosmic-orb w-[600px] h-[600px] bottom-10 left-1/4 bg-indigo-950/30" />

      {/* Layer 1: Stars */}
      <div className="absolute inset-0 stars-layer-1 opacity-70" />

      {/* Layer 2: Twinkling Stars */}
      <div className="absolute inset-0 stars-layer-2 opacity-50 animate-pulse-subtle" />
    </div>
  );
};

export default StarryBackground;
