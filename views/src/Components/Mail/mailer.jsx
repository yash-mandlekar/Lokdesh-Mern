import React from "react";
import emailjs from "emailjs-com";
import './mailer.css';

const mailer = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_3pdhttt",
        "template_eneebs6",
        e.target,
        "9LYHUOMRRj_VH1qPK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <div>

<div className="background">
  <div className="container">
    <div className="screen">
      <div className="screen-header">
        <div className="screen-header-left">
          <div className="screen-header-button close"></div>
          <div className="screen-header-button maximize"></div>
          <div className="screen-header-button minimize"></div>
        </div>
        <div className="screen-header-right">
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
        </div>
      </div>
      <div className="screen-body">
        <div className="screen-body-item left">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1457119/feedback-form-template.svg" alt="" />
        </div>
        <div className="screen-body-item">
          <div className="app-form">
            <div className="app-form-group">
            </div>
            <form onSubmit={sendEmail} >
            <div className="app-form-group">
              <input className="app-form-control" placeholder="नाम" name="name"/>
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="ईमेल" name="user_email"/>
            </div>
            <div className="app-form-group message">
              <input className="app-form-control" placeholder="संदेश" name="message"/>
            </div>
            <div className="app-form-group buttons">
              <button  className="app-form-button">भेजना</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="credits">
      <a className="credits-link" href="https://dribbble.com/shots/2666271-Contact" target="_blank">
        <svg className="dribbble" viewBox="0 0 200 200">
          <g stroke="#ffffff" fill="none">
            <circle cx="100" cy="100" r="90" strokeWidth="20"></circle>
            <path d="M62.737004,13.7923523 C105.08055,51.0454853 135.018754,126.906957 141.768278,182.963345" strokeWidth="20"></path>
            <path d="M10.3787186,87.7261455 C41.7092324,90.9577894 125.850356,86.5317271 163.474536,38.7920951" strokeWidth="20"></path>
            <path d="M41.3611549,163.928627 C62.9207607,117.659048 137.020642,86.7137169 189.041451,107.858103" strokeWidth="20"></path>
          </g>
        </svg>
        Lokdesh
      </a>
    </div>
  </div>
</div>

    </div>
  );
};

export default mailer;
