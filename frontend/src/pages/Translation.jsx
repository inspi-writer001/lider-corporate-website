import React from "react";
import "./Pages.css";
import BlurryBlob from "../components/BlurryBlob";
import { Link } from "react-router-dom";
import flag1 from "../assets/flag1.png";
import flago from "../assets/flago.png";
import { useTranslation } from "react-i18next";
import "animate.css";
import registration from "../assets/official_registration.png";
// import { motion } from "framer-motion";
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
  ScrollControls,
  useFBO,
  PerspectiveCamera
} from "@react-three/drei";
import { Suspense, useRef, useEffect } from "react";
import { MathUtils } from "three";

import obj from "/models/format_office.FBX";
import Scroller from "../components/Scroller";

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
      <motion3.group rotateY={rotation} ref={ref} position={[700, 200, 0]}>
        <mesh ref={controlsRef} rotate={[0, MathUtils.degToRad(-20), 3]}>
          <primitive object={objs} scale={0.3} />;
        </mesh>
      </motion3.group>
    </>
  );
};

const Translation = () => {
  const { t } = useTranslation();
  const { colorMode, toggleColorMode } = useColorMode();
  let whiteText = colorMode == "light" ? "black" : "white";
  const flagKeyframes = {
    // initial: {
    //   rotateZ: 0
    // },
    // wave: {
    //   rotateZ: [0, -10, 10, -5, 5, -2, 2, 0],
    //   transition: {
    //     duration: 1.5,
    //     ease: "easeInOut",
    //     repeat: Infinity
    //   }
    // },
    // breeze: {
    //   skewX: [0, 5, -5, 2, -2, 0],
    //   transition: {
    //     duration: 1.5,
    //     ease: "easeInOut",
    //     repeat: Infinity,
    //     repeatDelay: 0.5
    //   }
    // }

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

  const carList = [registration];

  const body = [`${t("translations.text1")}`];
  const headers = [`${t("translations.header1")}`];

  return (
    <div style={{ overflow: "hidden" }}>
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
        <section className="" style={{ margin: '100px 20px' }}>
          <Scroller
            BodyContent={body}
            Headers={headers}
            carList={carList}
            steps={[10]}
          />
        </section>
      </div>
    </div>
  );
};

export default Translation;
