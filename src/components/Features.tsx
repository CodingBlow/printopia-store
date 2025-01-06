import { motion } from "framer-motion";
import { Shield, Zap, Clock, Cloud } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Advanced security features to protect your sensitive documents",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "High-speed printing for maximum productivity",
  },
  {
    icon: Clock,
    title: "24/7 Reliability",
    description: "Consistent performance round the clock",
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description: "Seamless cloud printing from any device",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Advanced Features for Modern Needs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the cutting-edge features that set our printers apart
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-gradient-to-b from-gray-50 to-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;