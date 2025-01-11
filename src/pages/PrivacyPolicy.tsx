import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 prose prose-slate max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-lg text-gray-600 mb-8">
          Last updated: <span className="font-semibold">{new Date().toLocaleDateString()}</span>
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p>We collect information that you provide directly to us, including:</p>
          <ul className="list-disc list-inside">
            <li>Name and contact information</li>
            <li>Payment information</li>
            <li>Order history and preferences</li>
            <li>Device and usage information</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc list-inside">
            <li>Process your orders and payments</li>
            <li>Communicate with you about products and services</li>
            <li>Improve our website and customer experience</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Cookie Policy</h2>
          <p>
            We use cookies and similar tracking technologies to monitor activity on our website and store certain
            information. You can configure your browser to refuse all cookies or notify you when a cookie is sent.
          </p>
          <p>
            Note that disabling cookies may limit certain functionalities of our website, affecting your user
            experience.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Your Privacy Rights</h2>
          <p>
            You have the right to access, update, or delete your personal information. For any inquiries or to exercise
            your rights, please contact us at contact@montoprint.com.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
