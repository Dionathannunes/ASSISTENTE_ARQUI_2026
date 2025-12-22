import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section, SectionHeader, Card } from './UI';
import { X, ChevronDown, ChevronUp } from 'lucide-react';

// Stagger container for "addictive" reveal
const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
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

// Collapsible Pain Card Component
const PainCard: React.FC<{ text: string; index: number; isExpanded: boolean; onToggle: () => void }> = ({
    text, index, isExpanded, onToggle
}) => {
    // Split text into title (first few words) and content
    const words = text.split(' ');
    const title = words.slice(0, 4).join(' ') + (words.length > 4 ? '...' : '');

    return (
        <motion.div variants={springItem}>
            <Card
                variant="notification"
                className="!rounded-[20px] !p-0 overflow-hidden bg-gray-50 border-l-4 border-red-200 cursor-pointer"
                onClick={onToggle}
                whileHover={{ scale: 1.01, x: -4 }}
                whileTap={{ scale: 0.99 }}
            >
                <div className="p-5 flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                        <X className="w-4 h-4 text-red-500" />
                    </div>

                    <div className="flex-1 min-w-0">
                        <AnimatePresence mode="wait">
                            {isExpanded ? (
                                <motion.p
                                    key="expanded"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                                    className="text-[var(--color-ebony)] text-lg leading-snug font-normal"
                                >
                                    {text}
                                </motion.p>
                            ) : (
                                <motion.p
                                    key="collapsed"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="text-[var(--color-ebony)] text-lg leading-snug font-normal truncate"
                                >
                                    {title}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </div>

                    <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="shrink-0"
                    >
                        <ChevronDown className="w-5 h-5 text-[var(--color-reseda)]" />
                    </motion.div>
                </div>
            </Card>
        </motion.div>
    );
};

export const PainPointsSection: React.FC = () => {
    const pains = [
        "Você abre o projeto e não sabe por onde começar.",
        "Refaz três vezes porque não tem clareza.",
        "Vira a noite sem saber se está no caminho certo.",
        "Olha o trabalho dos outros e sente que não vai conseguir.",
        "Entrega no prazo. Mas sai destruída mentalmente."
    ];

    // Track which cards are expanded (first 2 expanded by default)
    const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set([0, 1]));

    const toggleCard = (index: number) => {
        setExpandedCards(prev => {
            const newSet = new Set(prev);
            if (newSet.has(index)) {
                newSet.delete(index);
            } else {
                newSet.add(index);
            }
            return newSet;
        });
    };

    const expandAll = () => setExpandedCards(new Set(pains.map((_, i) => i)));
    const collapseAll = () => setExpandedCards(new Set());

    return (
        <Section id="pain-points" className="bg-white relative overflow-hidden">
            <div className="text-center mb-8 max-w-2xl mx-auto relative z-10">
                <SectionHeader
                    title="Você já sabe como é"
                    subtitle="Não precisa explicar. Você sente isso todo semestre."
                    centered
                />

                {/* Expand/Collapse All Toggle */}
                <motion.button
                    onClick={expandedCards.size === pains.length ? collapseAll : expandAll}
                    className="mt-4 text-sm text-[var(--color-reseda)] hover:text-[var(--color-ebony)] transition-colors flex items-center gap-1 mx-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {expandedCards.size === pains.length ? (
                        <>
                            <ChevronUp className="w-4 h-4" />
                            Recolher tudo
                        </>
                    ) : (
                        <>
                            <ChevronDown className="w-4 h-4" />
                            Expandir tudo
                        </>
                    )}
                </motion.button>
            </div>

            {/* Staggered Cards with Spring Physics */}
            <motion.div
                className="max-w-lg mx-auto relative z-10 space-y-3"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
            >
                {pains.map((text, index) => (
                    <PainCard
                        key={index}
                        text={text}
                        index={index}
                        isExpanded={expandedCards.has(index)}
                        onToggle={() => toggleCard(index)}
                    />
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
