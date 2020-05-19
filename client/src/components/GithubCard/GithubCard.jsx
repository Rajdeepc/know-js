import React from "react";
import { Card } from "react-bootstrap";
import "./githubcard.scss";
import { RiStarSLine } from "react-icons/ri";
import { GoIssueOpened } from "react-icons/go";

const GithubCard = ({ item }) => {
 // console.log(item);

  return (
    <Card className="githubCard">
      <Card.Body>
        <a href="#" rel="noopener noreferrer" target="_blank" href={item.html_url}>
        <Card.Title>{item.full_name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <Card.Text>{item.owner.login}</Card.Text>
        </Card.Subtitle>
        <Card.Text className="desc">{item.description}</Card.Text>
        <Card.Link>
          <RiStarSLine size={20}/>
          {item.stargazers_count}
        </Card.Link>
        <Card.Link>
          <GoIssueOpened size={20}/>
          {item.open_issues_count}
        </Card.Link>
        </a>
      </Card.Body>
    </Card>
  );
};

export default GithubCard;
