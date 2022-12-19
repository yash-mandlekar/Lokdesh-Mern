import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "../Axios/Axios";
import "./Singlenews.css";
import Kalua from "../images/add.jpg";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const SingleNews = ({ theme }) => {
  const { id } = useParams();
  const [NewsData, setNewsData] = useState({});
  useEffect(() => {
    Axios.get(`/news/${id}`).then((res) => {
      setNewsData(res.data);
    });
  }, []);
  useEffect(() => {
    document.body.style.backgroundColor = theme === "light" ? "white" : "black";
    document.body.style.color = theme === "light" ? "black" : "white";
  }, [theme]);
  return (
    <>
      <div className="newsmain">
        <div className="NewsmainHeading">
          <h2>
            <a href="/">Home</a> / catagory
          </h2>
          <h1>{NewsData.metaTitle}</h1>
        </div>
        <div className="singlenewDetailsIcon">
          <div className="singlenewDetailsIconLeft">
            <h1>
              December 02, 2022, Uploaded on : Fri Dec 02 2022 14:36:36 GMT+0530
            </h1>
          </div>
          <div className="singlenewDetailsIconRight">
            <FacebookShareButton url={`localhost:3000/news/`}>
              <FacebookIcon size={26} round />
            </FacebookShareButton>

            <TwitterShareButton url={`localhost:3000/news/`}>
              <TwitterIcon size={26} round />
            </TwitterShareButton>

            <WhatsappShareButton url={`localhost:3000/news/`}>
              <WhatsappIcon size={26} round />
            </WhatsappShareButton>
          </div>
        </div>

        <img src={`data:image/jpg;base64,${NewsData.file}`} alt="" />
        <p>{NewsData.shortDescription}</p>
        <p>{NewsData.metaDescription}</p>
        <div dangerouslySetInnerHTML={{ __html: NewsData.description }}></div>
      </div>
      <div className="singleNewsAdd">
        <img src={Kalua} alt="" />
      </div>
    </>
  );
};

export default SingleNews;
