import React from "react";
import "./sidebar.scss";
import { ListGroup } from 'react-bootstrap'
import { AiOutlineHome } from "react-icons/ai";
import { FiVideo,FiSettings } from "react-icons/fi";
import { RiTimerLine } from "react-icons/ri";

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <ListGroup defaultActiveKey="#/"> 
        
          <ListGroup.Item action href="#/">
            <AiOutlineHome size={20}/> Home
          </ListGroup.Item>
          <ListGroup.Item action href="#videos">
            <FiVideo size={20}/> Videos
          </ListGroup.Item>
          <ListGroup.Item action href="#profile">
            <FiSettings size={20}/> My Profile
          </ListGroup.Item>
          <ListGroup.Item action href="#quiz">
            <RiTimerLine size={20} /> Quiz
          </ListGroup.Item>
        </ListGroup>
        
      </div>
    </div>
  );
}
