import React from 'react'
import { Row,Col} from 'react-bootstrap';
import VideoCard from '../../components/VideoCard/VideoCard';
import { connect } from 'react-redux';
const VideoPage = (props) => {
    return (
        <div className="section">
          <Row>
            <Col><h4> Youtube Videos</h4></Col>
              </Row>
            <Row>
              {(props.dataList.youtubeApiData || []).map((item) => {
                return (
                  <Col sm="3">
                    <VideoCard key={item.id} item={item} />
                  </Col>
                );
              })}
            </Row>
          </div>
    )
}


const mapStateToProps = (state) => ({
    dataList: state.NavbarReducer,
  });
  
  const VideoPageComponent = connect(mapStateToProps)(VideoPage);
  
  export default VideoPageComponent;