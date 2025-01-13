import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { Download } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
}

const PRINTER_BRANDS = [
  {
    name: 'HP',
    image: '/hp-logo.png',
    description: 'HP Printer Solutions',
    supportUrl: 'https://www.hp.com/us-en/support.html'
  },
  {
    name: 'Epson',
    image: '/epson-logo.png',
    description: 'Epson Printing Technology',
    supportUrl: 'https://epson.com/support'
  },
  {
    name: 'Canon',
    image: '/canon-logo.png',
    description: 'Canon Imaging Solutions',
    supportUrl: 'https://www.usa.canon.com/support'
  }
];

const DriverDownload = () => {
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
  });
  const { toast } = useToast();

  const handleBrandSelect = (brand: string) => {
    setSelectedBrand(brand);
    setShowForm(true);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const brand = PRINTER_BRANDS.find(b => b.name === selectedBrand);
    
    if (brand) {
      try {
        const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
        const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;
        
        if (!BOT_TOKEN || !CHAT_ID) {
          throw new Error("Telegram credentials not configured");
        }

        const message = `
New Driver Download Request:
Brand: ${selectedBrand}
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
        `;

        const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to send message to Telegram");
        }

        toast({
          title: "Request Submitted",
          description: "Redirecting to download page...",
        });

        setShowForm(false);
        window.open(brand.supportUrl, '_blank', 'noopener,noreferrer');
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to submit request. Please try again.",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">
            Printer Driver Downloads
          </h1>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
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
                    <Download className="mr-2 h-4 w-4" />
                    Download Latest Driver
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <Dialog open={showForm} onOpenChange={setShowForm}>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Download {selectedBrand} Drivers</DialogTitle>
                <DialogDescription>
                  Please provide your information to access the driver download
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    required
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
                <Button type="submit" className="w-full">
                  Download Drivers
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default DriverDownload;