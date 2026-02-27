import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import IntroductionSection from './components/sections/IntroductionSection';
import FaceDetectionSection from './components/sections/FaceDetectionSection';
import AIProcessingSection from './components/sections/AIProcessingSection';
import VerificationResultSection from './components/sections/VerificationResultSection';
import AccessAuthorizationSection from './components/sections/AccessAuthorizationSection';
import MemberManagement from './pages/MemberManagement';
import EntryLogs from './pages/EntryLogs';
import SecuritySystemStatus from './pages/SecuritySystemStatus';

type Page = 'home' | 'members' | 'logs' | 'status';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'oklch(0.97 0.003 240)' }}>
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            <IntroductionSection />
            <FaceDetectionSection />
            <AIProcessingSection />
            <VerificationResultSection />
            <AccessAuthorizationSection />
          </>
        )}
        {currentPage === 'members' && <MemberManagement />}
        {currentPage === 'logs' && <EntryLogs />}
        {currentPage === 'status' && <SecuritySystemStatus />}
      </main>

      <Footer />
    </div>
  );
}
