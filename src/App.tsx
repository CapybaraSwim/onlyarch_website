
import React, { useState } from 'react';
const Header = React.lazy(() => import('./components/Header/Header'));
const Hero = React.lazy(() => import('./components/Hero/Hero'));
const WhyWe = React.lazy(() => import('./components/WhyWe/WhyWe'));
const Advantages = React.lazy(() => import('./components/Advantages/Advantages'));
const OurWorks = React.lazy(() => import('./components/OurWorks/OurWorks'));
const CostCalculation = React.lazy(() => import('./components/CostCalculation/CostCalculation'));
const Pricing = React.lazy(() => import('./components/Pricing/Pricing'));
const OurTeam = React.lazy(() => import('./components/OurTeam/OurTeam'));
const TrustUs = React.lazy(() => import('./components/TrustUs/TrustUs'));
const Footer = React.lazy(() => import('./components/Footer/Footer'));
const MapBlock = React.lazy(() => import('./components/MapBlock/MapBlock'));
const ChatPopup = React.lazy(() => import('./components/ChatPopup/ChatPopup'));
const ChatButton = React.lazy(() => import('./components/ChatPopup/ChatButton/ChatButton'));
const ConsultationPopup = React.lazy(() => import('./components/ConsultationPopup/ConsultationPopup'));

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const openConsultation = () => setIsConsultationOpen(true);

  return (
    <div className="App">
      <Header />
      <Hero onOpenConsultation={openConsultation} />
      <WhyWe onOpenConsultation={openConsultation} />
      <Advantages />
      <OurWorks />
      <CostCalculation />
      <Pricing onOpenConsultation={openConsultation} />
      <OurTeam />
      <TrustUs />
      <MapBlock />
      <Footer />

      <ChatButton onClick={() => setIsChatOpen(true)} />
      <ChatPopup isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      <ConsultationPopup
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
};

export default App;