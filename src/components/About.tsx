import React from "react";
import profile from "../assets/profile.jpeg";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col md:flex-row items-start gap-12">
          <div className="w-full md:w-1/3">
            <div className="rounded-full overflow-hidden w-64 h-64 mx-auto border-4  border-blue-500 shadow-xl">
              
              <img
                src={profile}
                alt="Your Name"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3">
          <h2 className="text-3xl font-bold mb-12 text-start">About Me</h2>
            <p className="text-lg mb-6">
              I'm a passionate Software Engineer with expertise in building
              responsive and modern web applications. With several years of
              experience in frontend development, I specialize in React, JavaScript
              TypeScript, and Tailwind CSS, aswell as no-code web builders such as Webflow and Wix.
            </p>
            <p className="text-lg mb-6">
              My approach to development focuses on creating clean, maintainable
              code that delivers exceptional user experiences. I'm committed to
              staying current with the latest technologies and best practices in
              the rapidly evolving world of web development.
            </p>
            <p className="text-lg mb-6">
              I have experience in Performance Optimization (reducing load
              times, lazy loading, and efficient code structuring), API
              Integration (fetching & handling data, RESTful API consumption),
              and Testing & Debugging (using tools like Chrome DevTools, Jest,
              React DevTools, and troubleshooting bugs).
            </p>
            <p className="text-lg mb-6">
              Additionally, I'm skilled in CI/CD Pipelines, Version Control,
              Agile Development, and conducting Code Reviews to ensure
              high-quality, maintainable code.
            </p>
            <p className="text-lg mb-8">
              When I'm not coding, you can find me volunteering for
              envirronmental sustainability initiatives. I'm always open to
              discussing new projects and opportunities.
            </p>
            <a
              href="https://drive.google.com/file/d/1E4paTmZPg5adfF13oBwczkpH6NTYo-iv/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 inline-flex items-center"
            >
              <span>Download Resume</span>
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
