import React from "react";
import { Quote } from "lucide-react";
const testimonials = [{
  text: "Balogun transformed our brand voice completely. The results were incredible.",
  author: "Sarah Johnson",
  position: "CEO, Tech Startup"
}, {
  text: "Working with Balogun was a game-changer for our marketing strategy.",
  author: "Michael Chen",
  position: "Marketing Director"
}, {
  text: "Exceptional talent in crafting compelling brand stories.",
  author: "Emma Williams",
  position: "Brand Manager"
}];
export const TestimonialsSection = () => {
  return <section className="py-20 px-6 bg-[#0D0B1F]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          What My Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => <div key={index} className="group p-6 rounded-xl bg-gradient-to-b from-purple-500/10 to-cyan-500/10 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <Quote className="w-8 h-8 text-purple-400 mb-4" />
              <p className="text-gray-300 mb-4">{testimonial.text}</p>
              <p className="font-semibold text-white">{testimonial.author}</p>
              <p className="text-sm text-purple-400">{testimonial.position}</p>
            </div>)}
        </div>
      </div>
    </section>;
};