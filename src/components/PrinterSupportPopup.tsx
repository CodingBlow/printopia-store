import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { X, Printer, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PrinterSupportPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrinterSupportPopup = ({ isOpen, onClose }: PrinterSupportPopupProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    model: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Support Request Sent",
      description: "We'll get back to you shortly!",
    });
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full md:w-[400px] bg-white z-50 p-6 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <Printer className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-semibold">Printer Support</h2>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="hover:bg-gray-100 rounded-full"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <p className="text-gray-600 mb-6">
              Need help setting up or fixing your printer? Our expert team is here
              to assist you. Fill out the form below and we'll get back to you
              quickly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="model">Printer Model</Label>
                <Input
                  id="model"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  placeholder="HP LaserJet Pro M404n"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full group hover:scale-105 transition-transform duration-200"
              >
                Get Help Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PrinterSupportPopup;