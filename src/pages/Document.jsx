import React from "react";
import "./Pages.css";
import BlurryBlob from "../components/BlurryBlob";

const Document = () => {
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
              FOREIGN DESIGN{" "}
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
              DOCUMENTS{" "}
            </div>
          </div>
        </div>
        <div className="another_div">
          <div className="top_div">
            <div className="left_" style={{ fontSize: "2.5rem" }}>
              Why Us?
            </div>
            <div className="right_">
              The „ LIDER ” office offers mediation in the Document of vehicles
              both imported from abroad and purchased in Poland together with
              the necessary fees in all offices.
            </div>
          </div>
          <div className="second_banner">
            <div className="background_ball" style={{ top: "0" }}>
              <div
                className="_low_price"
                style={{
                  marginTop: "9rem",
                  fontSize: "1.8rem",
                  color: "white"
                }}
              >
                INSTANT
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
                REGITERATION
              </div>
            </div>
          </div>
          <div className="bottom_div">
            <div className="left_">
              We register all types of vehicles, including passenger cars,
              trucks, specialized cars, agricultural tractors, mopeds,
              motorcycles, trailers, etc.
            </div>

            <div className="right_">
              Comprehensive fees ( Customs Office, Tax Office, Department of
              Communication, document translations, recycling ) and complete
              re-Document of vehicles imported from abroad.
            </div>
          </div>
        </div>
        <div className="arc_container">
          <div
            className="top_arc"
            style={{ top: "-18rem", transform: "rotate(180deg)" }}
          ></div>
        </div>
        {/* <div className="best_offer second_banner" style={{ top: "12rem" }}>
          <div className="background_ball">
            <div
              className="_low_price"
              style={{ marginTop: "9rem", fontSize: "1.8rem", color: "white" }}
            >
              Best
            </div>
            <div
              className="_insurance"
              style={{
                marginTop: "-11rem",
                fontSize: "2.5rem",
                color: "white",
                fontWeight: "bold",
                textTransform: "uppercase"
              }}
            >
              Offers
            </div>
          </div>
        </div> */}
        <div className="second_banner">
          <div className="background_ball">
            <div
              className="_low_price"
              style={{ marginTop: "9rem", fontSize: "1.8rem", color: "white" }}
            >
              COMPREHENSIVE{" "}
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
              FORMALISM{" "}
            </div>
          </div>
          <div
            className="trust_us"
            style={{ position: "relative", top: "-3rem" }}
          >
            We provide full professionalism completing formalities
          </div>
        </div>
        <div className="first_banner">
          <BlurryBlob
            height={90}
            style={{
              position: "absolute",
              top: "50rem",
              left: "auto",
              right: "auto",
              marginLeft: "0",
              marginRight: "0",
              zIndex: "0 !important"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Document;
