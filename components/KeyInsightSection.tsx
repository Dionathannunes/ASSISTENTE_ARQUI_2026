import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionHeader, FloatingElement } from './UI';

// Word-by-word reveal
const wordReveal = {
    hidden: { opacity: 0, y: 20 },
    show: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, type: "spring", stiffness: 100 }
    })
};

export const KeyInsightSection: React.FC = () => {
    const words = ["Tem", "algo", "que", "muda", "tudo."];

    return (
        <Section id="insight" className="bg-[var(--color-ebony)] py-16 md:py-32 relative overflow-hidden text-white flex items-center justify-center min-h-[50vh] md:min-h-[60vh]">

            <FloatingElement src="/assets/images/icons/5.png" className="top-10 left-10 w-32 h-32 opacity-20 filter invert" />

            <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    {/* Simplified Motion Wrapper */}
                    <motion.div>
                        {/* Word-by-word animated title with Stagger */}
                        <h2 className="text-[36px] md:text-[60px] font-['Aboreto'] leading-tight mb-8 flex flex-wrap justify-center gap-x-4 text-white">
                            {words.map((word, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15, type: "spring", stiffness: 100 }}
                                    className={i === words.length - 1 ? "text-[var(--color-dun)]" : "text-white"}
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </h2>

                        <motion.p
                            className="text-[var(--color-dun)] border-b-2 border-[var(--color-dun)] inline-block pb-1 text-2xl md:text-4xl mb-8"
                            initial={{ opacity: 0, width: 0 }}
                            whileInView={{ opacity: 1, width: "auto" }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.0, duration: 0.8 }}
                        >
                            E tá aqui.
                        </motion.p>

                        <motion.p
                            className="text-xl md:text-2xl font-light text-[var(--color-bone)] leading-relaxed max-w-2xl mx-auto"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.2, type: "spring" }}
                        >
                            Renderiza. Organiza. Direciona. <br />
                            <span className="opacity-70 text-lg md:text-xl mt-4 block">
                                Tudo que deveria estar na sua mão desde o início.
                            </span>
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            {/* Pulsing Background Glow */}
            <motion.div
                className="absolute inset-0 bg-gradient-radial from-[var(--color-dun)]/10 via-transparent to-transparent pointer-events-none"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut"
                }}
            />
        </Section>
    );
};
