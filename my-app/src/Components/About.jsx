import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-300">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Section Title */}
        <h2 className="text-5xl font-bold text-center text-pink-400 mb-12">
          About Me
        </h2>

        {/* About Content */}
        <div className="flex flex-col items-center text-center">
          {/* Text Section */}
          <div className="w-full md:w-2/3 text-lg leading-relaxed">
            <p className="mb-4 transition-transform duration-300 hover:translate-x-1 hover:translate-y-1">
              I am <strong className="text-pink-400">Mutaiba Ali</strong>, a web developer focused on building user-friendly web applications. With a strong foundation in Computer Science, I continuously enhance my skills to deliver high-quality digital experiences.
            </p>
            <p className="mb-4 transition-transform duration-300 hover:translate-x-1 hover:translate-y-1">
              Proficient in various web technologies, I strive for creativity and excellence in every project.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-16">
          <h3 className="text-4xl font-semibold text-pink-400 mb-8 text-center">
            Education
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Degree 1 */}
            <div className="p-6 bg-gray-700 bg-opacity-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <h4 className="text-2xl font-semibold text-pink-300 mb-2">
                Software Engineering
              </h4>
              <p className="text-lg text-gray-300">SMIU University</p>
              <p className="text-md text-gray-400">
                Relevant Courses: Web Development, Data Structures, Algorithms, Databases, Computer Networks
              </p>
            </div>

            {/* Degree 2 */}
            <div className="p-6 bg-gray-700 bg-opacity-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <h4 className="text-2xl font-semibold text-pink-300 mb-2">
                Intermediate
              </h4>
              <p className="text-lg text-gray-300">BAMM PECHS College</p>
              <p className="text-md text-gray-400">Computer Science</p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <h3 className="text-4xl font-semibold text-pink-400 mb-8 text-center">
            Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'C, C#'].map(skill => (
              <div 
                key={skill} 
                className="p-4 bg-gray-700 bg-opacity-50 rounded-lg shadow-sm text-center hover:scale-110 transition-transform duration-300 hover:shadow-xl">
                <span className="text-xl font-semibold text-pink-300">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
