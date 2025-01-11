import { Button } from "@/components/ui/button";
import { XCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const DriverError = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <XCircle className="w-20 h-20 text-[#ea384c] mx-auto mb-6 animate-pulse" />
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
            <Phone className="h-5 w-5 text-[#D6BCFA]" />
            <span>Technical Support: 1-800-123-4567</span>
          </div>
          <div className="flex gap-4">
            <Link to="/driver-download">
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-[#1A1F2C]">
                Try Again
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-[#1A1F2C]">
                Return to Homepage
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverError;