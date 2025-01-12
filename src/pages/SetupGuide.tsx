import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Wifi,
  Cable,
  CheckCircle2,
  Network,
  Router,
  Settings2,
  AlertCircle,
  Phone,
  Mail,
  MessageCircle,
  BookOpen,
  Download,
  Printer,
  Shield,
  RefreshCcw,
  HeadphonesIcon,
} from "lucide-react";

const wifiSteps = [
  {
    title: "Power On Your Device",
    content:
      "Ensure your printer is powered on and in a ready state. The power indicator light should be steady green. If the device has a display screen, wait for it to fully initialize. For optimal setup, place the printer within 6 feet of your wireless router during the configuration process.",
    icon: <Settings2 className="h-6 w-6 text-blue-500" />,
    troubleshooting: [
      "Check if the power cable is securely connected",
      "Ensure the power outlet is functioning",
      "Press and hold the power button for 3 seconds if the device seems unresponsive",
    ],
  },
  {
    title: "Access Network Settings",
    content:
      "Navigate to your printer's control panel and locate the network or wireless settings menu. On most models, this can be found under 'Settings' or 'Network Configuration'. The exact menu path may vary depending on your device model. Make sure your wireless radio is enabled.",
    icon: <Network className="h-6 w-6 text-blue-500" />,
    troubleshooting: [
      "If menu is unresponsive, try resetting the control panel",
      "Ensure wireless radio is turned on in settings",
      "Check if the display screen is working properly",
    ],
  },
  {
    title: "Select Your Network",
    content:
      "Choose your WiFi network from the list of available networks and enter your network password when prompted. For optimal performance, ensure you're connecting to a 2.4GHz network, as some printers don't support 5GHz networks. The password is case-sensitive, so enter it carefully.",
    icon: <Wifi className="h-6 w-6 text-blue-500" />,
    troubleshooting: [
      "Verify your network password is correct",
      "Check if your network is broadcasting its SSID",
      "Try moving the printer closer to the router",
    ],
  },
  {
    title: "Verify Connection",
    content:
      "Wait for the connection to be established. The wireless indicator should show a stable connection. Print a network configuration page to verify the IP address assignment. Your device should now be ready to accept print jobs from any device on the same network.",
    icon: <CheckCircle2 className="h-6 w-6 text-green-500" />,
    troubleshooting: [
      "Check if the printer received a valid IP address",
      "Verify signal strength in printer settings",
      "Try printing a test page to confirm connection",
    ],
  },
];

const cableSteps = [
  {
    title: "Connect the Cable",
    content:
      "Using a Cat5e or Cat6 ethernet cable, connect one end to your printer's network port and the other end to your router or network switch. Ensure the cable clicks firmly into place on both ends. For best performance, use a cable no longer than 100 meters.",
    icon: <Cable className="h-6 w-6 text-blue-500" />,
    troubleshooting: [
      "Verify both ends of the cable are properly seated",
      "Check for any damage to the cable",
      "Try a different ethernet port on your router",
    ],
  },
  {
    title: "Configure Network",
    content:
      "Your printer should automatically detect the network connection and obtain an IP address via DHCP. If not, access the network settings through the control panel to manually configure the network parameters. Check your router's DHCP settings if automatic configuration fails.",
    icon: <Router className="h-6 w-6 text-blue-500" />,
    troubleshooting: [
      "Ensure DHCP is enabled on your router",
      "Check if network ports are active",
      "Verify network cables are functioning",
    ],
  },
  {
    title: "Install Software",
    content:
      "Download and install the latest printer drivers and software from the manufacturer's website. Choose the correct version for your operating system and printer model. The software package typically includes utilities for monitoring printer status and managing settings.",
    icon: <Settings2 className="h-6 w-6 text-blue-500" />,
    troubleshooting: [
      "Verify software compatibility with your OS",
      "Run software as administrator if needed",
      "Temporarily disable antivirus during installation",
    ],
  },
  {
    title: "Test Connection",
    content:
      "Print a test page to ensure the connection is working properly. Check the print quality and network stability. You should now be able to print from any computer on the network after installing the necessary drivers.",
    icon: <CheckCircle2 className="h-6 w-6 text-green-500" />,
    troubleshooting: [
      "Verify printer appears in system devices",
      "Check printer queue for any stuck jobs",
      "Confirm network sharing is enabled",
    ],
  },
];

