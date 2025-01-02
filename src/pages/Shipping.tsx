import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Truck, Package, Clock, Globe } from "lucide-react";

const Shipping = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Shipping Information</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="p-6 border rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Truck className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-semibold">Delivery Options</h2>
            </div>
            <ul className="space-y-2">
              <li>Standard Shipping (3-5 business days)</li>
              <li>Express Shipping (1-2 business days)</li>
              <li>International Shipping (7-14 business days)</li>
            </ul>
          </div>

          <div className="p-6 border rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Package className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-semibold">Order Processing</h2>
            </div>
            <ul className="space-y-2">
              <li>Orders processed within 24 hours</li>
              <li>Tracking number provided via email</li>
              <li>Secure packaging for safe delivery</li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Shipping Rates</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="p-4 text-left">Shipping Method</th>
                    <th className="p-4 text-left">Estimated Time</th>
                    <th className="p-4 text-left">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4">Standard Shipping</td>
                    <td className="p-4">3-5 business days</td>
                    <td className="p-4">$9.99</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">Express Shipping</td>
                    <td className="p-4">1-2 business days</td>
                    <td className="p-4">$19.99</td>
                  </tr>
                  <tr>
                    <td className="p-4">International Shipping</td>
                    <td className="p-4">7-14 business days</td>
                    <td className="p-4">$29.99</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shipping;