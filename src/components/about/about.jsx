import './about.css'
import about_image from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
// import { initializeAboutAnimations } from '../about/about.js'

const About = ({setPlayState}) => {

  return (

    <div className='about'>

        <div className="about-left">

            <img src={about_image} alt="" className='about-img' />

            <img src={play_icon} alt="" className='play-icon' onClick={() => {setPlayState(true)}} />

        </div>

        <div className="about-right">

            <h3>ABOUT WHITE X STUDIO</h3>

            <h2>Why Choose Us</h2>

            <p>White X Studio is more than just a creative space—it’s where imagination meets precision. Our passion lies in transforming ideas into captivating visuals that inspire and connect.

            </p>

            <p>With expertise in photography, videography, and filmmaking, we bring your stories to life. Whether it’s a heartfelt moment, a bold vision, or a cinematic masterpiece, we are here to craft it beautifully.

            </p>

            <p>At White X Studio, we believe every project is a journey, and every frame is a chance to leave an impact. Guided by creativity and professionalism, we aim to deliver work that resonates and lasts a lifetime.

            </p>

        </div>

    </div>

  )

}

export default About