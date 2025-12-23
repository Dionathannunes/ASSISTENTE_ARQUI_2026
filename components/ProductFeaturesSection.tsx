import React from 'react';
import { Section, SectionHeader, Card, Pill, InfiniteMarquee, FloatingElement } from './UI';

export const ProductFeaturesSection: React.FC = () => {
    // DOBRA 4: APRESENTAÇÃO DO PRODUTO (Features + Visual Loop)

    // Renders for the Loop (using available assets)
    const baseImages = [
        "WhatsApp Image 2025-12-11 at 13.05.40.jpeg",
        "WhatsApp Image 2025-12-11 at 13.05.41.jpeg",
        "WhatsApp Image 2025-12-11 at 13.05.42.jpeg",
        "WhatsApp Image 2025-12-11 at 13.05.43.jpeg",
        "WhatsApp Image 2025-12-11 at 13.05.44.jpeg",
        "WhatsApp Image 2025-12-11 at 13.05.45.jpeg"
    ].map(img => `/assets/images/renders/${img}`);

    // Triple the array to ensure wide screen coverage
    const renderImages = [...baseImages, ...baseImages, ...baseImages];

    return (
        <Section id="features" className="bg-[var(--color-white)] py-20 relative px-0" fullWidth>

            {/* Header */}
            <div className="container mx-auto px-6 text-center mb-16 relative z-10">
                <SectionHeader
                    title="Isso é o Assistente Arqui."
                    centered
                />
            </div>

            {/* RENDER LOOP (Visual Hook) */}
            <div className="w-full mb-20 border-y border-gray-100 bg-gray-50 py-8">
                <InfiniteMarquee speed={60}>
                    {renderImages.map((src, i) => (
                        <div key={i} className="w-[300px] aspect-video rounded-2xl overflow-hidden shadow-lg shrink-0">
                            <img src={src} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Render" loading="lazy" decoding="async" />
                        </div>
                    ))}
                </InfiniteMarquee>
                <p className="text-center text-xs text-[var(--color-reseda)] mt-4 uppercase tracking-widest">
                    Renders gerados com o pack de texturas e blocos
                </p>
            </div>

            {/* BENTO GRID OF FEATURES */}
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10">

                {/* Feature 1: Render AI (Large) */}
                <Card variant="primary" className="md:col-span-8 !rounded-[32px] overflow-hidden p-0 min-h-[300px] border-0 shadow-lg relative bg-black group">
                    <div className="absolute inset-0 z-0">
                        <img src="/assets/images/platform/Geração de Imagens.png" className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" alt="IA" loading="lazy" decoding="async" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
                    </div>
                    <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-end md:justify-center max-w-xl">
                        <h3 className="text-2xl md:text-3xl text-white font-medium mb-2" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,1)' }}>Gere imagens pro seu projeto com IA.</h3>
                        <p className="text-white font-light text-lg md:text-xl" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}>Rápido. Direto. Sem enrolação.</p>
                    </div>
                </Card>

                {/* Feature 2: Referencias (Tall) */}
                <Card variant="secondary" className="md:col-span-4 md:row-span-2 !rounded-[32px] p-8 flex flex-col items-center text-center justify-between border-0 shadow-lg bg-[#EBE3D2]">
                    <div className="w-full h-48 rounded-2xl overflow-hidden shadow-inner mb-6 bg-white">
                        <img src="/assets/images/platform/Inspirações.png" className="w-full h-full object-cover object-top" alt="Inspirações" loading="lazy" decoding="async" />
                    </div>
                    <div>
                        <h3 className="text-xl text-[var(--color-ebony)] font-normal mb-2">Tenha as suas referências organizadas.</h3>
                        <p className="text-[var(--color-reseda)] font-light">Sem bagunça.</p>
                    </div>
                </Card>

                {/* Feature 3: Dashboard */}
                <Card variant="primary" className="md:col-span-4 !rounded-[32px] p-8 border-0 shadow-lg group bg-white">
                    <h3 className="text-xl text-[var(--color-ebony)] font-normal mb-2">Visualize todo o semestre.</h3>
                    <p className="text-[var(--color-reseda)] font-light mb-6">Antecipando entregas. Sem surpresas.</p>
                    <div className="w-full h-32 rounded-xl overflow-hidden shadow-sm relative bg-gray-50">
                        <img src="/assets/images/platform/Dashboard.png" className="w-full h-full object-cover object-left-top" alt="Dashboard" loading="lazy" decoding="async" />
                    </div>
                </Card>

                {/* Feature 4: Files */}
                <Card variant="secondary" className="md:col-span-4 !rounded-[32px] p-8 border-0 shadow-lg !bg-[var(--color-ebony)] !text-white">
                    <h3 className="text-xl font-normal mb-2 text-white">Seus projetos, prazos e arquivos.</h3>
                    <p className="opacity-80 font-light text-white">Num lugar só. Sem confusão.</p>
                </Card>

            </div>

            {/* Decoration */}
            <FloatingElement src="/assets/images/icons/9.png" className="bottom-0 left-0 w-48 h-48 opacity-10" />

        </Section>
    );
};
