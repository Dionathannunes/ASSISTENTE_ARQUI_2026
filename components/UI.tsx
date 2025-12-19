import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

// --- Types ---
interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  fullWidth?: boolean;
}

interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'glass' | 'notification' | 'premium';
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

// --- Components ---

// Floating Decorative Element Component
export const FloatingElement: React.FC<{
  src: string;
  className?: string;
  delay?: number;
  duration?: number;
}> = ({ src, className = '', delay = 0, duration = 10 }) => (
  <motion.div
    className={`absolute pointer-events-none z-0 ${className}`}
    animate={{
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      repeat: Infinity,
      duration: duration,
      ease: "easeInOut",
      delay: delay
    }}
  >
    <img
      src={src}
      alt="Elemento decorativo"
      className="w-full h-full object-contain opacity-40"
      loading="lazy"
      decoding="async"
    />
  </motion.div>
);

// Infinite Marquee Component
export const InfiniteMarquee: React.FC<{
  children: React.ReactNode;
  direction?: 'left' | 'right';
  speed?: number;
  className?: string;
}> = ({ children, direction = 'left', speed = 20, className = '' }) => {
  return (
    <div className={`flex overflow-hidden relative w-full ${className}`}>
      <motion.div
        className="flex gap-8 min-w-full shrink-0 items-center py-4"
        animate={{
          x: direction === 'left' ? ["0%", "-100%"] : ["-100%", "0%"]
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity
        }}
      >
        {children}
      </motion.div>
      <motion.div
        className="flex gap-8 min-w-full shrink-0 items-center py-4 absolute top-0 left-full"
        style={{ left: direction === 'left' ? '100%' : '-100%' }}
        animate={{
          x: direction === 'left' ? ["0%", "-100%"] : ["-100%", "0%"]
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const Section: React.FC<SectionProps> = ({
  id,
  className = '',
  children,
  fullWidth = false,
  ...props
}) => {
  return (
    <section
      id={id}
      className={`min-h-[auto] md:min-h-screen w-full flex flex-col justify-center py-8 md:py-20 relative overflow-hidden ${className}`}
      {...props}
    >
      <motion.div
        className={fullWidth ? 'w-full' : 'container mx-auto px-4 md:px-6 relative z-10'}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-5%" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'primary',
  ...props
}) => {
  const baseStyles = "rounded-[24px] md:rounded-[32px] p-5 md:p-8 transition-all duration-500 ease-out";
  const variants = {
    primary: "bg-white shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-gray-100",
    secondary: "bg-[var(--color-dun)] text-[var(--color-ebony)] shadow-lg",
    glass: "bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)]",
    notification: "bg-white rounded-[24px] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-gray-50/50 hover:-translate-y-1",
    premium: "bg-[var(--color-dun)] text-[var(--color-ebony)] shadow-[0_20px_40px_rgba(164,172,134,0.2)] border border-[var(--color-reseda)]/20"
  };

  return (
    <motion.div
      className={`${baseStyles} ${variants[variant as keyof typeof variants] || variants.primary} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  variant = 'primary',
  fullWidth = false,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-[40px] font-medium transition-all duration-300 cursor-pointer";
  const variants = {
    primary: "bg-white text-[var(--color-ebony)] border-2 border-[var(--color-ebony)] hover:bg-[var(--color-sage)] hover:text-white hover:border-[var(--color-sage)]",
    secondary: "bg-[var(--color-ebony)] text-white hover:bg-[var(--color-reseda)]"
  };
  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variants[variant]} px-8 py-4 text-base ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const SectionHeader: React.FC<{ title: string; subtitle?: string; centered?: boolean; className?: string }> = ({
  title,
  subtitle,
  centered = false,
  className = ''
}) => {
  return (
    <div className={`mb-8 md:mb-12 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-[28px] md:text-[40px] text-[var(--color-ebony)] mb-4 font-['Aboreto'] font-normal leading-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[16px] md:text-[20px] text-[var(--color-reseda)] font-light leading-relaxed max-w-2xl"
          style={{ margin: centered ? '0 auto' : undefined }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export const LineArtDecoration: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 50 C 20 0 80 0 100 50" stroke="currentColor" strokeWidth="0.5" />
    <path d="M0 50 C 20 100 80 100 100 50" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" />
  </svg>
);

export const Pill: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <span className={`inline-block px-4 py-1.5 rounded-full border border-[var(--color-ebony)]/20 bg-white/80 backdrop-blur-sm text-[var(--color-ebony)] text-xs md:text-sm uppercase tracking-widest font-medium ${className}`}>
    {children}
  </span>
);
