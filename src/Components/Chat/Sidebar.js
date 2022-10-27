import React from "react";
import {Navbar}from '../Chat/Navbar';
import {Search} from '../Chat/Search';
import {Chats} from '../Chat/Chats';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Search/>
      <Chats/>
    </div>
  );
};

