import React from "react";
import { ArrowRight } from "lucide-react";
export const HeroSection = () => {
  return <section className="min-h-screen relative flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[#0D0B1F]">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1744&q=80')] opacity-10" />
      </div>
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 animate-pulse" />
          <div className="absolute inset-1 rounded-full overflow-hidden bg-[#0D0B1F]">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="Balogun Ekundayo" className="w-full h-full object-cover" />
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Balogun Ekundayo
        </h1>
        <div className="inline-block mb-8 px-6 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20">
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Branding Expert & Copywriter
          </span>
        </div>
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Crafting compelling brand stories and converting copy that resonates
          with your audience and drives results.
        </p>
        <button className="group flex items-center gap-2 text-lg font-medium mx-auto bg-gradient-to-r from-purple-500 to-cyan-500 px-8 py-3 rounded-full hover:scale-105 transition-all duration-300">
          View My Work
          <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
        </button>
      </div>
    </section>;
};