import React, { useEffect, useState } from "react";
import "./Fullscreen.css";
import Ep from "../Epaper/ep.png";
import Axios from "../../Axios/Axios";
import { useNavigate, useParams } from "react-router-dom";

const FullScreenPaper = () => {
    const navigate = useNavigate();
  const [mainImg, setmainImg] = useState("");
  const { id } = useParams();
  useEffect(() => {
    getEpaper();
  }, []);
  const getEpaper = async () => {
    const res = await Axios.get("/epaper/" + id);
    setmainImg(res.data.image);
    // console.log(res.data);
  };
  return (
    <div>
      <div className="FullScreenPaper">
        <button className="btnFullscreen " onClick={()=> navigate(-1)}> Back</button>
        <img src={`data:image/jpeg;base64,${mainImg}`} alt="" />
      </div>
    </div>
  );
};

export default FullScreenPaper;
