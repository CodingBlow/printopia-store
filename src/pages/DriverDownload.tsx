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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
            Printer Driver Downloads
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Download the latest drivers and software for your printer.
              Compatible with Windows 11, 10, and Mac.
            </p>
          </div>

          {/* Brand Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {PRINTER_BRANDS.map((brand) => (
              <Card
                key={brand.name}
                className="group p-8 hover:shadow-2xl transition-all duration-300 border-2 border-slate-100 bg-white rounded-2xl"
              >
                <div className="flex flex-col items-center space-y-8">
                  <div className="w-full h-32 flex items-center justify-center p-6 bg-slate-50 rounded-xl">
                    <img
                      src={brand.imgUrl}
                      alt={`${brand.name} Logo`}
                      className="w-full h-full object-contain filter group-hover:brightness-110 transition-all"
                    />
                  </div>
                  <Button
                    className="w-full text-lg py-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                    onClick={() => handleBrandSelect(brand.name)}
                  >
                    <Download className="mr-3 h-5 w-5" />
                    Download {brand.name} Driver
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mt-20 mb-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold flex items-center justify-center gap-3 text-slate-800">
                <HelpCircle className="h-8 w-8 text-blue-600" />
                Installation Guide & FAQs
              </h2>
              <p className="text-lg text-slate-600 mt-3">
                Step-by-step guidance for a smooth installation process
              </p>
            </div>

            <Card className="p-8 border-2 border-slate-100 shadow-lg">
              <Accordion type="single" collapsible className="w-full">
                {FAQ_ITEMS.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-b border-slate-200 last:border-0"
                  >
                    <AccordionTrigger className="text-left text-lg font-medium hover:text-blue-600">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 text-base leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          </div>
          <div className="mt-8 p-6 bg-slate-50 rounded-xl border-2 border-slate-200">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">
              Important Notice
            </h3>
            <div className="prose text-slate-700">
              <p>
                This website serves as a third-party assistance platform to help
                users locate printer drivers. When you submit the form:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>
                  You will be redirected to the manufacturer's official website
                </li>
                <li>
                  All downloads are handled directly through the printer
                  manufacturer's website
                </li>
                <li>
                  Your information helps us improve our service and provide
                  setup assistance if needed
                </li>
                <li>
                  We do not host, distribute, or modify any driver software
                </li>
              </ul>
              <p className="mt-4">
                All trademarks and brand names are the property of their
                respective owners. Our service helps connect users with the
                appropriate manufacturer's download page.
              </p>
            </div>
          </div>
          {/* Download Form Dialog */}
          <Dialog open={showForm} onOpenChange={setShowForm}>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-slate-800">
                  Download {selectedBrand} Drivers
                </DialogTitle>
                <DialogDescription className="text-slate-600">
                  Enter your details below to access the official{" "}
                  {selectedBrand} driver download.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                {/* Form fields with enhanced styling */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base font-medium">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    required
                    className="h-12 text-lg border-2 focus:border-blue-500"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="h-12 text-lg border-2 focus:border-blue-500"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-base font-medium">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    required
                    className="h-12 text-lg border-2 focus:border-blue-500"
                    placeholder="(123) 456-7890"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-14 text-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                >
                  Download Now
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
