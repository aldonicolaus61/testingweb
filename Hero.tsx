import React from 'react';
import { ArrowDownCircle, Github, Instagram, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-20 flex items-center relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-[10%] w-72 h-72 bg-purple-400/30 dark:bg-purple-700/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-[5%] w-60 h-60 bg-purple-300/20 dark:bg-purple-800/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fadeIn">
            <p className="text-purple-700 dark:text-purple-400 font-medium mb-4">
              Hello, I'm
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              Nicolaus Aldo
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
              UI/UX Designer & Developer
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-lg">
              Creating beautiful, functional, and user-centered digital
              experiences that bring your vision to life.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#contact"
                className="px-6 py-3 bg-purple-700 hover:bg-purple-800 text-white rounded-full font-medium transition-colors duration-300"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-purple-700 text-purple-700 dark:text-purple-400 dark:border-purple-400 hover:bg-purple-50 dark:hover:bg-gray-800 rounded-full font-medium transition-colors duration-300"
              >
                View My Work
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/aldonicolaus61"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-purple-700 dark:text-gray-400 dark:hover:text-purple-400 transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/nicolausaldo/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-purple-700 dark:text-gray-400 dark:hover:text-purple-400 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/notme_aall/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-purple-700 dark:text-gray-400 dark:hover:text-purple-400 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fadeInUp">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-purple-500 to-purple-700 dark:from-purple-700 dark:to-purple-900 rounded-full overflow-hidden">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4E03AQFF8Gmuc4jL9Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1693248518720?e=1750291200&v=beta&t=BoG0EbBX7xal-wLI_p8vl8yuvGSkifCKxj3Bks2vLsI"
                  alt="UI/UX Designer"
                  className="w-full h-full object-cover mix-blend-overlay opacity-80"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-black dark:bg-white rounded-full -z-10"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="p-2 text-gray-600 hover:text-purple-700 dark:text-gray-400 dark:hover:text-purple-400 transition-colors duration-200"
            aria-label="Scroll down"
          >
            <ArrowDownCircle size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
