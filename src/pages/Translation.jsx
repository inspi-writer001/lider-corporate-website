import React from "react";
import "./Pages.css";
import BlurryBlob from "../components/BlurryBlob";
import { Link } from "react-router-dom";
import flag1 from "../assets/flag1.png";
import flago from "../assets/flago.png";
import { useTranslation } from "react-i18next";
import "animate.css";
import { motion } from "framer-motion";
import { Text, useColorMode } from "@chakra-ui/react";

const Translation = () => {
  const { t } = useTranslation();
  const { colorMode, toggleColorMode } = useColorMode();
  let whiteText = colorMode == "light" ? "black" : "white";
  const flagKeyframes = {
    // initial: {
    //   rotateZ: 0
    // },
    // wave: {
    //   rotateZ: [0, -10, 10, -5, 5, -2, 2, 0],
    //   transition: {
    //     duration: 1.5,
    //     ease: "easeInOut",
    //     repeat: Infinity
    //   }
    // },
    // breeze: {
    //   skewX: [0, 5, -5, 2, -2, 0],
    //   transition: {
    //     duration: 1.5,
    //     ease: "easeInOut",
    //     repeat: Infinity,
    //     repeatDelay: 0.5
    //   }
    // }

    initial: {
      rotateZ: 0,
      y: 0,
      x: 0
    },
    hover: {
      rotateZ: [0, -1.4, 1.4, -1, 1, 0],
      y: [0, -4, 4, -3, 3, 0],
      x: [0, -5, 5, -7, 7, 0],
      transition: {
        duration: 3,
        ease: "easeInOut",
        times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 1],
        repeat: Infinity
      }
    }
  };
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
            <motion.img
              initial="initial"
              // animate="hover"
              variants={flagKeyframes}
              src={flag1}
              alt=""
              className="flag_right"
            />
          </div>
          <div className="background_ball">
            <Text
              className="_low_price"
              color={whiteText}
              style={{ marginTop: "9rem", fontSize: "1.8rem" }}
            >
              {t("translations.translation")}
            </Text>
            <Text
              color={whiteText}
              className="_insurance"
              style={{
                marginTop: "-11rem",
                fontSize: "2.5rem",
                // color: "white",
                fontWeight: "bold"
              }}
            >
              {t("translations.documents")}{" "}
            </Text>
          </div>
        </div>
        <div className="another_div">
          <div className="top_div">
            <Text color={whiteText} className="left_">
              {t("translations.text1")}{" "}
            </Text>
            <Text color={whiteText} className="right_">
              {t("translations.text2")}
            </Text>
          </div>
          <div className="second_banner">
            <div className="background_ball" style={{ top: "0" }}>
              <Text
                color={whiteText}
                className="_low_price"
                style={{
                  marginTop: "9rem",
                  fontSize: "1.8rem"
                  // color: "white"
                }}
              >
                {t("translations.low")}{" "}
              </Text>
              <Text
                color={whiteText}
                className="_insurance"
                style={{
                  marginTop: "-11rem",
                  fontSize: "2.5rem",
                  // color: "white",
                  fontWeight: "bold"
                }}
              >
                {t("translations.prices")}{" "}
              </Text>
            </div>
            <Text color={whiteText} className="instant">
              {t("translations.best_price")}
            </Text>
          </div>
          <div className="bottom_div">
            <Link>
              <Text
                color={whiteText}
                className="left_"
                style={{ borderRadius: "50%" }}
              >
                {t("translations.text3")}
              </Text>
            </Link>

            <Link>
              <Text
                color={whiteText}
                className="right_"
                style={{ borderRadius: "50%" }}
              >
                {t("translations.text4")}
              </Text>
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
