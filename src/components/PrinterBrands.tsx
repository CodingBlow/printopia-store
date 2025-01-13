import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const PRINTER_BRANDS = [
  {
    name: 'HP',
    image: '/hp-logo.png',
    description: 'HP Printer Solutions'
  },
  {
    name: 'Epson',
    image: '/epson-logo.png',
    description: 'Epson Printing Technology'
  },
  {
    name: 'Canon',
    image: '/canon-logo.png',
    description: 'Canon Imaging Solutions'
  }
];

const PrinterBrands = () => {
  const navigate = useNavigate();

  const handleBrandSelect = (brand: string) => {
    // After brand selection, navigate to error page
    navigate('/driver-error');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Select Your Printer Brand</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {PRINTER_BRANDS.map((brand) => (
            <Card 
              key={brand.name}
              className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleBrandSelect(brand.name)}
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="w-32 h-32 flex items-center justify-center">
                  <img
                    src={brand.image}
                    alt={`${brand.name} logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold">{brand.name}</h3>
                <p className="text-gray-600 text-center">{brand.description}</p>
                <Button 
                  className="w-full"
                  onClick={() => handleBrandSelect(brand.name)}
                >
                  Select {brand.name}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrinterBrands;