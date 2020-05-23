import React, { useState } from "react";
import { Card, Modal } from "react-bootstrap";
import "./videocard.scss";
import { MdPlayArrow } from "react-icons/md";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import VideoModalPlayer from "../VideoCardModalPlayer/VideoModalPlayer";
import { saveVideoItemAction } from "../../views/VideoPage/video.action";
import { connect } from "react-redux";
import { IconContext } from "react-icons";
import PropTypes from 'prop-types'
const VideoCard = (props) => {
  const { item } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = (event) => {
    event.stopPropagation();
    setShow(true);
  };

  const saveItem = (item, event) => {
    props.saveVideoItemAction(
      item,
      props.loginReducer.loginResponse.email
    );
  };

  return (
    <>
      <Card className="video-card">
        <div className="favorite">
          <p onClick={(event) => saveItem(item, event)} className="favorite-icon">
            {(props.videoData || []).find(
              (video) => video.etag === item.etag
            ) ? (
              <IconContext.Provider
                value={{ color: "gold", className: "save" }}
              >
                <div>
                  <AiFillStar size={30} />
                </div>
              </IconContext.Provider>
            ) : (
              <IconContext.Provider
                value={{ color: "white", className: "saved" }}
              >
                <div>
                  <AiOutlineStar size={30} />
                </div>
              </IconContext.Provider>
            )}
          </p>
        </div>
        <a
          href="javascript:void(0)"
          onClick={(event) => handleShow(event)}
          className="card-video-wrapper"
        >
          <Card.Img
            variant="top"
            className="img-wrapper"
            src={item.snippet.thumbnails.high.url}
          />
          <div className="hover">
            <div className="hover-content">
              <MdPlayArrow /> <span>Play</span>
            </div>
          </div>
          <Card.Body>
            <Card.Text>{item.snippet.title}</Card.Text>
          </Card.Body>
        </a>
      </Card>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Body className="no-padding">
          <VideoModalPlayer item={item} />
        </Modal.Body>
      </Modal>
    </>
  );
};


VideoCard.defaultProps = {
  item:{
    snippet: {
      title : '',
      thumbnails: {
        high:{
          url :''
        }
      }
    }
  },
  videoData:[],

}

VideoCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.shape({
    snippet:PropTypes.objectOf(PropTypes.shape({
      title: PropTypes.string,
      thumbnails: PropTypes.objectOf(PropTypes.shape({
        high: PropTypes.objectOf(PropTypes.shape({
          url: PropTypes.string
        }))
      }))
    }))
  })),
  videoData: PropTypes.array,

}

const mapStateToProps = (state) => ({
  loginReducer: state.AuthReducer,
  videoSaveResponse: state.VideoPageReducer,
});

const VideoPageComponent = connect(mapStateToProps, {
  saveVideoItemAction,
})(VideoCard);




export default VideoPageComponent;
