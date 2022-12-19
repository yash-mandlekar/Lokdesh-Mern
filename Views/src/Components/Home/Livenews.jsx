import moment from "moment/moment";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const News = ({ theme, NewsData }) => {
  const navigate = useNavigate();
  return (
    <div className="news">
      {NewsData.map(
        (e, i) =>
          e.showInSlider.toLowerCase() === "true" && (
            <div
              key={i}
              className="mainNews"
              onClick={() => navigate(`/news/${e._id}`)}
            >
              <div className="Newsleft">
                <img src={`data:image/jpg;base64,${e.file}`} alt="" />
              </div>
              <div className="Newsright">
                <h1
                  style={{ color: `${theme === "light" ? "black" : "white"}` }}
                >
                  {e.metaTitle.length > 50 ? (
                    <span
                      style={{
                        color: `${theme === "light" ? "black" : "white"}`,
                      }}
                    >
                      <h3>Live</h3>
                      {e.metaTitle.slice(0, 50)}..
                    </span>
                  ) : (
                    <span>{e.metaTitle}</span>
                  )}
                </h1>
                {e.metaDescription.length > 150 ? (
                  <p
                    style={{
                      color: `${theme === "light" ? "black" : "white"}`,
                    }}
                  >
                    {/* {new Date(e.createdAt).toLocaleTimeString()} : 
                    {new Date(e.createdAt).toLocaleDateString()} */}
                    {/* calculating post hour ago  */}
                    {/* {moment
                      .utc(new Date(e.createdAt).toLocaleString())
                      .local()
                      .startOf("seconds")
                      .fromNow()} */}
                    {e.metaDescription.slice(0, 150)}...
                  </p>
                ) : (
                  <p
                    style={{
                      color: `${theme === "light" ? "black" : "white"}`,
                    }}
                  >
                    {e.metaDescription}
                  </p>
                )}
              </div>
            </div>
          )
      )}

      <div className="adds">
        <img
          src="https://images.unsplash.com/photo-1605548230624-8d2d0419c517?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default News;
