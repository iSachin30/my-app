import React, { useState  } from "react";
import VideoCard from "./VideoCard";
import { useNavigate } from "react-router-dom";
import data from '../data.json';

function Overview() {
  const [search, setSearch] = useState("");
  const [videos, setVideos] = useState(data);

  const navigate = useNavigate();

  const searchVideo = (searchTerm) => {
    if (searchTerm.length === 0) setVideos(data);
    else if (searchTerm.length > 0) {
      setSearch(searchTerm);
      let filteredVideos = videos.filter((item) => {
        return searchTerm == item.id || item.category.startsWith(searchTerm) || item.type.startsWith(searchTerm) || item.category.endsWith(searchTerm) || item.type.endsWith(searchTerm) || item.description.startsWith(searchTerm);
      });
      setVideos(filteredVideos);
    } else {
      setVideos([]);
    }
  };

  const handleLogout = ()=>{
    navigate("/");
}
  return (
    <div className="container-fluid">
              <button className="btn btn-danger logout" onClick={()=>{handleLogout()}}>Logout</button>
      <br/>
      <br/>
      <h3>Overview</h3>

      <input
        type="search"
        onChange={(e) => {
          searchVideo(e.target.value);
        }}
        placeholder="Enter your search"
      />
      <br />
      <br />
      <div className="row overview-container">
        {videos &&
          videos.map((video) => {
            return (
              <VideoCard key={video.id} className="video-card" video={video} />
            );
          })}
      </div>
      <br />
      {videos.length < 0 && <p>no data found!</p>}
    </div>
  );
}

export default Overview;
