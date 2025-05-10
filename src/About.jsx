import React from 'react';
import img from './img/store.jpg';
import { CheckCircleIcon, GlobeAltIcon, ClockIcon, UsersIcon } from '@heroicons/react/24/outline';
import one from './img/one.jpg'
import two from './img/two.jpg'
import three from './img/three.jpg'
import four from './img/four.jpg'

const About = () => {
  const values = [
    { title: "Quality", icon: CheckCircleIcon },
    { title: "Sustainability", icon: GlobeAltIcon },
    { title: "Timeless", icon: ClockIcon },
    { title: "Community", icon: UsersIcon }
  ];

  return (
    <section className="bg-gray-900 text-gray-100 py-12 px-4 md:px-8 pt-35">
      <div className="container mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2
            className="text-xl md:text-2xl font-semibold mb-3"
            style={{ fontFamily: 'Montserrat', textShadow: '1px 1px 1px rgba(255,255,255,0.05)' }}
          >
            Our Story
          </h2>
          <div className="w-20 h-1 bg-gray-400 mx-auto mb-5"></div>
          <p className="text-gray-300 text-base max-w-2xl mx-auto">
            Crafting premium fashion since 2018, delivering style that lasts.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image Column */}
          <div className="rounded-md overflow-hidden shadow-lg">
            <img
              src={img}
              alt="Our store interior"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Column */}
          <div className="space-y-5">
            <h3 className="text-xl font-medium text-gray-100">From Passion to Fashion</h3>
            <p className="text-gray-300 text-sm">
              Founded with a vision to redefine contemporary fashion, our journey began in a small studio with big dreams. Today, we offer curated collections that blend elegance with modern trends.
            </p>
            <p className="text-gray-300 text-sm">
              Every piece is thoughtfully selected to ensure quality, sustainability, and style that resonates globally.
            </p>
            {/* Values */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              {values.map(({ title, icon: Icon }, i) => (
                <div key={i} className="flex flex-col items-center p-3 bg-gray-800 rounded-md">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full mb-2">
                    <Icon className="h-6 w-6 text-gray-100" />
                  </div>
                  <h4 className="font-medium text-sm text-gray-100">{title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <h3
            className="text-xl md:text-2xl font-semibold text-center mb-10"
            style={{ fontFamily: 'Montserrat' }}
          >
            Meet Our Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img:one, name: "Hyder Bhat", role: "Founder & CEO" },
              { img:two, name: "Himaan", role: "Design Director" },
              { img:three, name: "Waseem", role: "Marketing Lead" },
              { img:four, name: "Amaan", role: "Customer Experience" }
            ].map((member, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-3 shadow-sm">
                  <img
                    src={member.img}
                    alt={member.role}
                    className="w-full h-full"
                  />
                </div>
                <h4 className="font-medium text-base text-gray-100">{member.name}</h4>
                <p className="text-gray-300 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gray-800 p-6 rounded-md">
          <h3 className="text-xl font-medium mb-3">Join Our Journey</h3>
          <p className="text-gray-300 text-sm mb-5 max-w-xl mx-auto">
            Subscribe to our newsletter for exclusive access to new collections and style tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-3 py-2 border border-gray-500 bg-gray-900 text-gray-100 placeholder-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-100"
            />
            <button
              className="bg-gray-100 text-gray-900 px-5 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors duration-200"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;