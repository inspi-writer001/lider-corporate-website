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
import lider from "../assets/lider_logo.png";
import "animate.css";

// import { motion } from "framer-motion";
import { Box, Html } from "@react-three/drei";
import { Canvas, useThree, useFrame } from "@react-three/fiber";

import {
  Environment,
  OrbitControls,
  useFBX,
  ScrollControls
} from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import officeVideo from "../assets/office_q.mp4";

import { Suspense } from "react";
import ScrollerFull from "../components/ScrollerFull";
import Scroller from "../components/Scroller";

import smilingCar from "../assets/smiling_in_car.jpg";
import registration from "../assets/insurance_sign.jpg";
import purchase from "../assets/happy_purchase.jpg";
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
  const imageRef = useRef(null);
  const component = useRef();
  const slider = useRef();
  const sliderRef = useRef(null);
  const isInView = useInView(carRef);

  const { t } = useTranslation();
  const TextList = [t("why_us.text1"), t("why_us.text2"), t("why_us.text3")];

  const ImagesList = [smilingCar, registration, purchase];

  // const HeaderList = ["Why us?", t("why_us.super_fast"), t("why_us.attractive")];
  const HeaderList = ["Why us?", "Our Services", "Perks"];
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

  useEffect(() => {
    const imageElement = imageRef.current;
    gsap.fromTo(
      imageElement,
      { rotation: -20 },
      {
        rotation: 0,
        duration: 2,
        scrollTrigger: {
          trigger: imageElement
        }
      }
    );
  }, []);

  return (
    <div ref={sliderRef}>
      {/* <Canvas
        style={{
          position: "absolute",
          height: "100vh",
          width: "100vw"
        }}
      >
        <Suspense fallback={null}>
          <Scene />
          <ambientLight intensity={2} />
          <camera fov={75} near={0.1} far={1000} z={5} lookAt={[0, 20, 0]} />
          <pointLight position={[200, 0, 0]} intensity={1.5} />
          <pointLight position={[0, 0, 200]} intensity={3.5} />

          <pointLight position={[0, 20, 0]} intensity={10.5} />

          <OrbitControls
            enablePan={false}
            enableRotate={true}
            enableZoom={false}
            enableDamping={true}
            dampingFactor={0.05}
          />
          <ScrollControls damping={0.25} pages={3} />
        </Suspense>
      </Canvas> */}
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
      <div className="s_container">
        <div
          className="image-section panel"
          style={{ ...section1, marginTop: "100px" }}
          z="0"
        >
          <div
            className="absolute_logo"
            style={{
              position: "absolute",
              display: "flex",
              left: "0",
              right: "0",
              marginLeft: "auto",
              marginRight: "auto",
              width: "100vw",
              justifyContent: "center",
              top: "10%"
            }}
          >
            <img
              src={lider}
              ref={imageRef}
              alt="lider logo"
              className="lider_logo animate__animated animate__backInDown"
              style={{ width: "200px" }}
            />
          </div>

          <div className="text_container">
            <div className="multi-agency">
              <Text color={whiteText}>{t("header1")}</Text>
            </div>
            <div className="leader">{t("header2")}</div>
            <div className="" style={{ fontSize: "20px", marginTop: 0 }}>
              {t("header3")}
            </div>
          </div>
        </div>
        <div className="video_space panel" style={{ ...section1, section2 }}>
          <div className="image_container">
            <video loop width="100%" autoPlay muted>
              <source src={officeVideo} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="extra"></div>
      </div>
      <section className="scroller panel" style={{ minHeight: "100vh" }}>
        <Scroller
          BodyContent={TextList}
          Headers={HeaderList}
          carList={ImagesList}
          steps={[10, 20, 30]}
        />
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
        className="panel"
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
              {/* <motion.img
                initial="initial"
                animate="hover"
                variants={hoverboardKeyframes}
                src={house}
                className="dhouse grayscale_shadow"
              /> */}
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
  // color: "white",
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
