import React, { useContext } from "react";
import {Messages} from "../Chat/Messages";
import {Input} from '../Chat/Input';
import { ChatContext } from "../Chat/ChatContext";
import Add from '../Chat/img/add.png';
import Cam from '../Chat/img/cam.png';
import More from '../Chat/img/more.png';

export const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};