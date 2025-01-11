import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import sarah from "../images/Sarah.png";
import michael from "../images/Michel.png";
import emily from "../images/Emily.png";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Small Business Owner",
    content: "The print quality and reliability have transformed our business operations. The color accuracy and consistency are remarkable, and the support team has been exceptional in helping us optimize our workflow.",
    rating: 5,
    image: sarah,
  },
  {
    name: "Michael Chen",
    role: "Creative Director",
    content: "As a creative professional, color accuracy is crucial for our work. These printers have exceeded our expectations with their exceptional print quality and reliability. The software integration is seamless.",
    rating: 5,
    image: michael,
  },
  {
    name: "Emily Williams",
    role: "Office Manager",
    content: "The support team is incredible. They've helped us optimize our printing workflow and reduce costs. The printer's efficiency and reliability have significantly improved our productivity.",
    rating: 5,
    image: emily,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          >
            What Our Customers Say
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Join thousands of satisfied customers who trust our printing solutions
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative"
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>
              
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;