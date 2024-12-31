const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">PrintTech</h3>
            <p className="text-sm">
              Professional printing solutions with expert support and service.
            </p>
          </div>
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/products" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="/support" className="hover:text-white transition-colors">Support</a></li>
              <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="/faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="/shipping" className="hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="/returns" className="hover:text-white transition-colors">Returns</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>1234 Print Street</li>
              <li>Tech City, TC 12345</li>
              <li>support@printtech.com</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; 2024 PrintTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;