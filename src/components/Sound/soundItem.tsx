import React from 'react'
import ReactPlayer from 'react-player/soundcloud'
import './soundItem.css'

const baseUrl = 'https://soundcloud.com/webuildprisons/'

export interface SoundItemProps {
  track: string
}

export const SoundItem: React.FC<SoundItemProps> = ({ track }) => {
  return(
    <div className='sound-item-container'>
      <ReactPlayer 
        url={`${baseUrl}${track}`}
        width={'500px'}
        height={'300px'}
      />
    </div>
  )
}
