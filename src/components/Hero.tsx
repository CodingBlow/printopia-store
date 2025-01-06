import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Search } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d')] bg-cover bg-center opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent" />
      <div className="container mx-auto px-4 relative z-10 h-full">
        <div className="flex flex-col md:flex-row items-center justify-between min-h-[80vh] gap-8">
          <div className="md:w-1/2 space-y-6 animate-fadeIn">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Professional Printing
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 block">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              Experience superior quality printing with our advanced technology and expert support. Perfect for both home and business needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white group"
                onClick={() => window.location.href = '/products'}
              >
                Explore Products
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                onClick={() => window.location.href = '/driver-download'}
                className="group"
              >
                <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                Download Drivers
              </Button>
            </div>
            <div className="relative mt-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-lg -z-10 blur-xl" />
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-2">
                  <Search className="h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for products or drivers..."
                    className="bg-transparent border-none outline-none flex-1 text-gray-700 placeholder-gray-400"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-full -z-10 blur-3xl" />
            <img
              src="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6"
              alt="Featured Printer"
              className="w-full max-w-2xl mx-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
};

export default Hero;