import { Suspense, ReactNode } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import BenefitsData from "@/components/BenefitsData";
import FeaturesAccordion from "@/components/FeaturesAccordion";
import Pricing from "@/components/Pricing";
import Testimonials3 from "@/components/Testimonials3";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Metadata } from 'next';

// Add metadata for SEO
export const metadata: Metadata = {
  title: 'Run Smart - All-in-One Training & Nutrition App for Ambitious Runners',
  description: 'Run farther, recover faster, fuel smarter. The intelligent training and nutrition platform designed for busy professionals. Personalized plans, evidence-based nutrition, and recovery optimization in one app.',
  keywords: 'running app, training app, marathon training, triathlon training, running nutrition, recovery optimization, personalized training plans, running performance, endurance training',
};

export default function Home(): JSX.Element {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      <main>
        <Hero />
        <Problem />
        <BenefitsData />
        <FeaturesAccordion />
        <Testimonials3 />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
