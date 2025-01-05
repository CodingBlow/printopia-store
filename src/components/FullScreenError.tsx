import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react";
import { Link } from "react-router-dom";

const FullScreenError = () => {
  return (
    <div className="fixed inset-0 bg-[#222222] flex items-center justify-center z-50">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <XCircle className="w-20 h-20 text-red-500 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-white mb-4">Download Failed</h1>
        <p className="text-gray-300 text-lg mb-8">
          We apologize, but it seems the driver package is corrupted or temporarily unavailable. 
          Our technical team has been notified and is working to resolve this issue.
        </p>
        <div className="space-y-4">
          <p className="text-gray-400">Error Code: DRV_PKG_404</p>
          <p className="text-gray-400">Reference ID: {Math.random().toString(36).substring(7)}</p>
        </div>
        <div className="mt-8">
          <Link to="/">
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
              Return to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FullScreenError;