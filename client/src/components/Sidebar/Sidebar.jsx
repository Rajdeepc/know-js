import React, { useState, useEffect } from "react";
import "./sidebar.scss";
import { ListGroup } from "react-bootstrap";
import { JSLinks, SidebarLinks } from "../../utils/constants";
import { Link } from "react-router-dom";
import { getSelectionData, getProfileData } from "./sidebar.action";
import { connect } from "react-redux";

const Sidebar = (props) => {
  const [activeId, setActiveId] = useState(JSLinks[0].id);
  const [categorylinkValue, setLinkValue] = useState(JSLinks[0].core);

  const setActiveClass = (item, event) => {
    setLinkValue(item.value);
    setActiveId(item.id);
  };

  useEffect(() => {
    if (categorylinkValue) {
      console.log(categorylinkValue);
      localStorage.setItem("selected", JSON.stringify(categorylinkValue));
      props.getSelectionData(categorylinkValue);
    }
  }, [categorylinkValue]);

  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <ListGroup className="categories">
          {(JSLinks || []).map((link) => {
            return (
              <Link
                to={`/${link.routeName}`}
                key={link.id}
                className={
                  link.id === activeId
                    ? "list-group-item active"
                    : "list-group-item"
                }
                onClick={(event) => setActiveClass(link, event)}
              >
                <span className="img-category">
                  <img src={link.img} alt={link.core} />{" "}
                </span>
                <span>{link.core}</span>
              </Link>
            );
          })}
        </ListGroup>
        <ListGroup className="my-videos">
          {(SidebarLinks || []).map((sidebar) => {
            if(props.authReducerValue.isLoggedIn && sidebar.id === 'sidebar1'){
              sidebar.isLogged = true
            } // TODO
            if(sidebar.isLogged){
              return (
                <>
                  <Link
                    to={sidebar.route}
                    key={sidebar.id}
                    className={
                      sidebar.id === activeId
                        ? "list-group-item active"
                        : "list-group-item"
                    }
                    onClick={(event) => setActiveClass(sidebar, event)}
                  >
                    {sidebar.logo} {sidebar.title}
                  </Link>
                </>
              );
            }
            
          })}
        </ListGroup>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  authReducerValue: state.AuthReducer,
});

const SideBarComponent = connect(mapStateToProps, {
  getSelectionData,
  getProfileData,
})(Sidebar);

export default SideBarComponent;
