import { Product } from '../types';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft, Check, Truck, Shield, Clock } from 'lucide-react';
import { useState } from 'react';

interface ProductDetailsPageProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
  onOrderNow: (product: Product, quantity: number) => void;
}

export function ProductDetailsPage({ product, onBack, onAddToCart, onOrderNow }: ProductDetailsPageProps) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
  };

  const handleOrderNow = () => {
    onOrderNow(product, quantity);
  };

  const benefits = [
    { icon: Truck, text: 'Free delivery & pickup' },
    { icon: Shield, text: 'Fully insured equipment' },
    { icon: Clock, text: '24/7 customer support' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-6 hover:bg-gray-100"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Equipment
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div>
            <div className="aspect-[4/3] bg-white rounded-lg shadow-lg overflow-hidden">
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">
                {product.category}
              </Badge>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Pricing */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-3xl font-bold text-blue-600">${product.price}</span>
                  <span className="text-lg text-gray-500 ml-2">{product.priceUnit}</span>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Available</p>
                  <p className="font-semibold text-green-600">{product.availableQuantity} units</p>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity Needed
                </label>
                <div className="flex items-center space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    -
                  </Button>
                  <span className="text-lg font-semibold w-12 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(Math.min(product.availableQuantity, quantity + 1))}
                    disabled={quantity >= product.availableQuantity}
                  >
                    +
                  </Button>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Max available: {product.availableQuantity} units
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button
                  onClick={handleOrderNow}
                  size="lg"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                >
                  Order Now
                </Button>
                <Button
                  onClick={handleAddToCart}
                  variant="outline"
                  size="lg"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  Add to Cart
                </Button>
              </div>

              {/* Benefits */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <benefit.icon className="w-5 h-5 text-green-600" />
                      <span className="text-sm text-gray-700">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        {product.specifications && product.specifications.length > 0 && (
          <div className="mt-12">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.specifications.map((spec, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}