import React, { memo } from "react";
import { Download, ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
const benefits = ["Discover your unique brand voice and positioning", "Learn proven strategies for market differentiation", "Create a compelling brand story that resonates", "Develop a consistent brand identity", "Build trust with your target audience", "Scale your brand effectively"];
export const TestBook = () => {
  return <div className="min-h-screen bg-[#0D0B1F] text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1744&q=80')] opacity-10" />
      </div>
      <div className="relative max-w-6xl mx-auto px-6 py-20">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-12 transition-colors">
          <ArrowLeft size={20} />
          Back to Home
        </Link>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Brand Strategy Playbook Test
            </h1>
            <div className="space-y-6 mb-8">
              <p className="text-gray-300">
                Transform your startup's brand with my comprehensive Brand
                Strategy Playbook Test. This isn't just another marketing guide
                – it's a strategic framework built from years of experience
                helping businesses create memorable brands.
              </p>
              <h2 className="text-2xl font-semibold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                What You'll Get:
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>)}
              </ul>
            </div>
            <button className="group flex items-center gap-2 text-lg font-medium bg-gradient-to-r from-purple-500 to-cyan-500 px-8 py-3 rounded-full hover:scale-105 transition-all duration-300">
              Download Now
              <Download size={20} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
          <div className="p-8 rounded-2xl bg-gradient-to-b from-purple-500/10 to-cyan-500/10 border border-purple-500/20">
            <img src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Brand Strategy Playbook" className="rounded-lg w-full" />
          </div>
        </div>
      </div>
    </div>;
};