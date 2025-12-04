import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import GeographicJourney from './components/GeographicJourney';
import EducationTimeline from './components/EducationTimeline';
import CareerTimeline from './components/CareerTimeline';
import AssurantJourney from './components/AssurantJourney';
import CurrentRole from './components/CurrentRole';
import WhatExcites from './components/WhatExcites';
import FamilySection from './components/FamilySection';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <Navigation />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <GeographicJourney />
              <EducationTimeline />
              <CareerTimeline />
              <AssurantJourney />
              <CurrentRole />
              <WhatExcites />
              <FamilySection />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/journey" element={<GeographicJourney />} />
          <Route path="/education" element={<EducationTimeline />} />
          <Route path="/career" element={<CareerTimeline />} />
          <Route path="/family" element={<FamilySection />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
