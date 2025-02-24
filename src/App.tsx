import React from "react";
import { Menu, Mail, Linkedin, Twitter } from "lucide-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ToolsSection } from "./components/ToolsSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ContactSection } from "./components/ContactSection";
import { TestBook } from "./pages/TestBook";
const HomePage = () => <>
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <ToolsSection />
    <TestimonialsSection />
    <ContactSection />
  </>;
export function App() {
  return <Router>
      <div className="w-full min-h-screen bg-[#0D0B1F] text-white">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-[#0D0B1F]/80 backdrop-blur-xl z-50 px-6 py-4 flex justify-between items-center border-b border-purple-500/20">
          <h1 className="text-xl font-semibold bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Balogun Ekundayo
          </h1>
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com" className="hover:text-purple-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com" className="hover:text-cyan-400 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="mailto:contact@example.com" className="hover:text-purple-400 transition-colors">
              <Mail size={20} />
            </a>
            <button className="md:hidden">
              <Menu size={24} />
            </button>
          </div>
        </nav>
        {/* Main Content */}
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/test-book" element={<TestBook />} />
          </Routes>
        </main>
      </div>
    </Router>;
}