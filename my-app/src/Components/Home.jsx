import React, { useEffect, useState } from 'react';
import Pic from './images/image.jpg';
import { Link } from 'react-router-dom'; // Import Link

const Home = () => {
  const fullText = "Welcome to my portfolio! I create dynamic web applications that enhance user interaction";
  const [visibleText, setVisibleText] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const typingSpeed = 100; 
    const pauseDuration = 300;
    const fadeDuration = 100; 
    const typeOutText = () => {
      if (visibleText.length < fullText.length) {
        setVisibleText(fullText.slice(0, visibleText.length + 1));
      } else {
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(() => {
            setIsVisible(true); 
            setVisibleText(''); 
          }, fadeDuration);
        }, pauseDuration);
      }
    };

    const interval = setInterval(typeOutText, typingSpeed);
    
    return () => clearInterval(interval); 
  }, [visibleText]);

  return (
    <section className="bg-gray-800 h-screen flex flex-col justify-start items-center text-center text-pink-400 py-10">
      <img 
        src={Pic}  
        alt="Mutaiba Ali" 
        className="w-48 h-48 rounded-full mb-5 transition-transform duration-300 hover:scale-110 hover:rotate-3 hover:shadow-2xl"
      />
      <h1 className="text-4xl md:text-5xl font-bold mb-2">Hi, I'm Mutaiba Ali</h1>
      <p 
        className={`text-xl mb-4 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ minHeight: '1.5em' }} 
      >
        {visibleText}
      </p>

      {/* About Me Button */}
      <Link
        to="/about" 
        className="bg-pink-500 text-white px-6 py-3 rounded-full text-lg hover:bg-pink-600 transition shadow-md"
      >
        About Me
      </Link>
    </section>
  );
};

export default Home;


