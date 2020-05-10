import React, { useState } from "react";
import { Image, Button, Row, Col, Container } from "react-bootstrap";
import "./home.scss";
import VideoCard from "../../components/VideoCard/VideoCard";
import GithubCard from "../../components/GithubCard/GithubCard";
import { connect } from "react-redux";
import NPMCard from "../../components/NPMCard/NPMCard";

const Home = (props) => {
  const [selectedTopic, setSelectedTopic] = useState("");

  const getSelectedData = (value) => {
    if (value) {
      setSelectedTopic(value);
    }
  };
  return (
    <>
      <div className="section">
        <Row>
          <Col>
            <h4>Top {selectedTopic} Repositories</h4>
          </Col>
          <Col className="text-right">
            <Button variant="primary" className="view-all">
              View All
            </Button>
          </Col>
        </Row>
        <Row>
          {(props.dataList.githubAPiData || []).slice(0, 4).map((item) => {
            return (
              <Col sm="3" key={item.id}>
                <GithubCard item={item} />
              </Col>
            );
          })}
        </Row>
      </div>
      <div className="section">
        {props.dataList.youtubeApiData &&
          props.dataList.youtubeApiData.length > 0 && (
            <>
              <Row>
                <Col>
                  {" "}
                  <h4>Top {selectedTopic} Youtube Videos</h4>
                </Col>
                <Col className="text-right">
                  <Button variant="primary" className="view-all">
                    View All
                  </Button>
                </Col>
              </Row>
              <Row>
                {(props.dataList.youtubeApiData || [])
                  .slice(0, 4)
                  .map((item, index) => {
                    return (
                      <Col sm="3" key={`index-${index}`}>
                        <VideoCard item={item} />
                      </Col>
                    );
                  })}
              </Row>
            </>
          )}
      </div>
      <div className="section">
        {props.dataList.npmData && props.dataList.npmData.length > 0 && (
          <>
            <Row>
              <Col>
                {" "}
                <h4>Top {selectedTopic} npm Packages</h4>
              </Col>
              <Col className="text-right">
                <Button variant="primary" className="view-all">
                  View All
                </Button>
              </Col>
            </Row>
            <Row>
              {(props.dataList.npmData || []).slice(0, 4).map((item, index) => {
                return (
                  <Col sm="3" key={`index-${index}`}>
                    <NPMCard item={item} />
                  </Col>
                );
              })}
            </Row>
          </>
        )}
      </div>
      <div className="section">
        <Row>
          <Col>
            {" "}
            <h4>Top Viewed Courses</h4>
          </Col>
        </Row>
      </div>
      <div className="section">
        <Row>
          <Col>
            {" "}
            <h4>Your Saved Courses</h4>
          </Col>
        </Row>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  dataList: state.NavbarReducer,
});

const HomeConnectedComponent = connect(mapStateToProps)(Home);

export default HomeConnectedComponent;
