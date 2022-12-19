import React, { useEffect, useState } from "react";
import Debate from "../Home/Debate";
import Category from "../Home/Category";
import News from "../Home/Livenews";
import Axios from "../Axios/Axios";
import { useParams } from "react-router-dom";

const Categories = ({ theme }) => {
  const [NewsData, setNewsData] = useState([]);
  const [categories, setcategories] = useState([]);
  const { category } = useParams();
  useEffect(() => {
    Axios.get(`/news/categoryName/${category}`).then((res) => {
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
        <Debate NewsData={NewsData} theme={theme} show={false} />
        <News NewsData={NewsData} theme={theme} />
      </div>
    </>
  );
};

export default Categories;
