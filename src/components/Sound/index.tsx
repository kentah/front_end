import React from 'react'

import { SoundItem, SoundItemProps } from './soundItem'
import './sound.css'

const tracks: SoundItemProps[] = [
  {track: 'b01'},
  {track: 'a01'},
  {track: 'gamelan-long-version'},
  {track: 'ohoneohfive'}
]
 


const Sound: React.FC = () =>  {
  return (
    <div className='sound-container'>
      { tracks.map((t: SoundItemProps) => ( 
      <SoundItem 
        key={t.track} 
        track={t.track} /> 
      ))}
  </div>
  )
}

export default Sound



