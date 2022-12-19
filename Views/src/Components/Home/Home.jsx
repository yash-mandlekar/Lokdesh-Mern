import React, { useEffect, useState } from "react";
import Debate from "./Debate";
import "../Home/Home.css";
import Category from "./Category";
import News from "./Livenews";
import Axios from "../Axios/Axios";
import { Route, Routes } from "react-router-dom";

const Home = ({ theme }) => {
  const [NewsData, setNewsData] = useState([]);
  const [categories, setcategories] = useState([]);
  useEffect(() => {
    Axios.get("/all/news").then((res) => {
      console.log(res.data);
      setNewsData(res.data);
    });
    Axios.get("/news-category").then((res) => {
      setcategories(res.data);
    });
  }, []);
  const filterNews = (e) => {
    Axios.get(`/news/categoryName/${e}`).then((res) => {
      setNewsData(res.data);
    });
  };
  return (
    <>
      <div
        className="d-flex mt-5"
        style={{
          backgroundColor: `${theme === "light" ? "white" : "black"}`,
          color: `${theme === "light" ? "black" : "white"}`,
        }}
      >
        <Category
          theme={theme}
          categories={categories}
          setNewsData={setNewsData}
          filterNews={filterNews}
        />
        <Debate NewsData={NewsData} theme={theme} show={true} />
        <News NewsData={NewsData} theme={theme} />
      </div>
    </>
  );
};

export default Home;
