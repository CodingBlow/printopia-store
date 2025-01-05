import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Progress } from "@/components/ui/progress";
import { Search, Printer, Download, CheckCircle } from "lucide-react";
import FullScreenError from "@/components/FullScreenError";

const DriverDownload = () => {
  const [modelNumber, setModelNumber] = useState('');
  const [showDrivers, setShowDrivers] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (modelNumber.trim()) {
      setShowDrivers(true);
      toast({
        title: "Driver Found",
        description: "Compatible driver package found for your printer model.",
      });
    }
  };

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    setDownloading(true);
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">HP Printer Driver Download Center</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get the latest drivers and software for your HP printer. Enter your model number to begin.
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
                      placeholder="e.g., HP LaserJet Pro M404n"
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
                      <h3 className="text-xl font-medium mb-2">HP Universal Print Driver</h3>
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

          {showForm && !downloading && (
            <div className="bg-white p-8 rounded-lg shadow-lg animate-fadeIn">
              <h2 className="text-2xl font-semibold mb-6">Complete Download Registration</h2>
              <form onSubmit={handleDownload} className="space-y-6 max-w-md mx-auto">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" required placeholder="John Doe" className="text-lg" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" required placeholder="john@example.com" className="text-lg" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" required placeholder="+1 (555) 000-0000" className="text-lg" />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Start Download
                </Button>
                <p className="text-sm text-gray-500 text-center mt-4">
                  By downloading, you agree to our Terms of Service and Privacy Policy
                </p>
              </form>
            </div>
          )}

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