import PropTypes from 'prop-types'

import './videoPlayer.css'

import video from '../../assets/video.mp4'

import { useRef } from 'react'



const VideoPlayer = ({ playState, setPlayState }) => {

  const player = useRef(null);

  

  const closePlayer = (e) => {

    if (e.target === player.current) {

      setPlayState(false);

    }

  }

  

  return (

    <div 

      className={`video-player ${playState ? '' : 'hide'}`} 

      ref={player} 

      onClick={closePlayer}

    >

      <video src={video} play controls></video>

    </div>

  )

}



VideoPlayer.propTypes = {

  playState: PropTypes.bool.isRequired,

  setPlayState: PropTypes.func.isRequired

}



export default VideoPlayer