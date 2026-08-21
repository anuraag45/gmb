import { useState } from 'react';
import { Header } from '@/components/site/Header';
import { Hero } from '@/components/site/Hero';
import { WhyUs } from '@/components/site/WhyUs';
import { PrincipalMessage } from '@/components/site/PrincipalMessage';
import { Departments } from '@/components/site/Departments';
import { StudentProjects } from '@/components/site/StudentProjects';
import { Admissions } from '@/components/site/Admissions';
import { Stats } from '@/components/site/Stats';
import { AlumniSpotlight } from '@/components/site/AlumniSpotlight';
import { GalleryPreview } from '@/components/site/GalleryPreview';
import { Footer } from '@/components/site/Footer';
import { AdmissionModal } from '@/components/site/AdmissionModal';
import { ProspectusModal } from '@/components/site/ProspectusModal';

export function App() {
  const [admissionModalOpen, setAdmissionModalOpen] = useState(false);
  const [prospectusModalOpen, setProspectusModalOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState<string | undefined>(undefined);

  const handleOpenApply = (branch?: string) => {
    setSelectedBranch(branch);
    setAdmissionModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      {/* Top Notification Bar & Navbar */}
      <Header onApplyClick={() => handleOpenApply()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onApplyClick={() => handleOpenApply()} />

        {/* Why GMB Polytechnic */}
        <WhyUs />

        {/* From The Principal */}
        <PrincipalMessage />

        {/* Academics / 4 Diploma Programmes */}
        <Departments onApplyForDepartment={(deptName) => handleOpenApply(deptName)} />

        {/* Student Innovation & Capstone Projects Showcase */}
        <StudentProjects />

        {/* Admissions Steps & 2026 Intake Banner */}
        <Admissions
          onApplyClick={() => handleOpenApply()}
          onProspectusClick={() => setProspectusModalOpen(true)}
        />

        {/* Key Placement & Legacy Stats */}
        <Stats />

        {/* Alumni on the Coast Spotlight */}
        <AlumniSpotlight />

        {/* Campus Life / Gallery Preview */}
        <GalleryPreview />
      </main>

      {/* Institutional Footer */}
      <Footer />

      {/* Interactive Admission Application Modal */}
      <AdmissionModal
        open={admissionModalOpen}
        onOpenChange={setAdmissionModalOpen}
        defaultBranch={selectedBranch}
      />

      {/* Prospectus Download Modal */}
      <ProspectusModal
        open={prospectusModalOpen}
        onOpenChange={setProspectusModalOpen}
      />
    </div>
  );
}

export default App;
