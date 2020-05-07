import React from "react";
import "./sidebar.scss";
import { ListGroup } from 'react-bootstrap'
import { FaAlignLeft } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { FiVideo,FiSettings } from "react-icons/fi";
import { RiTimerLine } from "react-icons/ri";

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="toggle text-center">
        <FaAlignLeft size={30} />
      </div>
      <div className="sidebar">
        <ListGroup defaultActiveKey="#/"> 
          <ListGroup.Item action href="#/">
            <AiOutlineHome size={20}/>
          </ListGroup.Item>
          <ListGroup.Item action href="#videos">
            <FiVideo size={20}/>
          </ListGroup.Item>
          <ListGroup.Item action href="#profile">
            <FiSettings size={20}/>
          </ListGroup.Item>
          <ListGroup.Item action href="#quiz">
            <RiTimerLine size={20} />
          </ListGroup.Item>
        </ListGroup>
        
      </div>
    </div>
  );
}