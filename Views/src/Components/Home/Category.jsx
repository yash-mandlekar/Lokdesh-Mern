import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "../Axios/Axios";

const Category = ({ theme, categories, setNewsData, filterNews }) => {
  const navigate = useNavigate();
  const handleData = async (e) => {
    navigate("/" + e);
    filterNews(e);
  };
  return (
    <div className={`catagory ${theme === "light" ? "light" : "dark"}`}>
      {categories.map((category, i) => (
        <div
          key={i}
          className="catagoryItem"
          onClick={() => handleData(category.categoryUrl)}
          // style={{
          //   backgroundColor: theme === "light" ? "rgb(245, 245, 245)" : "#2d2c2c",
          // }}
        >
          <ul>
            <li>
              {category.icon && (
                <img
                  src={`data:image/png;base64,${category.icon}`}
                  className="CatgoryLogo"
                />
              )}
              {category.hindiName}
            </li>
          </ul>
        </div>
      ))}
      <Link to="/feedback">
        <div className="feedback">
          <h1>फीडबैक दें</h1>
        </div>
      </Link>
    </div>
  );
};

export default Category;
