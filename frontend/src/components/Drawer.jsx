import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Input,
  DrawerFooter
} from "@chakra-ui/react";
import React, { useState } from "react";
import "./Drawer.css";

const Draawer = ({ fieldName, images, onnOpen, issOpen, onnClose }) => {
  //   const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div
      style={{
        position: "relative",
        zIndex: "1000000"
      }}
    >
      {/* <Button position={"relative"} zIndex={"30"} onClick={onOpen}>
        Open
      </Button> */}
      <Drawer isOpen={issOpen} onClose={onnClose} size={"lg"}>
        <DrawerOverlay />
        <DrawerContent
          zIndex={100000000}
          style={{
            height: "calc(100vh - 110px )",
            top: "calc(100vh - calc(100vh - 110px))"
            // position: "relative",
            // width: "100%"
          }}
        >
          <DrawerCloseButton />
          <DrawerHeader>{`${fieldName}`}</DrawerHeader>
          <DrawerBody
            style={{
              overflowY: "scroll",
              position: "relative",
              zIndex: "20000000 !important",
              display: "flex",
              flexDirection: "column",
              paddingRight: "20px",
              paddingLeft: "20px"
            }}
          >
            {fieldName == "Austria" ? (
              <Australia image={images} />
            ) : fieldName == "Belgium" ? (
              <Belgium image={images} />
            ) : fieldName == "Denmark" ? (
              <Denmark image={images} />
            ) : fieldName == "France" ? (
              <France image={images} />
            ) : fieldName == "Greece" ? (
              <Greece image={images} />
            ) : fieldName == "Spain" ? (
              <Spain image={images} />
            ) : fieldName == "Netherlands" ? (
              <Netherlands image={images} />
            ) : fieldName == "Ireland" ? (
              <Ireland image={images} />
            ) : fieldName == "Germany" ? (
              <Germany image={images} />
            ) : fieldName == "Norway" ? (
              <Norway image={images} />
            ) : fieldName == "United States" ? (
              <United image={images} />
            ) : fieldName == "Switzerland" ? (
              <Switzerland image={images} />
            ) : fieldName == "Sweden" ? (
              <Sweden image={images} />
            ) : fieldName == "Great Britain" ? (
              <Great image={images} />
            ) : fieldName == "Italy" ? (
              <Italy image={images} />
            ) : (
              <Sweden image={images} />
            )}
          </DrawerBody>
          <DrawerFooter style={{ display: "flex", justifyContent: "center" }}>
            <Button
              onClick={onnClose}
              style={{ width: "90%", justifySelf: "center" }}
            >
              close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Draawer;

const Australia = ({ image, texts }) => {
  return (
    <div>
      <div className="section_first">
        Registration document - part I <br /> ZULLASUNGSBESCHEINIGUNG (TEIL I){" "}
        <br />
        <div className="smalll">
          Template of the new Austrian registration document - part I, in the
          form of a microprocessor card.
        </div>
        <img src={image[0]} alt="" />
        <img src={image[1]} alt="" />
      </div>
      <div className="section_second">
        Registration document - part I (paper) <br />
        ZULLASUNGSBESCHEINIGUNG (TEIL I) <br />
        <div className="smalll">
          Model of the new Austrian registration certificate - part I in the
          form of a paper document
        </div>
        <img src={image[2]} alt="" />
        <img src={image[3]} alt="" />
      </div>
      <div className="section_third">
        Registration certificate part II <br />
        ZULLASUNGSBESCHEINIGUNG (TEIL II) <br />
        <div className="smalll">
          Template of the new Austrian registration certificate - part II
        </div>
        <img src={image[4]} alt="" />
        <img src={image[5]} alt="" />
      </div>
    </div>
  );
};

const Belgium = ({ image, texts }) => {
  return (
    <div>
      <div className="section_first">
        <img src={image[0]} alt="" />
        <img src={image[1]} alt="" />
      </div>
      <div className="section_second">
        <img src={image[2]} alt="" />
        <img src={image[3]} alt="" />
      </div>
      <div className="section_third">
        <img src={image[4]} alt="" />
        <img src={image[5]} alt="" />
      </div>
      <div className="section_fourth">
        <img src={image[6]} alt="" />
        <img src={image[7]} alt="" />
      </div>
    </div>
  );
};

const Denmark = ({ image, texts }) => {
  return (
    <div>
      {" "}
      <div className="section_first">
        <img src={image[0]} alt="" />
        <img src={image[1]} alt="" />
      </div>
      <div className="section_second">
        <img src={image[2]} alt="" />
        <img src={image[3]} alt="" />
      </div>
      <div className="section_third">
        <img src={image[4]} alt="" />
        <img src={image[5]} alt="" />
      </div>
      <div className="section_fourth">
        <img src={image[6]} alt="" />
        <img src={image[7]} alt="" />
      </div>
    </div>
  );
};

const France = ({ image, texts }) => {
  return (
    <div>
      <div className="section_first">
        <img src={image[0]} alt="" />
        <img src={image[1]} alt="" />
      </div>
      <div className="section_second">
        <img src={image[2]} alt="" />
        <img src={image[3]} alt="" />
      </div>
      <div className="section_third">
        <img src={image[4]} alt="" />
      </div>
    </div>
  );
};

const Greece = ({ image, texts }) => {
  return (
    <div>
      <div className="section_first">
        <img src={image[0]} alt="" />
        <img src={image[1]} alt="" />
      </div>
      <div className="section_second">
        <img src={image[2]} alt="" />
        <img src={image[3]} alt="" />
      </div>
      <div className="section_third">
        <img src={image[4]} alt="" />
        <img src={image[5]} alt="" />
      </div>
      <div className="section_fourth">
        <img src={image[6]} alt="" />
        <img src={image[7]} alt="" />
      </div>
    </div>
  );
};

const Spain = ({ image, texts }) => {
  return (
    <div>
      <div className="section_first">
        <img src={image[0]} alt="" />
        <img src={image[1]} alt="" />
      </div>
      <div className="section_second">
        <img src={image[2]} alt="" />
        <img src={image[3]} alt="" />
      </div>
      <div className="section_third">
        <img src={image[4]} alt="" />
      </div>
      <div className="section_fourth">
        <img src={image[5]} alt="" />
      </div>
    </div>
  );
};

const Netherlands = ({ image, texts }) => {
  return (
    <div>
      <div className="section_first">
        <img src={image[0]} alt="" />
        <img src={image[1]} alt="" />
      </div>
      <div className="section_second">
        <img src={image[2]} alt="" />
      </div>
      <div className="section_third">
        <img src={image[3]} alt="" />
        <img src={image[4]} alt="" />
      </div>
    </div>
  );
};

const Ireland = ({ image, texts }) => {
  return (
    <div>
      <div className="section_first">
        <img src={image[0]} alt="" />
        <img src={image[1]} alt="" />
      </div>
    </div>
  );
};

const Germany = ({ image, texts }) => {
  return (
    <div>
      <div className="section_first">
        <img src={image[0]} alt="" />
        <img src={image[1]} alt="" />
      </div>
      <div className="section_second">
        <img src={image[2]} alt="" />
      </div>
    </div>
  );
};

const Norway = ({ image, texts }) => {
  return (
    <div>
      <div className="section_first">
        <img src={image[0]} alt="" />
        <img src={image[1]} alt="" />
      </div>
      <div className="section_second">
        <img src={image[2]} alt="" />
        <img src={image[3]} alt="" />
      </div>
    </div>
  );
};

const United = ({ image, texts }) => {
  return (
    <div>
      <div className="section_first">
        <img src={image[0]} alt="" />
      </div>
    </div>
  );
};

const Switzerland = ({ image, texts }) => {
  return (
    <div>
      <div className="section_first">
        <img src={image[0]} alt="" />
      </div>
      <div className="section_second">
        <img src={image[1]} alt="" />
      </div>
    </div>
  );
};

const Sweden = ({ image, texts }) => {
  return <div></div>;
};

const Great = ({ image, texts }) => {
  return (
    <div>
      <div className="section_first">
        Proof of registration <br /> REGISTRATION CERTIFICATE
        <img src={image[0]} alt="" />
      </div>
    </div>
  );
};

const Italy = ({ image, texts }) => {
  return (
    <div>
      <div className="section_first">
        <img src={image[0]} alt="" />
        <img src={image[1]} alt="" />
      </div>
      <div className="section_second">
        <img src={image[2]} alt="" />
      </div>
      <div className="section_third">
        <img src={image[3]} alt="" />
      </div>
    </div>
  );
};
