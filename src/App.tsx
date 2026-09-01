import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Philosophy from "./components/Philosophy";
import CoreJourney from "./components/CoreJourney";
import ClnchLens from "./components/ClnchLens";
import PageIntelligence from "./components/PageIntelligence";
import OpportunityProfile from "./components/OpportunityProfile";
import Preparation from "./components/Preparation";
import TheSidebar from "./components/TheSidebar";
import OpportunityWatch from "./components/OpportunityWatch";
import TheAgent from "./components/TheAgent";
import Completion from "./components/Completion";
import ProductVision from "./components/ProductVision";
import OpportunityCategories from "./components/OpportunityCategories";
import FinalPhilosophy from "./components/FinalPhilosophy";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#faf9f5] font-sans antialiased">
      <Navbar />
      <Hero />
      <OpportunityCategories />
      <Problem />
      <Philosophy />
      <CoreJourney />
      <ClnchLens />
      <PageIntelligence />
      <OpportunityProfile />
      <Preparation />
      <TheSidebar />
      <OpportunityWatch />
      <TheAgent />
      <Completion />
      <ProductVision />
      <FinalPhilosophy />
      <FinalCTA />
      <Footer />
    </div>
  );
}
