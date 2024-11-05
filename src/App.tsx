import About from "./components/About"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Contact from "./components/Contact"
function App() {
  return (
       <>
       <main className="xl:max-w-8xl min-h-screen mx-auto">
          <Header />
          <Hero />
          <About />
          <Contact />
       </main>
       </>
  )
}

export default App
