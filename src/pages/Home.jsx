import React from "react";
import BlurryBlob from "../components/BlurryBlob";
import "./Pages.css";
import { Text, useColorMode } from "@chakra-ui/react";
// import Spline from "@splinetool/react-spline";
import { Link } from "react-router-dom";

const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  let whiteText = colorMode == "light" ? "black" : "white";
  const green = "#00bd5d";
  return (
    <div style={{ overflow: "hidden" }}>
      {/* Spline web view of 3d vehicle */}
      <BlurryBlob
        height={90}
        style={{ position: "absolute", left: "-30rem", zIndex: "0" }}
      />
      <BlurryBlob
        height={120}
        style={{
          position: "absolute",
          left: "auto",
          right: "auto",
          marginLeft: "0",
          marginRight: "0",
          zIndex: "0"
        }}
      />

      {/* <BlurryBlob
        height={90}
        style={{
          position: "absolute",
          right: "-50vw",
          bottom: "-120vh",
          zIndex: "0"
        }}
      /> */}
      <section className="image-section" style={section1} z="0">
        <div
          className="spline_container"
          style={{
            display: "flex",
            position: "absolute",
            height: "400px",
            width: "400px",
            // backgroundColor: "red",
            zIndex: "1",
            right: "5vw",
            bottom: "17vw"
          }}
        >
          {/* <Spline scene="https://prod.spline.design/sGYnbbFVK7gP52N1/scene.splinecode" /> */}
          {/* <iframe
            src="https://my.spline.design/3dpathsgeometricalcopy-3e6657d9284f2f48c79b3f8356224cec/"
            frameborder="0"
            width="100%"
            height="100%"
          ></iframe> */}
        </div>

        <div className="text_container">
          <div className="multi-agency">
            <Text color={whiteText}>Multi-Agency</Text>
          </div>
          <div className="leader">Leader</div>
        </div>
      </section>
      <section
        style={{ ...section1, section2, height: "fit-content !important" }}
      >
        <div className="section_two_top" style={{ textAlign: "center" }}>
          Why Us
        </div>
        <br />
        <div
          className="section_two_bottom"
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-around"
          }}
        >
          <div
            className="section_2div_left"
            style={{ width: "45%", height: "30rem" }}
          >
            {/* <Spline scene="https://prod.spline.design/NXOsMcvBlTD40ItM/scene.splinecode" /> */}
            {/* <iframe
              src="https://my.spline.design/clockdigitalinteractioncopy-0b31bdfac1d22474554806dae4671dce/"
              frameborder="0"
              width="100%"
              height="100%"
            ></iframe> */}
          </div>
          <div className="section_2div_right" style={{ width: "45%" }}>
            <div className="text_in ma">
              Lider has been on the market since 2006 and is the first such
              office in this region. In our business, we offer a wide selection
              of motor, property, life and agricultural insurance.
            </div>
            <div className="gap" style={{ height: "30%" }} />
            <div className="header_div">
              <div className="superfast chrome_text">superfast</div>
              <div className="realization">Realization</div>
              <div className="you_save">
                You save time with us, health and money
              </div>
            </div>

            <div className="lower_body" style={{ width: "100%" }}>
              <div
                className="container_lower_body"
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-around"
                }}
              >
                <div className="text ma">
                  The „ LIDER ” office offers mediation in the registration of
                  vehicles both imported from abroad and purchased in Poland
                  together with the necessary fees in all offices.
                </div>
                <div className="immg chrome_text">"</div>
              </div>
            </div>
            <div className="gap" />
            <div className="header_div">
              <div className="superfast chrome_text">Attractive</div>
              <div className="realization">Offers</div>
              <div className="you_save">
                Explore a wide range of office formalities
              </div>
            </div>

            <div className="lower_body" style={{ width: "100%" }}>
              <div
                className="container_lower_body"
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-around"
                }}
              >
                <div className="text">
                  Excellent knowledge of foreign languages, careful tracking of
                  all linguistic changes is our passion. We guarantee accurate
                  and reliable translation, regardless of language and subject!
                </div>
                <div className="immg chrome_text">""</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        style={{
          ...section1,
          ...section2,
          display: "flex",
          marginTop: "100px",
          flexDirection: "column",
          position: "relative"
        }}
      >
        <BlurryBlob
          height={80}
          style={{
            position: "absolute",
            left: "0",
            right: "0",
            top: "-10rem",
            marginLeft: "auto",
            marginRight: "auto",
            width: "80rem",
            // transform: "translate(50%, 50%)",
            zIndex: "0"
          }}
        />
        <div className="formalities_container">
          <div className="formalities_banner">
            <div className="threed_scene"></div>
            <div className="comprehensive">comprehensive</div>
            <div className="formalities">Formalities</div>
            <div className="we_do">
              We'll do all of them for your formalities and more
            </div>
          </div>
          <div className="formalities_banner_div">
            <Link to="/registration">
              <div className="inner_formalities1 to_hover">
                <div className="dix">
                  Check our registration price vehicle in its area
                </div>
              </div>
            </Link>
            <div className="rounded_formalities"></div>
            <Link to="/insurance">
              <div className="inner_formalities2 to_hover ">
                <div className="dix">Cheap insurance OC and AC</div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

const section1 = {
  minHeight: "100vh",
  color: "white",
  fontFamily: "Montaga",
  fontSize: "60px",
  position: "relative",
  overflow: "hidden",
  zIndex: "2"
};

const section2 = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  padding: "20px"
};
