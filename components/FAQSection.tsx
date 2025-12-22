import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section, SectionHeader, Card } from './UI';
import { Plus } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string; index: number }> = ({ question, answer, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, rotateX: -90, y: 50 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
        >
            <Card
                variant="primary"
                className="!p-0 !rounded-[20px] overflow-hidden border-0 shadow-sm mb-4 hover:shadow-lg transition-shadow"
            >
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full p-5 md:p-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <span className="text-base md:text-lg font-medium text-[var(--color-ebony)] pr-4">
                        {question}
                    </span>
                    <motion.span
                        className="w-8 h-8 rounded-full bg-[var(--color-bone)] flex items-center justify-center shrink-0"
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    >
                        <Plus className="w-5 h-5 text-[var(--color-ebony)]" />
                    </motion.span>
                </motion.button>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 150, damping: 20 }}
                        >
                            <div className="px-5 pb-5 md:px-6 md:pb-6 pt-0 text-[var(--color-reseda)] text-sm leading-relaxed border-t border-gray-100 text-center">
                                {answer}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Card>
        </motion.div>
    );
};

export const FAQSection: React.FC = () => {
    const faqs = [
        { question: "Funciona no meu semestre?", answer: "Sim. Do primeiro ao último semestre. As ferramentas funcionam pra qualquer etapa da graduação." },
        { question: "Posso usar em qualquer faculdade?", answer: "Total. Não importa onde você estuda. A plataforma funciona pra qualquer curso de arquitetura." },
        { question: "É complicado de usar?", answer: "Zero complicação. Clica, usa, resolve. Simples assim." },
        { question: "E se eu não gostar?", answer: "7 dias de garantia total. Testa, usa. Se não servir, devolve e pronto." }
    ];

    return (
        <Section id="faq" className="bg-[var(--color-bone)] py-16 md:py-24 bg-noise">
            <div className="max-w-2xl mx-auto">
                <SectionHeader title="Tudo claro?" centered className="mb-8 md:mb-12" />

                {faqs.map((faq, index) => (
                    <FAQItem key={index} index={index} {...faq} />
                ))}
            </div>
        </Section>
    );
};
