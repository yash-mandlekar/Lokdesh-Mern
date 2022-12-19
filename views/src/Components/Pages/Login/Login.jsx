import React, { useRef, useState } from "react";
import "./login.css";
import Logo from "../../images/logo.png";
import Footer from "../../Footer/Footer";
import Axios from "../../Axios/Axios";
import Otp from "./Otp";
import { RaceBy } from "@uiball/loaders";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const inpRef = useRef(null);
  const [inp, setInp] = useState({
    value: "",
    otp: "",
    error: "",
  });
  const { value, error, otp } = inp;
  const [pageData, setPageData] = useState({
    loader: false,
    showotp: false,
  });
  const { loader, showotp } = pageData;
  const changeHandler = (e) => {
    if (inpRef.current.value.length > 10 || inpRef.current.value < 0) return;
    setInp({ ...inp, value: e.target.value, error: "" });
    inpRef.current.style.borderBottom = "1px solid black";
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    if (inpRef.current.value.length < 10) {
      setInp({ ...inp, error: "Please Enter Valid Number" });
      inpRef.current.style.borderBottom = "2px solid red";
      setTimeout(() => {
        setInp({ ...inp, error: "" });
      }, 3000);
      return;
    }
    setPageData({ ...pageData, loader: true });
    const res = await Axios.post("/user/login", {
      phone: inpRef.current.value,
    });
    setPageData({ ...pageData, loader: false, showotp: true });
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log({ phone: value, otp: otp });
    const res = await Axios.post("/user/signup", { phone: value, otp: otp });
    if (res.data.status === "success") {
      localStorage.setItem("accessToken", res.data.token);
      localStorage.setItem("refreshToken", res.data.refreshToken);
      navigate("/epaper");
    }
  };

  return (
    <div className="LoginPages">
      <div className="containersss">
        {loader ? (
          <div
            style={{
              height: "30vmax",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <RaceBy size={190} lineWeight={5} speed={2} color="black" />
            <h2 style={{ marginTop: "15px" }}>Loading...</h2>
          </div>
        ) : showotp ? (
          <Otp
            Logo={Logo}
            handleSignUp={handleSignUp}
            otp={otp}
            error={error}
            setInp={setInp}
            inp={inp}
          />
        ) : (
          <div className="login">
            <img src={Logo} alt="" />
            <h1>फोन नंबर के साथ लॉगिन करें</h1>
            <h3>कृपया अपना फोन नंबर दर्ज करें</h3>
            <form onSubmit={handleLogin}>
              <div className="top">
                <h5>
                  <img
                    src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
                    alt=""
                  />
                  &nbsp;+91-
                </h5>
                <div className="inp-cnt">
                  <input
                    type="number"
                    placeholder="मोबाइल नंबर"
                    name="phone"
                    ref={inpRef}
                    value={value}
                    onChange={changeHandler}
                  />
                  <small>{error}</small>
                </div>
              </div>
              <button type="submit">जारी रखें</button>
            </form>
            <h5>
              देश का सबसे जीवंत अखबार। समाचार के लिए आपकी पसंद है
              <span> लोकदेश</span>
            </h5>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Login;
