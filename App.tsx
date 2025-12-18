
import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  CheckCircle2, 
  Clock, 
  Layers, 
  Search, 
  Instagram, 
  ShieldCheck, 
  ChevronDown,
  LayoutGrid,
  Sparkles,
  Plus,
  ArrowRight,
  ExternalLink,
  Trash2,
  Calendar,
  Zap,
  Layout,
  FileText
} from 'lucide-react';
import { Section, Card, Button, SectionHeader, LineArtDecoration } from './components/UI';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative overflow-x-hidden selection:bg-[#A4AC86]/30 selection:text-[#414833] bg-[#F2F3F1] min-h-screen">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 md:h-1.5 bg-[#414833] origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Header / Logo */}
      <header className="fixed top-0 left-0 right-0 z-[90] bg-[#F2F3F1]/80 backdrop-blur-md border-b border-[rgba(65,72,51,0.06)] px-4 md:px-6 py-4">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center">
          <div className="font-display text-[#414833] text-base md:text-lg tracking-[0.2em]">Assistente Arqui</div>
          <Button variant="secondary" className="px-4 py-2 text-[10px] h-9">
            Entrar
          </Button>
        </div>
      </header>

      {/* Hero: DOBRA 1 */}
      <Section id="hero" className="pt-24 md:pt-44 pb-8 md:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-7">
          {/* Left: Copy Card */}
          <Card className="lg:col-span-5 flex flex-col justify-between min-h-[380px] md:min-h-[560px] relative overflow-hidden order-1 lg:order-none">
            <LineArtDecoration className="absolute -bottom-20 -left-20 w-80 h-80 opacity-[0.03]" />
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBE3D2] text-[#414833] text-[9px] md:text-[10px] font-bold tracking-widest mb-6 md:mb-10 border border-[rgba(65,72,51,0.1)] uppercase"
              >
                <Sparkles size={10} className="text-[#737A5D]" /> Semestre 2025.1
              </motion.div>
              <h1 className="text-[32px] md:text-[56px] font-display text-[#414833] leading-[1.1] tracking-tight mb-6 md:mb-8">
                Clareza, execução e menos ansiedade. O resto é com você.
              </h1>
              <p className="text-[#23261C]/60 text-base md:text-xl leading-relaxed mb-8 md:mb-10 max-w-[420px]">
                As aulas voltam. Você vai repetir 2025 ou mudar o jogo?
              </p>
            </div>
            <Button className="w-full md:w-fit group relative z-10">
              Não vou repetir 2025 <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
          </Card>

          {/* Center: Platform Visual */}
          <Card className="lg:col-span-4 bg-[#414833] overflow-hidden p-0 relative min-h-[400px] md:min-h-[500px] border-none shadow-2xl group order-3 lg:order-none">
             <div className="absolute inset-0 bg-gradient-to-br from-[#737A5D]/30 to-black/60 z-0" />
             <div className="absolute inset-0 p-5 md:p-6 flex flex-col z-10">
                <div className="flex justify-between items-center mb-6 md:mb-10">
                   <div className="text-[#EBE3D2] font-display text-[9px] tracking-[0.3em]">PLATAFORMA</div>
                   <div className="flex gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400/40" />
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/40" />
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400/40" />
                   </div>
                </div>
                
                <div className="space-y-3 md:space-y-4">
                  <div className="bg-white/5 backdrop-blur-md rounded-xl p-3 md:p-4 border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                       <LayoutGrid size={12} className="text-[#A4AC86]" />
                       <span className="text-white/40 text-[9px] uppercase tracking-widest font-bold">Saúde do Semestre</span>
                    </div>
                    <div className="text-[#EBE3D2] text-xl md:text-2xl font-display">85% Completo</div>
                    <div className="w-full h-1 bg-white/10 rounded-full mt-2.5 overflow-hidden">
                       <motion.div initial={{ width: 0 }} whileInView={{ width: '85%' }} className="h-full bg-[#A4AC86]" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 md:gap-3">
                    <div className="bg-white/5 backdrop-blur-md rounded-xl p-3 md:p-4 border border-white/10">
                      <div className="text-white/40 text-[8px] uppercase font-bold mb-1">Urgentes</div>
                      <div className="text-red-400 text-lg md:text-xl font-display">02</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-md rounded-xl p-3 md:p-4 border border-white/10">
                      <div className="text-white/40 text-[8px] uppercase font-bold mb-1">Em Dia</div>
                      <div className="text-[#A4AC86] text-lg md:text-xl font-display">14</div>
                    </div>
                  </div>

                  <div className="bg-[#A4AC86]/10 border border-[#A4AC86]/20 rounded-xl p-4 mt-2">
                    <div className="flex items-center gap-2 mb-2">
                       <Zap size={12} className="text-[#CCBFA3]" />
                       <span className="text-[#EBE3D2] text-[9px] uppercase font-bold">AI Render Engine</span>
                    </div>
                    <div className="h-16 bg-black/40 rounded-lg flex items-center justify-center">
                       <Sparkles size={20} className="text-white/20 animate-pulse" />
                    </div>
                  </div>
                </div>
             </div>
             <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <span className="text-[#EBE3D2]/40 font-display text-[8px] tracking-[0.4em] uppercase">Interface Mobile</span>
             </div>
          </Card>

          {/* Right: Feature Snippets */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-7 order-2 lg:order-none">
             <Card className="bg-[#EBE3D2] relative overflow-hidden flex flex-col justify-center items-center py-8 md:py-0 min-h-[160px] md:min-h-[200px] border-none group">
                <LineArtDecoration className="absolute inset-0 scale-150 rotate-45" />
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/40 rounded-full flex items-center justify-center mb-3 md:mb-4 backdrop-blur-md shadow-sm border border-white/40">
                  <Layers className="text-[#414833] w-6 h-6 md:w-7 md:h-7" />
                </div>
                <div className="font-display text-[#414833] text-[9px] tracking-[0.2em] uppercase opacity-60">Organização</div>
             </Card>
             <Card className="bg-white relative overflow-hidden flex flex-col justify-center min-h-[200px] md:min-h-[270px]">
                <div className="flex items-center gap-2 mb-3 md:mb-4">
                   <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                   <span className="text-[9px] font-bold text-red-500 uppercase tracking-widest">Atrasado</span>
                </div>
                <div className="text-[#414833] font-display text-base md:text-lg mb-1 md:mb-2">Projeto de Habitação</div>
                <div className="text-[#23261C]/50 text-xs md:text-sm mb-4 md:mb-6 flex items-center gap-2">
                   <Calendar size={12} /> 23 Nov 2025
                </div>
                <div className="mt-auto h-1 w-full bg-[#F2F3F1] rounded-full overflow-hidden">
                   <div className="h-full bg-red-400 w-1/3" />
                </div>
             </Card>
          </div>
        </div>
      </Section>

      {/* Pain: DOBRA 2 */}
      <Section id="dor" className="bg-[#F2F3F1]">
        <SectionHeader 
          title="Você já sabe como é" 
          subtitle="Não precisa explicar. Você sente isso todo semestre."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-7">
          {[
            "Você abre o projeto e não sabe por onde começar.",
            "Refaz três vezes porque não tem clareza.",
            "Vira a noite sem saber se está no caminho certo.",
            "Olha o trabalho dos outros e sente que não vai conseguir."
          ].map((text, i) => (
            <Card key={i} className="lg:col-span-4 bg-white hover:bg-[#FBFBFA] transition-colors">
              <div className="w-9 h-9 rounded-full bg-[#EBE3D2]/60 flex items-center justify-center mb-4 md:mb-6 border border-[rgba(65,72,51,0.1)] shrink-0">
                <span className="text-[#414833] font-bold text-xs">0{i + 1}</span>
              </div>
              <p className="text-[#23261C] text-lg leading-relaxed font-light">{text}</p>
            </Card>
          ))}
          <Card className="lg:col-span-12 bg-[#414833] border-none shadow-2xl relative overflow-hidden group py-10 md:py-12">
            <LineArtDecoration className="absolute right-0 bottom-0 w-64 h-64 opacity-[0.05]" />
            <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center mb-4 md:mb-6 border border-white/5 shrink-0">
              <span className="text-[#EBE3D2] font-bold text-xs">05</span>
            </div>
            <p className="text-[#EBE3D2] text-xl md:text-2xl leading-relaxed font-medium">Entrega no prazo. Mas sai destruída mentalmente.</p>
          </Card>
        </div>
      </Section>

      {/* Pivot: DOBRA 3 */}
      <Section id="virada">
        <Card className="relative overflow-hidden bg-white py-16 md:py-32 border-none">
          <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full opacity-[0.08]">
             <img src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&q=80&w=1200" alt="Architecture" className="w-full h-full object-cover grayscale" />
          </div>
          <div className="relative z-10 max-w-[840px]">
            <h2 className="text-[32px] md:text-[60px] font-display text-[#414833] leading-[1.1] mb-8 md:mb-12 tracking-tight">
              Tem algo que muda tudo. E tá aqui.
            </h2>
            <p className="text-[#23261C]/80 text-lg md:text-3xl leading-relaxed font-light">
              Renderiza. <span className="text-[#737A5D] font-medium border-b-2 border-[#A4AC86]/40">Organiza.</span> Direciona. Tudo que deveria estar na sua mão desde o início.
            </p>
          </div>
        </Card>
      </Section>

      {/* Product Showcase: DOBRA 4 */}
      <Section id="produto">
        <SectionHeader title="Isso é o Assistente Arqui." subtitle="Uma plataforma completa, pensada por quem vive a rotina do atelier." />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-7">
          <Card className="lg:col-span-5 bg-white flex flex-col justify-center">
            <div className="space-y-6 md:space-y-10">
              {[
                "Renderize as suas imagens em segundos.",
                "Gere imagens pro seu projeto com IA.",
                "Tenha as suas referências organizadas.",
                "Visualize todo o semestre.",
                "Seus projetos e prazos num lugar só.",
                "E muito mais ferramentas incríveis."
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-4 md:gap-6 group">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-[#A4AC86]/10 flex items-center justify-center shrink-0 group-hover:bg-[#414833] group-hover:text-[#EBE3D2] transition-colors">
                    <CheckCircle2 size={16} />
                  </div>
                  <p className="text-[#23261C]/80 text-base md:text-lg leading-relaxed pt-1">{feature}</p>
                </div>
              ))}
            </div>
          </Card>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-7">
            <Card className="bg-[#FBFBFA] p-0 overflow-hidden border-none shadow-xl">
               <div className="p-4 md:p-6 border-b border-gray-100 flex justify-between items-center bg-white">
                  <div className="font-display text-[9px] tracking-widest text-[#414833]">REFERÊNCIAS</div>
                  <Plus size={14} className="text-[#737A5D]" />
               </div>
               <div className="p-4 space-y-3">
                  <div className="relative rounded-xl overflow-hidden aspect-video">
                     <img src="https://images.unsplash.com/photo-1518005020470-58b73f8d0766?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover grayscale" />
                  </div>
                  <div className="space-y-1">
                     <div className="text-sm font-display text-[#414833]">Minimal Interiors</div>
                  </div>
                  <div className="flex gap-2">
                     <Button variant="secondary" className="flex-1 py-2 text-[9px] rounded-lg">Ver site</Button>
                     <div className="w-9 h-9 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100"><Trash2 size={12} className="text-red-400" /></div>
                  </div>
               </div>
            </Card>

            <Card className="bg-[#414833] text-[#EBE3D2] p-0 overflow-hidden border-none shadow-xl">
               <div className="p-4 md:p-6 border-b border-white/5 flex justify-between items-center bg-black/20">
                  <div className="font-display text-[9px] tracking-widest uppercase">Melhorar Render</div>
                  <Sparkles size={14} className="text-[#A4AC86]" />
               </div>
               <div className="p-5 space-y-4">
                  <div className="h-24 border-2 border-dashed border-white/10 rounded-xl flex flex-col items-center justify-center gap-2">
                     <FileText size={20} className="opacity-20" />
                     <span className="text-[8px] opacity-40 uppercase tracking-widest font-bold">Upload</span>
                  </div>
                  <Button className="w-full py-3 text-[9px] font-bold tracking-[0.2em] bg-[#A4AC86] text-[#414833]">Processar</Button>
               </div>
            </Card>

            <Card className="md:col-span-2 bg-white flex flex-col md:flex-row items-center justify-between min-h-[140px] border-none shadow-lg gap-6 p-6 md:p-8">
                <div>
                  <div className="flex items-center gap-3 mb-2 md:mb-4">
                    <div className="w-8 h-8 rounded-full bg-[#EBE3D2]/40 flex items-center justify-center"><Layout size={16} className="text-[#737A5D]" /></div>
                    <div className="font-display text-lg md:text-xl text-[#414833]">Briefing e Conceito</div>
                  </div>
                  <p className="text-[#23261C]/50 text-xs md:text-sm max-w-[300px]">Organize as ideias com ajuda da IA</p>
                </div>
                <div className="w-full md:w-auto">
                   <div className="w-full md:w-48 h-20 bg-[#F2F3F1] rounded-xl p-3 border border-[rgba(65,72,51,0.06)]">
                     <div className="w-full h-1.5 bg-[#CCBFA3]/20 rounded mb-1.5" />
                     <div className="w-4/5 h-1.5 bg-[#CCBFA3]/20 rounded mb-1.5" />
                     <div className="w-3/5 h-1.5 bg-[#CCBFA3]/20 rounded" />
                   </div>
                </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Social Proof: DOBRA 5 */}
      <Section id="prova" className="overflow-hidden px-0 bg-white">
        <div className="px-4">
          <SectionHeader title="O que chegou no direct" centered />
        </div>
        <div className="relative flex overflow-hidden py-8">
          <div className="flex animate-marquee gap-4 md:gap-8 whitespace-nowrap">
            {[...Array(10)].map((_, i) => (
              <Card key={i} className="w-[280px] md:w-[340px] shrink-0 p-6 md:p-8 flex flex-col gap-4 md:gap-6 border-dashed bg-[#F2F3F1]/50 border-[rgba(65,72,51,0.2)]">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-300/40 blur-[2px] shrink-0" />
                  <div className="space-y-1 w-full">
                    <div className="w-20 h-2 bg-gray-300/30 rounded-full blur-[1px]" />
                    <div className="w-12 h-1.5 bg-gray-300/30 rounded-full blur-[1px]" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-300/20 rounded-full w-full blur-[2px]" />
                  <div className="h-3 bg-gray-300/20 rounded-full w-[80%] blur-[2px]" />
                </div>
                <div className="mt-4 text-center text-[8px] font-bold tracking-[0.3em] text-[#414833]/20 uppercase">Placeholder</div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Transformation: DOBRA 6 */}
      <Section id="transformacao">
        <SectionHeader title="De preparada a focada" centered />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-7">
          {[
            "Antes perdida. Agora focada.",
            "Antes refazia. Agora entrega.",
            "Antes ansiosa. Agora tranquila.",
            "Antes demorado. Agora rápido.",
            "Antes bagunça. Agora ordem.",
            "Antes pânico. Agora controle.",
            "Antes dúvida. Agora clareza.",
            "Antes desperdício. Agora foco."
          ].map((text, i) => (
            <Card key={i} className="group flex flex-col justify-center min-h-[140px] md:min-h-[180px] py-8 border-none shadow-sm">
              <div className="space-y-3">
                <div className="flex items-center gap-3 opacity-30">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                  <p className="text-[#23261C] text-sm md:text-base italic">{text.split('. Agora')[0]}.</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#737A5D] shrink-0" />
                  <p className="text-[#414833] text-lg md:text-xl font-medium">Agora {text.split('. Agora')[1]}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Pricing: DOBRA 7 */}
      <Section id="preco">
        <div className="max-w-[800px] mx-auto">
          <Card className="text-center py-16 md:py-32 bg-[#414833] text-[#EBE3D2] border-none shadow-2xl relative overflow-hidden">
            <h2 className="text-2xl md:text-4xl font-display mb-10 md:mb-16 tracking-tight px-4">Tudo isso por quanto?</h2>
            <div className="mb-10 md:mb-14">
              <div className="text-6xl md:text-9xl font-display mb-4 tracking-tighter">R$59<span className="text-xl md:text-2xl font-sans opacity-40 ml-1">/ano</span></div>
              <p className="text-[#EBE3D2]/60 text-base md:text-2xl max-w-[500px] mx-auto font-light leading-relaxed px-6">
                Menos que um final de semana. Mais clareza no semestre inteiro.
              </p>
            </div>
            <Button variant="secondary" className="w-full md:w-auto px-12 md:px-20">Começar agora</Button>
          </Card>
        </div>
      </Section>

      {/* FAQ: DOBRA 9 */}
      <Section id="faq">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader title="Tudo claro?" centered />
          <div className="space-y-4">
            {[
              { q: "Funciona no meu semestre?", a: "Sim. Do primeiro ao último semestre. As ferramentas funcionam pra qualquer etapa da graduação." },
              { q: "Posso usar em qualquer faculdade?", a: "Total. Não importa onde você estuda. A plataforma funciona pra qualquer curso de arquitetura." },
              { q: "É complicado de usar?", a: "Zero complicação. Clica, usa, resolve. Simples assim." },
              { q: "E se eu não gostar?", a: "7 dias de garantia total. Testa, usa. Se não servir, devolve e pronto." }
            ].map((item, i) => (
              <details key={i} className="group bg-white rounded-[24px] border border-[rgba(65,72,51,0.1)] overflow-hidden transition-all duration-300">
                <summary className="flex items-center justify-between p-6 md:p-8 cursor-pointer list-none font-medium text-base md:text-xl text-[#414833] focus:outline-none">
                  <span className="max-w-[80%]">{item.q}</span>
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#F2F3F1] flex items-center justify-center transition-transform duration-300 group-open:rotate-180"><ChevronDown size={18} /></div>
                </summary>
                <div className="px-6 md:px-8 pb-6 md:pb-8 text-[#23261C]/60 text-sm md:text-lg leading-relaxed"><div className="pt-4 md:pt-6 border-t border-[#F2F3F1]">{item.a}</div></div>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* Founder: DOBRA 10 */}
      <Section id="autoridade">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
          <Card className="lg:col-span-5 p-0 overflow-hidden h-[400px] md:h-auto lg:min-h-[540px] border-none shadow-2xl relative order-2 lg:order-none">
             <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800" alt="Andri" className="w-full h-full object-cover grayscale" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#414833]/60 via-transparent to-transparent" />
             <div className="absolute bottom-6 left-6 text-white"><div className="font-display text-xl">Andri</div><div className="text-[9px] uppercase tracking-[0.2em] opacity-60">Criadora</div></div>
          </Card>
          <Card className="lg:col-span-7 flex flex-col justify-center bg-[#EBE3D2]/30 relative overflow-hidden px-6 md:px-16 py-12 md:py-0 order-1 lg:order-none">
            <h2 className="text-3xl md:text-4xl font-display text-[#414833] mb-8 md:mb-12 leading-tight">Quem fez isso entende você</h2>
            <div className="space-y-6 text-[#414833]/90 text-lg md:text-2xl font-light italic leading-relaxed">
              <p>"Oie, eu sou a Andri. Ainda estou na faculdade. Penúltimo semestre. Criei isso porque não aguentava mais sofrer todo semestre."</p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Checkout Final: DOBRA 11 */}
      <Section id="checkout" className="pb-24 md:pb-32 pt-10 md:pt-20">
        <div className="max-w-[960px] mx-auto">
          <Card className="text-center py-16 md:py-32 relative overflow-hidden shadow-2xl bg-white border-none">
            <div className="relative z-10">
              <Button className="w-full md:w-auto px-12 md:px-24 py-6 md:py-8 mb-10 md:mb-16 text-xl md:text-2xl">Começar agora</Button>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 text-[#23261C]/50 text-base md:text-xl font-light">
                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#A4AC86]" /> R$59/ano</span>
                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#A4AC86]" /> Acesso imediato</span>
                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#A4AC86]" /> Garantia de 7 dias</span>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      <footer className="py-16 md:py-24 bg-[#414833] text-[#EBE3D2] px-6 border-t border-white/5 text-center">
        <div className="font-display tracking-[0.4em] text-xl md:text-2xl mb-8 md:mb-12">ASSISTENTE ARQUI</div>
        <div className="flex justify-center gap-8 md:gap-16 opacity-30 text-[8px] md:text-[9px] tracking-[0.4em] uppercase">
          <span>© 2025</span>
          <span>Arquitetura Consciente</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
