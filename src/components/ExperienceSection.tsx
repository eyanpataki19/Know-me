import React from "react";
const experiences = [{
  company: "Global Brands Inc.",
  role: "Senior Brand Strategist",
  period: "2020 - Present",
  description: "Led brand strategy for Fortune 500 clients",
  image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
}, {
  company: "Creative Agency Co.",
  role: "Lead Copywriter",
  period: "2018 - 2020",
  description: "Developed compelling copy for major campaigns",
  image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
}, {
  company: "Digital Marketing Ltd.",
  role: "Content Strategist",
  period: "2016 - 2018",
  description: "Managed content strategy for tech startups",
  image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
}];
export const ExperienceSection = () => {
  return <section className="py-20 px-6 bg-[#0D0B1F]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Previous Experience
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {experiences.map((exp, index) => <div key={index} className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-purple-500/10 to-cyan-500/10 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500">
              <div className="absolute inset-0">
                <img src={exp.image} alt={exp.company} className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
              </div>
              <div className="relative p-6">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-400 transition-colors">
                  {exp.company}
                </h3>
                <h4 className="text-lg text-gray-300 mb-2">{exp.role}</h4>
                <p className="text-sm text-purple-400 mb-4">{exp.period}</p>
                <p className="text-gray-400">{exp.description}</p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};