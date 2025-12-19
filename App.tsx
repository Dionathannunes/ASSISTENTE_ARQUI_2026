import React from 'react';
import './index.css';
import { HeroSection } from './components/HeroSection';
import { PainPointsSection } from './components/PainPointsSection';
import { KeyInsightSection } from './components/KeyInsightSection';
import { ProductFeaturesSection } from './components/ProductFeaturesSection';
import { SocialProofSection } from './components/SocialProofSection';
import { TransformationSection } from './components/TransformationSection';
import { PricingSection } from './components/PricingSection';
import { CTASection } from './components/CTASection';
import { FAQSection } from './components/FAQSection';
import { FounderSection } from './components/FounderSection';
import { FinalCheckoutSection } from './components/FinalCheckoutSection';

const App: React.FC = () => {
  return (
    <div className="bg-[var(--color-bone)] min-h-screen">
      <main>
        <HeroSection />
        <PainPointsSection />
        <KeyInsightSection />
        <ProductFeaturesSection />
        <SocialProofSection />
        <TransformationSection />
        <PricingSection />
        <CTASection />
        <FAQSection />
        <FounderSection />
        <FinalCheckoutSection />
      </main>
    </div>
  );
};

export default App;
