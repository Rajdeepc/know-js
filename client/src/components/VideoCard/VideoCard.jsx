import React, { useState } from "react";
import { Card, Row, Col, ButtonGroup, Modal, Button } from "react-bootstrap";
import "./videocard.scss";
import { MdPlayArrow } from "react-icons/md";
import { FiSave } from "react-icons/fi";
import VideoModalPlayer from "../VideoCardModalPlayer/VideoModalPlayer";
import { saveVideoItemAction } from "../../views/VideoPage/video.action";
import { connect } from "react-redux";

const VideoCard = (props) => {
  const { item } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = (event) => {
    event.stopPropagation();
    setShow(true);
  };

  const saveItem = (item,event) => {
    console.log(item);
    props.saveVideoItemAction(
      item.etag,
      props.loginReducer.loginResponse.email
    );
  };

  // console.log(item);
  return (
    <>
      <Card className="video-card">
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
        <Card.Footer className="text-muted">
          <Button variant="warning" onClick={(event) => saveItem(item,event)}>
            <FiSave size={20} />
            { (props.videoSaveResponse.savedVideoItems || []).find(video => video === item.etag) ? 'Saved' : 'Save' }
          </Button>
        </Card.Footer>
      </Card>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Body className="no-padding">
          <VideoModalPlayer item={item} />
        </Modal.Body>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => ({
  loginReducer: state.AuthReducer,
  videoSaveResponse: state.VideoPageReducer
});

const VideoPageComponent = connect(mapStateToProps, {
  saveVideoItemAction,
})(VideoCard);

export default VideoPageComponent;
