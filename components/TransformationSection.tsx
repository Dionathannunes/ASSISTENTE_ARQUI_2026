import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionHeader, Pill } from './UI';
import { CheckCircle2, Circle } from 'lucide-react';

export const TransformationSection: React.FC = () => {
    const transformations = [
        { title: "Clareza", before: "Não sabe por onde começar", after: "Abre e já sabe exatamente o que fazer" },
        { title: "Confiança", before: "Refaz 3x sem certeza", after: "Faz uma vez e entrega" },
        { title: "Paz", before: "Vira a noite com ansiedade", after: "Trabalha com direção e dorme" },
        { title: "Performance", before: "Renderização trava e demora", after: "Renderiza em segundos" },
        { title: "Organização", before: "Arquivos perdidos", after: "Acesso em 2 cliques" },
        { title: "Resultado", before: "Entrega no desespero", after: "Entrega no prazo, sem pânico" }
    ];

    return (
        <Section id="transformation" className="bg-white py-24 relative overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-sage)]/5 to-transparent opacity-50" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <Pill className="mb-6 bg-[var(--color-sage)]/10 text-[var(--color-reseda)] border-none">A Mudança Real</Pill>
                    <SectionHeader title="De perdida a preparada" centered />
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-[50%] top-0 bottom-0 w-px bg-[var(--color-dun)]/30 hidden md:block" />

                    <div className="space-y-12 md:space-y-16">
                        {transformations.map((item, index) => (
                            <motion.div
                                Key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.1 }}
                                className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-center group"
                            >
                                {/* Center Dot */}
                                <div className="absolute left-[50%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-white border-2 border-[var(--color-dun)] rounded-full z-10 hidden md:block group-hover:scale-125 group-hover:border-[var(--color-sage)] transition-all duration-300" />

                                {/* Before (Left Side) */}
                                <div className="text-center md:text-right order-2 md:order-1 relative p-6 bg-gray-50/50 rounded-2xl md:bg-transparent md:p-0 md:rounded-none">
                                    <div className="md:hidden absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-200 px-3 py-1 rounded-full text-xs font-bold text-gray-500 uppercase">Antes</div>
                                    <h4 className="text-[var(--color-reseda)] font-medium mb-1 opacity-60 text-sm uppercase tracking-wider">{item.title}</h4>
                                    <p className="text-[var(--color-reseda)] text-lg font-light line-through decoration-red-300/50 decoration-1">{item.before}</p>
                                </div>

                                {/* After (Right Side) */}
                                <div className="text-center md:text-left order-1 md:order-2 relative p-6 bg-green-50/30 border border-green-100/50 rounded-2xl md:bg-transparent md:border-none md:p-0 shadow-sm md:shadow-none">
                                    <div className="md:hidden absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--color-sage)] px-3 py-1 rounded-full text-xs font-bold text-white uppercase">Depois</div>
                                    <h4 className="text-[var(--color-sage)] font-medium mb-1 opacity-80 text-sm uppercase tracking-wider hidden md:block">{item.title}</h4>
                                    <p className="text-[var(--color-ebony)] text-xl font-medium flex items-center justify-center md:justify-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-[var(--color-sage)] shrink-0" />
                                        {item.after}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};
