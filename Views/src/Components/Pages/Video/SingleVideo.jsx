import { DotSpinner } from "@uiball/loaders";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Axios from "../../Axios/Axios";
import ReactPlayer from "../../ReactPlayer/ReactPlayer";
import { RWebShare } from "react-web-share";
import "./video.css";
import "./SingleVideo.css";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const SingleVideo = () => {
  const { id } = useParams();
  const [VideoData, setVideoData] = useState({});
  const [Heart, setHeart] = useState(true);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    getShort();
  }, []);
  const getShort = async () => {
    setLoader(true);
    try {
      const res = await Axios.get(`/shorts/${id}`);
      setVideoData(res.data);
      setLoader(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleHeart = () => {
    setHeart(!Heart);
  };
  return (
    <div className="SingleVideo">
      <div className="showSingleVideo">
        <div className="showvideoLeft">
          {loader ? (
            <div className="loader-cnt">
              <DotSpinner size={90} lineWeight={2} speed={0.8} color="white" />
              <h2 style={{ marginTop: "15px" }}>Loading...</h2>
            </div>
          ) : (
            <ReactPlayer
              options={{
                sources: [
                  {
                    src: `data:video/mp4;base64,${VideoData.file}`,
                    type: "video/mp4",
                  },
                ],
              }}
              class="showvideoLeftt"
            />
          )}
        </div>
        <div className="showvideoRight">
          <div className="showvideoRightTop">
            <div className="showvideoRightTopLeft">
              <img
                src="https://images.unsplash.com/photo-1657299156332-7e1aea73093b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt=""
              />
              <h2 style={{ marginLeft: "10px" }}>लोकदेश</h2>
            </div>
            <div className="showvideoRightTopShare">
              <FacebookShareButton
              url={`localhost:3000/SingleVideo/${id}`}
              >
                <FacebookIcon className="fbi" size={27} round />
              </FacebookShareButton>

              <WhatsappShareButton
              url={`localhost:3000/SingleVideo/${id}`}
              >
                <WhatsappIcon className="fbi" size={27} round />
              </WhatsappShareButton>
              <div className="allreelSharwee">
                <RWebShare
                  data={{
                    text: "Lokdesh/shots",
                    url: `http://localhost:3000/SingleVideo/${id}`,
                  }}
                  onClick={() => console.log("shared successfully!")}
                >
                  <button>
                    <i className="bi bi-cursor"></i>
                  </button>
                </RWebShare>
              </div>
            </div>
          </div>
          <div className="showvideoRightCenter">
            <div className="VideoDesc">
              <h1>
              महाराष्ट्र में मध्यप्रदेश के मजदूरों से भरी ट्रैक्टर-ट्रॉली पलटने से 5 की मौत हो गई। इनमें दो बच्चे हैं। मारे गए लोग सेंधवा के कोलकी मांग (जिला बड़वानी) के हैं। मृतकों में दो महिलाएं और एक युवती भी शामिल है।
              </h1>
            </div>

            <div className="userComment">
              <div className="userprofileComment"></div>
              <div className="userCommentText">
                <h2>
                  a piece of text placed within a program to help other users to
                  understand it, which the computer ignores when running the
                  program. place a piece of explanatory text within (a program)
                  to assist other users. "the only way to solve the problem is
                  to code for the hardware directly—just make sure that it's
                  clearly commented"
                </h2>
              </div>
            </div>
            <div className="userComment">
              <div className="userprofileComment"></div>
              <div className="userCommentText">
                <h2>
                These apps were mainly developed to display articles and are often used on platforms for which an official Wikipedia app was not formerly available, such as Windows Phone. Typical features include searching for articles, bookmarks, sharing, or enlarging images.
                </h2>
              </div>
            </div>
            <div className="userComment">
              <div className="userprofileComment"></div>
              <div className="userCommentText">
                <h2>
                By Yunhe Shi — Search and view geotagged Wikipedia articles from a visible map region.
                </h2>
              </div>
            </div>
            <div className="userComment">
              <div className="userprofileComment"></div>
              <div className="userCommentText">
                <h2>
                  Wikipedia is hosted by the Wikimedia Foundation, a non-profit
                  organization that also hosts a range of other projects. You
                  can support our work with a donation.
                </h2>
              </div>
            </div>
            <div className="userComment">
              <div className="userprofileComment"></div>
              <div className="userCommentText">
                <h2>
                  Wikipedia is hosted by the Wikimedia Foundation, a non-profit
                  organization that also hosts a range of other projects. You
                  can support our work with a donation.
                </h2>
              </div>
            </div>
          </div>
          <div className="showvideoRightBottom">
            <div className="showvideoRightBottomTop">
              <div
                onClick={handleHeart}
                className="showvideoRightBottomTopLeft"
              >
                {Heart ? (
                  <i style={{ color: "red" }} class="bi bi-heart-fill"></i>
                ) : (
                  <i class="bi bi-heart"> </i>
                )}
                <a>0 Likes</a>
              </div>
              <div className="showvideoRightBottomTopLeftTop">
                <a href="">
                  <i class="bi bi-bookmarks"></i>
                </a>
              </div>
            </div>
            <div className="showvideoRightBottomBottom">
              <input type="text" placeholder="Add a comment..." />
              <a href="">send</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleVideo;
