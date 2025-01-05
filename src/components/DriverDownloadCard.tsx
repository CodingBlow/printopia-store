import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, Printer } from "lucide-react";

interface DriverDownloadCardProps {
  modelNumber: string;
  onDownloadClick: () => void;
}

const DriverDownloadCard = ({ modelNumber, onDownloadClick }: DriverDownloadCardProps) => {
  return (
    <div className="border rounded-lg p-6 hover:border-primary transition-colors">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-medium mb-2">Universal Print Driver</h3>
          <p className="text-gray-600 mb-4">
            Version 2.1.5 | Released: March 15, 2024 | Size: 48.2 MB
          </p>
          <ul className="text-sm text-gray-500 space-y-1 mb-4">
            <li>• Compatible with Windows 10/11 (64-bit)</li>
            <li>• Enhanced security features</li>
            <li>• Improved network performance</li>
            <li>• Bug fixes and stability improvements</li>
          </ul>
        </div>
        <Button 
          onClick={onDownloadClick}
          size="lg"
          className="flex items-center gap-2"
        >
          <Download className="h-5 w-5" />
          Download
        </Button>
      </div>
    </div>
  );
};

export default DriverDownloadCard;