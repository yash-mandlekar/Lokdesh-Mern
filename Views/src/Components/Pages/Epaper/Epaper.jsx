import React, { useState } from "react";
import "./Epaper.css";
import Ep from "./ep.png";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";

const Epaper = () => {
  const [epaper, setepaper] = useState([
    {
      image: Ep,
      date: "1 Dec 2022",
      location: "Bhopal",
    },
    {
      image: Ep,
      date: "1 Dec 2022",
      location: "Gwalior",
    },
    {
      image: Ep,
      date: "1 Dec 2022",
      location: "Raipur",
    },
  ]);

  return (
    <div className="Epaper">
      <h3>
        <strong>प्रिय पाठक,</strong> <br />
        <br />
        हर हाल में साथ देने के लिए लोकदेश समूह आपका आभारी है।
        <br />
        आप सभी को बहुत-बहुत धन्यवाद। तथ्यात्मक और विश्वसनीय ख़बरें आपके लिए बेहद
        जरूरी हैं।
        <br />
        <br />
        लोकदेश से अपने रिश्ते को और मजबूत करें! आपके अनुभवों को और बेहतर बनाने
        के लिए हम लाए हैं लोकदेश ई-पेपर योजना।
      </h3>
      <div className="allEpaper">
        {epaper.map((e, i) => (
          <Link key={i} to={`/epaper/${e.location}`}>
            <div className="epaperBhopal">
              <img src={e.image} alt="" />
              <h1>{e.location}</h1>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Epaper;
