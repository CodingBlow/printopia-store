import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Download, XCircle, FileDown } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { trackConversion } from '@/utils/analytics';

const DownloadProgress = () => {
  const [progress, setProgress] = useState(0);
  const [downloadSpeed, setDownloadSpeed] = useState(2.4);
  const [timeRemaining, setTimeRemaining] = useState(120);
  const [isFailed, setIsFailed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Track conversion event for analytics
    trackConversion();

    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 1;
        setDownloadSpeed(2.4 + Math.random() * 0.8);
        setTimeRemaining((prev) => Math.max(0, prev - 1));

        if (newProgress >= 100) {
          clearInterval(timer);

          const isDownloadFailed = Math.random() < 0.5;
          if (isDownloadFailed) {
            setIsFailed(true);
            setTimeout(() => {
              navigate('/downloads');
            }, 2000);
          } else {
            setTimeout(() => {
              navigate('/downloads');
            }, 1000);
          }
          return 100;
        }
        return newProgress;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [navigate]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <Card className="w-full max-w-4xl shadow-lg border-t-4 border-t-[#D81F26]">
        <CardContent className="pt-12 pb-10">
          <div className="flex flex-col items-center space-y-8">
            {/* Printer Driver Branding */}
            <div className="text-center space-y-4 w-full">
              <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-200">
                {progress < 100 ? (
                  <FileDown className="h-12 w-12 text-[#D81F26]" />
                ) : isFailed ? (
                  <XCircle className="h-12 w-12 text-red-600" />
                ) : (
                  <Download className="h-12 w-12 text-green-600" />
                )}
              </div>
              <h1 className="text-3xl font-semibold text-gray-900">
                Printer Driver Software Download
              </h1>
              <p className="text-lg text-gray-600">
                {progress < 100
                  ? 'Downloading your Printer Driver software'
                  : isFailed
                  ? 'Download interrupted. Redirecting to support...'
                  : 'Download completed successfully!'}
              </p>
            </div>

            {/* Progress Section */}
            <div className="w-full space-y-6">
              <div className="space-y-3">
                <Progress
                  value={progress}
                  className={`h-3 rounded-full ${isFailed ? 'bg-red-500' : 'bg-[#D81F26]'}`}
                />
                <div className="flex justify-between text-base text-gray-700">
                  <span className="font-medium">{progress}% Complete</span>
                  <span>{((150 * progress) / 100).toFixed(1)} MB of 150 MB</span>
                </div>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="space-y-1">
                  <p className="text-base text-gray-600">Download Speed</p>
                  <p className="text-xl font-medium text-gray-800">
                    {downloadSpeed.toFixed(1)} MB/s
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-base text-gray-600">Estimated Time Remaining</p>
                  <p className="text-xl font-medium text-gray-800">
                    {formatTime(timeRemaining)}
                  </p>
                </div>
              </div>

              {/* Status Message */}
              <div className={`text-center py-3 rounded-lg ${isFailed ? 'bg-red-50' : 'bg-gray-50'} border ${isFailed ? 'border-red-200' : 'border-gray-200'}`}>
                <p className={`text-base ${isFailed ? 'text-red-700' : 'text-gray-700'}`}>
                  {progress < 100
                    ? 'Please do not close this window until the download is complete.'
                    : isFailed
                    ? 'An error occurred. You will be redirected to our support page shortly.'
                    : 'Your software is ready. Redirecting to the next steps...'}
                </p>
              </div>
            </div>

            {/* Footer Branding */}
            <div className="text-center text-sm text-gray-500">
              <p>© {new Date().getFullYear()} All rights reserved.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DownloadProgress;