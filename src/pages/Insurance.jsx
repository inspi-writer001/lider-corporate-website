import "./Pages.css";
import BlurryBlob from "../components/BlurryBlob";
import PartnersList from "../components/PartnersList";
import { useTranslation } from "react-i18next";

import { Text, useColorMode } from "@chakra-ui/react";

const Insurance = () => {
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
          <div className="top_arc" style={{ top: "10rem" }}></div>
        </div>
        <div className="second_banner">
          <div className="background_ball">
            <Text color={whiteText} className="_low_price">
              {t("insurance.price")}
            </Text>
            <Text color={whiteText} className="_insurance">
              {t("insurance.insurance")}
            </Text>
          </div>
        </div>
        <div className="another_div">
          <div className="top_div">
            <Text
              color={whiteText}
              className="left_ why_us"
              style={{ fontSize: "2.5rem" }}
            >
              {t("insurance.why_us")}
            </Text>
            <Text color={whiteText} className="right_">
              {t("insurance.text1")}
            </Text>
          </div>
          <div className="bottom_div">
            <Text color={whiteText} className="left_ a">
              {t("insurance.text2")}
            </Text>
            <Text color={whiteText} className="right_ a">
              {t("insurance.text3")}
            </Text>
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
            <Text color={whiteText} className="_low_price">
              {t("insurance.best")}
            </Text>
            <Text
              color={whiteText}
              className="_insurance"
              style={{
                marginTop: "-11rem",
                fontSize: "2.5rem",
                // color: "white",
                fontWeight: "bold",
                textTransform: "uppercase"
              }}
            >
              {t("insurance.offers")}
            </Text>
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
            <Text color={whiteText} className="those">
              {t("insurance.trust")}
            </Text>
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
