
import React from 'react';
import { motion } from 'framer-motion';
import { ButtonProps, CardProps, SectionProps } from '../types';

export const Section: React.FC<SectionProps> = ({ id, className = '', children }) => (
  <section id={id} className={`py-12 md:py-28 px-4 md:px-8 relative overflow-hidden ${className}`}>
    <div className="max-w-[1200px] mx-auto relative z-10">
      {children}
    </div>
  </section>
);

export const Card: React.FC<CardProps> = ({ className = '', children, hoverEffect = true }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    whileHover={hoverEffect ? { y: -6, boxShadow: '0 25px 60px rgba(20,22,16,0.12)' } : {}}
    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    className={`bg-white border border-[rgba(65,72,51,0.08)] rounded-[28px] md:rounded-[36px] p-6 md:p-12 shadow-[0_12px_40px_rgba(20,22,16,0.06)] ${className}`}
  >
    {children}
  </motion.div>
);

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, onClick, className = '' }) => {
  const baseStyles = "px-8 md:px-10 py-4 md:py-5 rounded-full font-bold transition-all duration-500 text-center inline-flex items-center justify-center cursor-pointer active:scale-95 text-[10px] md:text-[11px] tracking-[0.2em] md:tracking-[0.3em] uppercase whitespace-nowrap";
  const variants = {
    primary: "bg-[#414833] text-[#EBE3D2] shadow-[0_15px_35px_rgba(65,72,51,0.25)] hover:shadow-[0_20px_50px_rgba(65,72,51,0.35)] hover:bg-[#323828] border border-transparent",
    secondary: "bg-white text-[#414833] border border-[rgba(65,72,51,0.15)] hover:bg-[#FBFBFA] hover:border-[rgba(65,72,51,0.4)] shadow-sm"
  };

  return (
    <motion.button 
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export const SectionHeader: React.FC<{ title: string; subtitle?: string; centered?: boolean }> = ({ title, subtitle, centered = false }) => (
  <div className={`mb-12 md:mb-20 ${centered ? 'text-center mx-auto' : 'text-left'}`}>
    <motion.h2 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-[28px] md:text-[52px] font-display text-[#414833] leading-[1.1] mb-6 md:mb-8 tracking-tight"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-[#23261C]/50 text-base md:text-2xl font-light leading-relaxed max-w-[720px] ${centered ? 'mx-auto' : ''}`}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export const LineArtDecoration: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={`opacity-[0.1] pointer-events-none transition-opacity duration-1000 ${className}`}
  >
    <path d="M0 100L100 0M20 100L100 20M40 100L100 40M60 100L100 60M80 100L100 80" stroke="#414833" strokeWidth="0.2" />
    <path d="M0 0L100 100M0 20L80 100M0 40L60 100M0 60L40 100M0 80L20 100" stroke="#414833" strokeWidth="0.2" />
    <rect x="5" y="5" width="90" height="90" stroke="#414833" strokeWidth="0.05" />
    <circle cx="50" cy="50" r="40" stroke="#414833" strokeWidth="0.05" />
    <line x1="50" y1="0" x2="50" y2="100" stroke="#414833" strokeWidth="0.05" strokeDasharray="2 2" />
    <line x1="0" y1="50" x2="100" y2="50" stroke="#414833" strokeWidth="0.05" strokeDasharray="2 2" />
  </svg>
);
