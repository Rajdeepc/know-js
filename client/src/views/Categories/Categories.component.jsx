import React from "react";
import { Row, Col } from "react-bootstrap";
import "../Home/home.scss";
import VideoCard from "../../components/VideoCard/VideoCard";
import GithubCard from "../../components/GithubCard/GithubCard";
import { connect } from "react-redux";
import Slider from "react-slick";
import { getSelectionData } from "./category.action";
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
  
  return (
    <div className="categories-wrapper">
      <div className="section">
        {props.filteredYoutubeItems &&
          props.filteredYoutubeItems.length > 0 && (
            <>
              <Row>
                <Col>
                  {" "}
                  <h4><FaYoutube size={30}/> Top {JSON.parse(localStorage.getItem('selected'))} Youtube Videos</h4>
                </Col>
              </Row>
              <div>
                <Slider {...settings}>
                  {(props.filteredYoutubeItems || []).map((item, index) => {
                    return (
                      <div className="slick-card-item" key={`index-${index}`}>
                        <VideoCard item={item} />
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </>
          )}
      </div>
      <div className="section">
      {props.filteredGitHubItems &&
          props.filteredGitHubItems.length > 0 && (
            <>
        <Row>
          <Col>
            <h4><GoRepo size={30}/> Top {JSON.parse(localStorage.getItem('selected'))} Repositories</h4>
          </Col>
          <Col className="text-right">
          </Col>
        </Row>
        <div>
          <Slider {...settings}>
            {(props.filteredGitHubItems || []).map((item) => {
              return (
                <div key={item.id} className="slick-card-item">
                  <GithubCard item={item} />
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

// const mapStateToProps = (state) => ({
//   dataList: state.CategoryDataReducer,
//   authStatus: state.AuthReducer,
// });


const mapStateToProps = (state) => {
  const { youtubeApiData = [], githubAPiData = [], searchText } = state.CategoryDataReducer;
  const filteredYoutubeItems = (youtubeApiData || []).filter((item) => item.snippet.title.toLowerCase().includes(searchText.toLowerCase()));
  const filteredGitHubItems = (githubAPiData || []).filter((item) => item.full_name.toLowerCase().includes(searchText.toLowerCase()));
  return {
      filteredYoutubeItems: filteredYoutubeItems || state.CategoryDataReducer.youtubeApiData,
      filteredGitHubItems: filteredGitHubItems || state.CategoryDataReducer.githubAPiData,
      authStatus: state.AuthReducer
  };
}


const CategoriesComponent = connect(mapStateToProps, {
  getSelectionData,
})(Categories);

export default CategoriesComponent;
