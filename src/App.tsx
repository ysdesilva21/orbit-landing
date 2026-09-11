import Header from './components/Header';
import Hero from './sections/hero';
import TrustSection from './sections/Trust';
import './index.css'
import ProblemSection from './sections/Problem';
import PlatformSection from './sections/PlatformSection';
import HowItWorksSection from './sections/HowITWork';
import InsideOrbitSection from './sections/InsideOrbitSection';
import { Reviews } from './sections/Reviews';
import { Pricing } from './sections/Pricing';
import { Questions } from './sections/Questions';
import { Footer } from './sections/Footer';
import { CallToAction } from './sections/CallToAction';

export default function App() {
  return (
    <div className="w-full bg-white">
      <Header />
      <Hero />
      <TrustSection/>
      <ProblemSection/>
      <PlatformSection/>
      <HowItWorksSection/>
      <InsideOrbitSection/>
      <Reviews/>
      <Pricing/>
      <Questions/>
      <CallToAction/>
      <Footer/>
    </div>
  );
}