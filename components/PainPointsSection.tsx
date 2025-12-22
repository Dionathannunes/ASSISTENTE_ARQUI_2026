import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionHeader } from './UI';
import { XCircle } from 'lucide-react';

const PainCard: React.FC<{ text: string; index: number }> = ({ text, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        className="group relative h-full"
    >
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-dun)]/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative bg-white/60 backdrop-blur-md border border-white/80 p-6 md:p-8 rounded-2xl h-full shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-center">
            <div className="flex items-start gap-4">
                <XCircle className="w-8 h-8 text-red-300/80 shrink-0 mt-1" strokeWidth={1.5} />
                <p className="text-[var(--color-ebony)] text-lg font-light leading-relaxed">
                    {text}
                </p>
            </div>
        </div>
    </motion.div>
);

export const PainPointsSection: React.FC = () => {
    const pains = [
        "Você abre o projeto e não sabe por onde começar.",
        "Refaz três vezes porque não tem clareza.",
        "Vira a noite sem saber se está no caminho certo.",
        "Olha o trabalho dos outros e sente que não vai conseguir.",
        "Entrega no prazo. Mas sai destruída mentalmente."
    ];

    return (
        <Section id="pain-points" className="bg-[var(--color-bone)]/30 relative overflow-hidden py-24">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-40 bg-[url('/assets/images/noise.png')] mix-blend-overlay pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-2xl mx-auto text-center mb-16">
                    <SectionHeader
                        title="Você já sabe como é"
                        subtitle="O ciclo que se repete todo semestre."
                        centered
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
                    {pains.map((text, index) => (
                        <div key={index} className={index === 4 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""}>
                            <PainCard text={text} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
