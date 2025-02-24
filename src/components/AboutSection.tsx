import React from "react";
import { Award, GraduationCap, Trophy } from "lucide-react";
export const AboutSection = () => {
  return <section className="py-20 px-6 bg-[#0D0B1F]/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-cyan-500/5" />
      <div className="max-w-4xl mx-auto relative">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="mb-12">
          <p className="text-lg text-gray-300 mb-6">
            With over a decade of experience in branding and copywriting, I help
            businesses find their unique voice and connect with their target
            audience through compelling storytelling and strategic
            communication.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[{
          icon: <GraduationCap className="w-8 h-8 mb-4 text-purple-400" />,
          title: "Education",
          items: ["Masters in Marketing Communications", "BA in English & Literature"]
        }, {
          icon: <Award className="w-8 h-8 mb-4 text-cyan-400" />,
          title: "Certifications",
          items: ["Google Digital Marketing", "HubSpot Content Marketing", "Meta Certified Media Planner"]
        }, {
          icon: <Trophy className="w-8 h-8 mb-4 text-purple-400" />,
          title: "Skills",
          items: ["Brand Strategy", "Copywriting", "Content Strategy", "Marketing Communications"]
        }].map((section, index) => <div key={index} className="group p-6 rounded-xl bg-gradient-to-b from-purple-500/10 to-cyan-500/10 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              {section.icon}
              <h3 className="text-xl font-semibold mb-3 text-white">
                {section.title}
              </h3>
              <ul className="space-y-2 text-gray-300">
                {section.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>)}
        </div>
      </div>
    </section>;
};