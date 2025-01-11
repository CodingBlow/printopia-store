import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Settings, CheckCircle } from "lucide-react";
import HeroImage from "../images/hero.webp";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] bg-top" />
      <div className="relative pt-8 pb-8 sm:pt-12 md:pt-16 md:pb-12 lg:pt-20 lg:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
            <div className="flex flex-col justify-start space-y-4 sm:space-y-6">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-3 sm:space-y-4"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
                  Printer Setup
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 block">
                    Made Easy
                  </span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-medium">
                  Get your printer up and running in minutes
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Button
                  size="lg"
                  className="h-12 sm:h-14 lg:h-16 text-base sm:text-lg lg:text-xl font-bold group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => navigate("/setup-guide")}
                >
                  <Settings className="mr-2 h-5 w-5 sm:h-6 sm:w-6 animate-spin-slow" />
                  Setup Wizard
                  <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  size="lg"
                  className="h-12 sm:h-14 lg:h-16 text-base sm:text-lg lg:text-xl font-bold group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => navigate("/driver-download")}
                >
                  <Download className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                  Download Drivers
                </Button>
              </motion.div>

              <motion.div
                className="pt-4 sm:pt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="bg-blue-50 p-4 sm:p-6 rounded-xl">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                    Smart Setup Features:
                  </h3>
                  <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg font-medium">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 flex-shrink-0" />
                      Automatic Printer Detection
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 flex-shrink-0" />
                      Compatible with All Major Brands
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 flex-shrink-0" />
                      Step-by-Step Configuration Guide
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="flex items-end h-full mt-6 md:mt-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="relative w-full rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={HeroImage}
                  alt="Printer Setup Wizard"
                  className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 sm:p-6">
                  <div className="text-white text-lg sm:text-xl md:text-2xl font-bold">
                    Universal Setup Solution
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;