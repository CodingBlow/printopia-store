import { motion } from "framer-motion";
import { ArrowRight, Monitor, Wifi, Download, Settings } from "lucide-react";
import { Button } from "./ui/button";

const steps = [
  {
    icon: Download,
    title: "Download Software",
    description: "Get the latest printer software and drivers"
  },
  {
    icon: Wifi,
    title: "Connect Device",
    description: "Set up wireless or wired connection"
  },
  {
    icon: Settings,
    title: "Configure Settings",
    description: "Optimize your printer settings"
  },
  {
    icon: Monitor,
    title: "Start Printing",
    description: "Begin using your printer"
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
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Quick Setup Guide
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600"
          >
            Get your printer up and running in minutes with our easy setup process
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-4">
                  <step.icon className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={() => window.location.href = '/setup-guide'}
            className="bg-primary hover:bg-primary/90"
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