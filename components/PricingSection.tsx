import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionHeader, Card, Button, Pill, FloatingElement } from './UI';

export const PricingSection: React.FC = () => {
    return (
        <Section id="pricing" className="bg-[var(--color-bone)] py-16 md:py-24 bg-noise relative">
            <FloatingElement src="/assets/images/icons/12.png" className="top-10 left-10 w-32 h-32 opacity-10" />
            <FloatingElement src="/assets/images/icons/14.png" className="bottom-10 right-10 w-48 h-48 opacity-10" />

            <div className="max-w-3xl mx-auto text-center relative z-10">
                <SectionHeader title="Tá, mas tudo isso por quanto?" centered />

                {/* Explosive Card Reveal */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: 100, rotateX: 45 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.2 }}
                >
                    <Card variant="premium" className="!p-6 md:!p-10 !rounded-[32px] md:!rounded-[48px] bg-[var(--color-ebony)] text-white shadow-2xl relative overflow-hidden group">
                        {/* Glossy Effect */}
                        <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-gradient-to-br from-white/10 via-transparent to-transparent rotate-12 group-hover:rotate-45 transition-all duration-1000" />

                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                        >
                            <Pill className="mb-8 bg-[var(--color-dun)] text-[var(--color-ebony)] border-none py-2 px-6 font-bold">Oferta Única</Pill>
                        </motion.div>

                        <motion.div
                            className="flex items-center justify-center gap-2 mb-4"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, type: "spring" }}
                        >
                            <span className="text-4xl font-light text-[var(--color-dun)] opacity-50 relative top-1">R$</span>
                            <motion.span
                                className="text-[80px] md:text-[100px] leading-none font-bold tracking-tighter text-[var(--color-white)]"
                                initial={{ scale: 3, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
                            >
                                59
                            </motion.span>
                            <div className="flex flex-col items-start">
                                <span className="text-xl font-light text-[var(--color-dun)]">/ano</span>
                            </div>
                        </motion.div>

                        <motion.p
                            className="text-[var(--color-bone)] text-lg mb-10 max-w-sm mx-auto opacity-90"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.9 }}
                        >
                            Menos que você gasta num final de semana. <br />
                            <span className="text-[var(--color-dun)] font-medium">Mais clareza no semestre inteiro.</span>
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, type: "spring" }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button variant="primary" className="!bg-[var(--color-dun)] !text-[var(--color-ebony)] !border-none !rounded-full !py-5 !px-12 !text-xl w-full md:w-auto shadow-xl hover:bg-white transition-all">
                                Começar agora
                            </Button>
                        </motion.div>
                    </Card>
                </motion.div>
            </div>
        </Section>
    );
};
