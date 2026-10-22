import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Specialties from './pages/Specialties.jsx';
import Treatments from './pages/Treatments.jsx';
import PatientInformation from './pages/PatientInformation.jsx';
import Blog from './pages/Blog.jsx';
import BlogDetails from './pages/BlogDetails.jsx';
import Contact from './pages/Contact.jsx';
import Gallery from './pages/Gallery.jsx';
import FAQ from './pages/FAQ.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import MedicalDisclaimer from './pages/MedicalDisclaimer.jsx';
import NotFound from './pages/NotFound.jsx';

/**
 * Scrolls to the top (or to an in-page anchor) whenever the route changes.
 */
function RouteChangeHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <RouteChangeHandler />
      <ScrollToTop />
      <Navbar />

      <main id="main-content" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/specialties" element={<Specialties />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/patient-information" element={<PatientInformation />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/medical-disclaimer" element={<MedicalDisclaimer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
