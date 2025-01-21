import React from "react";
import { Settings } from "lucide-react";
import { Link } from "react-router-dom";
import image from "../images/printer-1293116_1920.png";
import { CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative">
      {/* Enhanced overlay pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05]"></div>

      <style>
        {`
          @keyframes button-hover {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
          .animated-button {
            animation: button-hover 2s infinite ease-in-out;
          }
          .bg-grid-white {
            background-image: linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px);
            background-size: 20px 20px;
          }
        `}
      </style>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold">
                <span className="text-white drop-shadow-lg">Printer Setup</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-lg">
                  Made Simple
                </span>
              </h1>
              <p className="text-xl text-gray-300 font-medium">
                Quick and easy setup for your printer in minutes
              </p>
            </div>

            {/* Feature Keywords */}
            <div className="flex flex-wrap gap-4">
              {[
                "Wireless Setup",
                "Network Ready",
                "Auto Configuration",
                "All-in-One Printer",
              ].map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
                >
                  <CheckCircle className="h-5 w-5 text-cyan-400" />
                  <span className="text-white font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Button with Movement Animation */}
            <div className="mt-8">
            <Link to="/driver-download" className="block w-full sm:w-auto">
  <button
    className="animated-button 
    bg-blue-600
    text-white text-2xl lg:text-3xl font-bold 
    px-10 py-7 rounded-xl
    border-b-8 border-blue-800
    shadow-lg
    transform transition-all duration-300 
    hover:bg-blue-500
    hover:border-blue-700
    hover:-translate-y-1
    hover:shadow-2xl
    focus:outline-4
    focus:outline-blue-300"
  >
    <div className="flex items-center justify-center gap-4">
      <Settings className="h-10 w-10" />
      <span>Setup Printer & Download Driver</span>
    </div>
  </button>
</Link>

            </div>
          </div>

          {/* Right side - Single printer image */}
          <div className="relative rounded-2xl p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-500/20 rounded-2xl backdrop-blur-sm"></div>
            <div className="relative h-[400px] w-full">
              <img
                src={image}
                alt="Modern All-in-One Printers"
                className="w-full h-full object-contain rounded-lg mix-blend-luminosity hover:mix-blend-normal transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
