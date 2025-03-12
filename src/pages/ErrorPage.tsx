import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Downloa from "../images/last_Image.png";

const ErrorPage = () => {
  const navigate = useNavigate();
  const [overlayVisible, setOverlayVisible] = useState(true);

  useEffect(() => {
    const elem = document.documentElement as any;

    const enterFullscreen = async () => {
      if (!document.fullscreenElement) {
        try {
          if (elem.requestFullscreen) {
            await elem.requestFullscreen();
          } else if (elem.webkitRequestFullscreen) {
            await elem.webkitRequestFullscreen();
          } else if (elem.msRequestFullscreen) {
            await elem.msRequestFullscreen();
          }
        } catch (error) {
          console.error("Fullscreen error:", error);
        }
      }
    };

    const handleUserInteraction = () => {
      enterFullscreen();
      setOverlayVisible(false);

      interactionEvents.forEach((event) =>
        document.removeEventListener(event, handleUserInteraction)
      );
    };

    const interactionEvents = ["click", "keydown", "touchstart"];

    interactionEvents.forEach((event) =>
      document.addEventListener(event, handleUserInteraction)
    );

    return () => {
      interactionEvents.forEach((event) =>
        document.removeEventListener(event, handleUserInteraction)
      );
    };
  }, [navigate]);

  return (
    <div className="fixed inset-0 w-screen h-screen bg-white flex justify-center items-center">
      {overlayVisible}

      <div className="relative">
        <img
          src={Downloa}
          alt="Background"
          className="w-full h-full object-contain"
        />

        {/* Live Chat & Call Us Buttons */}
        <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 flex flex-col gap-3">
          {/* Live Chat Button (With Animation) */}
          <a
            href="https://tawk.to/chat/67822971af5bfec1dbea1367/1iha73pb0"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md flex items-center 
            transition-all duration-200 transform hover:bg-blue-800 hover:-translate-y-1 
            animate-[customBounce_8s_ease-in-out_infinite]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                clipRule="evenodd"
              />
            </svg>
            Live Chat Now
          </a>

          {/* Call Us Button (No Animation) */}
          <a
            href="tel:+17608237321"
            className="bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md flex items-center 
            transition-all duration-200 transform hover:bg-green-700 hover:-translate-y-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.6 2a1.6 1.6 0 00-1.6 1.6c0 8.994 7.306 16.4 16.4 16.4a1.6 1.6 0 001.6-1.6V15.8a1.6 1.6 0 00-1.6-1.6c-1.258 0-2.457-.244-3.6-.684a1.6 1.6 0 00-1.5.22l-2.4 1.6A12.49 12.49 0 015.6 8.8l1.6-2.4a1.6 1.6 0 00.22-1.5A12.44 12.44 0 007.2 1.6 1.6 1.6 0 005.6 0H3.6z"
                clipRule="evenodd"
              />
            </svg>
            Call Us +1-760-823-7321
          </a>
        </div>
      </div>

      {/* Custom Bounce Animation (Only for Live Chat) */}
      <style>
        {`
          @keyframes customBounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-2px); }
          }
        `}
      </style>
    </div>
  );
};

export default ErrorPage;
