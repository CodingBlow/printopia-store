import { Printer, Battery, Headphones } from "lucide-react";

const categories = [
  {
    title: "Printers",
    description: "High-quality printers for home and office",
    icon: Printer,
  },
  {
    title: "Accessories",
    description: "Essential add-ons for your printing needs",
    icon: Battery,
  },
  {
    title: "Support",
    description: "Expert technical assistance when you need it",
    icon: Headphones,
  },
];

const Categories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-lg border border-gray-200 hover:border-primary transition-colors cursor-pointer"
            >
              <category.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              <p className="text-gray-600">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;