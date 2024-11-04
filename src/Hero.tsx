import CV from './assets/CV_MuhammadAkmal_Reactjs (1).pdf'
function Hero() {
  return (
    <section>
      <div className='flex justify-between items-center'>
        <div className='flex flex-col items-start justify-center text-center h-screen gap-6 ml-2 lg:ml-0'>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl">Muhammad Akmal</h2>
            <h3 className="text-md sm:text-lg md:text-xl lg:text-2xl">I'm a Frontend Developer</h3>
            <a href={CV} download="/CV_MuhammadAkmal_Reactjs (1).pdf" className="bg-slate-300 rounded-full px-8 py-2 font-semibold">Download CV</a>
        </div>
        <h3 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold'>Placeholder Image</h3>
        </div>
    </section>
  )
}

export default Hero