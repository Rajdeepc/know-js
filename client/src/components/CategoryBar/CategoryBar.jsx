import React, { useEffect } from "react";
import { Nav, Col, Row, Image } from "react-bootstrap";
import { getSelectionData } from "../Navbar/navbar.action";
import { connect } from "react-redux";
import JSLinks from "../../utils/constants";
import "./category.scss";

const CategoryBar = (props) => {

  const getDataFromYoutube = (selected) => {
    props.selection(selected)
    props.getSelectionData(selected);
  };

  useEffect(() => {
    props.selection(JSLinks[0].core)
    props.getSelectionData(JSLinks[0].value);
  }, []);

  return (
    <div className="category-bar">
      <div className="section">
        <Row>
          <Col sm="12">
            <h4>Categories</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <Nav
              activeKey="/"
              className=""
              onSelect={(selectedKey) => getDataFromYoutube(selectedKey)}
            >
              {(JSLinks || []).map((item) => {
                return (
                  <Nav.Item>
                    <Nav.Link
                      className="nav-item-pic-wrapper"
                      eventKey={item.value}
                    >
                      <Image src={item.img} alt={item.core} />
                      <span>{item.core}</span>
                    </Nav.Link>
                  </Nav.Item>
                );
              })}
            </Nav>
          </Col>
        </Row>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const CategoryBarConnectedComponent = connect(mapStateToProps, {
  getSelectionData,
})(CategoryBar);

export default CategoryBarConnectedComponent;
