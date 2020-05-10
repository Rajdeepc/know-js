import React from "react";
import { Card, Nav, Button } from "react-bootstrap";
import "./npmcard.scss";
import moment from 'moment';

const NPMCard = ({ item }) => {
  return (
    <div className="npm-card">
      <Card>
        <a target="_blank" href={item.package && item.package.links && item.package.links.npm}>
        <Card.Body>
          <h5>{item.package.name}</h5>
          <Card.Text>{item.package.description}</Card.Text>
          <div className="npm-tags">
            {(item.package.keywords || []).slice(0, 4).map((itemKey,index) => {
              return (
                <Nav.Item key={`index-${index}`}>
                  <Nav.Link
                    href={  
                      item.package &&
                      item.package.links &&
                      item.package.links.npm
                    }
                  >
                    {itemKey}
                  </Nav.Link>
                </Nav.Item>
              );
            })}
          </div>
          <p>
            Author:{" "}
            {item.package && item.package.author && item.package.author.name}
          </p>
          <p>
            Last Updated: {item.package.date && moment(item.package.data).format('MM/DD/YYYY')} 
          </p>
          
        </Card.Body>
        </a>
      </Card>
    </div>
  );
};

export default NPMCard;
