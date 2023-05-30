import React from "react";
import "./Homepage.css";
import vecto from "../images/Screenshot 2023-05-30 215145.png";
import Navbar from "../components/Navbar";
const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <div className="homepage--first--section">
        <div className="homepage--first--heading">
          Live Chat software that let's you chat from any where!
          <p className="homepage--first--para">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
          <button className="homepage--first--button">Get Started</button>
        </div>
        <img
          src="https://picsum.photos/400/300"
          alt="random"
          className="homepage--first--image"
        />
      </div>
      <div className="homepage--second--section">
        <img
          src="https://picsum.photos/400/300"
          alt="random"
          className="homepage--second--image"
        />
        <div className="homepage--second--heading">
          Easy to use
          <p className="homepage--second--para">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
          <button className="homepage--second--button">Get Started</button>
        </div>
      </div>
      <div className="end--page">
        <div className="end--page--section">
          <img src={vecto} alt="vecto" className="end--page--image" />
        </div>
        <div className="end--page--section2">
          <div className="end--page--element">
            <div className="end--page--heading"> Step 1 </div>
            <p className="end--page--cont">
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever sinc
            </p>
          </div>
          <div className="end--page--element">
            <div className="end--page--heading"> Step 2 </div>
            <p className="end--page--cont">
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever sinc
            </p>
          </div>
          <div className="end--page--element">
            <div className="end--page--heading"> Step 3 </div>
            <p className="end--page--cont">
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever sinc
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
