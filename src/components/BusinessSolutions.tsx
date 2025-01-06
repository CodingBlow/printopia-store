import { motion } from "framer-motion";
import { Building2, Users, BarChart, Shield } from "lucide-react";
import { Button } from "./ui/button";

const solutions = [
  {
    icon: Building2,
    title: "Enterprise Solutions",
    description: "Scalable printing solutions for large organizations"
  },
  {
    icon: Users,
    title: "Small Business",
    description: "Cost-effective options for growing businesses"
  },
  {
    icon: BarChart,
    title: "Analytics & Reports",
    description: "Track usage and optimize printing costs"
  },
  {
    icon: Shield,
    title: "Security Features",
    description: "Advanced security for sensitive documents"
  }
];

const BusinessSolutions = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Business Solutions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600"
          >
            Comprehensive printing solutions tailored for your business needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-b from-gray-50 to-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform">
                <solution.icon className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={() => window.location.href = '/products'}
            variant="outline"
            className="bg-white hover:bg-gray-50"
          >
            Explore Solutions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BusinessSolutions;