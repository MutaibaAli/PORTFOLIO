import React from 'react';

// Import images
import coffeeImg from './images/coffee.jpg';
import resImg from './images/res.jpg';
import calImg from './images/cal.jpg';

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of what Project One does and its key features.',
    demoLink: 'https://website-using-html-css-and-js.vercel.app/',
    githubLink: 'https://github.com/MutaibaAli/Website-using-HTML-CSS-JS',
  },
  {
    title: 'Project Two',
    description: 'A brief description of what Project Two does and its key features.',
    demoLink: 'https://xounity.vercel.app/',
    githubLink: 'https://github.com/MutaibaAli/Xounity-',
  },
  {
    title: 'Project Three',
    description: 'A brief description of what Project Three does and its key features.',
    demoLink: 'https://currency-calculator-snowy.vercel.app/',
    githubLink: 'https://github.com/MutaibaAli/Currency-Calculator',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-gray-300">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-5xl font-bold text-center text-pink-400 mb-12">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105">
              {/* Use the image src directly in the img tag */}
              {index === 0 && <img src={coffeeImg} alt="Project One" className="w-full h-32 object-cover" />}
              {index === 1 && <img src={resImg} alt="Project Two" className="w-full h-32 object-cover" />}
              {index === 2 && <img src={calImg} alt="Project Three" className="w-full h-32 object-cover" />}
              
              <div className="p-4">
                <h3 className="text-xl font-semibold text-pink-300 mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex justify-between mt-2">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-400 hover:underline"
                  >
                    View Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-400 hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
