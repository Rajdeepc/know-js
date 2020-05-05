import React from "react";
import { Image, Row, Col, Container } from "react-bootstrap";
import "./home.scss";
import VideoCard from '../../components/VideoCard/VideoCard';
import GithubCard from '../../components/GithubCard/GithubCard';
import { connect } from 'react-redux';

const Home = (props) => {
  return (
    <>
      <div className="section">
        <div className="img-section-banner">
        {/* <Image src={background} alt="banner"></Image> */}
        <h1>Back ground image goes here</h1>
        </div>
        
      </div>
      <Container>
      <div className="section">
      
          <h1>Top Github Repositories</h1>
          <Row>
            {(props.dataList.githubAPiData || []).map((item) => {
              return <Col sm="3"><GithubCard key={item.id} item={item}/></Col>;
            })}
          </Row>
      </div>
      <div className="section">
        <h1>Top Youtube Videos</h1>
          <Row>
            {(props.dataList.youtubeApiData || []).map((item) => {
              return <Col sm="3"><VideoCard key={item.id} item={item}/></Col>;
            })}
          </Row>
      </div>
      </Container>

    </>
  );
};


const mapStateToProps = (state) => ({
  dataList: state.CategorySelectorReducer
})

const HomeConnectedComponent = connect(mapStateToProps)(Home)

export default HomeConnectedComponent;
