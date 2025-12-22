import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionHeader, Pill } from './UI';
import { ArrowRight, Check, X } from 'lucide-react';

// Stagger container
const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.03, delayChildren: 0.1 }
    }
};

// Compact Item Animation
const itemAnim = {
    hidden: { opacity: 0, y: 10 },
    show: {
        opacity: 1,
        y: 0,
        transition: { type: "tween", duration: 0.2 }
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
        <Section id="transformation" className="bg-[var(--color-bone)] py-10 relative overflow-hidden">

            <div className="text-center mb-6 relative z-10">
                <Pill className="mb-3 bg-[var(--color-sage)]/10 text-[var(--color-reseda)] border-none text-[10px]">A Mudança Real</Pill>
                <SectionHeader title="De perdida a preparada" centered className="mb-0 !text-[22px] md:!text-[32px]" />
            </div>

            <motion.div
                className="max-w-2xl mx-auto grid grid-cols-1 gap-1.5 relative z-10 px-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
            >
                {transformations.map((item, i) => (
                    <motion.div key={i} variants={itemAnim}>
                        <div className="bg-white rounded-xl px-3 py-2 flex items-center gap-2 border border-gray-100/50 hover:shadow-sm transition-shadow">

                            {/* Before */}
                            <div className="flex items-center gap-1.5 flex-1 min-w-0">
                                <X className="w-3.5 h-3.5 text-red-400 shrink-0" />
                                <p className="text-xs text-[var(--color-reseda)] leading-tight truncate opacity-70">
                                    {item.before}
                                </p>
                            </div>

                            {/* Arrow */}
                            <ArrowRight className="w-3 h-3 text-[var(--color-dun)] shrink-0" />

                            {/* After */}
                            <div className="flex items-center gap-1.5 flex-1 min-w-0">
                                <Check className="w-3.5 h-3.5 text-[var(--color-sage)] shrink-0" />
                                <p className="text-xs font-medium text-[var(--color-ebony)] leading-tight truncate">
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
