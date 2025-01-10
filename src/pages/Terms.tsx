import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 prose prose-slate max-w-4xl">
        <h1>Terms and Conditions</h1>
        <p className="text-lg mb-4">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <h2>Acceptance of Terms</h2>
          <p>
            By accessing and using this website, you accept and agree to be
            bound by the terms and provision of this agreement.
          </p>
        </section>

        <section className="mb-8">
          <h2>Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the
            materials (information or software) on Monto-Print's website for
            personal, non-commercial transitory viewing only.
          </p>
        </section>

        <section className="mb-8">
          <h2>Product Information</h2>
          <p>
            We strive to provide accurate product information, but we do not
            warrant that product descriptions or other content is accurate,
            complete, reliable, current, or error-free.
          </p>
        </section>

        <section className="mb-8">
          <h2>Shipping Policy</h2>
          <p>
            Orders are typically processed within 1-2 business days. Shipping
            times vary depending on the selected method and destination.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
