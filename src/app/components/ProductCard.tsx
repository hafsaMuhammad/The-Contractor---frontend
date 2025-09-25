import { Product } from '../types';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  product: Product;
  onViewDetails: () => void;
}

export function ProductCard({ product, onViewDetails }: ProductCardProps) {
  return (
    <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden">
      <div className="aspect-[4/3] bg-gray-100">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-4">
        <div className="mb-2">
          <span className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
            {product.category}
          </span>
        </div>
        <h3 className="font-semibold text-lg mb-2 text-gray-900 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-2xl font-bold text-blue-600">${product.price}</span>
            <span className="text-sm text-gray-500 ml-1">{product.priceUnit}</span>
          </div>
          <div className="text-sm text-gray-500">
            {product.availableQuantity} available
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={onViewDetails}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}