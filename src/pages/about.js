'use client';

import AboutHero from '../components/AboutHero';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MissionVision from '../components/MissionVision';
import HistorySection from '../components/HistorySection';
import FaithfulServants from '../components/FaithfulServants';
import TeamsSection from '../components/TeamsSection';
import CallToActionSection from '../components/CallToActionSection';

const AboutPage = () => {
  return (
    <div className="page-root">
      <Header />
      <main>
        <AboutHero />
        <MissionVision />
        <HistorySection />
        <FaithfulServants />
        <TeamsSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
