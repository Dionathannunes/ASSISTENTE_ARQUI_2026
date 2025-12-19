import React from 'react';
import { Section, Button } from './UI';
import { ArrowRight } from 'lucide-react';

export const CTASection: React.FC = () => {
    // DOBRA 8: CTA NATURAL
    return (
        <Section id="cta-natural" className="bg-white py-20 flex flex-col items-center justify-center text-center">
            <Button variant="primary" className="!bg-[var(--color-ebony)] !text-white !border-none !rounded-full !py-6 !px-16 !text-2xl shadow-2xl hover:scale-105 transition-transform group">
                Começar agora
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
        </Section>
    );
};
