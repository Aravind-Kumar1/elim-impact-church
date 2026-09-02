import Header from '../components/Header';
import Footer from '../components/Footer';
import VerseSection from '../components/VerseSection';
import VideoSection from '../components/VideoSection'; // Import the VideoSection component
import YouthVideoSection from '../components/YouthVideoSection'
import  MissionaryPage from '../components/MissionaryPage';
import styles from '../styles/kidsYouth.module.css';



export default function KidsYouthPage() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        {/* Verse Section */}
        <VerseSection />
        
        {/* Video Section */}
        <VideoSection /> {/* Now this component handles displaying the videos */}
        <YouthVideoSection />
        <MissionaryPage/>
      </main>
      <Footer />
    </>
  );
}
