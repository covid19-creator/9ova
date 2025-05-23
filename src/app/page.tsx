import { HeroSection } from '@/components/sections/hero-section';
import { ProjectShowcaseSection } from '@/components/sections/project-showcase-section';
import { BenefitsSection } from '@/components/sections/benefits-section';
import { PricingSection } from '@/components/sections/pricing-section';
import { FaqSection } from '@/components/sections/partners-faq-section';
import { CallToActionSection } from '@/components/sections/call-to-action-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProjectShowcaseSection />
      <BenefitsSection />
      <PricingSection />
      <FaqSection />
      <CallToActionSection />
    </>
  );
}
