import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import BlurryBlob from "../components/BlurryBlob";
import "./Pages.css";
import { Flex, Text, useColorMode } from "@chakra-ui/react";
// import Spline from "@splinetool/react-spline";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  useInView,
  useScroll,
  motion,
  animate,
  useTransform
} from "framer-motion";
import { motion as motion3 } from "framer-motion-3d";
import carJ from "../assets/carr_front.png";
import carF from "../assets/car_back.png";
import carT from "../assets/third_car.png";
import house from "../assets/house3d.png";
import obj from "/models/bughatti.fbx";
import "animate.css";

// import { motion } from "framer-motion";
import { Box } from "@react-three/drei";
import { Canvas, useThree, useFrame } from "@react-three/fiber";

import {
  Environment,
  OrbitControls,
  useFBX,
  ScrollControls
} from "@react-three/drei";
import gsap from "gsap";
import { Suspense } from "react";
export const FLOOR_HEIGHT = 2.3;
export const NB_FLOORS = 1;

const deg2rad = (degrees) => degrees * (Math.PI / 180);
const Scene = () => {
  const fbx = useFBX(obj);
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
          <primitive object={fbx} scale={0.004} />;
        </mesh>
      </motion3.group>
    </>
  );
};

const Home = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const carRef = useRef(null);
  const isInView = useInView(carRef);

  const { t } = useTranslation();
  const { colorMode, toggleColorMode } = useColorMode();
  let whiteText = colorMode == "light" ? "black" : "white";
  const green = "#00bd5d";

  const hoverboardKeyframes = {
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
    <div style={{ overflow: "hidden" }}>
      <Canvas
        style={{
          position: "absolute",
          height: "100vh",
          width: "100vw"
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
            <Text color={whiteText}>{t("header1")}</Text>
          </div>
          <div className="leader">{t("header2")}</div>
        </div>
      </section>
      <section
        style={{ ...section1, section2, height: "fit-content !important" }}
      >
        <Text
          color={whiteText}
          className="section_two_top"
          style={{ textAlign: "center" }}
        >
          {t("why_us.title")}
        </Text>
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
            className="section_2div_left shift_sync"
            style={{ width: "45%", height: "100%" }}
          >
            <motion.img
              ref={carRef}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              className={
                "grayscale_shadow animate__zoomInRight" +
                (isInView && " animate__animated")
              }
              style={{}}
              // src={isHovering ? carJ : carT}
              src={carT}
              alt="image flip"
              transition="spring"
            />
            <motion.img
              className="grayscale_shadow off"
              style={{}}
              src={carT}
              alt=""
            />
            <motion.img
              className="grayscale_shadow off"
              style={{}}
              src={carJ}
              alt=""
            />

            {/* <img style={{}} src={carF} alt="" />{" "}
            <img style={{}} src={carF} alt="" /> */}
            {/* <Spline scene="https://prod.spline.design/NXOsMcvBlTD40ItM/scene.splinecode" /> */}
            {/* <iframe
              src="https://my.spline.design/clockdigitalinteractioncopy-0b31bdfac1d22474554806dae4671dce/"
              frameborder="0"
              width="100%"
              height="100%"
            ></iframe> */}
          </div>
          <div className="section_2div_right" style={{ width: "45%" }}>
            <Text color={whiteText} className="text_in ma">
              {t("why_us.text1")}
            </Text>
            <div className="gap" style={{ height: "30%" }} />
            <div className="header_div">
              <div className="superfast chrome_text">
                {t("why_us.super_fast")}
              </div>
              <Text color={whiteText} className="realization">
                {t("why_us.realization")}
              </Text>
              <div className="you_save">{t("why_us.you_save")}</div>
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
                <Text color={whiteText} className="text ma">
                  {t("why_us.text2")}
                </Text>
                <div className="immg chrome_text">"</div>
              </div>
            </div>
            <div className="gap" />
            <div className="header_div">
              <div className="superfast chrome_text">
                {t("why_us.attractive")}
              </div>
              <Text color={whiteText} className="realization">
                {t("why_us.offers")}
              </Text>
              <div className="you_save">{t("why_us.explore")}</div>
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
                <Text color={whiteText} className="text">
                  {t("why_us.text3")}
                </Text>
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
          <Text color={whiteText} className="formalities_banner">
            <div className="threed_scene">
              <motion.img
                initial="initial"
                animate="hover"
                variants={hoverboardKeyframes}
                src={house}
                className="dhouse grayscale_shadow"
              />
            </div>
            <div className="comprehensive">{t("why_us.comprehensive")}</div>
            <div className="formalities">{t("why_us.formalities")}</div>
            <div className="we_do">{t("why_us.formalities2")}</div>
          </Text>
          <div className="formalities_banner_div">
            <Link to="/registration">
              <div className="inner_formalities1 to_hover">
                <div className="dix">{t("why_us.registration2")}</div>
              </div>
            </Link>
            <Flex
              borderBottom={
                colorMode == "light"
                  ? "5px solid rgba(6, 5, 5, 0.3)"
                  : "5px solid rgba(255, 255, 255, 0.3)"
              }
              className="rounded_formalities"
            ></Flex>
            <Link to="/insurance">
              <div className="inner_formalities2 to_hover ">
                <div className="dix">{t("why_us.cheap")}</div>
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
  // minHeight: "120vh"
};
