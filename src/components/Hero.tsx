import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fadeIn">
              Professional Printing Solutions
            </h1>
            <p className="text-lg text-gray-600 mb-8 animate-fadeIn">
              Get premium printers with expert setup assistance and lifetime support.
            </p>
            <Button className="bg-secondary hover:bg-secondary/90 text-white">
              Shop Now
            </Button>
          </div>
          <div className="md:w-1/2">
            <img
              src="/placeholder.svg"
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