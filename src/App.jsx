import { useState } from "react"
import About from './components/about/about'
import Contact from './components/contacts/contact'
import Gallery from './components/gallery/gallery'
import Hero from './components/hero/hero'
import Navbar from './components/navbar/navbar'
import Testimonials from './components/testimonials/testimonials'
import Footer from './components/footer/footer'
import VideoPlayer from "./components/videoPlayer/videoPlayer"
import Title from "./components/title/title"
import Services from "./components/services/service"

function App() {
  const [playState, setPlayState] = useState(false)

  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <About setPlayState={setPlayState} />
        <Title subTitle='Services' title='What We Offer'/>
        <Services />
        <Title subTitle='Gallery' title='Our Collection'/>
        <Gallery /> 
        <Title subTitle='Testimonials' title='what clients says'/>
        <Testimonials />
        <Title subTitle='Contact us' title='Get In Touch'/>
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </>
  )
}

export default App
