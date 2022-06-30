import React from "react";
import ReactPlayer from "react-player";
import video1 from "../videos/video1.mp4";
import { useNavigate } from "react-router-dom";

function VideoCard(props) {
  const videoData = props.video;
  const navigate = useNavigate();

  const navigateToDetail = (video) => {
    navigate("/Detail", {
      state: {
        videoData: videoData,
      },
    });
  };
  return (
    <React.Fragment>
      <div className="video-card" style={{width: 18 +'rem'}}>
      <ReactPlayer
              url={video1}
              controls={true}
              width="60%"
              height="60%"
            ></ReactPlayer>
        <div className="card-body" onClick={()=>navigateToDetail(props.video)}>
          <h5 className="card-title">{videoData.title}</h5>
          <p className="card-text">
            {videoData.description}
          </p> <p className="card-text">
            <label>Views :</label>
            {videoData.views}
          </p>

        </div>
      </div>
    </React.Fragment>
  );
}

export default VideoCard;
