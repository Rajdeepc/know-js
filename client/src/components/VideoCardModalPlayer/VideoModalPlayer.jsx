import React from "react";
import { Row,Col } from "react-bootstrap";
import moment from "moment";
import './videoplayer.scss';
const VideoModalPlayer = ({item}) => {
  return (
    <div className="video-modal-player">
      <iframe
        width="100%"
        height="400"
        title={item.id}
        allowfullscreen
        src={`https://www.youtube.com/embed/${item.id.videoId}`}
      ></iframe>
      <div className="video-info">
        <div className="video-title">
          <Row>
            <Col sm="12">
              <h4>{item.snippet.title}</h4>
            </Col>
          </Row>

          <Row>
            <Col>
              <p>{item.snippet.description} </p>
            </Col>
          </Row>
          <Row className="channel">
            <Col>
              <div className="channel">
              Channel: <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.youtube.com/channel/${item.snippet.channelId}`}
                >
                  {item.snippet.channelTitle}
                </a>
                </div>
                </Col>
                <Col className="text-right">
                    Published At: {moment(item.snippet.publishedAt).format("DD/MM/YYYY")}
                </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default VideoModalPlayer;
