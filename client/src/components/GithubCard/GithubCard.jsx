import React from "react";
import { Row,Col,Card } from "react-bootstrap";
import "./githubcard.scss";
import { RiStarSLine } from "react-icons/ri";
import { GoIssueOpened } from "react-icons/go";
import PropTypes from 'prop-types';

const GithubCard = ({ item }) => {

  return (
    <Card className="githubCard" data-testid="test-github-card-wrapper">
      <Card.Body>
        <a href="#" rel="noopener noreferrer" target="_blank" href={item.html_url}>
        <Card.Title>{item.full_name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <Card.Text>{item.owner.login}</Card.Text>
        </Card.Subtitle>
        <Card.Text className="desc">{item.description}</Card.Text>
        <Row>
          <Col>
          <Card.Text>
          <RiStarSLine size={20}/>
          {item.stargazers_count}
        </Card.Text>
          </Col>
          <Col className="text-right">
          <Card.Text>
          <GoIssueOpened size={20}/>
          {item.open_issues_count}
        </Card.Text>
          </Col>
        </Row>
        
        
        </a>
      </Card.Body>
    </Card>
  );
};


GithubCard.defaultProps = {
  html_url:'',
  full_name:'',
  owner: {
  },
  description:'',
  stargazers_count:0,
  open_issues_count:0
}

GithubCard.propTypes = {
  html_url:PropTypes.string,
  full_name: PropTypes.string,
  owner: PropTypes.objectOf(PropTypes.string),
  description:PropTypes.string,
  stargazers_count:PropTypes.number,
  open_issues_count: PropTypes.number
}

export default GithubCard;
