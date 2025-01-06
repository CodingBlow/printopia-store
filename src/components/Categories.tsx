import { Printer, Battery, Headphones, Zap } from "lucide-react";

const categories = [
  {
    title: "Smart Printers",
    description: "Advanced printing solutions with smart connectivity",
    icon: Printer,
    gradient: "from-blue-500 to-blue-600",
  },
  {
    title: "Premium Supplies",
    description: "High-quality supplies for optimal performance",
    icon: Battery,
    gradient: "from-cyan-500 to-cyan-600",
  },
  {
    title: "Expert Support",
    description: "24/7 professional technical assistance",
    icon: Headphones,
    gradient: "from-indigo-500 to-indigo-600",
  },
  {
    title: "Instant Setup",
    description: "Quick and easy printer configuration",
    icon: Zap,
    gradient: "from-purple-500 to-purple-600",
  },
];

const Categories = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            Complete Printing Solutions
          </h2>
          <p className="text-gray-600 text-lg">
            Discover our comprehensive range of products and services designed to meet all your printing needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.title}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              <div className="p-8">
                <div className={`inline-block p-3 rounded-lg bg-gradient-to-br ${category.gradient} mb-6`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-600">
                  {category.description}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${category.gradient}" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;