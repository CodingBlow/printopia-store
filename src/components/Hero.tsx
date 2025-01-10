import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import PrinterSupportPopup from "./PrinterSupportPopup";

const Hero = () => {
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] bg-top" />
      <div className="relative pt-20 pb-16 md:pt-24 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Professional Printing
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 block">
                Made Simple
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg mx-auto mt-6">
              Explore premium printers and accessories designed for hassle-free setup. 
              Access our comprehensive guides and drivers for seamless printing.
            </p>
            <ul className="text-gray-600 space-y-2 mt-8 inline-block text-left">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                Quick & Easy Setup Resources
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                Compatible with Major Printer Brands
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                Reliable Support for Product Purchases
              </li>
            </ul>
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Button
                size="lg"
                className="group relative overflow-hidden bg-white border-2 border-primary hover:border-primary/80 text-primary hover:text-primary/80"
                onClick={() => navigate("/driver-download")}
              >
                <span className="relative z-10">Shop Now</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </Button>
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white animate-pulse hover:animate-none hover:scale-105 transition-transform duration-200"
                onClick={() => setIsPopupOpen(true)}
              >
                <span className="relative z-10">Get Support</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform relative z-10" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
      <PrinterSupportPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </section>
  );
};

export default Hero;