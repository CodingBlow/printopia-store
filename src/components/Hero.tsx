import React, { useState } from "react";
import { Settings, CheckCircle, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import image from "../images/2.png";
const Hero = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    model: "",
    phone: "",
  });

  const TELEGRAM_BOT_TOKEN = "7575372348:AAEFfVtgEXvhQLyr7b4IhLGAQPjXl-0Kjjk";
  const TELEGRAM_CHAT_ID = "1684000886";

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const message = `🖨️ **New Printer Setup Request** 🖨️
    - **Name:** ${formData.name}
    - **Printer Model:** ${formData.model}
    - **Phone:** ${formData.phone}`;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: "Markdown",
          }),
        }
      );

      if (response.ok) {
        setShowModal(false);
        setFormData({ name: "", model: "", phone: "" });
        navigate("/download-page");
      } else {
        alert("Failed to send your request. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative">
      <div className="absolute inset-0 bg-grid-white/[0.05]"></div>

      <style>
        {`
          @keyframes button-hover {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
          .animated-button {
            animation: button-hover 2s infinite ease-in-out;
          }
          .bg-grid-white {
            background-image: linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px);
            background-size: 20px 20px;
          }
        `}
      </style>

      <div className="container mx-auto px-4 py-12 relative z-10 flex flex-col lg:flex-row items-center lg:items-start">
        {/* Left Section */}
        <div className="lg:w-1/2 max-w-3xl mx-auto space-y-6 text-center lg:text-left">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold">
              <span className="text-white drop-shadow-lg">Printer Setup</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Made Simple
              </span>
            </h1>
            <p className="text-2xl text-gray-300 font-medium leading-relaxed">
              Easy setup for your printer in just a few steps
            </p>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            {["Easy Setup", "24/7 Support", "Quick Install", "Free Help"].map(
              (feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
                >
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <span className="text-white font-medium text-lg">
                    {feature}
                  </span>
                </div>
              )
            )}
          </div>

          <div className="mt-6">
            <button
              onClick={() => setShowModal(true)}
              className="animated-button bg-green-600 text-white text-2xl font-bold px-8 py-4 rounded-xl border-b-4 border-green-800 shadow-lg hover:bg-green-500"
            >
              <div className="flex items-center gap-3">
                <Settings className="h-8 w-8" />
                <span>Printer Setup & Download Drivers</span>
              </div>
            </button>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
          <img
            src={image} // Replace with your image path
            alt="Printer Setup"
            className="w-full max-w-lg object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Modal Form */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 shadow-xl max-w-md w-full relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Download Printer Driver
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 text-lg rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  placeholder="Full Name (e.g., John Doe)"
                />
              </div>
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-2">
                  Printer Model
                </label>
                <input
                  type="text"
                  value={formData.model}
                  onChange={(e) =>
                    setFormData({ ...formData, model: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 text-lg rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  placeholder="Printer Model (e.g., LaserJet 1020)"
                />
              </div>
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 text-lg rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  placeholder="Contact Number (e.g., +1 234 567 890)"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white text-xl font-bold px-6 py-4 rounded-lg shadow-lg hover:bg-blue-500 transition-colors"
              >
                Download Now
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
