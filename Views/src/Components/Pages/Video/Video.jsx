import React, { useEffect, useRef, useState } from "react";
import "./video.css";
import ReactPlayer from "../../ReactPlayer/ReactPlayer";
import Axios from "../../Axios/Axios";
import { RWebShare } from "react-web-share";
import { useNavigate } from "react-router-dom";

const Video = () => {
  const navigate = useNavigate();
  const [videoData, setVideoData] = useState([]);
  useEffect(() => {
    Axios.get("/all/shorts").then((res) => {
      setVideoData(res.data);
    });
  }, []);
  const playerRef = useRef(null);
  const handlePlayerReady = (player) => {
    playerRef.current = player;
  };

  return (
    <div>
      <div className="vid">
        <div className="large-Logo">
          <img
            src="https://images.unsplash.com/photo-1605367031760-5522b8a52756?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>
        <div className="reels">
          {videoData.map((item, i) => (
            <div className="all-reels" key={i}>
              <div
                className="lol"
                onClick={() => navigate(`/singleVideo/${item._id}`)}
              >
                <ReactPlayer
                  class="reel-videojs"
                  options={{
                    controls: true,
                    responsive: true,
                    fluid: true,
                    sources: [
                      {
                        src: `data:video/mp4;base64,${item.file}`,
                        type: "video/mp4",
                      },
                    ],
                  }}
                  onReady={handlePlayerReady}
                />
              </div>

              <div className="allreelsOverlay">
                <RWebShare
                  data={{
                    text: "Lokdesh/shots",
                    url: `http://localhost:3000/SingleVideo/${item._id}`,
                  }}
                  onClick={() => console.log("shared successfully!")}
                >
                  <button>
                    <i className="bi bi-cursor"></i>
                  </button>
                </RWebShare>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Video;
