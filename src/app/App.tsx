import { useState } from 'react';
import { TopNav } from '@/app/components/verdant-hifi/TopNav';
import { Hero } from '@/app/components/verdant-hifi/Hero';
import { RippleDivider } from '@/app/components/verdant-hifi/RippleDivider';
import { Story } from '@/app/components/verdant-hifi/Story';
import { MaterialInnovation } from '@/app/components/verdant-hifi/MaterialInnovation';
import { CleanFactory } from '@/app/components/verdant-hifi/CleanFactory';
import { CommunityAction } from '@/app/components/verdant-hifi/CommunityAction';
import { ImpactMetrics } from '@/app/components/verdant-hifi/ImpactMetrics';
import { VideoSection } from '@/app/components/verdant-hifi/VideoSection';
import { CTAContact } from '@/app/components/verdant-hifi/CTAContact';
import { Footer } from '@/app/components/verdant-hifi/Footer';
import { ReportModal } from '@/app/components/verdant-hifi/ReportModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <TopNav />

      {/* Hero Section */}
      <Hero onDownloadReport={() => setIsModalOpen(true)} />

      {/* Ripple Divider */}
      <RippleDivider color="#ffffff" />

      {/* Story Section */}
      <Story />

      {/* Ripple Divider */}
      <RippleDivider color="#fafaf9" flip />

      {/* Material Innovation */}
      <MaterialInnovation />

      {/* Ripple Divider */}
      <RippleDivider color="#ffffff" />

      {/* Clean Factory */}
      <CleanFactory />

      {/* Ripple Divider */}
      <RippleDivider color="#fafaf9" flip />

      {/* Community Action */}
      <CommunityAction />

      {/* Ripple Divider */}
      <RippleDivider color="#ffffff" />

      {/* Impact Metrics */}
      <ImpactMetrics />

      {/* Ripple Divider */}
      <RippleDivider color="#fafaf9" flip />

      {/* Video Section */}
      <VideoSection />

      {/* Ripple Divider */}
      <RippleDivider color="#ffffff" />

      {/* CTA + Contact Form */}
      <CTAContact />

      {/* Footer */}
      <Footer />

      {/* Report Download Modal */}
      <ReportModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
