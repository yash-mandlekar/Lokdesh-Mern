import React, { useEffect, useState } from "react";
import "./LocationE.css";
import Ep from "../Epaper/ep.png";
import Axios from "../../Axios/Axios";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
const LocationEpaper = () => {
  const { city } = useParams();
  const navigate = useNavigate();
  const [mainImg, setmainImg] = useState("");
  const [date, setdate] = useState("");
  const [loader, setLoader] = useState(true);
  const [Epaper, setEpaper] = useState([]);
  useEffect(() => {
    getEpaper();
  }, []);
  const getEpaper = async (id) => {
    setLoader(true);
    const res = await Axios.get("/ePaper/city/" + city);
    setLoader(false);
    setEpaper(res.data);
    setmainImg(res.data[0]);
  };
  const handleChange = async (e) => {
    setdate(e.target.value);
    setLoader(true);
    const res = await Axios.get("/ePaper/city/" + city);
    const filterDate = res.data.filter((item) => {
      return moment(item.date).format("YYYY-MM-DD") === e.target.value;
    });
    setEpaper(filterDate);
    setLoader(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (date) {
      setLoader(true);
      const res = await Axios.get("/ePaper/city/" + city);
      const filterDate = res.data.filter((item) => {
        return moment(item.date).format("YYYY-MM-DD") === date;
      });
      setEpaper(filterDate);
      setLoader(false);
    }
  };
  return (
    <div>
      <div className="Lepaper">
        <div className="LocationEpaper">
          <h1>
            Lokdesh {city} - मुख्य संस्करण {Epaper.length > 0 && Epaper[0].date}
          </h1>

          <form onSubmit={handleSubmit} className="LocationDate">
            <input type="date" value={date} onChange={handleChange} />
            <button type="submit">Apply</button>
          </form>
          {loader ? (
            "loading..."
          ) : Epaper.length > 0 ? (
            <div className="epaperss">
              <div
                className="epaperLeft"
                onClick={() => navigate(`/web/${mainImg._id}`)}
              >
                <img src={`data:image/png;base64,${mainImg.image}`} alt="" />
              </div>
              <div className="epaperRight">
                <div className="Epapertop">
                  <i class="bi bi-arrow-up-circle-fill"></i>
                </div>

                {Epaper.map((e, i) => (
                  <div
                    key={i}
                    onClick={() => setmainImg(e)}
                    className="epaperRightAll"
                  >
                    <img src={`data:image/png;base64,${e.image}`} alt="" />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <h3>No data found</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default LocationEpaper;
