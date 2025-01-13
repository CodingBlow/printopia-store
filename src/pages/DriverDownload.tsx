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
  { name: "HP", image: hp },
  { name: "Epson", image: epson },
  { name: "Canon", image: canon },
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

    try {
      // Simulate API request or form processing here
      toast({
        title: "Request Received",
        description: "Our team will contact you shortly with download instructions.",
      });
      setFormData({ name: "", email: "", phone: "" }); // Reset form
      setShowForm(false); // Close dialog
    } catch (error) {
      toast({
        title: "Error",
        description: "Request failed. Please try again or contact support.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Printer Driver Downloads</h1>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {PRINTER_BRANDS.map((brand) => (
              <Card
                key={brand.name}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-full h-40 flex items-center justify-center">
                    <img
                      src={brand.image}
                      alt={`${brand.name} Printers`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <Button
                    className="w-full"
                    onClick={() => handleBrandSelect(brand.name)}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download
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
