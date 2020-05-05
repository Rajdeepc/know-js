import React from "react";
import { Card } from "react-bootstrap";

const VideoCard = ({item}) => {
  console.log(item)
  return (
      <Card>
        {/* <Card.Img variant="top" src={item.thumbnails.high.url} /> */}
        <Card.Body>
          <Card.Text>
            {item.snippet.title}
          </Card.Text>
          <Card.Text>
            {item.snippet.description}
          </Card.Text>
        </Card.Body>
      </Card>
  );
};

export default VideoCard;
