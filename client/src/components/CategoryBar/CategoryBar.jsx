import React from "react";
import { Nav, Image } from "react-bootstrap";
import { getSelectionData } from "./category.action";
import { connect } from "react-redux";
import JSLinks from "../../utils/constants";
import "./category.scss";

const CategoryBar = (props) => {
  const getDataFromYoutube = (selected) => {
    props.getSelectionData(selected);
  };

  return (
    <div className="category-bar">
      <Nav
        activeKey="/"
        className="justify-content-center"
        onSelect={(selectedKey) => getDataFromYoutube(selectedKey)}
      >
        {(JSLinks || []).map((item) => {
          return (
            <Nav.Item>
              <Nav.Link className="nav-item-pic-wrapper" eventKey={item.value}>
                <Image src={item.img} alt={item.core} />
                <span>{item.core}</span>
              </Nav.Link>
            </Nav.Item>
          );
        })}
      </Nav>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const CategoryBarConnectedComponent = connect(mapStateToProps, {
  getSelectionData,
})(CategoryBar);

export default CategoryBarConnectedComponent;
