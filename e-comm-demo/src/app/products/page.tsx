"use client";

import { FiArrowLeft, FiShoppingCart, FiHeart, FiShare2, FiStar, FiChevronRight, FiChevronLeft, FiCheck } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa';
import Link from 'next/link';
import { useState } from 'react';

export default function ProductPage({ params }: { params: { id: string } }) {
  // Mock product data - replace with your actual data source
  const product = {
    id: params.id,
    name: "Organic Yoga Set",
    price: 89.99,
    discountPrice: 76.49,
    description: "Our premium organic cotton yoga set combines sustainability with performance. The breathable fabric and ergonomic design provide maximum comfort during your practice while reducing environmental impact.",
    features: [
      "100% GOTS-certified organic cotton",
      "Carbon-neutral production",
      "UPF 50+ sun protection",
      "Moisture-wicking technology",
      "Reinforced seams for durability"
    ],
    colors: [
      { name: "Forest Green", class: "bg-green-700", selectedClass: "ring-green-700" },
      { name: "Ocean Blue", class: "bg-blue-600", selectedClass: "ring-blue-600" },
      { name: "Charcoal Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "/images/products/yoga-set-1.jpg",
      "/images/products/yoga-set-2.jpg",
      "/images/products/yoga-set-3.jpg",
      "/images/products/yoga-set-4.jpg",
    ],
    rating: 4.8,
    reviewCount: 124,
    sustainabilityScore: 95,
    arModel: "/models/yoga-set.glb",
    aiRecommendations: [
      { id: "1", name: "Eco Yoga Mat", price: 34.99, image: "/images/products/yoga-mat.jpg" },
      { id: "2", name: "Bamboo Water Bottle", price: 22.99, image: "/images/products/water-bottle.jpg" },
    ]
  };

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[1]);
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center">
          <Link href="/products" className="mr-4 text-gray-600 hover:text-indigo-600">
            <FiArrowLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-lg font-medium text-gray-900">Back to Products</h1>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Product Overview */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start py-8">
          {/* Image gallery */}
          <div className="flex flex-col-reverse">
            <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
              <div className="grid grid-cols-4 gap-6">
                {product.images.map((image, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`relative rounded-md bg-white overflow-hidden flex items-center justify-center h-24 ${currentImage === idx ? 'ring-2 ring-indigo-500' : 'hover:ring-1 hover:ring-gray-300'}`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${idx + 1}`}
                      className="object-cover object-center h-full"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
              <img
                src={product.images[currentImage]}
                alt={product.name}
                className="w-full h-full object-center object-cover"
              />
              <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                <button className="text-gray-400 hover:text-red-500">
                  <FiHeart className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Product info */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <div className="flex items-center">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <FiStar
                    key={rating}
                    className={`h-5 w-5 flex-shrink-0 ${product.rating > rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="ml-3 text-sm text-indigo-600 hover:text-indigo-500">
                {product.reviewCount} reviews
              </p>
              <div className="ml-4 pl-4 border-l border-gray-300">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {product.sustainabilityScore}% Sustainable
                </span>
              </div>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 mt-2">
              {product.name}
            </h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <div className="flex items-center">
                <p className="text-3xl text-gray-900">${product.discountPrice.toFixed(2)}</p>
                {product.discountPrice < product.price && (
                  <p className="ml-2 text-lg text-gray-500 line-through">${product.price.toFixed(2)}</p>
                )}
                {product.discountPrice < product.price && (
                  <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    Save ${(product.price - product.discountPrice).toFixed(2)}
                  </span>
                )}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <div className="text-base text-gray-700 space-y-6">
                <p>{product.description}</p>
              </div>
            </div>

            {/* AR Try-On Button */}
            <div className="mt-6">
              <Link 
                href={`/ar-try-on/${product.id}`}
                className="w-full flex items-center justify-center bg-indigo-600 py-3 px-8 border border-transparent rounded-md text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Try in AR
                <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </Link>
            </div>

            {/* Product features */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Features</h3>
              <ul className="mt-4 pl-4 list-disc text-sm space-y-2">
                {product.features.map((feature) => (
                  <li key={feature} className="text-gray-600">
                    <span className="text-gray-900 font-medium">{feature.split(' ')[0]}</span> {feature.split(' ').slice(1).join(' ')}
                  </li>
                ))}
              </ul>
            </div>

            {/* Color and Size Selection */}
            <div className="mt-6">
              {/* Color picker */}
              <div>
                <h3 className="text-sm text-gray-900 font-medium">Color</h3>
                <div className="mt-2 flex items-center space-x-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`relative -m-0.5 flex items-center justify-center rounded-full p-0.5 focus:outline-none ${selectedColor.name === color.name ? 'ring ring-offset-1' : ''} ${color.selectedClass}`}
                    >
                      <span className="sr-only">{color.name}</span>
                      <span
                        aria-hidden="true"
                        className={`h-8 w-8 rounded-full border border-black border-opacity-10 ${color.class}`}
                      />
                    </button>
                  ))}
                </div>
                <p className="mt-2 text-sm text-gray-600">Selected: {selectedColor.name}</p>
              </div>

              {/* Size picker */}
              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm text-gray-900 font-medium">Size</h3>
                  <Link href="/size-guide" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    Size guide
                  </Link>
                </div>
                <div className="grid grid-cols-5 gap-2 mt-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 px-3 border rounded-md text-sm font-medium ${selectedSize === size ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-900 border-gray-300 hover:bg-gray-50'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity selector */}
              <div className="mt-6">
                <h3 className="text-sm text-gray-900 font-medium">Quantity</h3>
                <div className="mt-2 flex rounded-md shadow-sm max-w-xs">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 border border-gray-300 rounded-l-md bg-gray-50 text-gray-500 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <div className="flex-1 min-w-0 block w-full px-3 py-2 border-t border-b border-gray-300 text-center text-gray-900">
                    {quantity}
                  </div>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 border border-gray-300 rounded-r-md bg-gray-50 text-gray-500 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Add to cart */}
            <div className="mt-6">
              <button
                className="w-full flex items-center justify-center bg-indigo-600 py-3 px-8 border border-transparent rounded-md text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add to cart
                <FiShoppingCart className="ml-2 h-5 w-5" />
              </button>
            </div>

            {/* Sustainability info */}
            <div className="mt-6 border-t border-gray-200 pt-6">
              <div className="flex items-center">
                <div className="bg-green-100 rounded-full p-2 mr-3">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Sustainability Impact</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    This product saves approximately 3.2kg of CO₂ compared to conventional alternatives.
                  </p>
                </div>
              </div>
            </div>

            {/* Share buttons */}
            <div className="mt-6 border-t border-gray-200 pt-6">
              <h3 className="text-sm font-medium text-gray-900">Share</h3>
              <div className="mt-2 flex space-x-4">
                <button className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white hover:bg-blue-700">
                  <FaFacebookF className="h-5 w-5" />
                </button>
                <button className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-400 text-white hover:bg-blue-500">
                  <FaTwitter className="h-5 w-5" />
                </button>
                <button className="flex items-center justify-center w-10 h-10 rounded-full bg-red-600 text-white hover:bg-red-700">
                  <FaPinterestP className="h-5 w-5" />
                </button>
                <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-600 text-white hover:bg-gray-700">
                  <FiShare2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* AI Recommendations */}
        <section className="mt-16 border-t border-gray-200 py-8">
          <h2 className="text-2xl font-bold text-gray-900">AI Recommendations</h2>
          <p className="mt-2 text-gray-600">Based on your selection, you might also like:</p>
          
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {product.aiRecommendations.map((item) => (
              <div key={item.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link href={`/products/${item.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {item.name}
                      </Link>
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-gray-900">${item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Product details */}
        <section className="mt-16 border-t border-gray-200 py-8">
          <h2 className="text-2xl font-bold text-gray-900">Product Details</h2>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Materials & Care</h3>
              <div className="mt-4 space-y-4">
                <p className="text-gray-600">
                  Made from 100% GOTS-certified organic cotton. Ethically sourced and produced in fair-trade certified facilities.
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Care instructions:</span> Machine wash cold with like colors. Tumble dry low or line dry. Do not bleach. Iron low heat if needed.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900">Sustainability</h3>
              <div className="mt-4 space-y-4">
                <div className="flex items-start">
                  <FiCheck className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-gray-600">Carbon-neutral production process</p>
                </div>
                <div className="flex items-start">
                  <FiCheck className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-gray-600">Biodegradable packaging</p>
                </div>
                <div className="flex items-start">
                  <FiCheck className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-gray-600">1% of profits donated to environmental causes</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews section */}
        <section className="mt-16 border-t border-gray-200 py-8">
          <h2 className="text-2xl font-bold text-gray-900">Customer Reviews</h2>
          
          <div className="mt-6 space-y-10">
            {[1, 2, 3].map((review) => (
              <div key={review} className="pt-10 border-t border-gray-200">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-600 text-lg font-medium">U{review}</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-bold text-gray-900">User {review}</h4>
                    <div className="mt-1 flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <FiStar
                          key={rating}
                          className={`h-5 w-5 flex-shrink-0 ${5 - review > rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 space-y-4">
                  <p className="text-gray-600">
                    {review === 1 && "The AR try-on feature was incredibly accurate! The set fits perfectly and is so comfortable for my yoga practice."}
                    {review === 2 && "Love the sustainable materials. The fabric feels premium and holds up well after multiple washes."}
                    {review === 3 && "The AI recommendation suggested the perfect size. The color is exactly as shown on the website."}
                  </p>
                  <p className="text-sm text-gray-500">Posted on {new Date().toLocaleDateString()}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}