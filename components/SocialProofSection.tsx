import React from 'react';
import { Section, SectionHeader, Card, InfiniteMarquee } from './UI';

export const SocialProofSection: React.FC = () => {
    // DOBRA 5: PROVA VISUAL (8 prints, loop)
    const baseTestimonials = [
        "/assets/images/testimonials/depoimento_01.jpeg",
        "/assets/images/testimonials/depoimento_02.jpeg",
        "/assets/images/testimonials/depoimento_03.jpeg",
        "/assets/images/testimonials/depoimento_04.jpeg",
        "/assets/images/testimonials/depoimento_05.jpeg",
        "/assets/images/testimonials/depoimento_06.jpeg",
    ];

    // Duplicate to ensure loop smoothness
    const testimonials = [...baseTestimonials, ...baseTestimonials, ...baseTestimonials];

    return (
        <Section id="social-proof" className="bg-[var(--color-bone)] py-16 md:py-24 overflow-hidden" fullWidth>
            <div className="container mx-auto px-6 text-center mb-12">
                <SectionHeader
                    title="O que chegou no direct"
                    centered
                />
            </div>

            {/* Loop Infinito */}
            <InfiniteMarquee speed={60} direction="left">
                {testimonials.map((src, i) => (
                    <div key={i} className="w-[280px] md:w-[320px] shrink-0">
                        <Card
                            variant="glass"
                            className="p-0 overflow-hidden border-0 bg-white shadow-xl hover:scale-105 transition-transform duration-300 rounded-[20px]"
                        >
                            <img
                                src={src}
                                alt={`Depoimento ${i + 1}`}
                                className="w-full h-auto object-cover"
                                loading="lazy"
                                decoding="async"
                            />
                        </Card>
                    </div>
                ))}
            </InfiniteMarquee>
        </Section>
    );
};
