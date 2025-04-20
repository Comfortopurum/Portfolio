import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contacts';
import Footer from './components/Footer';
import { Project, Skill, SocialLink } from './types';

import payvesselLPI from './assets/payvesselLPI.jpeg';
import msorg from './assets/msorgLp.jpeg';

import datastation from './assets/datastation.jpeg';
import payvesselM from './assets/payvesselM.jpeg';
import payvesselMV from './assets/videos/payvesselMVideo.mp4';
import taskmaster from "./assets/taskmaster1.jpg";
import taskmastervid from "./assets/videos/taskmastervid.mp4";
import portfolio from "./assets/portfolio.jpg";

const App: React.FC = () => {
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'TaskMaster Website',
      description: 'A user friendly task manager web app that hekps you keep track of your productivity. Designed, developed and deployed the entire web app independently, implementing a clean, responsive UI with features for daily, weekly, and monthly overviews and a seamless user experience across all devices.',
      image: taskmaster,
      video:taskmastervid,
      technologies: ['React', 'TypeScript','firebase','vercel' ,'Tailwind'],
      githubUrl: 'https://github.com/Comfortopurum/TaskMaster',
      liveUrl: 'https://task-master-ng.vercel.app'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A personal portfolio website built to showcase front-end projects, technical skills, and professional experience. Designed and developed independently with a responsive, user-friendly interface that ensures smooth navigation, fast load times, and an engaging experience across all devices.',
      image: portfolio,
    
      technologies: ['React', 'TypeScript','vercel' ,'Tailwind'],
      githubUrl: 'https://github.com/Comfortopurum/Portfolio',
      liveUrl: ''
    },
    {
      id: 3,
      title: 'Payvessel Landing Page',
      description: 'The Landing Page for a modern payment gateway platform. Worked with a team to build an intuitive, responsive, and secure landing page for seamless payment processing and merchant onboarding.',
      image: payvesselLPI,
      
      technologies: ['React', 'Tailwind', 'TypeScript'],
      githubUrl: '',
      liveUrl: 'https://www.payvessel.com/'
    },
    {
      id: 4,
      title: 'MsOrg Landing Page',
      description: 'A Lagos-based tech company delivering innovative digital solutions. Built an intuitive, responsive, and visually engaging landing page to enhance MSORGs online presence.',
      image: msorg,
      
      technologies: ['React', 'Tailwind', 'TypeScript'],
      githubUrl: '',
      liveUrl: ''
    },
    {
      id: 5,
      title: 'DataStation VTU Website',
      description: 'A digital utility e-commerce platform built for seamless purchase and top-ups. Collaborated with the front-end team to develop a responsive, user-friendly interface that ensures fast transactions, secure payments, and smooth user experience across all devices. ',
      image: datastation,
      
      technologies: ['React', 'Tailwind', 'TypeScript', 'Redux Toolkit', 'Vite'],
      githubUrl: '',
      liveUrl: 'https://app.datastation.com.ng/dashboard'
    },
    {
      id: 6,
      title: 'Payvessel Merchant Website',
      description: 'A digital utility e-commerce platform built for seamless purchase and top-ups. Collaborated with the front-end team to develop a responsive, user-friendly interface that ensures fast transactions, secure payments, and smooth user experience across all devices. ',
      image: payvesselM,
      video: payvesselMV,
      technologies: ['React', 'Tailwind', 'Next.js', 'TypeScript', 'Redux Toolkit', 'Vite'],
      githubUrl: '',
      liveUrl: 'https://main.d2hmf6quxn1kp4.amplifyapp.com/auth'
    },
    
    
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