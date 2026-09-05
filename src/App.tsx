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

export default function App() {
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
