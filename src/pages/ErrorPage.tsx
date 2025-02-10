import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Downloa from "../images/Downloads.png";

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
      </div>
    </div>
  );
};

export default ErrorPage;
