import React,{useEffect} from "react";
import { Row,Button, Col } from "react-bootstrap";
import VideoCard from "../../components/VideoCard/VideoCard";
import { connect } from "react-redux";
import { getProfileData } from "../../components/Sidebar/sidebar.action";


const VideoPage = (props) => {

  useEffect(() => {
    if (props.authStatus.isLoggedIn && props.authStatus.loginResponse.email) {
      props.getProfileData(props.authStatus.loginResponse.email);
    }
  }, []);



  return (
    <div className="section">
      <div className="section">
        {props.dataList.profileData.savedItems && props.dataList.profileData.savedItems.length > 0 && (
          <>
            <Row>
              <Col>
                {" "}
                <h4>Your Saved Videos</h4>
              </Col>
            </Row>
           <Row>
              {(props.dataList.profileData.savedItems || []).map((item, index) => {
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
    </div>
  );
};

const mapStateToProps = (state) => ({
  authStatus: state.AuthReducer,
  dataList: state.CategoryDataReducer,
});

const VideoPageComponent = connect(mapStateToProps,{
  getProfileData
})(VideoPage);

export default VideoPageComponent;
