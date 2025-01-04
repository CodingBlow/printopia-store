import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Unboxing and Inspection",
    content: "Carefully remove your printer from the packaging. Check for any visible damage and ensure all components are present according to the packing list.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=500",
  },
  {
    title: "Hardware Setup",
    content: "Place the printer on a stable, level surface. Connect all necessary cables, including power and network cables. Install paper trays and any additional hardware components.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=500",
  },
  {
    title: "Software Installation",
    content: "Download and install the latest printer drivers and software from our website. Follow the installation wizard for a seamless setup process.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=500",
  },
  {
    title: "Network Configuration",
    content: "Configure network settings through the printer's control panel. Connect to your local network via Wi-Fi or ethernet for seamless printing across your organization.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=500",
  },
  {
    title: "Print Quality Optimization",
    content: "Perform initial calibration and print quality tests. Adjust settings as needed for optimal output quality.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=500",
  },
  {
    title: "Maintenance Training",
    content: "Learn about routine maintenance procedures, including cartridge replacement, cleaning, and troubleshooting common issues.",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&q=80&w=500",
  },
];

const SetupGuide = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Printer Setup Guide</h1>
          <p className="text-gray-600 text-center mb-12">
            Follow our comprehensive guide to set up your new printer quickly and efficiently.
          </p>
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <Card key={index} className="overflow-hidden">
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
                        <CheckCircle2 className="h-6 w-6 text-green-500" />
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