const commonIssues = [
  {
    title: "Connection Drops Frequently",
    solution:
      "Check for interference from other devices, ensure proper signal strength, and verify router settings.",
    icon: <RefreshCcw className="h-5 w-5" />,
  },
  {
    title: "Print Jobs Not Reaching Printer",
    solution:
      "Verify network connection, check printer queue, and ensure correct printer selection.",
    icon: <Printer className="h-5 w-5" />,
  },
  {
    title: "Security Warnings",
    solution:
      "Update printer firmware, check firewall settings, and verify network security protocols.",
    icon: <Shield className="h-5 w-5" />,
  },
];

const SetupGuide = () => {
  const [selectedStep, setSelectedStep] = useState(null);

  const contactMethods = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone Support",
      description: "24/7 Technical Assistance",
      contact: "+1 (555) 123-4567",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email Support",
      description: "Response within 24 hours",
      contact: "support@montoprint.com",
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      title: "Live Chat",
      description: "Available 9AM-9PM EST",
      contact: (
        <Button
          variant="link"
          className="text-blue-600 p-0"
          onClick={() => window.open("https://tawk.to/chat/67822971af5bfec1dbea1367/1iha73pb0", "_blank")}
        >
          Click to Start Chat
        </Button>
      ),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg shadow-sm mb-8 border border-blue-100">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <HeadphonesIcon className="h-8 w-8 text-blue-600" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Need Help Setting Up?</h2>
                  <p className="text-gray-600">Our technical experts are here to assist you with printer setup</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Button
                  variant="default"
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.location.href = "tel:+1234567890"}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Support
                </Button>
                <Button
                  variant="default"
                  className="bg-green-600 hover:bg-green-700"
                  onClick={() => window.open("https://tawk.to/chat/67822971af5bfec1dbea1367/1iha73pb0", "_blank")}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Live Chat
                </Button>
              </div>
            </div>
          </div>

          <Alert className="mb-8">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Before beginning setup, ensure you have administrator access and
              all necessary network credentials.
            </AlertDescription>
          </Alert>

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

            {["wifi", "cable"].map((setupType) => (
              <TabsContent value={setupType} key={setupType}>
                <div className="space-y-8">
                  {(setupType === "wifi" ? wifiSteps : cableSteps).map(
                    (step, index) => (
                      <Card key={index} className="overflow-hidden">
                        <div className="p-6">
                          <CardHeader className="px-0">
                            <CardTitle className="flex items-center gap-2 text-xl">
                              {step.icon}
                              <span>
                                Step {index + 1}: {step.title}
                              </span>
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="px-0">
                            <p className="text-gray-600 mb-4">{step.content}</p>

                            <Accordion type="single" collapsible>
                              <AccordionItem value="troubleshooting">
                                <AccordionTrigger className="text-blue-600">
                                  Troubleshooting Tips
                                </AccordionTrigger>
                                <AccordionContent>
                                  <ul className="list-disc pl-6 space-y-2">
                                    {step.troubleshooting.map((tip, idx) => (
                                      <li key={idx} className="text-gray-600">
                                        {tip}
                                      </li>
                                    ))}
                                  </ul>
                                </AccordionContent>
                              </AccordionItem>
                            </Accordion>
                          </CardContent>
                        </div>
                      </Card>
                    )
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-12 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-yellow-500" />
                  Common Issues and Solutions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {commonIssues.map((issue, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        {issue.icon}
                        <h3 className="font-semibold">{issue.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm">{issue.solution}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Support</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {contactMethods.map((method, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                    >
                      {method.icon}
                      <div>
                        <h3 className="font-semibold">{method.title}</h3>
                        <p className="text-sm text-gray-500">
                          {method.description}
                        </p>
                        <p className="text-sm text-blue-600 mt-1">
                          {method.contact}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SetupGuide;
