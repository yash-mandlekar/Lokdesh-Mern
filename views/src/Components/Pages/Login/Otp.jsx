import React, { useRef } from "react";
import Timer from "../../Timer/Timer";
import Style from "./Otp.module.css";
const Otp = ({ Logo, handleSignUp, otp, error, setInp, inp }) => {
  const inpRef = useRef(null);
  const otpHandler = (e) => {
    if (inpRef.current.value.length > 6 || inpRef.current.value < 0) return;
    setInp({ ...inp, otp: e.target.value });
  };
  return (
    <div className="login">
      <img src={Logo} alt="" />
      <h1>फोन नंबर के साथ लॉगिन करें</h1>
      <h3>अपना ओटीपी दर्ज करें</h3>
      <form onSubmit={handleSignUp}>
        <div className="top">
          <div className={Style.otpCnt}>
            <input
              type="number"
              name="phone"
              ref={inpRef}
              value={otp}
              onChange={otpHandler}
            />
            <small>{error}</small>
          </div>
        </div>
        <div className="mt-4">
          <Timer />
        </div>
      </form>
      <h5>
        देश का सबसे जीवंत अखबार। समाचार के लिए आपकी पसंद है
        <span> लोकदेश</span>
      </h5>
    </div>
  );
};

export default Otp;
