import { motion } from "framer-motion";
import { ArrowRight, Monitor, Wifi, Download, Settings, Printer, Shield, HelpCircle, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";

const steps = [
  {
    icon: Download,
    title: "Download Software",
    description: "Get the latest printer software and drivers from our official website",
    details: [
      "Visit the downloads section",
      "Select your printer model",
      "Choose your operating system",
      "Download the recommended package"
    ]
  },
  {
    icon: Wifi,
    title: "Connect Device",
    description: "Set up wireless or wired connection with step-by-step guidance",
    details: [
      "Power on your printer",
      "Access network settings",
      "Select your Wi-Fi network",
      "Enter network password"
    ]
  },
  {
    icon: Settings,
    title: "Configure Settings",
    description: "Optimize your printer settings for the best performance",
    details: [
      "Set default print quality",
      "Configure paper settings",
      "Adjust color calibration",
      "Set up scan preferences"
    ]
  },
  {
    icon: Monitor,
    title: "Start Printing",
    description: "Begin using your printer with optimal settings",
    details: [
      "Send a test print",
      "Verify print quality",
      "Check network connection",
      "Ready for regular use"
    ]
  }
];

const additionalResources = [
  {
    icon: Printer,
    title: "Printer Maintenance",
    description: "Learn about regular maintenance tasks"
  },
  {
    icon: Shield,
    title: "Security Setup",
    description: "Configure security features and protocols"
  },
  {
    icon: HelpCircle,
    title: "Troubleshooting",
    description: "Common issues and their solutions"
  },
  {
    icon: CheckCircle2,
    title: "Best Practices",
    description: "Tips for optimal printer usage"
  }
];

const QuickSetup = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600"
          >
            Quick Setup Guide
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            Get your printer up and running in minutes with our comprehensive setup process
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow h-full">
                <div className="mb-4">
                  <step.icon className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <ul className="space-y-2 text-gray-600">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      {detail}
                    </li>
                  ))}
                </ul>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">Additional Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <resource.icon className="w-6 h-6 text-blue-600" />
                  <div>
                    <h4 className="font-medium">{resource.title}</h4>
                    <p className="text-sm text-gray-600">{resource.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button 
            onClick={() => window.location.href = '/setup-guide'}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            View Detailed Guide
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default QuickSetup;