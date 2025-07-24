import Hero from "@/components/marketing/Hero";
import ProcessSection from "@/components/marketing/ProcessSection";
import DesignServicesSection from "@/components/marketing/DesignServicesSection";
import WhyMeSection from "@/components/marketing/WhyMeSection";
import { PricingSection } from "@/components/marketing/Pricing";
import Doubts from "@/components/marketing/Doubts";
import { TestimonialsSection } from "@/components/marketing/TestimonialsSection";
import { Footer } from "@/components/marketing/Footer";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <ProcessSection />
      <DesignServicesSection />
      <WhyMeSection />
      <PricingSection />
      <TestimonialsSection />
      <Doubts/>
      <Footer />
    </div>
  );
}
