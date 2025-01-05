import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wifi, Cable, CheckCircle2, Network, Router, Settings2 } from "lucide-react";

const wifiSteps = [
  {
    title: "Power On Your Device",
    content: "Ensure your printer is powered on and in a ready state. The power indicator light should be steady.",
    icon: <Settings2 className="h-6 w-6 text-blue-500" />,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=500",
  },
  {
    title: "Access Network Settings",
    content: "Navigate to your printer's control panel and locate the network or wireless settings menu.",
    icon: <Network className="h-6 w-6 text-blue-500" />,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=500",
  },
  {
    title: "Select Your Network",
    content: "Choose your WiFi network from the list of available networks and enter your network password when prompted.",
    icon: <Wifi className="h-6 w-6 text-blue-500" />,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=500",
  },
  {
    title: "Verify Connection",
    content: "Wait for the connection to be established. The wireless indicator should show a stable connection.",
    icon: <CheckCircle2 className="h-6 w-6 text-green-500" />,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=500",
  }
];

const cableSteps = [
  {
    title: "Connect the Cable",
    content: "Using an ethernet cable, connect one end to your printer's network port and the other end to your router or network switch.",
    icon: <Cable className="h-6 w-6 text-blue-500" />,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=500",
  },
  {
    title: "Configure Network",
    content: "Your printer should automatically detect the network connection. If not, access the network settings through the control panel.",
    icon: <Router className="h-6 w-6 text-blue-500" />,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=500",
  },
  {
    title: "Install Software",
    content: "Install the necessary printer drivers and software on your computer to complete the setup process.",
    icon: <Settings2 className="h-6 w-6 text-blue-500" />,
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&q=80&w=500",
  },
  {
    title: "Test Connection",
    content: "Print a test page to ensure the connection is working properly and your printer is ready to use.",
    icon: <CheckCircle2 className="h-6 w-6 text-green-500" />,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=500",
  }
];

const SetupGuide = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Device Setup Guide</h1>
          <p className="text-gray-600 text-center mb-12">
            Follow our comprehensive guide to set up your device using either WiFi or cable connection.
          </p>
          
          <Tabs defaultValue="wifi" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="wifi" className="flex items-center gap-2">
                <Wifi className="h-4 w-4" />
                Wireless Setup
              </TabsTrigger>
              <TabsTrigger value="cable" className="flex items-center gap-2">
                <Cable className="h-4 w-4" />
                Cable Setup
              </TabsTrigger>
            </TabsList>

            <TabsContent value="wifi">
              <div className="space-y-8">
                {wifiSteps.map((step, index) => (
                  <Card key={index} className="overflow-hidden animate-fadeIn">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={step.image} 
                          alt={step.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            {step.icon}
                            <span>Step {index + 1}: {step.title}</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">{step.content}</p>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="cable">
              <div className="space-y-8">
                {cableSteps.map((step, index) => (
                  <Card key={index} className="overflow-hidden animate-fadeIn">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={step.image} 
                          alt={step.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            {step.icon}
                            <span>Step {index + 1}: {step.title}</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">{step.content}</p>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Need Additional Help?</h2>
            <p className="text-gray-600 mb-4">
              If you encounter any issues during setup or need personalized assistance, our support team is here to help:
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Contact our 24/7 technical support</li>
              <li>Schedule a virtual setup assistance session</li>
              <li>Request on-site installation service</li>
              <li>Access our online knowledge base</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SetupGuide;