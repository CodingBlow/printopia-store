import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About Monto-Print</h1>

          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              Monto-Print is a leading provider of professional printing
              solutions, dedicated to delivering high-quality products and
              exceptional service to businesses and individuals alike.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="mb-6">
              To provide innovative printing solutions that help our customers
              achieve their goals while maintaining the highest standards of
              quality and customer service.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Quality</h3>
                <p>
                  We never compromise on the quality of our products and
                  services.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Innovation</h3>
                <p>
                  We continuously strive to improve and adapt to new
                  technologies.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Sustainability</h3>
                <p>
                  We are committed to environmentally responsible practices.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Customer Focus</h3>
                <p>Our customers' success is our success.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Our History</h2>
            <p className="mb-6">
              Founded in 2010, Monto-Print has grown from a small local print
              shop to a nationwide provider of printing solutions. Our journey
              has been marked by continuous innovation and an unwavering
              commitment to customer satisfaction.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
