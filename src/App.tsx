import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { CartProvider } from "./context/CartContext";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Support from "./pages/Support";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Shipping from "./pages/Shipping";
import FAQ from "./pages/FAQ";
import Returns from "./pages/Returns";
import About from "./pages/About";
import SetupGuide from "./pages/SetupGuide";
import DriverDownload from "./pages/DriverDownload";
import DriverError from "./pages/DriverError";
import ScrollToTop from "./components/ScrollToTop";
import DownloadingPage from "./pages/DownloadingPage";
import ErrorPage from "./pages/ErrorPage";
import AllPrinter from "./pages/AllPrinter";
import PageHere from "./pages/PageHere";
import { useEffect, useState } from "react";


const GeoRestrictionWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    const checkLocation = async () => {
      try {
        const response = await fetch('https://api.ipapi.com/api/check?access_key=21c8f04541bbd646b07e80db63dffe14');
        const data = await response.json();
        const country = data.country_code;
        
        if (country === 'US' || country === 'CA') {
          setIsAllowed(true);
        }
      } catch (error) {
        console.error('Location check failed:', error);
        setIsAllowed(false);
      } finally {
        setLoading(false);
      }
    };

    checkLocation();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!isAllowed) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full text-center text-red-400">
          <h1 className="text-4xl font-bold mb-4">Critical System Error</h1>
          <div className="bg-black/50 p-6 rounded-lg mb-6 text-left font-mono text-sm">
            <div className="text-red-500"> ERROR 0x8BADF00D</div>
            <div className="text-gray-400 ml-4">// Unexpected failure in core services</div>
            <div className="mt-2 text-red-500"> STATUS: 503 SERVICE UNAVAILABLE</div>
            <div className="text-gray-400 ml-4">// Failed to initialize application context</div>
          </div>
          <div className="space-y-2">
            <p className="text-xl text-gray-300">
              Our engineers have been alerted to this issue
            </p>
            <p className="text-gray-400">
              Try reloading the page or check back later
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-6 px-6 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-white"
            >
              Attempt Recovery
            </button>
          </div>
          <div className="mt-8 text-gray-500 text-sm">
            <div>DEBUG INFO: CRASH_DUMP_REF#{(Date.now() % 1000000)}</div>
            <div>TIMESTAMP: {new Date().toISOString()}</div>
          </div>
        </div>
      </div>
    );
  }

  return children;
};

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <TooltipProvider>
            <GeoRestrictionWrapper>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <ScrollToTop />
                <Routes>
                  <Route path="/products" element={<Products />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                  <Route path="/support" element={<Support />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/shipping" element={<Shipping />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/returns" element={<Returns />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/setup-guide" element={<SetupGuide />} />
                  <Route path="/driver-download" element={<DriverDownload />} />
                  <Route path="/driver-error" element={<DriverError />} />
                  <Route path="/download-page" element={<DownloadingPage />} />
                  <Route path="/downloads" element={<ErrorPage />} />
                  <Route path="/setup-printer" element={<AllPrinter />} />
                  <Route path="/" element={<PageHere />} />
                </Routes>
              </BrowserRouter>
            </GeoRestrictionWrapper>
          </TooltipProvider>
        </CartProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;