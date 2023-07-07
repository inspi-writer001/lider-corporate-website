import "./Pages.css";
import BlurryBlob from "../components/BlurryBlob";
import { useTranslation } from "react-i18next";
import { Text, useColorMode } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button,
  ModalBody,
  useDisclosure,
  ModalCloseButton
} from "@chakra-ui/react";
import DocumentViewer from "../components/DocumentViewer";
import { useState, useEffect } from "react";
import { slopeObjects, documentsList } from "../components/Post";
import Drawer from "../components/Drawer";

const Document = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [document, setDocument] = useState({ name: "", documentLink: [] });
  let whiteText = colorMode == "light" ? "black" : "white";
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <div className="insurance_body">
        <Drawer
          onnOpen={onOpen}
          onnClose={onClose}
          issOpen={isOpen}
          fieldName={document.name}
          images={document.documentLink}
        />
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
              style={{
                marginTop: "9rem",
                fontSize: "1.8rem",
                color: whiteText
              }}
            >
              {t("documents.design")}{" "}
            </div>
            <div
              className="_insurance"
              style={{
                marginTop: "-11rem",
                fontSize: "2.5rem",
                color: whiteText,
                fontWeight: "bold"
              }}
            >
              {t("documents.documents")}{" "}
            </div>
          </div>
        </div>
        <div className="another_div">
          <div className="top_div" style={{ color: whiteText }}>
            <div
              className="left_"
              style={{ fontSize: "1.7rem", flexDirection: "column" }}
            >
              <div>foreign DOCUMENTS</div>

              <div className="little" style={{ fontSize: "1.2rem" }}>
                Don't waste your time searching. We did it for you.
              </div>
              {/* {t("documents.why_us")} */}
            </div>
            <div
              className="right_"
              style={{ background: "none", boxShadow: "none" }}
            >
              Select a country from the list to view document templates
              applicable in that country.
              {/* {t("documents.text1")} */}
            </div>
          </div>
          <div className="documents_list">
            <div
              className="grids-container"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "3%"
              }}
            >
              {documentsList.map((item, index) => (
                <div
                  className="grids-item left_"
                  style={{
                    flexBasis: "47%",
                    flexGrow: "1",
                    fontSize: ".7rem",
                    height: "1.7rem",
                    width: "1.7rem",
                    marginBottom: "3%",
                    cursor: "pointer",
                    borderRadius: "10px 0 0 0"
                  }}
                  key={item}
                  onClick={() => {
                    setDocument({
                      name: item?.name,
                      documentLink: item?.imagesList
                    });
                    onOpen();
                  }}
                >
                  {item?.name}
                </div>
              ))}
            </div>
          </div>
          <div className="second_banner">
            <div className="background_ball" style={{ top: "0" }}>
              <div
                className="_low_price"
                style={{
                  marginTop: "9rem",
                  fontSize: "1.8rem",
                  color: whiteText
                }}
              >
                {t("documents.instant")}
              </div>
              <div
                className="_insurance"
                style={{
                  marginTop: "-11rem",
                  fontSize: "2.5rem",
                  color: whiteText,
                  fontWeight: "bold"
                }}
              >
                {t("documents.registration")}
              </div>
            </div>
          </div>
          <div className="bottom_div" style={{ color: whiteText }}>
            <div color={whiteText} className="left_">
              {t("documents.text2")}
            </div>

            <div className="right_">{t("documents.text3")}</div>
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
        <div className="second_banner" style={{ color: whiteText }}>
          <div className="background_ball" style={{ color: whiteText }}>
            <div
              className="_low_price"
              style={{
                marginTop: "9rem",
                fontSize: "1.8rem",
                color: whiteText
              }}
            >
              {t("documents.comprehensive")}{" "}
            </div>
            <div
              className="_insurance"
              style={{
                marginTop: "-11rem",
                fontSize: "2.5rem",
                fontWeight: "bold"
              }}
            >
              {t("documents.formalism")}{" "}
            </div>
          </div>
          <div
            className="trust_us"
            style={{ position: "relative", top: "-3rem" }}
          >
            {t("documents.we_provide")}
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
