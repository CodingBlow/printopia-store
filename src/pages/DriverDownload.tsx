import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Progress } from "@/components/ui/progress";
import { Search } from "lucide-react";

const DriverDownload = () => {
  const [modelNumber, setModelNumber] = useState('');
  const [showDrivers, setShowDrivers] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (modelNumber.trim()) {
      setShowDrivers(true);
    }
  };

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    setDownloading(true);
    
    // Simulate download progress
    for (let i = 0; i <= 100; i += 10) {
      await new Promise(resolve => setTimeout(resolve, 500));
      setProgress(i);
    }
    
    setDownloading(false);
    toast({
      variant: "destructive",
      title: "Download Failed",
      description: "Sorry, the driver package seems to be corrupted. Please try again later or contact support.",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Printer Driver Download Center</h1>
      
      {!showDrivers && (
        <form onSubmit={handleSearch} className="max-w-md mx-auto space-y-4">
          <div className="space-y-2">
            <Label htmlFor="model">Enter Printer Model Number</Label>
            <div className="flex gap-2">
              <Input
                id="model"
                value={modelNumber}
                onChange={(e) => setModelNumber(e.target.value)}
                placeholder="e.g., HP-1234"
              />
              <Button type="submit">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </form>
      )}

      {showDrivers && !showForm && !downloading && (
        <div className="max-w-2xl mx-auto mt-8">
          <h2 className="text-xl font-semibold mb-4">Available Drivers for {modelNumber}</h2>
          <div className="space-y-4">
            <div className="border p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Latest Driver Package</h3>
                  <p className="text-sm text-gray-500">Version 2.1.5 | Released: 2024-03-15</p>
                </div>
                <Button onClick={() => setShowForm(true)}>Download</Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showForm && !downloading && (
        <form onSubmit={handleDownload} className="max-w-md mx-auto mt-8 space-y-4">
          <h2 className="text-xl font-semibold mb-4">Enter Your Details</h2>
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" required placeholder="John Doe" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" required placeholder="john@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" required placeholder="+1 (555) 000-0000" />
          </div>
          <Button type="submit" className="w-full">Start Download</Button>
        </form>
      )}

      {downloading && (
        <div className="max-w-md mx-auto mt-8 space-y-4">
          <h2 className="text-xl font-semibold mb-4">Downloading Driver...</h2>
          <Progress value={progress} className="w-full" />
          <p className="text-center text-sm text-gray-500">
            Please do not close this window while downloading
          </p>
        </div>
      )}
    </div>
  );
};

export default DriverDownload;