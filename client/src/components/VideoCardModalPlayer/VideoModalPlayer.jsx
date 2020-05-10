import React from "react";
import { Card, Row,Col,ButtonGroup,Modal, Button } from "react-bootstrap";
import moment from "moment";
import './videoplayer.scss'
import { RiYoutubeLine } from "react-icons/ri";
import { BsBookmarks } from "react-icons/bs";
import { FiSave } from "react-icons/fi";
const VideoModalPlayer = ({item}) => {
  return (
    <div className="video-modal-player">
      <iframe
        width="100%"
        height="400"
        allowfullscreen
        src={`https://www.youtube.com/embed/${item.id.videoId}`}
      ></iframe>
      <div className="video-info">
        <div className="video-title">
          <Row>
            <Col sm="10">
              <h4>{item.snippet.title}</h4>
            </Col>
            <Col sm="2" className="text-right">
              <ButtonGroup aria-label="Basic example">
                <Button variant="light">
                  <BsBookmarks size={20} />
                </Button>
                <Button variant="light">
                  <FiSave size={20} />
                </Button>
              </ButtonGroup>
            </Col>
          </Row>

          <Row>
            <Col>
              <p>{item.snippet.description} </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="channel">
              Channel: <a
                  target="_blank"
                  href={`https://www.youtube.com/channel/${item.snippet.channelId}`}
                >
                  {item.snippet.channelTitle}
                </a>
                </div>
                </Col>
                <Col>
                    Published At: {moment(item.snippet.publishedAt).format("DD/MM/YYYY")}
                </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default VideoModalPlayer;
