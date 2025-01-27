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
    // Track conversion when component mounts
    trackConversion();

    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 1;
        setDownloadSpeed(2.4 + Math.random() * 0.8);
        setTimeRemaining(prev => Math.max(0, prev - 1));

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
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <Card className={`w-full max-w-3xl shadow-md border-t-4 ${isFailed ? 'border-t-red-600' : 'border-t-blue-600'}`}>
        <CardContent className="pt-10 pb-10">
          <div className="flex flex-col items-center space-y-10">
            <div className="text-center space-y-4 w-full">
              <div className={`w-20 h-20 ${isFailed ? 'bg-red-50' : 'bg-blue-50'} rounded-full flex items-center justify-center mx-auto mb-6 border-2 ${isFailed ? 'border-red-100' : 'border-blue-100'}`}>
                {progress < 100 ? (
                  <FileDown className={`h-10 w-10 ${isFailed ? 'text-red-700' : 'text-blue-700'}`} />
                ) : isFailed ? (
                  <XCircle className="h-10 w-10 text-red-600" />
                ) : (
                  <Download className="h-10 w-10 text-green-600" />
                )}
              </div>
              <h1 className="text-3xl font-medium text-gray-800">
                Software Download
              </h1>
              <p className="text-xl text-gray-600">
                {progress < 100
                  ? 'Your download is in progress'
                  : isFailed
                  ? 'Download failed! Redirecting...'
                  : 'Download complete!'}
              </p>
            </div>

            <div className="w-full space-y-8">
              <div className="space-y-4">
                <Progress value={progress} className={`h-4 rounded-full ${isFailed ? 'bg-red-600' : ''}`} />
                <div className="flex justify-between text-lg text-gray-700">
                  <span className="font-medium">{progress}% Complete</span>
                  <span>{((150 * progress) / 100).toFixed(1)} MB of 150 MB</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-xl">
                <div className="space-y-2">
                  <p className="text-lg text-gray-600">Download Speed</p>
                  <p className="text-2xl font-medium text-gray-800">
                    {downloadSpeed.toFixed(1)} MB/s
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-lg text-gray-600">Time Remaining</p>
                  <p className="text-2xl font-medium text-gray-800">
                    {formatTime(timeRemaining)}
                  </p>
                </div>
              </div>

              <div className={`text-center py-4 rounded-xl ${isFailed ? 'bg-red-50' : 'bg-blue-50'}`}>
                <p className={`text-lg ${isFailed ? 'text-red-800' : 'text-blue-800'}`}>
                  {progress < 100
                    ? "Please keep this window open until the download completes"
                    : isFailed
                    ? "Something went wrong. Redirecting to the error page..."
                    : "Finalizing your download..."}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DownloadProgress;
