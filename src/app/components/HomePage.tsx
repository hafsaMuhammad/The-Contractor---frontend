import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Truck, Shield, Clock, Award } from 'lucide-react';

interface HomePageProps {
  products: Product[];
  onViewProduct: (product: Product) => void;
  searchQuery: string;
}

export function HomePage({ products, onViewProduct, searchQuery }: HomePageProps) {
  // Filter products based on search query
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const features = [
    {
      icon: Truck,
      title: 'Free Delivery',
      description: 'Free equipment delivery and pickup within 50 miles'
    },
    {
      icon: Shield,
      title: 'Fully Insured',
      description: 'All equipment is fully insured and maintained to highest standards'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer support and emergency service'
    },
    {
      icon: Award,
      title: '15+ Years Experience',
      description: 'Trusted by contractors with over 15 years in business'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Professional Construction Equipment Rental
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Get the right equipment for your construction project. Quality machinery, competitive rates, and reliable service you can trust.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8">
                  Browse Equipment
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8">
                  Get Quote
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1665152998573-9ddafb89278f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGNhdmF0b3IlMjBjb25zdHJ1Y3Rpb24lMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzU4Nzk3NzM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Construction Equipment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose ConstructEq?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide more than just equipment rental - we're your construction project partner
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {searchQuery ? `Search Results for "${searchQuery}"` : 'Featured Equipment'}
            </h2>
            <p className="text-xl text-gray-600">
              {searchQuery ? 
                `${filteredProducts.length} equipment found` : 
                'Professional-grade construction equipment available for rent'
              }
            </p>
          </div>
          
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 mb-4">No equipment found matching your search.</p>
              <p className="text-gray-500">Try adjusting your search terms or browse all equipment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onViewDetails={() => onViewProduct(product)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today for equipment availability and pricing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8">
              Call (555) 123-RENT
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8">
              Request Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}