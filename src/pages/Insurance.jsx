import React from "react";
import "./Pages.css";
import BlurryBlob from "../components/BlurryBlob";
import PartnersList from "../components/PartnersList";

const Insurance = () => {
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
            <div className="_low_price">LOW PRICE</div>
            <div className="_insurance">INSURANCE</div>
          </div>
        </div>
        <div className="another_div">
          <div className="top_div">
            <div className="left_" style={{ fontSize: "2.5rem" }}>
              Why Us?
            </div>
            <div className="right_">
              All risks, i.e. insurance against all risks - AC insurance covers
              damage to the vehicle, its destruction or loss due to all events.
            </div>
          </div>
          <div className="bottom_div">
            <div className="left_ a">
              The subject of insurance is the civil liability of any person who,
              while driving a motor vehicle during the duration of the insurance
              contract, caused damage in connection with the movement of that
              vehicle.
            </div>
            <div className="right_ a">
              “ Lider "offers you the best offers on the market of known
              insurance companies. We guarantee the greatest professionalism and
              advice regarding vehicle insurance.
            </div>
          </div>
        </div>
        <div className="arc_container">
          <div
            className="top_arc"
            style={{ top: "-18rem", transform: "rotate(180deg)" }}
          ></div>
        </div>
        <div className="best_offer second_banner" style={{ top: "12rem" }}>
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
        <div className="partners">
          <div className="those_container">
            <div className="those">THOSE WHO TRUST US</div>
            {/* <div className="those">THOSE</div> */}
          </div>
          <div className="partners_">
            <div className="grid">
              {PartnersList.map((item, index) => {
                return (
                  <div className="grid-item" key={index}>
                    <img
                      src={item.img}
                      alt={item.desc}
                      style={{ width: "9rem" }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insurance;
