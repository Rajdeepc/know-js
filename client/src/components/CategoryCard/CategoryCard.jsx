import React from "react";
import { Image,Row,Col } from "react-bootstrap";
import './categorycard.scss';
import PropTypes from 'prop-types';


const CategoryCard = ({ item }) => {
  return (
    <div className="category-card">
      <div className="panel panel-default">
        <div className="panel-body">
          <a href="/courses/development/">
            <div className="top-category--panel-content">
              <Row>
                <Col>
                <div className="top-category--category">
                  <Image src={item.img} alt={item.core} />
                  </div>
                </Col>
                <Col>
                  <div className="top-category--category">{item.core}</div>
                </Col>
              </Row>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

CategoryCard.propTypes = {
  img: PropTypes.string,
  core: PropTypes.string
}

CategoryCard.defaultProps = {
  img: '',
  core: ''
}

export default CategoryCard;
