/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Story from './components/Story';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import BottomCTA from './components/BottomCTA';
import Logos from './components/Logos';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import { ContactPage, ContentPage, NotFoundPage } from './pages/Pages';
import { pageContent } from './pages/pageContent';

function HomePage() {
  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900 text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Categories />
        <Story />
        <HowItWorks />
        <Features />
        <BottomCTA />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<ContentPage {...pageContent.about} />} />
      <Route path="/careers" element={<ContentPage {...pageContent.careers} />} />
      <Route path="/blog" element={<ContentPage {...pageContent.blog} />} />
      <Route path="/press-kit" element={<ContentPage {...pageContent.pressKit} />} />
      <Route path="/help-center" element={<ContentPage {...pageContent.help} />} />
      <Route path="/guides" element={<ContentPage {...pageContent.guides} />} />
      <Route path="/community" element={<ContentPage {...pageContent.community} />} />
      <Route path="/privacy-policy" element={<ContentPage {...pageContent.privacy} />} />
      <Route path="/terms-of-service" element={<ContentPage {...pageContent.terms} />} />
      <Route path="/privacy-consent" element={<ContentPage {...pageContent.privacyConsent} />} />
      <Route path="/cookie-policy" element={<ContentPage {...pageContent.cookies} />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
