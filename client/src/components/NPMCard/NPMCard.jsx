import React from "react";
import { Card, Nav } from "react-bootstrap";
import "./npmcard.scss";
import moment from "moment";
import PropTypes from "prop-types";

const NPMCard = ({ item }) => {
  return (
    <div className="npm-card" data-testid="test-npmcard-card-wrapper">
      <Card>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={item.package && item.package.links && item.package.links.npm}
        >
          <Card.Body>
            <h5>{item.package.name}</h5>
            <Card.Text>{item.package.description}</Card.Text>
            <div className="npm-tags">
              {(item.package.keywords || [])
                .slice(0, 4)
                .map((itemKey, index) => {
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
              Last Updated:{" "}
              {item.package.date &&
                moment(item.package.date).format("MM/DD/YYYY")}
            </p>
          </Card.Body>
        </a>
      </Card>
    </div>
  );
};

NPMCard.defaultProps = {
  package: {
    name: "",
    description: "",
    author: {
      name: "",
    },
    date: "",
    keywords: [],
    links: {
      npm: "",
    },
  },
};

NPMCard.propTypes = {
  package: PropTypes.objectOf(PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    author: PropTypes.shape({
      name: PropTypes.string,
    }),
    date: PropTypes.string,
    keywords: PropTypes.arrayOf,
    links: PropTypes.shape({
      npm: PropTypes.string,
    }),
  }))
};
export default NPMCard;
