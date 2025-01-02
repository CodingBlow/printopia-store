import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Returns = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Returns Policy</h1>
        <div className="prose max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Return Process</h2>
          <p className="mb-4">
            We want you to be completely satisfied with your purchase. If you're not happy with your order, you can return it within 30 days of delivery for a full refund.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">Return Requirements</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Items must be unused and in original packaging</li>
            <li>Include all accessories and documentation</li>
            <li>Provide original receipt or proof of purchase</li>
            <li>Items must not be damaged</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3">How to Return</h3>
          <ol className="list-decimal pl-6 mb-4">
            <li>Contact our customer service team</li>
            <li>Receive a return authorization number</li>
            <li>Package your item securely</li>
            <li>Ship to our returns center</li>
          </ol>
          
          <p className="mb-4">
            Refunds will be processed within 5-7 business days after we receive your return.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Returns;