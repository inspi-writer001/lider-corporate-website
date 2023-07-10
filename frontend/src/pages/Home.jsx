import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import BlurryBlob from "../components/BlurryBlob";
import "./Pages.css";
import { Flex, Text, useColorMode, useMediaQuery } from "@chakra-ui/react";
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
import { useSpring, animated } from "react-spring";
import { Element } from "react-scroll";
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

// import { Suspense } from "react";
// import ScrollerFull from "../components/ScrollerFull";
import Scroller from "../components/Scroller";

import smilingCar from "../assets/smiling_in_car.jpg";
import officePeople from "../assets//office_light.jpg";
import registration from "../assets/put_tag_registration.png";
import purchase from "../assets/happy_purchase.jpg";
import classyOfficer from "../assets/classy_officer.png";

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
  const [isLargerThan767] = useMediaQuery("(max-width: 767px)");

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const carRef = useRef(null);
  const imageRef = useRef(null);

  const sliderRef = useRef(null);

  const { t } = useTranslation();
  const TextList = [t("why_us.text1"), t("why_us.text2"), t("why_us.text3")];

  const ImagesList = [officePeople, registration, classyOfficer];

  const [props, set] = useSpring(() => ({ opacity: 0 }));

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const elementTop = document
        .getElementById("animated-section")
        .getBoundingClientRect().top;

      if (elementTop < windowHeight) {
        set({ opacity: 1 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [set]);

  // const HeaderList = ["Why us?", t("why_us.super_fast"), t("why_us.attractive")];
  const HeaderList = [
    t("why_us.title"),
    t("why_us.realization"),
    t("why_us.offers")
  ];
  const { colorMode, toggleColorMode } = useColorMode();
  let whiteText = colorMode == "light" ? "black" : "white";
  const green = "#00bd5d";

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
    <>
      <div ref={sliderRef}>
        <BlurryBlob
          height={90}
          style={{ position: "absolute", left: "-30rem", zIndex: "0" }}
        />

        <div className="">
          <div className="hero">
            <div className="d-flex">
              <img
                src={lider}
                ref={imageRef}
                alt="lider logo"
                className="lider_logo animate__animated animate__backInDown mx-auto"
                style={{ width: "200px" }}
              />
            </div>
            <div className="mt-5">
              <h1 className="text-center fw-light" style={{ color: "#037fc2" }}>
                {t("header1")}
              </h1>
              <h1 className="text-center header2 ">{t("header2")}</h1>
              <h3
                className="text-center mt-4 text-light so py-2"
                style={{ backgroundColor: "#037fc2" }}
              >
                {t("header3")}
              </h3>
            </div>
          </div>

          <div className="">
            <video loop width="100%" autoPlay muted>
              <source src={officeVideo} type="video/mp4" />
            </video>
          </div>

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
        </div>
        <section className="" style={{ margin: "100px 20px" }}>
          <Scroller
            className=""
            BodyContent={TextList}
            Headers={HeaderList}
            carList={ImagesList}
            steps={[10, 20, 30]}
          />
        </section>
      </div>
    </>
  );
};

export default Home;
