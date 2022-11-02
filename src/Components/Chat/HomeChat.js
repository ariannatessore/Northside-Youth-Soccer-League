import React from 'react'
import {Sidebar} from './Sidebar';
import {Chat }from './Chat'

export const HomeChat = () => {
  return (
    <div className='home'>
      <div className="container">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}