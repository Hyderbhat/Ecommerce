import React, { useEffect, useState } from 'react'
import imgDesktop from './img/menDesktop.png'
import imgMobile from './img/mobile.jpg'
import womenDesktop from './img/womenDesktop.png'
import womenMobile from './img/womenMobile.png'
import kicksDesktop from './img/kicksDesktop.png'
import kicksMobile from './img/kicksMobile.jpg'
import collectionDesktop from './img/collectionDesktop.png'
import collectionMobile from './img/collectionMobile.jpg'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const navigate = useNavigate()
  const sections = [
    {
      desktop: imgDesktop,
      mobile: imgMobile,
      para: 'MEN COLLECTION',
      head: 'New arrivals',
      button: 'Shop Now',
      color: 'white',
      page: "/men"
    },
    {
      desktop: womenDesktop,
      mobile: womenMobile,
      para: 'WOMEN COLLECTION',
      head: 'New arrivals',
      button: 'Shop Now',
      color: 'white',
      page: "/women"
    },
    {
      desktop: kicksDesktop,
      mobile: kicksMobile,
      para: 'KICKS',
      head: 'The trends',
      button: 'Shop Now',
      color: 'white',
      page: "/kicks"
    },
    {
      desktop: collectionDesktop,
      mobile: collectionMobile,
      para: 'SPRING SUMMER 2025',
      head: 'The time is now',
      button: 'Shop Now',
      color: 'white',
      page: "/gifts"
    },
  ];

  return (
    <main>
      {sections.map(({ desktop, mobile, para, head, button, color, page }, index) => (
        <div
          key={index}
          className="lg:bg-fixed lg:bg-center min-h-[120vh] bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${isMobile ? mobile : desktop})` }}
        >
          <div className="bg-[rgba(0,0,0,0.2)] h-[120vh] flex items-center justify-center">
            <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
              <p
                className="text-white lg:text-lg max-w-lg mb-4"
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
              >
                {para}
              </p>
              <h1
                className="text-3xl md:text-5xl font-bold text-white mb-6"
                style={{
                  fontFamily: 'Montserrat',
                  textShadow: '2px 2px 3px rgba(0,0,0,0.5)',
                }}
              >
                {head}
              </h1>
              <button
                onClick={() => navigate(page)}
              className={`border px-6 py-2 transition duration-500 ${color === 'white'
                  ? 'bg-white text-black border-white hover:bg-transparent hover:text-white'
                  : 'text-white border-white hover:bg-white hover:text-black'
                }`}
      >
              {button}
            </button>
          </div>
        </div>
</div>

  ))
}
    </main >
  );
};

export default Home;