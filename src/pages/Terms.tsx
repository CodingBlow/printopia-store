import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <>
      <Navbar />
      <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
        <h1 style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: "1.5rem" }}>Terms and Conditions</h1>
        <p style={{ fontSize: "1rem", textAlign: "center", marginBottom: "2rem" }}>
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section>
          <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>Acceptance of Terms</h2>
          <p>
            By accessing and using this website, you accept and agree to be bound by the terms and provisions of this
            agreement.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on
            Monto-Print's website for personal, non-commercial transitory viewing only.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>Product Information</h2>
          <p>
            We strive to provide accurate product information for all printers and related solutions. However, we do not
            warrant that product descriptions or other content are accurate, complete, reliable, current, or error-free.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>Shipping Policy</h2>
          <p>
            Orders are typically processed within 1-2 business days. Shipping times vary depending on the selected method
            and destination.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>Printer Solutions and Fixing</h2>
          <p>
            In addition to selling printers, Monto-Print offers expert printer setup, maintenance, and troubleshooting
            services. Our solutions are designed to ensure optimal printer performance for our customers. We are not
            affiliated with or authorized by any third-party brands, and our services are independently provided.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Terms;
