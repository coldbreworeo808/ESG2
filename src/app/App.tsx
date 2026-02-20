import { useState } from 'react';
import { TopNav } from './components/verdant-hifi/TopNav';
import { Hero } from './components/verdant-hifi/Hero';
import { RippleDivider } from './components/verdant-hifi/RippleDivider';
import { Story } from './components/verdant-hifi/Story';
import { MaterialInnovation } from './components/verdant-hifi/MaterialInnovation';
import { CleanFactory } from './components/verdant-hifi/CleanFactory';
import { CommunityAction } from './components/verdant-hifi/CommunityAction';
import { ImpactMetrics } from './components/verdant-hifi/ImpactMetrics';
import { VideoSection } from './components/verdant-hifi/VideoSection';
import { CTAContact } from './components/verdant-hifi/CTAContact';
import { Footer } from './components/verdant-hifi/Footer';
import { ReportModal } from './components/verdant-hifi/ReportModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50">
      <TopNav />
      <Hero onDownloadReport={() => setIsModalOpen(true)} />
      <RippleDivider color="#ffffff" />
      <Story />
      <RippleDivider color="#fafaf9" flip />
      <MaterialInnovation />
      <RippleDivider color="#ffffff" />
      <CleanFactory />
      <RippleDivider color="#fafaf9" flip />
      <CommunityAction />
      <RippleDivider color="#ffffff" />
      <ImpactMetrics />
      <RippleDivider color="#fafaf9" flip />
      <VideoSection />
      <RippleDivider color="#ffffff" />
      <CTAContact />
      <Footer />
      <ReportModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}