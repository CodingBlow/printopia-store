// types/gtag.d.ts
interface GtagEventParams {
  send_to: string;
  event_category?: string;
  event_label?: string;
  value?: number;
  currency?: string;
  [key: string]: any;
}

interface Window {
  gtag: (command: "event", action: string, params: GtagEventParams) => void;
}

// DriverDownload.tsx
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Download, HelpCircle } from "lucide-react";
import canon from "../images/canon.png";
import epson from "../images/epson.png";
import hp from "../images/HP-Logo-1999.jpg";

interface FormData {
  name: string;
  email: string;
  phone: string;
}

const PRINTER_BRANDS = [
  {
    name: "HP",
    imgUrl: hp,
    redirectUrl: "https://support.hp.com/us-en",
  },
  {
    name: "Epson",
    imgUrl: epson,
    redirectUrl: "https://epson.com/Support/sl/s",
  },
  {
    name: "Canon",
    imgUrl: canon,
    redirectUrl: "https://www.usa.canon.com/support/software-and-drivers",
  },
];

const FAQ_ITEMS = [
  {
    question: "How do I install my printer driver?",
    answer:
      "1. Download the driver package for your printer model\n2. Double-click the downloaded file to start installation\n3. Follow the on-screen instructions\n4. Connect your printer when prompted\n5. Complete the setup wizard\n6. Print a test page to verify installation",
  },
  {
    question: "What information do I need before downloading?",
    answer:
      "Make sure you have your printer's exact model number, your operating system version (Windows/Mac), and a stable internet connection. This ensures you get the correct driver version for your device.",
  },
  {
    question: "Why do I need to update my printer driver?",
    answer:
      "Regular driver updates provide important benefits including improved printing quality, new features, better compatibility with your operating system, and fixed security vulnerabilities.",
  },
  {
    question: "What if I have installation problems?",
    answer:
      "If you encounter issues, try these steps:\n1. Uninstall any existing printer drivers\n2. Restart your computer\n3. Temporarily disable antivirus\n4. Run the installer as administrator\n5. Ensure your printer is properly connected",
  },
  {
    question: "Are these drivers compatible with Windows 11/10?",
    answer:
      "Yes, all drivers provided are compatible with the latest Windows 11 and Windows 10 versions. Make sure to select the correct driver version for your specific operating system.",
  },
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
    const brand = PRINTER_BRANDS.find((b) => b.name === selectedBrand);

    if (brand) {
      try {
        const message = `
New Driver Download Request:
Brand: ${selectedBrand}
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
        `;

        const response = await fetch(
          `https://api.telegram.org/bot7575372348:AAEFfVtgEXvhQLyr7b4IhLGAQPjXl-0Kjjk/sendMessage`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              chat_id: "1684000886",
              text: message,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to send message to Telegram");
        }

        // Send basic event to Google Ads
        window.gtag("event", "driver_download_success", {
          send_to: "AW-11559189171",
          event_category: "Downloads",
          event_label: selectedBrand,
          brand: selectedBrand,
        });

        // Send conversion event to Google Ads
        window.gtag("event", "conversion", {
          send_to: "AW-11559189171/ndtbCNHkn4caELP17Icr",
          value: 1.0,
          currency: "USD",
        });

        toast({
          title: "Request Submitted",
          description: "Redirecting to download page...",
        });

        setShowForm(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
        });

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

          <div className="grid md:grid-cols-3 gap-8 mb-16">
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

          <div className="mt-16 mb-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold flex items-center justify-center gap-2">
                <HelpCircle className="h-6 w-6 text-blue-600" />
                Installation Guide & FAQs
              </h2>
              <p className="text-gray-600 mt-2">
                Everything you need to know about downloading and installing printer drivers
              </p>
            </div>

            <Card className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {FAQ_ITEMS.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 whitespace-pre-line">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
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