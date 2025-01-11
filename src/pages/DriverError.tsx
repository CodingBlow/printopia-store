import { Button } from "@/components/ui/button";
import { PhoneCall, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const DriverError = () => {
  const handleCallClick = () => {
    window.location.href = "tel:1-800-123-4567";
  };

  const handleChatClick = () => {
    // This would typically open your chat system
    window.open("https://support-chat.example.com", "_blank");
  };

  return (
    <div className="min-h-screen bg-[#1A1F2C] flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="w-20 h-20 mx-auto mb-6 text-[#ea384c] animate-pulse">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-full h-full"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">Download Failed</h1>
        <p className="text-[#D6BCFA] text-lg mb-8">
          We apologize, but it seems the driver package is corrupted or temporarily unavailable. 
          Our technical team has been notified and is working to resolve this issue.
        </p>
        <div className="space-y-4 mb-8">
          <p className="text-[#8E9196]">Error Code: DRV_PKG_404</p>
          <p className="text-[#8E9196]">Reference ID: {Math.random().toString(36).substring(7)}</p>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-white mb-4">
            <PhoneCall className="h-5 w-5 text-[#D6BCFA]" />
            <span>Technical Support: 1-800-123-4567</span>
          </div>
          <div className="flex gap-4">
            <Button 
              onClick={handleCallClick}
              className="bg-[#4A5568] hover:bg-[#2D3748] text-white px-6 py-2 rounded-md flex items-center gap-2"
            >
              <PhoneCall className="h-4 w-4" />
              Call Now
            </Button>
            <Button 
              onClick={handleChatClick}
              className="bg-[#4A5568] hover:bg-[#2D3748] text-white px-6 py-2 rounded-md flex items-center gap-2"
            >
              <MessageSquare className="h-4 w-4" />
              Chat Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverError;