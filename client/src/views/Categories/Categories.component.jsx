import React, { useEffect, useState } from "react";
import { Image, Button, Row, Col } from "react-bootstrap";
import "../Home/home.scss";
import VideoCard from "../../components/VideoCard/VideoCard";
import GithubCard from "../../components/GithubCard/GithubCard";
import { connect } from "react-redux";
import Slider from "react-slick";
import { getSelectionData } from "../../components/Sidebar/sidebar.action";
import './categories.scss';
import {FaYoutube} from 'react-icons/fa'
import {GoRepo} from 'react-icons/go'

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};

const Categories = (props) => {
  /**
   * get profile data on load
   */
  const [selectedTopic, setSelectedTopic] = useState("");
  const [userVideoList, setUserVideoList] = useState([]);

  

  return (
    <div className="categories-wrapper">
      <div className="section">
        {props.dataList.youtubeApiData &&
          props.dataList.youtubeApiData.length > 0 && (
            <>
              <Row>
                <Col>
                  {" "}
                  <h4><FaYoutube size={30}/> Top {JSON.parse(localStorage.getItem('selected'))} Youtube Videos</h4>
                </Col>
              </Row>
              <div>
                <Slider {...settings}>
                  {(props.dataList.youtubeApiData || []).map((item, index) => {
                    return (
                      <div class="slick-card-item" key={`index-${index}`}>
                        <VideoCard item={item} videoData={userVideoList} />
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </>
          )}
      </div>
      <div className="section">
        <Row>
          <Col>
            <h4><GoRepo size={30}/> Top {JSON.parse(localStorage.getItem('selected'))} Repositories</h4>
          </Col>
          <Col className="text-right">
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
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  dataList: state.CategoryDataReducer,
  authStatus: state.AuthReducer,
});

const CategoriesComponent = connect(mapStateToProps, {
  getSelectionData,
})(Categories);

export default CategoriesComponent;
