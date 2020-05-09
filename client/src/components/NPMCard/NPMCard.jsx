import React from "react";
import { Card, Nav,Button } from "react-bootstrap";
import './npmcard.scss';

const NPMCard = ({ item }) => {
  return (
      <div className="npm-card">
    <Card>
      <Card.Body>
        <h5>{item.package.name}</h5>
        <Card.Text>{item.package.description}</Card.Text>
    <div className="npm-tags">
        {(item.package.keywords || []).slice(0,4).map((itemKey) => {
        return (<Nav.Item>
          <Nav.Link href={item.package.links.npm}>{itemKey}</Nav.Link>
        </Nav.Item>)
        })}
        </div>
         <Card.Text>Author: {item.package.author.name}</Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
};

export default NPMCard;
