import "./Pages.css";
import BlurryBlob from "../components/BlurryBlob";
import { useTranslation } from "react-i18next";
import office from "../assets/office_empty.jpg";
import { motion } from "framer-motion";
import { Text, useColorMode } from "@chakra-ui/react";

const Registration = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  let whiteText = colorMode == "light" ? "black" : "white";
  const { t } = useTranslation();
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
          <div className="top_arc aarc" style={{ top: "10rem" }}></div>
        </div>

        <div className="second_banner">
          <div className="threed_scene">
            <motion.img
              initial="initial"
              // animate="hover"
              // variants={flagKeyframes}
              src={office}
              alt=""
              className="office_image"
            />
          </div>
          <div className="background_ball">
            <div
              className="_low_price"
              style={{ marginTop: "9rem", fontSize: "1.8rem", color: "white" }}
            >
              {t("registration.register")}{" "}
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
              {t("registration.vehicle")}
            </div>
          </div>
        </div>
        <div className="another_div">
          <div className="top_div">
            <Text
              // color={whiteText}
              className="left_"
              style={{ fontSize: "2.5rem" }}
            >
              {t("registration.why_us")}
            </Text>
            <div className="right_">{t("registration.text1")}</div>
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
                {t("registration.instant")}
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
                {t("registration.registration")}
              </Text>
            </div>
          </div>
          <div className="bottom_div">
            <Text color={whiteText} className="left_">
              {t("registration.text2")}
            </Text>

            <Text color={whiteText} className="right_">
              {t("registration.text3")}
            </Text>
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
            <Text
              color={whiteText}
              className="_low_price"
              style={{
                marginTop: "9rem",
                fontSize: "1.8rem"
                //  color: "white"
              }}
            >
              {t("registration.comprehensive")}{" "}
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
              {t("registration.formalism")}{" "}
            </Text>
          </div>
          <Text
            color={whiteText}
            className="trust_us"
            style={{ position: "relative", top: "-3rem" }}
          >
            {t("registration.we_provide")}
          </Text>
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

export default Registration;
