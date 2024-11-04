import CV from '/CV_MuhammadAkmal_Reactjs (1).pdf'
function Hero() {
  return (
    <section>
        <div className='flex flex-col items-start justify-center text-center h-screen gap-6'>
            <h2 className="text-5xl">Muhammad Akmal</h2>
            <h3 className="text-3xl">I'm a Frontend Developer</h3>
            <a href={CV} download="/CV_MuhammadAkmal_Reactjs (1).pdf" className="bg-slate-300 rounded-full px-8 py-2 font-semibold">Download CV</a>
        </div>
    </section>
  )
}

export default Hero