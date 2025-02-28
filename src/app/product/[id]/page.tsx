'use client';

import Image from 'next/image';

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <Image
              src="/needle-grinding-machine.jpg"
              alt="CNC Machine"
              width={500}
              height={500}
              className="w-full h-96 object-cover"
            />
            <Image
              src="/needle-grinding-machine.jpg"
              alt="CNC Machine"
              width={100}
              height={100}
              className="w-full h-24 object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                High-Precision CNC Milling Machine
              </h1>
              <div className="mt-2 flex items-center space-x-2">
                <div className="flex items-center">
                  
                </div>
                <span className="text-gray-500">(128 Reviews)</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold text-orange-600">₹25,00,000</p>
                  <p className="text-sm text-gray-500">Ex. Factory Price</p>
                </div>
                
              </div>

              <div className="grid grid-cols-2 gap-4">
                
              </div>
            </div>

            <div className="border rounded-lg p-4 space-y-3">
              <div className="flex items-center space-x-3">
                
                <span>Free Shipping to Major Ports</span>
              </div>
              <div className="flex items-center space-x-3">
                
                <span>Trade Assurance Protection</span>
              </div>
            </div>

            {/* Quick Details */}
            <div className="p-4">
              <h3 className="font-semibold mb-3">Quick Details</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Brand</p>
                  <p className="font-medium">TradeMind Pro</p>
                </div>
                <div>
                  <p className="text-gray-500">Model Number</p>
                  <p className="font-medium">TM-CNC-5000</p>
                </div>
                <div>
                  <p className="text-gray-500">Condition</p>
                  <p className="font-medium">New</p>
                </div>
                <div>
                  <p className="text-gray-500">Warranty</p>
                  <p className="font-medium">2 Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>

  
      </div>
    </div>
  );
}
