import CV from './assets/CV_MuhammadAkmal_Reactjs (1).pdf'
import avatar from './assets/Avatar-removebg-preview.png'
import Typewriter from 'typewriter-effect';
const Hero = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-8 md:gap-16">
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
        </div>

      
        <div className="mb-8 md:mb-0">
      <img src={avatar} alt='avatar' className='object-contain max-w-full max-h-50'/>
        </div>
      </div>
    </section>
  );
};

export default Hero;