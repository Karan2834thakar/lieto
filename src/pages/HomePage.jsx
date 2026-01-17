import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Atmosphere from '../components/Atmosphere';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

function HomePage() {
    return (
        <div className="min-h-screen">
            <Hero />
            <About />
            <Features />
            <HowItWorks />
            <Atmosphere />
            <CTA />
            <Footer />
        </div>
    );
}

export default HomePage;
