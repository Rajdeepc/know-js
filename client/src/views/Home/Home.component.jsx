import React,{useState} from "react";
import { Image, Button,Row, Col, Container } from "react-bootstrap";
import "./home.scss";
import VideoCard from "../../components/VideoCard/VideoCard";
import GithubCard from "../../components/GithubCard/GithubCard";
import { connect } from "react-redux";
import JSLinks from "../../utils/constants";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import { background } from "../../assets/images/images";
import CategoryBarConnectedComponent from '../../components/CategoryBar/CategoryBar'

const Home = (props) => {
  
  const [selectedTopic,setSelectedTopic] = useState('')

  const getSelectedData = (value) => {
    if(value){
      setSelectedTopic(value)
    }
  }
  return (
    <>
      {/* <Row>
        <Col>
        <CategoryBarConnectedComponent selection={getSelectedData}/>
        </Col>
      </Row> */}
      <Row>
        <Container>
          <div className="section">
            <Row>
              <Col><h4>Top {selectedTopic} Repositories</h4></Col>
              <Col className="text-right"><Button variant="primary" className="view-all">View All</Button></Col>
            </Row>
            <Row>
              {(props.dataList.githubAPiData || []).slice(0,4).map((item) => {
                return (
                  <Col sm="3">
                    <GithubCard key={item.id} item={item} />
                  </Col>
                );
              })}
            </Row>
          </div>
          <div className="section">
          <Row>
            <Col> <h4>Top {selectedTopic} Youtube Videos</h4></Col>
              <Col  className="text-right"><Button variant="primary" className="view-all">View All</Button></Col>
              </Row>
            <Row>
              {(props.dataList.youtubeApiData || []).slice(0,4).map((item) => {
                return (
                  <Col sm="3">
                    <VideoCard key={item.id} item={item} />
                  </Col>
                );
              })}
            </Row>
          </div>
        </Container>
      </Row>
    </>
  );
};

const mapStateToProps = (state) => ({
  dataList: state.NavbarReducer,
});

const HomeConnectedComponent = connect(mapStateToProps)(Home);

export default HomeConnectedComponent;
