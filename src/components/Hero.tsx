import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Settings, CheckCircle } from "lucide-react";
import PrinterSupportPopup from "./PrinterSupportPopup";

const Hero = () => {
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] bg-top" />
      <div className="relative pt-16 pb-12 md:pt-20 md:pb-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">
                  Printer Setup
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 block">
                    Made Easy
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 font-medium">
                  Get your printer up and running in minutes
                </p>
              </motion.div>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Button
                  size="lg"
                  className="h-16 text-xl font-bold group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => navigate("/setup-guide")}
                >
                  <Settings className="mr-2 h-6 w-6 animate-spin-slow" />
                  Setup Wizard
                  <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  size="lg"
                  className="h-16 text-xl font-bold group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => navigate("/driver-download")}
                >
                  <Download className="mr-2 h-6 w-6" />
                  Download Drivers
                </Button>
              </motion.div>

              <motion.div 
                className="pt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Smart Setup Features:</h3>
                  <ul className="space-y-4 text-lg font-medium">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                      Automatic Printer Detection
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                      Compatible with All Major Brands
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                      Step-by-Step Configuration Guide
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>

            <motion.div 
              className="order-1 md:order-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80"
                  alt="Printer Setup Wizard" 
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <div className="text-white text-xl md:text-2xl font-bold">Universal Setup Solution</div>
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
