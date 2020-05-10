import React, { useState } from "react";
import { Card, Row,Col,ButtonGroup,Modal, Button } from "react-bootstrap";
import "./videocard.scss";
import { MdPlayArrow } from "react-icons/md";
import VideoModalPlayer from "../VideoCardModalPlayer/VideoModalPlayer"


const VideoCard = ({ item }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = (event) => {
    event.stopPropagation()
    setShow(true);
  };

  console.log(item);
  return (
    <>
      <Card className="video-card">
        <a href="javascript:void(0)" onClick={(event) => handleShow(event)} className="card-video-wrapper">
          <Card.Img
            variant="top"
            className="img-wrapper"
            src={item.snippet.thumbnails.high.url}
          />
          <div className="hover">
            <div className="hover-content">
              <MdPlayArrow /> <span>Play</span>
            </div>
          </div>
          <Card.Body>
            <Card.Text>{item.snippet.title}</Card.Text>
          </Card.Body>
        </a>
      </Card>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Body className="no-padding">
          <VideoModalPlayer item={item}/>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default VideoCard;
