import { 
    BuildingOfficeIcon,
    UserGroupIcon,
    LightBulbIcon,
    ChartBarIcon,
    GlobeAltIcon,
    HeartIcon
  } from '@heroicons/react/24/outline';

  import Image from 'next/image';
  
  const AboutPage = () => {
    const team = [
      {
        name: 'Jack Cheung',
        role: 'CEO & Founder',
        bio: 'Visionary leader with 15+ years in tech industry',
        image: '/team/alex.jpg'
      },
      {
        name: 'Maria Garcia',
        role: 'CTO',
        bio: 'Engineering expert specializing in scalable systems',
        image: '/team/tom.jpg'
      },
      {
        name: 'Sam Wilson',
        role: 'Head of Design',
        bio: 'Creative director focused on user experience',
        image: '/team/sam.jpg'
      },
      {
        name: 'John Doe',
        role: 'Head of Marketing',
        bio: 'Digital strategist with a passion for branding and marketing',
        image: '/team/joe.jpg'
      }
    ];
  
    const stats = [
      { value: '10K+', label: 'Happy Customers' },
      { value: '50+', label: 'Countries Served' },
      { value: '2015', label: 'Founded In' },
      { value: '100%', label: 'Customer Satisfaction' }
    ];
  
    return (
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-gray-900">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Our Story
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl">
              Building innovative solutions to empower businesses and individuals worldwide.
            </p>
          </div>
        </div>
  
        {/* Mission Section */}
        <div className="py-16 bg-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
                Who We Are
              </h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Mission & Values
              </p>
            </div>
  
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  icon: LightBulbIcon,
                  title: "Innovation",
                  desc: "We push boundaries to create groundbreaking solutions"
                },
                {
                  icon: UserGroupIcon,
                  title: "People First",
                  desc: "Our team and customers are at the heart of everything"
                },
                {
                  icon: GlobeAltIcon,
                  title: "Global Impact",
                  desc: "Building products that make a worldwide difference"
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="bg-indigo-100 p-3 rounded-full">
                      <item.icon className="h-6 w-6 text-indigo-600" />
                    </div>
                    <h3 className="ml-4 text-lg font-medium text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        {/* History Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center mb-12">
              <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
                Timeline
              </h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Journey
              </p>
            </div>
  
            <div className="relative">
              <div className="absolute left-1/2 w-0.5 h-full bg-gray-200 transform -translate-x-1/2"></div>
              
              {[
                { year: "2015", event: "Company founded in San Francisco" },
                { year: "2017", event: "Launched first product with 100+ customers" },
                { year: "2019", event: "Expanded to European markets" },
                { year: "2022", event: "Reached 10,000+ active users" },
                { year: "2023", event: "Opened new headquarters in New York" }
              ].map((item, idx) => (
                <div key={idx} className={`mb-8 flex ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 p-6 rounded-lg shadow-sm ${idx % 2 === 0 ? 'bg-indigo-50' : 'bg-white border border-gray-200'}`}>
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-white border border-gray-200 rounded-full w-12 h-12 flex items-center justify-center">
                        <span className="text-indigo-600 font-bold">{item.year}</span>
                      </div>
                      <div className="ml-4">
                        <p className="text-gray-900">{item.event}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        {/* Team Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center mb-12">
              <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
                Team
              </h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Meet Our Leadership
              </p>
            </div>
  
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((person) => (
                <div key={person.name} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <Image className="w-full h-48 object-cover" src={person.image} alt={person.name} />
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900">{person.name}</h3>
                    <p className="text-indigo-600">{person.role}</p>
                    <p className="mt-2 text-gray-600">{person.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        {/* Stats Section */}
        <div className="bg-indigo-700">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-4xl font-extrabold text-white">{stat.value}</p>
                  <p className="text-lg font-medium text-indigo-200">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        {/* CTA Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              <span className="block">Ready to join our journey?</span>
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              We're always looking for talented individuals to join our team.
            </p>
            <div className="mt-8">
              <a
                href="/careers"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
              >
                View Open Positions
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutPage;