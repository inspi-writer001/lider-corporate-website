import React from "react";
import "./Pages.css";
import BlurryBlob from "../components/BlurryBlob";
import { Link } from "react-router-dom";
import flag1 from "../assets/flag1.png";
import flago from "../assets/flago.png";
import { useTranslation } from "react-i18next";
import "animate.css";
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
  return (
    <div style={{ overflow: "hidden" }}>
      <Canvas
        style={{
          position: "absolute",
          height: "80vh",
          width: "100vw"
        }}
      >
        <Suspense fallback={null}>
          <Scene />
          <ambientLight intensity={1} />
          <PerspectiveCamera makeDefault position={[3, 4, -1]} />
          <camera fov={75} near={0.1} far={1000} z={5} lookAt={[0, 20, 0]} />
          <pointLight position={[200, 0, 0]} intensity={0.5} />
          <pointLight position={[0, 0, 200]} intensity={0.5} />

          <pointLight position={[0, 20, 0]} intensity={0.5} />

          <OrbitControls
            enablePan={false}
            enableRotate={true}
            enableZoom={false}
            enableDamping={true}
            dampingFactor={0.05}
          />
          <ScrollControls damping={0.25} pages={3} />
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
          <div className="threed_scene">
            {/* <motion.img
              initial="initial"
              // animate="hover"
              variants={flagKeyframes}
              src={flag1}
              alt=""
              className="flag_right"
            /> */}
          </div>
          <div className="background_ball">
            <Text
              className="_low_price"
              color={whiteText}
              style={{ marginTop: "9rem", fontSize: "1.8rem" }}
            >
              {t("translations.translations")}
            </Text>
            <Text
              color={whiteText}
              className="_insurance"
              style={{
                marginTop: "-11rem",
                fontSize: "2.5rem",
                // color: "white",
                fontWeight: "bold"
              }}
            >
              {t("translations.documents")}{" "}
            </Text>
          </div>
        </div>
        <div className="another_div">
          <div className="top_div">
            <Text color={whiteText} className="left_">
              {t("translations.text1")}{" "}
            </Text>
            <Text color={whiteText} className="right_">
              {t("translations.text2")}
            </Text>
          </div>
          <div className="second_banner">
            <div className="background_ball" style={{ top: "0" }}>
              <Text
                color={whiteText}
                className="_low_price"
                style={{
                  marginTop: "9rem",
                  fontSize: "1.8rem"
                  // color: "white"
                }}
              >
                {t("translations.low")}{" "}
              </Text>
              <Text
                color={whiteText}
                className="_insurance"
                style={{
                  textAlign: "center"
                }}
              >
                {t("translations.prices")}{" "}
              </Text>
            </div>
            <Text color={whiteText} className="text-center">
              {t("translations.best_price")}
            </Text>
          </div>
          <div className="bottom_div smm">
            <Link>
              <Text
                color={whiteText}
                className="left_ sl"
                style={{ borderRadius: "50%" }}
              >
                {t("translations.text3")}
              </Text>
            </Link>

            <Link>
              <Text
                color={whiteText}
                className="right_ slo"
                style={{ borderRadius: "50%" }}
              >
                {t("translations.text4")}
              </Text>
            </Link>
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
        <div className="second_banner">
          <div className="background_ball">
            <div
              className="_low_price"
              style={{ marginTop: "9rem", fontSize: "1.8rem", color: "white" }}
            >
              {/* COMPREHENSIVE */}
            </div>
            <div
              className="_insurance"
              style={{
                marginTop: "-11rem",
                fontSize: "2.5rem",
                color: "white",
                fontWeight: "bold"
              }}
            >
              {/* FORMALISM */}
            </div>
          </div>
          <div
            className="trust_us"
            style={{ position: "relative", top: "-3rem" }}
          >
            {/* We provide full professionalism completing formalities */}
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

export default Translation;
