import CV from './assets/CV_MuhammadAkmal_Reactjs (1).pdf'
import avatar from './assets/file.png'
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import {Element} from 'react-scroll';

const Hero = () => {
  return (
    <Element name="hero">
      <section className="container mx-auto px-4">
      <div className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-20 md:gap-16">
        {/* Text Content */}
        <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl">Hi, I'm Muhammad Akmal</h2>
          <h3 className="text-md sm:text-lg md:text-xl lg:text-2xl flex items-center">
            I'm a&nbsp;
            <Typewriter
              options={{
                strings: [
                  '<span style="color: #f39c12">Frontend Developer</span>', 
                  '<span style="color: #f39c12">Designer</span>', 
                  '<span style="color: #f39c12">Freelancer</span>',
                ],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 50,
              }}
            />
          </h3>

          <a 
            href={CV} 
            download="/CV_MuhammadAkmal_Reactjs (1).pdf" 
            className="hover:bg-orange-200 hover:transition duration-500 transition-ease border border-black rounded-full px-8 py-2 font-semibold mt-2"
          >
            Download CV
          </a>

          {/* Social Media Icons */}
          <div className="flex gap-12 mt-6 mb-10">
            <a 
              href="https://github.com/ItzAkmal97" 
              className="text-2xl hover:text-gray-600 transition-colors duration-300"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaGithub/>
            </a>
            <a 
              href="https://www.linkedin.com/in/muhammad-akmal-783745219/" 
              className="text-2xl hover:text-gray-600 transition-colors duration-300"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=100006248289501" 
              className="text-2xl hover:text-gray-600 transition-colors duration-300"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        <div className="mb-8 md:mb-0">
          <img src={avatar} alt='avatar' className='object-contain'/>
        </div>
      </div>
    </section>
    </Element>
    
  );
};

export default Hero;