import React from 'react'
import {Sidebar} from '../Chat/Sidebar';
import {Chat }from '../Chat/Chat';

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