import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const OrderSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
      <h1 className="text-2xl font-bold mb-2">Thank You for Your Order!</h1>
      <p className="text-muted-foreground mb-4">
        Our team will contact you shortly to confirm your order details.
      </p>
      <p className="text-sm text-muted-foreground">
        Redirecting to homepage in 5 seconds...
      </p>
    </div>
  );
};

export default OrderSuccess;