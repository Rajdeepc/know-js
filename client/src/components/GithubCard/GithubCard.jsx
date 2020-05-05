import React from "react";
import { Card } from "react-bootstrap";
import './githubcard.scss';

const GithubCard = ({item}) => {
    console.log(item);
    
  return (
      <Card>
        {/* <Card.Img variant="top" src={item.thumbnails.high.url} />  */}
       <Card.Body>
          <Card.Text>
            {item.full_name}
          </Card.Text>
          <Card.Text>
            {item.description}
          </Card.Text>
          <Card.Text>
            No of stars: {item.stargazers_count}
          </Card.Text>
          <Card.Text>
            No of watcher: {item.watchers_count}
          </Card.Text>
          <a href={item.html_url}>Go To</a>
        </Card.Body>
      </Card>
  );
};

export default GithubCard;
