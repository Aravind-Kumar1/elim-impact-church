import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Pastor from '../components/Pastor';
import About from '../components/About';
import Ministries from '../components/Ministries';
import Testimonial from '../components/Testimonial';
import ChurchTimings from '../components/ChurchTimings';
import ContactUs from '../components/ContactUs';

const Home = () => {
  return (
    <div className="page-root">
      <Header />
      <main>
        <Hero />
        <Pastor />
        <About />
        <Ministries />
        <Testimonial />
        <ChurchTimings />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
