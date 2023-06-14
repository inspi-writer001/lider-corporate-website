import React from "react";
import "./Pages.css";
import BlurryBlob from "../components/BlurryBlob";
import { Link } from "react-router-dom";
import flag1 from "../assets/flag1.png";
import flago from "../assets/flago.png";

const Translation = () => {
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
          <div className="threed_scene">
            <img src={flag1} alt="" className="flag_right" />
          </div>
          <div className="background_ball">
            <div
              className="_low_price"
              style={{ marginTop: "9rem", fontSize: "1.8rem", color: "white" }}
            >
              TRANSLATIONS{" "}
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
            <div className="left_">
              Years of experience have enabled us to provide you with the
              certainty of a perfect translation. By providing us with texts you
              receive their most faithful translation into any language you
              choose.{" "}
            </div>
            <div className="right_">
              Excellent knowledge of foreign languages, careful tracking of all
              linguistic changes is our passion. We guarantee accurate and
              reliable translation, regardless of language and subject!
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
                LOW{" "}
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
                PRICES{" "}
              </div>
            </div>
            <div className="instant">
              The best prices on the market translations
            </div>
          </div>
          <div className="bottom_div">
            <Link>
              <div className="left_" style={{ borderRadius: "50%" }}>
                We register all types of vehicles, including passenger cars,
                trucks, specialized cars, agricultural tractors, mopeds,
                motorcycles, trailers, etc.
              </div>
            </Link>

            <Link>
              <div className="right_" style={{ borderRadius: "50%" }}>
                Comprehensive fees ( Customs Office, Tax Office, Department of
                Communication, document translations, recycling ) and complete
                re-Translation of vehicles imported from abroad.
              </div>
            </Link>
          </div>
        </div>
        <div className="arc_container">
          <div
            className="top_arc"
            style={{ top: "6rem", top: "-18rem", transform: "rotate(180deg)" }}
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
              {/* COMPREHENSIVE */}
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
              {/* FORMALISM */}
            </div>
          </div>
          <div
            className="trust_us"
            style={{ position: "relative", top: "-3rem" }}
          >
            {/* We provide full professionalism completing formalities */}
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

export default Translation;
