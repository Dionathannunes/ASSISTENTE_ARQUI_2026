import React from 'react';
import { motion } from 'framer-motion';
import { Section, Button, Pill } from './UI';
import { ShieldCheck, Zap, ArrowRight } from 'lucide-react';

export const FinalCheckoutSection: React.FC = () => {
    return (
        <Section id="checkout" className="bg-[var(--color-ebony)] py-20 md:py-32 text-center text-white relative overflow-hidden flex flex-col items-center justify-center">
            {/* Background Grain */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            {/* Gradient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-sage)]/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 md:p-16 shadow-2xl"
                >




                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 opacity-80 text-sm md:text-base">
                        <div className="flex items-center gap-2">
                            <Zap className="w-5 h-5 text-[var(--color-dun)]" />
                            <span>Acesso imediato</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5 text-[var(--color-dun)]" />
                            <span>Garantia de 7 dias</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};
