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

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Index />} />
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
                {/* <Route path="/" element={<PageHere />} /> */}
            
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </CartProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
