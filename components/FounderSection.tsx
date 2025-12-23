import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionHeader, Card } from './UI';

export const FounderSection: React.FC = () => {
    return (
        <Section id="founder" className="bg-white py-16 md:py-24">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row gap-12 items-center">

                    {/* Image with Tilt Effect */}
                    <motion.div
                        className="flex-1 w-full max-w-sm"
                        initial={{ opacity: 0, x: -100, rotate: -10 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 2 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 80, damping: 15 }}
                        whileHover={{ rotate: 0, scale: 1.02 }}
                    >
                        <div className="relative rounded-[40px] overflow-hidden aspect-[4/5] shadow-2xl">
                            <img
                                src="/assets/images/founder/andri_01.png"
                                alt="Andri"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Copy with Staggered Reveal */}
                    <motion.div
                        className="flex-1 space-y-6"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 80 }}
                    >
                        <motion.h2
                            className="text-3xl md:text-4xl text-[var(--color-ebony)] font-light"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            Quem fez isso <br />
                            <span className="font-normal border-b-2 border-[var(--color-sage)]">entende você.</span>
                        </motion.h2>

                        <div className="space-y-4 text-lg md:text-xl text-[var(--color-reseda)] font-light leading-relaxed">
                            {[
                                "Oie, eu sou a Andri.",
                                "Ainda estou na faculdade. Penúltimo semestre.",
                                "Criei isso porque eu não aguentava mais sofrer todo semestre.",
                                "Não aguentava mais me sentir perdida, improvisando, refazendo."
                            ].map((text, i) => (
                                <motion.p
                                    key={i}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + i * 0.1, type: "spring" }}
                                >
                                    {text}
                                </motion.p>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.9, type: "spring" }}
                            >
                                <Card variant="secondary" className="!p-6 !bg-[var(--color-dun)]/30 rounded-xl mt-4">
                                    <p className="text-[var(--color-ebony)] font-medium">
                                        Eu construí a saída. E agora você pode usar.
                                    </p>
                                </Card>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </Section>
    );
};
