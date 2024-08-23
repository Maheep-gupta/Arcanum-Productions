
import './App.css'
import About from './components/About'
import CardGroup from './components/CardGroup'
import Footer from './components/Footer'
import GridBackground from './components/GridBackground'
// import GridPatternDashed from './components/GridPatternDashed'
import HeroSection from './components/HeroSection'
import LetChat from './components/LetChat'
import VideoModal from './components/Modal'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <LetChat/>
      <Navbar />
      <HeroSection/>
      <CardGroup />
      <About />
      <GridBackground />
      <Footer/>
    </>
 )
}

export default App
