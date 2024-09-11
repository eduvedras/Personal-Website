import About from './pages/About.tsx'
import Navbar from './components/Navbar.tsx'
import Skills from './pages/Skills.tsx'
import Education from './pages/Education.tsx'
import Projects from './pages/Projects.tsx'
//import Contact from './pages/Contact.tsx'
//import Footer from './pages/Footer.tsx'

function App() {
  return (
    <>
      <div className="no-scrollbar">
        <Navbar />
        <div className="bg-black flex flex-col gap-32">
          <About />
          <Skills />
          <Education />
          <Projects />
        </div>
      </div>
    </>
  )
}

export default App
