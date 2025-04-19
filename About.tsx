import React from 'react';
import { Code, Palette, Lightbulb, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="w-20 h-1 bg-purple-700 dark:bg-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Hi, I'm Nicolaus Aldo—a passionate UI/UX Designer dedicated to
            crafting intuitive and visually appealing digital experiences. With
            a strong foundation in user-centered design, I specialize in
            transforming complex problems into seamless, engaging interfaces
            that enhance usability and delight users.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-full animate-fadeInLeft">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Designer at work"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-purple-500 dark:border-purple-700 rounded-lg -z-10"></div>
          </div>

          <div className="animate-fadeInRight">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Creating meaningful digital experiences
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              With over 5 years of experience in UI/UX design and front-end
              development, I've helped businesses of all sizes create
              user-centered digital products that are both beautiful and
              functional.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              My approach combines design thinking, user research, and technical
              knowledge to solve complex problems and create intuitive
              interfaces that users love to interact with.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md group hover:bg-purple-700 dark:hover:bg-purple-700 transition-colors duration-300">
                <div className="text-purple-700 dark:text-purple-400 group-hover:text-white transition-colors duration-300">
                  <Palette size={28} />
                </div>
                <h4 className="mt-2 font-semibold text-gray-900 dark:text-white group-hover:text-white transition-colors duration-300">
                  UI Design
                </h4>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md group hover:bg-purple-700 dark:hover:bg-purple-700 transition-colors duration-300">
                <div className="text-purple-700 dark:text-purple-400 group-hover:text-white transition-colors duration-300">
                  <Users size={28} />
                </div>
                <h4 className="mt-2 font-semibold text-gray-900 dark:text-white group-hover:text-white transition-colors duration-300">
                  UX Research
                </h4>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md group hover:bg-purple-700 dark:hover:bg-purple-700 transition-colors duration-300">
                <div className="text-purple-700 dark:text-purple-400 group-hover:text-white transition-colors duration-300">
                  <Code size={28} />
                </div>
                <h4 className="mt-2 font-semibold text-gray-900 dark:text-white group-hover:text-white transition-colors duration-300">
                  Development
                </h4>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md group hover:bg-purple-700 dark:hover:bg-purple-700 transition-colors duration-300">
                <div className="text-purple-700 dark:text-purple-400 group-hover:text-white transition-colors duration-300">
                  <Lightbulb size={28} />
                </div>
                <h4 className="mt-2 font-semibold text-gray-900 dark:text-white group-hover:text-white transition-colors duration-300">
                  Ideation
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
