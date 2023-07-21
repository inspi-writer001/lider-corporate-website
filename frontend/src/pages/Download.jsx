import "./Pages.css";
import BlurryBlob from "../components/BlurryBlob";
import { useTranslation } from "react-i18next";
import { Text, useColorMode, Accordion } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Accordion,
  Button,
  ModalBody,
  useDisclosure,
  ModalCloseButton
} from "@chakra-ui/react";
import DocumentViewer from "../components/DocumentViewer";
import { useState, useEffect } from "react";

const Download = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [document, setDocument] = useState({ name: "", documentLink: "" });
  let whiteText = colorMode == "light" ? "black" : "white";
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const slopeObjects = [
    {
      name: `${t("downloads.link1")}`,
      documentLink:
        "https://firebasestorage.googleapis.com/v0/b/gram-nation-agency.appspot.com/o/umowa%20polsko%20-%20angielska.pdf?alt=media&token=f66574ba-99cc-4ee9-a9e7-9eb6bca81d2b"
    },
    {
      name: `${t("downloads.link2")}`,
      documentLink:
        "https://firebasestorage.googleapis.com/v0/b/gram-nation-agency.appspot.com/o/umowapolsko-niemiecka.pdf?alt=media&token=08a0ffc8-dd7c-406f-90f9-05f0b4ccbab3"
    },
    {
      name: `${t("downloads.link3")}`,

      documentLink:
        "https://firebasestorage.googleapis.com/v0/b/gram-nation-agency.appspot.com/o/umowa_kupna_sprzedazy_samochodu_polsko_wloska.pdf?alt=media&token=28768335-31e8-4dd4-a07d-1c65605c826a"
    },
    {
      name: `${t("downloads.link4")}`,
      documentLink:
        "https://firebasestorage.googleapis.com/v0/b/gram-nation-agency.appspot.com/o/umowa-kupna-sprzedazy-samochodu-polsko-holenderska.pdf?alt=media&token=95a57421-2b39-4b30-bc6a-c4bfad44b62b"
    },
    {
      name: `${t("downloads.link5")}`,

      documentLink:
        "https://firebasestorage.googleapis.com/v0/b/gram-nation-agency.appspot.com/o/UMOWA%20DAROWIZNY.doc?alt=media&token=fbb088b3-1dc6-4b04-b5b4-97f1ed4dc36e"
    },
    {
      name: `${t("downloads.link6")}`,

      documentLink:
        "https://firebasestorage.googleapis.com/v0/b/gram-nation-agency.appspot.com/o/PCC-3.pdf?alt=media&token=a461bfde-d6a3-4541-a5e8-ce1dfc395c01"
    },
    {
      name: `${t("downloads.link7")}`,

      documentLink:
        "https://firebasestorage.googleapis.com/v0/b/gram-nation-agency.appspot.com/o/oswald_text.pdf?alt=media&token=a8c8d61e-b0ab-4aa0-87dd-e5be936d5207"
    },
    {
      name: `${t("downloads.link8")}`,
      documentLink:
        "https://firebasestorage.googleapis.com/v0/b/gram-nation-agency.appspot.com/o/Umowa.pdf?alt=media&token=03deeb5f-e57b-422c-a965-94af40959c05"
    },
    {
      name: `${t("downloads.link9")}`,
      documentLink:
        "https://firebasestorage.googleapis.com/v0/b/gram-nation-agency.appspot.com/o/Deklaracja%20AKC-US.pdf?alt=media&token=944dfde4-c5dc-496f-aa5e-361e44b7a7ca"
    },
    {
      name: `${t("downloads.link10")}`,
      documentLink:
        "https://firebasestorage.googleapis.com/v0/b/gram-nation-agency.appspot.com/o/zg%C5%82oszenie%20zbycia%20pow.%20Nowotarski.pdf?alt=media&token=42e45936-4bff-4e5d-971c-5aa929970c2a"
    },
    {
      name: `${t("downloads.link11")}`,
      documentLink:
        "https://firebasestorage.googleapis.com/v0/b/gram-nation-agency.appspot.com/o/zg%C5%82oszenie%20zbycia%20pow.%20Tatrzan%CC%81ski.pdf?alt=media&token=113b1a28-daef-42f0-905e-137376f80151"
    },
    {
      name: `${t("downloads.link12")}`,
      documentLink:
        "https://firebasestorage.googleapis.com/v0/b/gram-nation-agency.appspot.com/o/Zgody%20RODO.pdf?alt=media&token=c3ea12d3-4a2f-4f12-b18a-23d4ab81c91f"
    },
    {
      name: `${t("downloads.link13")}`,
      documentLink:
        "https://firebasestorage.googleapis.com/v0/b/gram-nation-agency.appspot.com/o/oswald.pdf?alt=media&token=683be922-cd20-4aa6-b7d6-1f8cc44bbe86"
    }
  ];

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
              style={{
                marginTop: "9rem",
                fontSize: "1.8rem",
                color: whiteText
              }}
            >
              {t("documents.design")}
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
          <div
            className="poopup_environment"
            style={{
              display: "flex",
              position: "absolute",
              zIndex: "3",
              width: "100vw",
              height: "100svh",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {/* <Button onClick={onOpen}>Open Modal</Button> */}
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent
                style={{
                  display: "flex",
                  position: "relative",
                  left: "0",
                  right: "0",
                  top: "4%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  justifyContent: "center",
                  alignSelf: "center"
                }}
              >
                <ModalHeader>{document?.name}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <div
                    className="documents_container"
                    style={{
                      // display: "none",
                      height: "50vh",
                      width: "100%",
                      position: "relative"
                    }}
                  >
                    <DocumentViewer selectedDoc={document.documentLink} />
                  </div>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </div>
        </div>
        <div className="another_div">
          <div className="top_div" style={{ color: whiteText }}>
            <div className="left_" style={{ fontSize: "1.5rem" }}>
              {t("downloads.text1")}
              {/* {t("documents.why_us")} */}
            </div>
            <div
              className="right_"
              style={{
                background: "none",
                boxShadow: "none",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                fontWeight: "bolder",
                fontSize: "1.4rem"
              }}
            >
              {t("downloads.text2")}
              <div style={{ fontSize: "0.9rem", fontWeight: "lighter" }}>
                {t("downloads.text3")}
              </div>
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
              {slopeObjects.map((item, index) => (
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
                      documentLink: item?.documentLink
                    });
                    onOpen();
                  }}
                >
                  {item?.name}
                </div>
              ))}
            </div>
          </div>
          {/* <div className="second_banner">
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
          </div> */}
          {/* <div className="bottom_div" style={{ color: whiteText }}>
            <div color={whiteText} className="left_">
              {t("documents.text2")}
            </div>

            <div className="right_">{t("documents.text3")}</div>
          </div> */}
        </div>
        {/* <div className="arc_container">
          <div
            className="top_arc"
            style={{ top: "-18rem", transform: "rotate(180deg)" }}
          ></div>
        </div> */}

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
        {/* <div className="second_banner" style={{ color: whiteText }}>
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
        </div> */}
        {/* <div className="first_banner">
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
        </div> */}
      </div>
    </div>
  );
};

export default Download;
