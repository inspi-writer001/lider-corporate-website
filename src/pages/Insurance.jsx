import React, { useRef, useState, useEffect, useLayoutEffect } from "react";

import BlurryBlob from "../components/BlurryBlob";
import PartnersList from "../components/PartnersList";
import { useTranslation } from "react-i18next";
import { Text, useColorMode } from "@chakra-ui/react";
import {
  useInView,
  useScroll,
  motion,
  animate,
  useTransform
} from "framer-motion";
import { motion as motion3 } from "framer-motion-3d";
import { Canvas, useThree, useFrame, useLoader } from "@react-three/fiber";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { USDZLoader } from "three/examples/jsm/loaders/USDZLoader";
import {
  Environment,
  OrbitControls,
  useFBX,
  ScrollControls
} from "@react-three/drei";
import { Suspense } from "react";

import obj from "/models/flago.fbx";
import "./Pages.css";

const Scene = () => {
  const objs = useFBX(obj);
  // const objs = useLoader(DRACOLoader, "/models/bug.drc");
  const { camera } = useThree();
  const ref = useRef();
  const controlsRef = useRef();
  const scrollRef = useRef(0);
  const libraryRef = useRef();

  // const left = -window.innerWidth / 2;
  // const right = window.innerWidth / 2;
  // const top = window.innerHeight / 2;
  // const bottom = -window.innerHeight / 2;
  // const near = 0.1;
  // const far = 1000;

  // camera.updateProjectionMatrix();

  const scroll = useScroll();

  const { scrollYProgress, scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // camera.rotation.set(deg2rad(30), 0, 0);
  const rotationSpeed = 0.02;
  const scalingFactor = 0.001;
  const rotation = useTransform(
    scrollY,
    [0, document.body.offsetHeight - window.innerHeight],
    [0, Math.PI * -2]
  );

  return (
    <>
      <motion3.group rotateY={rotation} ref={ref} position={[0.5, -1, -1]}>
        <mesh ref={controlsRef}>
          <primitive object={objs} scale={0.04} />;
        </mesh>
      </motion3.group>
    </>
  );
};

const Insurance = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  let whiteText = colorMode == "light" ? "black" : "white";
  const { t } = useTranslation();
  return (
    <div style={{ overflow: "hidden" }}>
      <Canvas
        style={{
          position: "absolute",
          height: "100vh",
          width: "100vw"
          // backgroundColor: "red",
          // zIndex: "40000"
        }}
      >
        <Suspense fallback={null}>
          <Scene />
          <ambientLight intensity={2} />
          <camera fov={75} near={0.1} far={1000} z={5} lookAt={[0, 20, 0]} />
          <pointLight position={[200, 0, 0]} intensity={1.5} />
          <pointLight position={[0, 0, 200]} intensity={3.5} />

          <pointLight position={[0, 20, 0]} intensity={10.5} />
          {/* <OrbitControls
            enablePan={false}
            enableRotate={true}
            enableZoom={false}
          /> */}
          <OrbitControls
            enablePan={false}
            enableRotate={true}
            enableZoom={false}
            enableDamping={true} // Enable damping for smooth movement
            dampingFactor={0.05} // Adjust the damping factor to control the smoothness
          />
          <ScrollControls damping={0.25} pages={3} />
          {/* <Environment preset="sunset" background /> */}
        </Suspense>
      </Canvas>
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
