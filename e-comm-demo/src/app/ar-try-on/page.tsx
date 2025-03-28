"use client";

import { useEffect, useState } from 'react';
import { FiArrowLeft, FiSmartphone, FiCamera, FiCheckCircle, FiRotateCw, FiMaximize2 } from 'react-icons/fi';
import Link from 'next/link';



export default function ARTryOnPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [arSupported, setArSupported] = useState(false);
  const [modelRotation, setModelRotation] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [showInstructions, setShowInstructions] = useState(true);

  // Mock product data - replace with your actual data
  const product = {
    name: "EcoActive Yoga Set",
    price: 89.99,
    size: "M",
    color: "Forest Green",
    arModel: "/models/yoga/scene.gltf",
    features: [
      "360° Product View",
      "Real-time Texture Mapping",
      "Body Measurement Scanning",
      "Environment Lighting Adjustment"
    ]
  };

  useEffect(() => {
    // Check AR availability
    const checkARSupport = async () => {
      try {
        if (navigator.xr) {
          const supported = await navigator.xr.isSessionSupported('immersive-ar');
          setArSupported(supported);
        } else {
          setArSupported(false);
        }
      } catch (error) {
        console.error('AR permission error:', error);
        setArSupported(false);
      }
      setIsLoading(false);
    };
    checkARSupport();
  }, []);

  const steps = [
    {
      title: "Position Your Device",
      icon: <FiSmartphone className="w-6 h-6" />,
      description: "Hold your device at chest height about 2 meters from your body"
    },
    {
      title: "Scan Your Space",
      icon: <FiCamera className="w-6 h-6" />,
      description: "Slowly move your device around to scan your environment"
    },
    {
      title: "Try It On",
      icon: <FiCheckCircle className="w-6 h-6" />,
      description: "The outfit will appear in your space - move around to inspect"
    }
  ];

  return (
    
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/products" className="flex items-center text-gray-700 hover:text-indigo-600">
              <FiArrowLeft className="h-5 w-5 mr-2" />
              Back to Product
            </Link>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setModelRotation(prev => prev + 90)}
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                <FiRotateCw className="h-6 w-6 text-gray-600" />
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-100">
                <FiMaximize2 className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* AR Viewer Section */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg overflow-hidden">
            {isLoading ? (
              <div className="w-full aspect-square flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
              </div>
            ) : arSupported ? (
              <div className="relative w-full aspect-square">
              </div>
            ) : (
              <div className="w-full aspect-square flex flex-col items-center justify-center p-8 text-center">
                <div className="text-red-500 text-4xl mb-4">⚠️</div>
                <h2 className="text-xl font-semibold mb-2">AR Not Supported</h2>
                <p className="text-gray-600 mb-4">
                  Your device doesn't support AR features. Try opening this page on a compatible mobile device.
                </p>
                <Link
                  href="/products"
                  className="text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  Return to Product Page
                </Link>
              </div>
            )}
          </div>

          {/* Product Info & Controls */}
          <div className="space-y-8">
            {/* Product Details */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Price</span>
                  <span className="font-bold text-indigo-600">${product.price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Selected Size</span>
                  <span className="font-medium">{product.size}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Color</span>
                  <div className="flex items-center">
                    <span className="w-4 h-4 rounded-full bg-green-700 mr-2"></span>
                    <span>{product.color}</span>
                  </div>
                </div>
              </div>
              <button className="w-full mt-6 bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors">
                Add to Cart
              </button>
            </div>

            {/* AR Features */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-lg font-semibold mb-4">AR Features</h2>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-8 h-8 bg-indigo-50 rounded-full flex items-center justify-center mr-3">
                      <FiCheckCircle className="w-4 h-4 text-indigo-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Try-On Instructions */}
            {showInstructions && (
              <div className="bg-white p-6 rounded-xl shadow-sm relative">
                <button 
                  onClick={() => setShowInstructions(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
                <h2 className="text-lg font-semibold mb-4">How to Use AR Try-On</h2>
                <div className="space-y-6">
                  {steps.map((step, index) => (
                    <div 
                      key={index}
                      className={`flex items-start p-4 rounded-lg transition-colors ${currentStep === index ? 'bg-indigo-50 border border-indigo-200' : 'bg-gray-50'}`}
                    >
                      <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">{step.title}</h3>
                        <p className="text-sm text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex justify-between items-center">
                  <button
                    onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
                    disabled={currentStep === 0}
                    className="px-4 py-2 text-gray-600 disabled:opacity-50"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => {
                      if (currentStep < steps.length - 1) {
                        setCurrentStep(prev => prev + 1);
                      } else {
                        setShowInstructions(false);
                      }
                    }}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                  >
                    {currentStep < steps.length - 1 ? 'Next' : 'Got It!'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Measurement Tools */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Body Measurements</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Height</span>
                <span className="font-medium">175cm</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Waist</span>
                <span className="font-medium">78cm</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Hips</span>
                <span className="font-medium">92cm</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Fit Prediction</h3>
            <div className="flex items-center mb-2">
              <div className="w-2/3 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-green-500" 
                  style={{ width: '92%' }}
                ></div>
              </div>
              <span className="ml-2 text-green-600 font-medium">92% Match</span>
            </div>
            <p className="text-sm text-gray-600">
              Based on your measurements and previous purchases
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Adjust Fit</h3>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                Slim Fit
              </button>
              <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                Regular Fit
              </button>
              <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                Tighten 5%
              </button>
              <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                Loosen 5%
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}