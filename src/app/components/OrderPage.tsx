import { useState } from 'react';
import { CartItem, Product } from '../types';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft, CheckCircle, Calendar, MapPin, Phone, User } from 'lucide-react';

interface OrderPageProps {
  cartItems?: CartItem[];
  singleProduct?: { product: Product; quantity: number };
  onBack: () => void;
  onOrderSubmit: (orderData: any) => void;
}

export function OrderPage({ cartItems = [], singleProduct, onBack, onOrderSubmit }: OrderPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    startDate: '',
    endDate: '',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const orderItems = singleProduct ? [singleProduct] : cartItems.map(item => ({ product: item.product, quantity: item.quantity }));

  const calculateTotal = () => {
    return orderItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const orderData = {
      ...formData,
      items: orderItems.map(item => ({
        productId: item.product.id,
        productName: item.product.name,
        quantity: item.quantity,
        price: item.product.price,
        priceUnit: item.product.priceUnit
      })),
      total: calculateTotal(),
      orderDate: new Date().toISOString(),
      status: 'pending'
    };

    onOrderSubmit(orderData);
    setIsSubmitted(true);
  };

  const isFormValid = formData.name && formData.phone && formData.location && formData.startDate;

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Submitted Successfully!</h1>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for your order. We'll contact you within 2 hours to confirm availability and delivery details.
            </p>
            <div className="bg-white rounded-lg shadow-md p-6 text-left mb-8">
              <h3 className="font-semibold mb-4">Order Summary</h3>
              <div className="space-y-2 text-sm">
                <div><strong>Order ID:</strong> #CO-{Date.now().toString().slice(-6)}</div>
                <div><strong>Customer:</strong> {formData.name}</div>
                <div><strong>Phone:</strong> {formData.phone}</div>
                <div><strong>Location:</strong> {formData.location}</div>
                <div><strong>Start Date:</strong> {formData.startDate}</div>
                {formData.endDate && <div><strong>End Date:</strong> {formData.endDate}</div>}
                <div><strong>Total:</strong> ${calculateTotal().toFixed(2)}</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={onBack} className="bg-blue-600 hover:bg-blue-700 text-white">
                Continue Shopping
              </Button>
              <Button variant="outline" onClick={() => window.print()}>
                Print Order Details
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-6 hover:bg-gray-100"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Place Your Order</h1>
          <p className="text-gray-600">Complete the form below to request your equipment rental</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Form */}
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="(555) 123-4567"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="location">Project Location *</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <Input
                      id="location"
                      type="text"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      placeholder="Full address where equipment will be delivered"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="startDate">Start Date *</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <Input
                        id="startDate"
                        type="date"
                        value={formData.startDate}
                        onChange={(e) => handleInputChange('startDate', e.target.value)}
                        className="pl-10"
                        required
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="endDate">End Date (Optional)</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <Input
                        id="endDate"
                        type="date"
                        value={formData.endDate}
                        onChange={(e) => handleInputChange('endDate', e.target.value)}
                        className="pl-10"
                        min={formData.startDate || new Date().toISOString().split('T')[0]}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                    placeholder="Special requirements, delivery instructions, project details..."
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                  disabled={!isFormValid}
                >
                  Submit Order Request
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  * Required fields. We'll contact you within 2 hours to confirm availability and finalize details.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Order Summary */}
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-6">
                {orderItems.map((item, index) => (
                  <div key={item.product.id || index} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-16 h-16 bg-white rounded-lg overflow-hidden flex-shrink-0">
                      <ImageWithFallback
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{item.product.name}</h4>
                      <div className="text-xs text-gray-600 mt-1">
                        Quantity: {item.quantity}
                      </div>
                      <div className="text-xs text-gray-600">
                        ${item.product.price} {item.product.priceUnit}
                      </div>
                      <div className="font-medium text-sm text-blue-600 mt-1">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">Subtotal:</span>
                  <span className="font-semibold">${calculateTotal().toFixed(2)}</span>
                </div>
                <div className="text-xs text-gray-500">
                  *Final pricing will be confirmed based on rental duration and delivery location
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-sm text-blue-900 mb-2">What happens next?</h4>
                <ul className="text-xs text-blue-700 space-y-1">
                  <li>• We'll call you within 2 hours</li>
                  <li>• Confirm equipment availability</li>
                  <li>• Schedule delivery time</li>
                  <li>• Provide final pricing</li>
                  <li>• Arrange payment method</li>
                </ul>
              </div>

              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <div className="text-xs text-green-700">
                  <div className="font-medium mb-1">Included with your rental:</div>
                  <ul className="space-y-1">
                    <li>• Free delivery & pickup</li>
                    <li>• Equipment insurance</li>
                    <li>• 24/7 emergency support</li>
                    <li>• Basic operation training</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}