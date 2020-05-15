import React, { useEffect, useState } from "react";
import { Image, Button, Row, Col, Container } from "react-bootstrap";
import "./home.scss";
import VideoCard from "../../components/VideoCard/VideoCard";
import GithubCard from "../../components/GithubCard/GithubCard";
import { connect } from "react-redux";
import NPMCard from "../../components/NPMCard/NPMCard";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { getProfileData } from "../../components/Sidebar/sidebar.action";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};
const Home = (props) => {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [userVideoList, setUserVideoList] = useState([]);


  /**
   * @method once page loads call profile data to get saved videos
   */
  useEffect(() => {
    if (
      props.dataList.profileData.savedItems &&
      props.dataList.profileData.savedItems.length > 0
    ) {
      setUserVideoList(props.dataList.profileData.savedItems);
    }
  }, [props.dataList.profileData.savedItems]);

  useEffect(() => {
    if (
      props.videoItems.savedVideoItems &&
      props.videoItems.savedVideoItems.length > 0
    ) {
      setUserVideoList(props.videoItems.savedVideoItems);
    }
  }, [props.videoItems.savedVideoItems]);

  return (
    <div class="homepage">
      {/* <div className="section">
        {props.dataList.youtubeApiData &&
          props.dataList.youtubeApiData.length > 0 && (
            <>
              <Row>
                <Col>
                  {" "}
                  <h4>Top {selectedTopic} Youtube Videos</h4>
                </Col>
                <Col className="text-right">View All</Col>
              </Row>
              <div>
                <Slider {...settings}>
                  {(props.dataList.youtubeApiData || []).map((item, index) => {
                    return (
                      <div class="slick-card-item" key={`index-${index}`}>
                        <VideoCard item={item} videoData={userVideoList}/>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </>
          )}
      </div> */}
      {/* <div className="section">
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
        <div>
          <Slider {...settings}>
            {(props.dataList.githubAPiData || []).map((item) => {
              return (
                <div key={item.id} className="slick-card-item">
                  <GithubCard item={item} />
                </div>
              );
            })}
          </Slider>
        </div>
      </div> */}
      
      <div className="section">
        {userVideoList && userVideoList.length > 0 && (
          <>
            <Row>
              <Col>
                {" "}
                <h4>Your Saved Videos</h4>
              </Col>
              <Col className="text-right">
                <Button variant="primary" className="view-all">
                  View All
                </Button>
              </Col>
            </Row>
            <div>
              <Slider {...settings}>
                {(userVideoList || []).map((item, index) => {
                  return (
                    <div key={`index-${index}`}>
                      <VideoCard item={item} videoData={userVideoList}/>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  dataList: state.CategoryDataReducer,
  authStatus: state.AuthReducer,
  videoItems: state.VideoPageReducer,
  homePageItems: state.HomePageReducer,
});

const HomeConnectedComponent = connect(mapStateToProps, {
  getProfileData,
})(Home);

export default HomeConnectedComponent;
