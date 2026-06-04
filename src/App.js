import './App.css';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import StoriesSection from './components/StoriesSection';
import VideoSummarySection from './components/VideoSummarySection';
import PackagesSection from './components/PackagesSection';
import GallerySection from './components/GallerySection';
import InvestmentSection from './components/InvestmentSection';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <AboutSection />
      <StoriesSection />
      <VideoSummarySection />
      <PackagesSection />
      <GallerySection />
      <InvestmentSection />
      <FooterSection />
    </div>
  );
}

export default App;
