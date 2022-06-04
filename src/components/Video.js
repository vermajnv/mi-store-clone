import React from 'react'
import '../styles/Video.css'
import {playButton} from '../icons/icons.js';

const Video = (videos) => {
  return (
    <div className='video'>
        {
            videos.videos.map((video, index) => {
                return <div key={index} className='videoItem' style={{backgroundImage : `url(${video.image})`}}>
                    <a href="#/">{playButton}</a>
                    <p>{video.name}</p>
                </div>
            })
        }
    </div>
  )
}

export default Video