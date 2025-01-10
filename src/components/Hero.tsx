import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[85vh] bg-gradient-to-r from-gray-50 to-gray-100 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')] bg-cover bg-center opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10 h-full">
        <div className="flex flex-col md:flex-row items-center justify-between min-h-[85vh] gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Professional Printing
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 block">
                Made Easy for You
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              Get your printer up and running in minutes with our step-by-step setup guide. 
              Experience hassle-free printing with expert support and premium drivers.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                Quick & Easy Setup Process
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                Compatible with All Major Printer Models
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                24/7 Technical Support Available
              </li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white group"
                onClick={() => {
                  navigate('/driver-download');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Setup Your Printer
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                onClick={() => {
                  navigate('/driver-download');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group"
              >
                Download Drivers
                <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-full -z-10 blur-3xl" />
            <img
              src="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6"
              alt="Featured Printer"
              className="w-full max-w-2xl mx-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
};

export default Hero;