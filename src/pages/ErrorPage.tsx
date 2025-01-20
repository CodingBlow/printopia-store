import React from "react";
import { useNavigate } from "react-router-dom";
import Downloa from "../images/Downloads.png";
import { MessageCircle } from "lucide-react";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 w-screen h-screen bg-white">
      <div className="relative w-full h-full">
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
