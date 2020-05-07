import React from "react";
import { Card } from "react-bootstrap";
import './videocard.scss';

const VideoCard = ({item}) => {
  console.log(item)
  return (
      <Card className="video-card">
        <Card.Img variant="top" src={item.snippet.thumbnails.high.url} />
        <Card.Body>
          <Card.Text>
            {item.snippet.title}
          </Card.Text>
        </Card.Body>
      </Card>
  );
};

export default VideoCard;
