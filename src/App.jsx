import Hero from './sections/Hero'
import About from './sections/About'
import Expperience from './sections/Expperience'
import Testimonials from './sections/Testimonials'
import Projects from './sections/Projects'
import Navbar from './layout/Navbar'
import Contact from './sections/Contact'

export default function App() {
  return (
    <div className='min-h-screen overflow-x-hidden'>
      <Navbar />
      <main>
        <Hero/>
        <About/>
        <Expperience/>
        <Testimonials/>
        <Projects/>
        <Contact/>
      </main>
         
    </div>
  )
}
