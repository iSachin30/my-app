import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import video1 from "../videos/video1.mp4";
import data from "../data.json";

const Detail = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const video = location.state.videoData;
  const relatedVideos = data.filter((item) => (item.category === video.category));
  const [comment,setComment]=useState('');
  const [comments,setComments]=useState(video.comments);
  const postComment = ()=>{
        setComments([...comments, comment]);
  }
  return (
    <div>
      <button className="btn btn-primary" onClick={() => navigate(-1)}>
        Go back
      </button>
      <h1>Video Details</h1>
      <div className="row detail-row">
        <div className="col-9">
          <ReactPlayer
            url={video1}
            controls={true}
            width="70%"
            height="40%"
          ></ReactPlayer>
          <p>Comments</p>
          <textarea type="text-area" onChange={(e)=>{setComment(e.target.value)}} placeholder="Comments"></textarea>

          <button className="btn btn-primary m-2" onClick={()=>postComment()}>Post comment</button>
          {comments.map((item)=>{
              return <div className="row comment">{item}</div>
          })}
        </div>
        <div className="col-3">
          <h3>Related Videos</h3>
          {relatedVideos.map((item) => {
            return (
              <div className="row related-Video">
                <div className="col-6 ">
                  <ReactPlayer
                    url={video1}
                    controls={true}
                    width="70%"
                    height="70%"
                  ></ReactPlayer>
                </div>
                <div className="col-6">
                    <strong>{item.description}</strong>
                    <br/>
                    <span>Category :</span><p>{item.category}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Detail;
