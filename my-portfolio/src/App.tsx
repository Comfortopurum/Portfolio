import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contacts';
import Footer from './components/Footer';
import { Project, Skill, SocialLink } from './types';

const App: React.FC = () => {
  // Sample data - replace with your own
  const projects: Project[] = [
    {
      id: 1,
      title: 'Payvessel Landing Page',
      description: 'The Landing Page for a modern payment gateway platform. Worked with a team to build an intuitive, responsive, and secure user interface for seamless payment processing and merchant onboarding.',
      image: '/project1.jpg',
      video: '/project1.mp4',
      technologies: ['React', 'Node.js', 'MongoDB', 'Typescript', 'Python'],
      githubUrl: 'https://github.com/yourusername/ecommerce-platform',
      liveUrl: 'https://ecommerce-platform.vercel.app'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A task management application with drag-and-drop functionality.',
      image: '/project2.jpg',
      technologies: ['React', 'TypeScript', 'Redux', 'Tailwind CSS'],
      githubUrl: 'https://github.com/yourusername/task-management',
      liveUrl: 'https://task-management.vercel.app'
    },
    // Add more projects as needed
  ];

  const skills: Skill[] = [
    { category: 'Tech Stack', items: ['React.js', 'TypeScript', 'JavaScript','Next.js','HTML5', 'CSS3', 'Tailwind CSS', 'Reduxtoolkit'] },
    { category: 'Soft Skills', items: ['Analytical Problem Solving', 'Effective Communication', 'Effective Time Management', 'Team Player'] },
    { category: 'Technical Skills', items: [ 'UI/UX Implementation','API Integration ', 'Performance optimization', 'Testing & Debugging', 'CI/CD Pipeline', 'Agile Development', 'Responsive Web Design', 'SEO Optimization'] },
    { category: 'Tools', items: ['Git', 'Netlify', 'Vercel', 'Figma', 'GitHub Action','Jest', 'Chrome Dev Tools', 'VS Code'] }
  ];

  const socialLinks: SocialLink[] = [
    { platform: 'GitHub', url: 'https://github.com/Comfortopurum', icon: 'github' },
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/comfort-opurum-729956274/', icon: 'linkedin' },
    { platform: 'Twitter', url: 'https://x.com/iam_diva2', icon: 'twitter' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header socialLinks={socialLinks} />
      <main>
        <Hero />
        <About />
        <Projects projects={projects} />
        <Skills skills={skills} />
        <Contact socialLinks={socialLinks} />
      </main>
      <Footer socialLinks={socialLinks} />
    </div>
  );
};

export default App;