import React from "react";
const tools = [{
  name: "Adobe Creative Suite",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Adobe_Creative_Cloud_rainbow_icon.svg/768px-Adobe_Creative_Cloud_rainbow_icon.svg.png"
}, {
  name: "Figma",
  logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
}, {
  name: "Canva",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Canva_icon_2021.svg/600px-Canva_icon_2021.svg.png"
}, {
  name: "Google Analytics",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Google_Analytics_icon.svg/512px-Google_Analytics_icon.svg.png"
}, {
  name: "HubSpot",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Hubspot_logo.svg/512px-Hubspot_logo.svg.png"
}, {
  name: "Mailchimp",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Mailchimp_icon.svg/512px-Mailchimp_icon.svg.png"
}, {
  name: "WordPress",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/512px-WordPress_blue_logo.svg.png"
}, {
  name: "SEMrush",
  logo: "https://cdn.semrush.com/static/index/semrush-logo-700.png"
}, {
  name: "Slack",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png"
}, {
  name: "Asana",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Asana_logo.svg/1280px-Asana_logo.svg.png"
}, {
  name: "Trello",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Trello-logo-blue.svg/2560px-Trello-logo-blue.svg.png"
}, {
  name: "Photoshop",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1051px-Adobe_Photoshop_CC_icon.svg.png"
}, {
  name: "Illustrator",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/2101px-Adobe_Illustrator_CC_icon.svg.png"
}, {
  name: "InDesign",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Adobe_InDesign_CC_icon.svg/2101px-Adobe_InDesign_CC_icon.svg.png"
}, {
  name: "Ahrefs",
  logo: "https://cdn.icon-icons.com/icons2/2407/PNG/512/ahrefs_icon_146091.png"
}, {
  name: "Microsoft 365",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg/2048px-Microsoft_Office_logo_%282019%E2%80%93present%29.svg.png"
}];
export const ToolsSection = () => {
  return <section className="py-20 px-6 bg-[#0D0B1F]/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-cyan-500/5" />
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Tools I Use
        </h2>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
          {tools.map((tool, index) => <div key={index} className="group p-3 rounded-lg bg-gradient-to-b from-purple-500/10 to-cyan-500/10 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 relative">
                  <div className="absolute inset-0 rounded-lg bg-white/10 filter blur-sm" />
                  <img src={tool.logo} alt={tool.name} className="w-full h-full object-contain relative z-10" />
                </div>
                <p className="text-gray-300 group-hover:text-purple-400 transition-colors text-center text-xs">
                  {tool.name}
                </p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};