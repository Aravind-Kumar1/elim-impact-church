'use client';

import Header from '../components/Header';
import PrayerRequests from '../components/PrayerRequests';
import Footer from '../components/Footer';

const PrayerPage = () => {
  return (
    <div className="page-root">
      <Header />
      <main>
        <PrayerRequests />
      </main>
      <Footer />
    </div>
  );
};

export default PrayerPage;
