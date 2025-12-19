import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionHeader, Pill } from './UI';
import { ArrowRight, Check, X } from 'lucide-react';

// Stagger container
const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.05, delayChildren: 0.1 }
    }
};

// Compact Item Animation
const itemAnim = {
    hidden: { opacity: 0, x: -20 },
    show: {
        opacity: 1,
        x: 0,
        transition: { type: "spring", stiffness: 100 }
    }
};

export const TransformationSection: React.FC = () => {
    const transformations = [
        { before: "Abria o projeto e não sabia por onde começar", after: "Abre e já sabe exatamente o que fazer" },
        { before: "Refazia três vezes porque não tinha certeza", after: "Faz uma vez. Com clareza. E entrega" },
        { before: "Virava a noite sem saber se estava certo", after: "Trabalha com direção. E dorme tranquila" },
        { before: "Renderização travava e perdia horas", after: "Renderiza em segundos. Sem travar" },
        { before: "Referências perdidas em 50 pastas", after: "Tudo organizado. Acesso em 2 cliques" },
        { before: "Entregava no desespero de última hora", after: "Entrega no prazo. Sem pânico" },
        { before: "Se comparava e achava que não ia dar conta", after: "Foca no seu projeto. E avança" },
        { before: "Perdia tempo procurando o que fazer", after: "Executa direto. Sem desperdício" }
    ];

    return (
        <Section id="transformation" className="bg-white py-16 relative overflow-hidden">
            {/* Decoration */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[var(--color-sage)]/10 via-transparent to-transparent opacity-50 pointer-events-none" />

            <div className="text-center mb-10 relative z-10">
                <Pill className="mb-4 bg-[var(--color-sage)]/10 text-[var(--color-reseda)] border-none">A Mudança Real</Pill>
                <SectionHeader title="De perdida a preparada" centered className="mb-0" />
            </div>

            <motion.div
                className="max-w-4xl mx-auto flex flex-col gap-3 relative z-10 px-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
            >
                {transformations.map((item, i) => (
                    <motion.div key={i} variants={itemAnim}>
                        <div className="bg-gray-50 rounded-2xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-6 hover:bg-white hover:shadow-md transition-all border border-gray-100">

                            {/* Before */}
                            <div className="flex items-start gap-3 flex-1 opacity-70">
                                <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                <p className="text-base text-[var(--color-reseda)] leading-tight">
                                    <span className="md:hidden text-xs font-bold text-red-400 uppercase mr-2">Antes:</span>
                                    {item.before}
                                </p>
                            </div>

                            {/* Arrow */}
                            <ArrowRight className="w-5 h-5 text-[var(--color-dun)] shrink-0 hidden md:block" />

                            {/* After */}
                            <div className="flex items-start gap-3 flex-1">
                                <Check className="w-5 h-5 text-[var(--color-sage)] shrink-0 mt-0.5" />
                                <p className="text-base font-medium text-[var(--color-ebony)] leading-tight">
                                    <span className="md:hidden text-xs font-bold text-[var(--color-sage)] uppercase mr-2">Depois:</span>
                                    {item.after}
                                </p>
                            </div>

                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
};
