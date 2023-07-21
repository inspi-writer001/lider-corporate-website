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
              {t("documents.documents")}
            </div>
          </div>
        </div>
        <div className="another_div">
          <div className="top_div" style={{ color: whiteText }}>
            <div
              className="left_"
              style={{ fontSize: "1.7rem", flexDirection: "column" }}
            >
              <div>{t("documents.text1")}</div>

              <div className="little" style={{ fontSize: "1.2rem" }}>
                {t("documents.text2")}
              </div>
              {/* {t("documents.why_us")} */}
            </div>
            <div
              className="right_"
              style={{ background: "none", boxShadow: "none" }}
            >
              {t("documents.text3")}

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
