import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-50 to-blue-100 py-16 md:py-24">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fadeIn">
              Premium Printing Solutions
            </h1>
            <p className="text-lg text-gray-600 mb-8 animate-fadeIn max-w-lg">
              Discover our wide range of high-quality printers and supplies. Get the best deals on top brands with fast shipping and expert setup guidance included.
            </p>
            <div className="flex gap-4">
              <Button 
                className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2"
                onClick={() => window.location.href = '/products'}
              >
                Shop Now
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.location.href = '/support'}
                className="text-primary"
              >
                Setup Guide
              </Button>
              <Button 
                variant="secondary"
                onClick={() => window.location.href = '/driver-download'}
                className="flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Download Drivers
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6"
              alt="Featured Printer"
              className="w-full max-w-lg mx-auto rounded-lg shadow-lg animate-fadeIn"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;