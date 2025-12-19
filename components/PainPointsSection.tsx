import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionHeader, Card } from './UI';
import { X } from 'lucide-react';

// Stagger container for "addictive" reveal
const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

// Bouncy spring item animation
const springItem = {
    hidden: { opacity: 0, x: 100, scale: 0.8, filter: "blur(10px)" },
    show: {
        opacity: 1,
        x: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: { type: "spring", stiffness: 100, damping: 12 }
    }
};

export const PainPointsSection: React.FC = () => {
    const pains = [
        "Você abre o projeto e não sabe por onde começar.",
        "Refaz três vezes porque não tem clareza.",
        "Vira a noite sem saber se está no caminho certo.",
        "Olha o trabalho dos outros e sente que não vai conseguir.",
        "Entrega no prazo. Mas sai destruída mentalmente."
    ];

    return (
        <Section id="pain-points" className="bg-white relative overflow-hidden">
            <div className="text-center mb-12 max-w-2xl mx-auto relative z-10">
                <SectionHeader
                    title="Você já sabe como é"
                    subtitle="Não precisa explicar. Você sente isso todo semestre."
                    centered
                />
            </div>

            {/* Staggered Cards with Spring Physics */}
            <motion.div
                className="max-w-lg mx-auto relative z-10 space-y-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
            >
                {pains.map((text, index) => (
                    <motion.div key={index} variants={springItem}>
                        <Card
                            variant="notification"
                            className="!rounded-[20px] !p-5 flex items-start gap-4 bg-gray-50 border-l-4 border-red-200 hover:scale-[1.02] hover:-translate-x-1 transition-transform cursor-default"
                        >
                            <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-1">
                                <X className="w-4 h-4 text-red-500" />
                            </div>
                            <p className="text-[var(--color-ebony)] text-lg leading-snug font-normal">
                                {text}
                            </p>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>

            {/* Background Decorations */}
            <motion.div
                className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.3 }}
                viewport={{ once: true }}
            >
                <img src="/assets/images/icons/11.png" className="absolute top-20 right-0 w-64 h-64 opacity-10" />
                <img src="/assets/images/icons/13.png" className="absolute bottom-20 left-0 w-64 h-64 opacity-10" />
            </motion.div>
        </Section>
    );
};
