import React from 'react';

export const SectionTitle: React.FC<{ title: string; subtitle?: string; centered?: boolean }> = ({ title, subtitle, centered = false }) => (
  <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
    <h2 className="text-5xl md:text-7xl font-serif italic mb-6">{title}</h2>
    {subtitle && <p className="text-gray-400 font-light tracking-wide max-w-2xl mt-4 leading-relaxed">{subtitle}</p>}
  </div>
);
