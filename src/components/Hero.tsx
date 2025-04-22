import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;
    
    title.classList.add('animate-fadeIn');
  }, []);

  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gradient-to-br   from-gray-800 to-gray-900">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h1 
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold mb-6 opacity-0 transition-opacity duration-1000"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
            Comfort Opurum Chinenye
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
          Software Engineer specializing in frontend development with JavaScript, React.js, Next.js, TypeScript, and modern UI frameworks. 
         
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a 
            href="#projects" 
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;