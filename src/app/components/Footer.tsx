import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold">CE</span>
              </div>
              <span className="font-bold text-xl">ConstructEq</span>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner for construction equipment rental and supply. Professional service, quality equipment, competitive rates.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-orange-500" />
                <span className="text-gray-300">(555) 123-RENT</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-orange-500" />
                <span className="text-gray-300">info@constructeq.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span className="text-gray-300">123 Industrial Blvd, City, ST 12345</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="font-semibold mb-4">Business Hours</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-orange-500" />
                <div className="text-gray-300">
                  <div>Mon - Fri: 7:00 AM - 6:00 PM</div>
                  <div>Saturday: 8:00 AM - 4:00 PM</div>
                  <div>Sunday: Closed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-orange-500 transition-colors">Equipment Catalog</a>
              <a href="#" className="block text-gray-300 hover:text-orange-500 transition-colors">Rental Terms</a>
              <a href="#" className="block text-gray-300 hover:text-orange-500 transition-colors">Safety Guidelines</a>
              <a href="#" className="block text-gray-300 hover:text-orange-500 transition-colors">Customer Support</a>
              <a href="#" className="block text-gray-300 hover:text-orange-500 transition-colors">Emergency Service</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 ConstructEq. All rights reserved. | Licensed & Insured Construction Equipment Rental</p>
          </div>
        </div>
      </div>
    </footer>
  );
}