import Link from 'next/link';
import Image from 'next/image';
import { FiShoppingBag, FiStar, FiShield, FiTruck, FiArrowRight } from 'react-icons/fi';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-indigo-600 flex items-center">
            <FiShoppingBag className="mr-2" />
            EcoActive
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/products" className="text-gray-700 hover:text-indigo-600 transition">Shop</Link>
            <Link href="/ar-try-on" className="text-gray-700 hover:text-indigo-600 transition">AR Try-On</Link>
            <Link href="/subscription" className="text-gray-700 hover:text-indigo-600 transition">Subscription</Link>
            <Link href="/about" className="text-gray-700 hover:text-indigo-600 transition">Our Story</Link>
            <Link href="/assistant" className="text-gray-700 hover:text-indigo-600 transition">AI Assistant</Link>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
            </button>
            <Link href="/login" className="hidden md:block px-4 py-2 text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-50 transition">Sign In</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-50 to-purple-50 py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sustainable Activewear <br />
              <span className="text-indigo-600">Reimagined</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Experience the future of eco-friendly fitness apparel with our carbon-neutral production, AI-powered recommendations, and revolutionary AR try-on technology.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/products" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center transition">
                Shop Now <FiArrowRight className="ml-2" />
              </Link>
              <Link href="/ar-try-on" className="border border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-md font-medium flex items-center justify-center transition">
                Try AR Experience
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <Image 
                src="/images/hero-product.png" 
                alt="EcoActive Product" 
                className="w-full h-auto rounded-lg shadow-xl transform rotate-1 hover:rotate-0 transition duration-500"
                width={500}
                height={500}
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Carbon Footprint</p>
                    <p className="font-bold text-green-600">-85% vs standard</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="flex items-center">
              <FiShield className="text-indigo-600 text-2xl mr-2" />
              <span className="font-medium text-gray-600">Secure Checkout</span>
            </div>
            <div className="flex items-center">
              <FiTruck className="text-indigo-600 text-2xl mr-2" />
              <span className="font-medium text-gray-600">Carbon-Neutral Shipping</span>
            </div>
            <div className="flex items-center">
              <FiStar className="text-indigo-600 text-2xl mr-2" />
              <span className="font-medium text-gray-600">4.9/5 Customer Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-white-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-400">Why Choose EcoActive?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Sustainable Materials",
                description: "Made from 100% organic cotton and recycled materials with certified carbon-neutral production."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                ),
                title: "AR Try-On Technology",
                description: "Visualize how our products look on you before purchasing with our augmented reality feature."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                title: "AI Style Assistant",
                description: "Get personalized recommendations based on your workout routine, body type, and style preferences."
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-600">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-400">Featured Collection</h2>
            <Link href="/products" className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
              View All <FiArrowRight className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-gray-600">
            {[
              {
                id: 1,
                name: "Organic Yoga Set",
                price: 89.99,
                image: "/images/product1.jpg",
                sustainability: "95%",
                isNew: true
              },
              {
                id: 2,
                name: "Recycled Running Shorts",
                price: 45.99,
                image: "/images/product2.jpg",
                sustainability: "100%",
                isNew: false
              },
              {
                id: 3,
                name: "Bamboo Sports Bra",
                price: 52.99,
                image: "/images/product3.jpg",
                sustainability: "98%",
                isNew: true
              },
              {
                id: 4,
                name: "Eco-Friendly Leggings",
                price: 65.99,
                image: "/images/product4.jpg",
                sustainability: "92%",
                isNew: false
              }
            ].map((product) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                <div className="relative">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-64 object-cover"
                    width={500}
                    height={500}
                  />
                  {product.isNew && (
                    <div className="absolute top-2 right-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded">
                      New
                    </div>
                  )}
                  <div className="absolute bottom-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                    {product.sustainability} Sustainable
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-indigo-600 font-bold">${product.price.toFixed(2)}</span>
                    <button className="text-gray-500 hover:text-indigo-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-600">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The AR try-on feature is revolutionary! I knew exactly how the leggings would fit before buying.",
                author: "Sarah J.",
                rating: 5
              },
              {
                quote: "Finally found activewear that aligns with my eco-values without compromising on quality.",
                author: "Michael T.",
                rating: 5
              },
              {
                quote: "The AI recommendations suggested a perfect yoga set I wouldn't have picked myself. Love it!",
                author: "Priya K.",
                rating: 4
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">{'"'}{testimonial.quote}{'"'}</p>
                <p className="font-medium">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience the Future of Activewear?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join our eco-revolution and get 15% off your first order when you subscribe to our newsletter.</p>
          <div className="flex flex-col sm:flex-row justify-center max-w-md mx-auto gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-4 py-3 rounded-md text-gray-900 flex-grow"
            />
            <button className="bg-white text-indigo-600 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <FiShoppingBag className="mr-2" />
                EcoActive
              </h3>
              <p className="text-gray-400">Sustainable activewear for the conscious athlete.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2">
                <li><Link href="/products" className="text-gray-400 hover:text-white transition">All Products</Link></li>
                <li><Link href="/subscription" className="text-gray-400 hover:text-white transition">Subscription</Link></li>
                <li><Link href="/ar-try-on" className="text-gray-400 hover:text-white transition">AR Experience</Link></li>
                <li><Link href="/sale" className="text-gray-400 hover:text-white transition">Sale</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-white transition">Our Story</Link></li>
                <li><Link href="/sustainability" className="text-gray-400 hover:text-white transition">Sustainability</Link></li>
                <li><Link href="/blog" className="text-gray-400 hover:text-white transition">Blog</Link></li>
                <li><Link href="/careers" className="text-gray-400 hover:text-white transition">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition">Contact Us</Link></li>
                <li><Link href="/faq" className="text-gray-400 hover:text-white transition">FAQs</Link></li>
                <li><Link href="/shipping" className="text-gray-400 hover:text-white transition">Shipping & Returns</Link></li>
                <li><Link href="/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">© 2025 EcoActive. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}