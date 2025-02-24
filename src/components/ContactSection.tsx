import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
export const ContactSection = () => {
  return <section className="py-20 px-6 bg-[#0D0B1F]/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-cyan-500/5" />
      <div className="max-w-4xl mx-auto relative">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-6 rounded-xl bg-gradient-to-b from-purple-500/10 to-cyan-500/10 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-6 text-white">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-purple-400" />
                <p className="text-gray-300">contact@example.com</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-purple-400" />
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-purple-400" />
                <p className="text-gray-300">Lagos, Nigeria</p>
              </div>
            </div>
          </div>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg bg-purple-500/10 border border-purple-500/20 text-white placeholder-gray-400 focus:border-purple-500/40 focus:outline-none transition-colors" />
            <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg bg-purple-500/10 border border-purple-500/20 text-white placeholder-gray-400 focus:border-purple-500/40 focus:outline-none transition-colors" />
            <textarea placeholder="Your Message" rows={4} className="w-full p-3 rounded-lg bg-purple-500/10 border border-purple-500/20 text-white placeholder-gray-400 focus:border-purple-500/40 focus:outline-none transition-colors" />
            <button className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-3 rounded-lg hover:scale-105 transition-transform duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>;
};