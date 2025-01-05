import React from 'react';
import { Progress } from "@/components/ui/progress";
import { Download, CheckCircle } from "lucide-react";

interface DownloadProgressProps {
  progress: number;
}

const DownloadProgress = ({ progress }: DownloadProgressProps) => {
  return (
    <div className="max-w-md mx-auto text-center">
      <h2 className="text-2xl font-semibold mb-6">Downloading Driver Package</h2>
      <Progress value={progress} className="h-2 mb-4" />
      <div className="flex items-center justify-center gap-2 text-primary mb-4">
        {progress < 100 ? (
          <Download className="h-6 w-6 animate-bounce" />
        ) : (
          <CheckCircle className="h-6 w-6" />
        )}
        <span className="text-lg font-medium">{progress}%</span>
      </div>
      <p className="text-gray-600">
        Please keep this window open while we download your driver package
      </p>
    </div>
  );
};

export default DownloadProgress;