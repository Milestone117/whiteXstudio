import './hero.css'

import dark_arrow from '../../assets/dark-arrow.png'

function Hero() {

  return (

    <div className="hero container">

        <div className="hero-text">

            <h1>WHITE X STUDIO</h1>

            <p>Welcome to White X Studio, where moments come alive. Specializing in photography, videography, and filmmaking, we transform your visions into timeless stories.</p>

            <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>

        </div>

    </div>

  )

}



export default Hero