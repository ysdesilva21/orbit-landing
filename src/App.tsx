import Header from './components/Header';
import Hero from './sections/hero';
import TrustSection from './sections/Trust';
import './index.css'
import ProblemSection from './sections/Problem';

export default function App() {
  return (
    <div className="w-full bg-white">
      <Header />
      <Hero />
      <TrustSection/>
      <ProblemSection/>
    </div>
  );
}