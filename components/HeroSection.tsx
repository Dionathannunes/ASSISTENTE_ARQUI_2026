import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Section, Button, Pill, FloatingElement } from './UI';

export const HeroSection: React.FC = () => {
    const { scrollY } = useScroll();
    const yBG = useTransform(scrollY, [0, 500], [0, 200]);
    const opacityText = useTransform(scrollY, [0, 300], [1, 0]);
    const scaleText = useTransform(scrollY, [0, 300], [1, 0.8]);

    return (
        <Section id="hero" className="h-[85vh] md:h-screen w-full relative overflow-hidden p-0 flex flex-col justify-between items-center bg-black">
            {/* Immersive Background with Parallax */}
            <div className="absolute inset-0 z-0">
                <motion.div style={{ y: yBG }} className="relative w-full h-[120%] -top-[10%]">
                    <img
                        src="/assets/images/hero_bg_tiktok.png"
                        alt="Workspace Arquitetura"
                        className="w-full h-full object-cover opacity-60"
                        fetchPriority="high"
                        loading="eager"
                        decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
                </motion.div>
            </div>

            {/* Floating Decorations - Lazy Load */}
            <FloatingElement src="/assets/images/icons/1.png" className="top-[15%] right-[10%] w-16 md:w-20 h-16 md:h-20 opacity-60 mix-blend-screen" delay={0} />
            <FloatingElement src="/assets/images/icons/2.png" className="bottom-[20%] left-[10%] w-20 md:w-24 h-20 md:h-24 opacity-60 mix-blend-screen" delay={2} />

            {/* Content with Parallax Opacity */}
            <motion.div
                style={{ opacity: opacityText, scale: scaleText }}
                className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-6 pb-20 pt-10"
            >
                {/* Logo with Bounce */}
                <motion.img
                    initial={{ opacity: 0, y: -50, scale: 0.5 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                    src="/assets/images/logo.png"
                    alt="Assistente Arqui Logo"
                    className="h-[80px] md:h-[100px] w-auto mb-8 drop-shadow-2xl brightness-200 contrast-125"
                />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="max-w-3xl"
                >
                    {/* Staggered Word Reveal for H1 */}
                    <h1 className="text-white text-[32px] md:text-[64px] font-normal leading-[1.1] md:leading-[1.0] mb-6 font-['Aboreto'] tracking-tighter" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.9)' }}>
                        <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                            Clareza, execução e
                        </motion.span>
                        <br />
                        <motion.span
                            className="text-[var(--color-dun)]"
                            initial={{ opacity: 0, y: 20, scale: 1.2 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: 0.8, type: "spring" }}
                        >
                            menos ansiedade.
                        </motion.span>
                        <motion.span
                            className="text-[24px] md:text-[48px] opacity-90 italic tracking-normal"
                            style={{ textShadow: '0 2px 12px rgba(0,0,0,0.7)' }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.8 }}
                            transition={{ delay: 1.2 }}
                        >
                            O resto é com você.
                        </motion.span>
                    </h1>

                    <motion.p
                        className="text-[var(--color-bone)] text-base md:text-2xl font-light mb-10 max-w-xl mx-auto leading-relaxed opacity-95"
                        style={{ textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4 }}
                    >
                        As aulas voltam. Você vai repetir 2025 ou mudar o jogo?
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 1.6, type: "spring", stiffness: 150 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button variant="primary" className="!bg-[var(--color-dun)] !text-[var(--color-ebony)] !border-none !rounded-full !py-4 md:!py-5 !px-8 md:!px-10 !text-lg md:!text-xl shadow-[0_0_40px_rgba(204,191,163,0.4)] w-[90%] md:w-auto" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
                            Não vou repetir 2025
                        </Button>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator with Bounce */}
            <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/50"
            >
                <ArrowDown className="w-6 h-6" />
            </motion.div>
        </Section>
    );
};
