import React,{useState} from "react";
import { Card, Modal,Button } from "react-bootstrap";
import "./videocard.scss";
import { MdPlayArrow } from "react-icons/md";
import { RiYoutubeLine } from "react-icons/ri";
import moment from 'moment';


const VideoCard = ({ item }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => {
    setShow(true);
  };

  console.log(item);
  return (
    <>
      <Card className="video-card">
        <a href="#" onClick={handleShow} className="card-video-wrapper">
          <Card.Img
            variant="top"
            className="img-wrapper"
            src={item.snippet.thumbnails.high.url}
          />
          <div className="hover">
            <div class="hover-content">
              <MdPlayArrow /> <span>Play</span>
            </div>
          </div>
          <Card.Body>
            <Card.Text>{item.snippet.title}</Card.Text>
          </Card.Body>
        </a>
      </Card>

      <Modal show={show} onHide={handleClose} size="lg">
        {/* <Modal.Header>
          <Modal.title></Modal.title>
        </Modal.Header> */}
        <Modal.Body>
          <iframe
            width="100%"
            height="400"
            allowfullscreen
            src={`https://www.youtube.com/embed/${item.id.videoId}`}
          ></iframe>
          <div className="video-info">
            <div className="video-title">
            <h4>{item.snippet.title}<Button>Bookmark</Button><Button>Save</Button></h4>
            <p>{item.snippet.description} </p>
            </div>
            <div className="channel">
            <a target="_blank" href={`https://www.youtube.com/channel/${item.snippet.channelId}`}>{item.snippet.channelTitle}</a> 
            {moment(item.snippet.publishedAt).format('DD/MM/YYYY')}

            </div>
          </div>

        </Modal.Body>
      </Modal>
    </>
  );
};

export default VideoCard;
