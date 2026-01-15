import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { NavbarInnovative } from './components/NavbarInnovative';
import { Footer } from './components/Footer';
import { SmoothScroll } from './components/SmoothScroll';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { AboutUs } from './pages/AboutUs';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Contact } from './pages/Contact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsConditions } from './pages/TermsConditions';
import { TaxCalculator } from './pages/TaxCalculator';

export default function App() {
  return (
    <Router>
      <SmoothScroll />
      <div className="flex flex-col min-h-screen relative">
        <NavbarInnovative />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tax-calculator" element={<TaxCalculator />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsConditions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}