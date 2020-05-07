import React from "react";
import { Image,Row,Col } from "react-bootstrap";
import './categorycard.scss';

export default function CategoryCard({ item }) {
  return (
    <div className="category-card">
      <div class="panel panel-default">
        <div class="panel-body">
          <a href="/courses/development/">
            <div class="top-category--panel-content">
              <Row>
                <Col>
                <div className="top-category--category">
                  <Image src={item.img} alt={item.core} />
                  </div>
                </Col>
                <Col>
                  <div class="top-category--category">{item.core}</div>
                </Col>
              </Row>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
