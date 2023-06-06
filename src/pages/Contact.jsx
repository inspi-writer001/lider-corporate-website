import React from "react";
import "./Pages.css";
import BlurryBlob from "../components/BlurryBlob";

// import { Wrapper, Status } from "@googlemaps/react-wrapper";

const Contact = () => {
  return (
    <div>
      <div className="insurance_body">
        <div className="first_banner">
          <BlurryBlob
            height={90}
            style={{
              position: "absolute",
              top: "-35rem",
              left: "auto",
              right: "auto",
              marginLeft: "0",
              marginRight: "0",
              zIndex: "0 !important"
            }}
          />
        </div>
        <div className="arc_container">
          <div className="top_arc" style={{ top: "10rem" }}></div>
        </div>
        <div className="second_banner">
          <div className="background_ball">
            <div
              className="_low_price"
              style={{ marginTop: "9rem", fontSize: "1.8rem", color: "white" }}
            >
              _{" "}
            </div>
            <div
              className="_insurance"
              style={{
                marginTop: "-11rem",
                fontSize: "2.5rem",
                color: "white",
                fontWeight: "bold"
              }}
            >
              CONTACT US{" "}
            </div>
          </div>
        </div>
        {/* <Wrapper apiKey={"YOUR_API_KEY"} render={render}></Wrapper> */}
      </div>
    </div>
  );
};

export default Contact;
