import About from "./About"
import Header from "./Header"
import Hero from "./Hero"
import Contact from "./Contact"
function App() {
  return (
       <>
       <main className="max-w-9xl xl:max-w-6xl lg:max-w-5xl md:max-w-3xl h-screen mx-auto">
          <Header />
          <Hero />
          <About />
          <Contact />
       </main>
       </>
  )
}

export default App
