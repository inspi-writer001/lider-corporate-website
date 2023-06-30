import "./Pages.css";
import BlurryBlob from "../components/BlurryBlob";
import { useTranslation } from "react-i18next";
import office from "../assets/office_empty.jpg";
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

import {
  Environment,
  OrbitControls,
  useFBX,
  useGLTF,
  ScrollControls,
  useTexture
} from "@react-three/drei";
import { Suspense, useRef, useEffect } from "react";

import obj from "/models/plane_model.fbx";
import Scroller from "../components/Scroller";
import homeImage from "../assets/night-house.png";
import carImage from "../assets/new-car.png";
import {
  RegisterationBodyContent,
  RegisterationCarList,
  RegisterationHeaders
} from "../components/ScrollerHelper";

// import mdx from "../components/Post.mdx";

const Scene = () => {
  const objs = useFBX(obj);

  const { camera } = useThree();
  const ref = useRef();
  const controlsRef = useRef();
  const scrollRef = useRef(0);
  const libraryRef = useRef();
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
      <motion3.group rotateY={rotation} ref={ref} position={[0, -0.25, 0]}>
        <mesh ref={controlsRef}>
          <primitive object={objs} scale={0.0021} />;
        </mesh>
      </motion3.group>
    </>
  );
};

const Registration = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  let whiteText = colorMode == "light" ? "black" : "white";
  const { t } = useTranslation();
  console.log(t);
  return (
    <div style={{ position: "relative" }}>
      {/* <Canvas
        style={{
          position: "absolute",
          height: "170vh",
          width: "100vw"
        }}
      >
        <Suspense fallback={null}>
          <Scene />
          <ambientLight intensity={3} />
          <camera fov={75} near={0.1} far={1000} z={5} lookAt={[0, 20, 0]} />
          <pointLight position={[200, 0, 0]} intensity={1.5} />
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
      </Canvas> */}
      <div
        className="insurance_body"
        style={{ color: `${whiteText} !important` }}
      >
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
          <div className="top_arc aarc" style={{ top: "10rem" }}></div>
        </div>

        <div className="second_banner">
          <div className="threed_scene">
            {/* <motion.img
              initial="initial"
              
              src={office}
              alt=""
              className="office_image"
            /> */}
          </div>
          <div className="background_ball" style={{ color: whiteText }}>
            <div
              className="_low_price"
              style={{
                marginTop: "9rem",
                fontSize: "1.8rem",
                color: whiteText
              }}
            >
              {t("registration.register")}{" "}
            </div>
            <div
              className="_insurance"
              style={{
                marginTop: "-11rem",
                fontSize: "2.5rem",
                fontWeight: "bold"
              }}
            >
              {t("registration.vehicle")}
            </div>
          </div>
        </div>

        <div className="another_div" style={{ position: "relative" }}>
          <div className="top_div" style={{ color: whiteText }}>
            <Text
              // color={whiteText}
              className="left_"
              style={{ fontSize: "2.5rem" }}
            >
              {t("registration.why_us")}
            </Text>
            <div className="right_">{t("registration.text1")}</div>
          </div>
          <Scroller
            BodyContent={RegisterationBodyContent}
            Headers={RegisterationHeaders}
            carList={RegisterationCarList}
            steps={[10, 20, 30, 40]}
          />
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
                {t("registration.instant")}
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
                {t("registration.registration")}
              </Text>
            </div>
          </div>
          <div className="bottom_div">
            <Text color={whiteText} className="left_">
              {t("registration.text2")}
            </Text>

            <Text color={whiteText} className="right_">
              {t("registration.text3")}
            </Text>
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
            <Text
              color={whiteText}
              className="_low_price"
              style={{
                marginTop: "9rem",
                fontSize: "1.8rem"
                //  color: "white"
              }}
            >
              {t("registration.comprehensive")}{" "}
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
              {t("registration.formalism")}{" "}
            </Text>
          </div>
          <Text
            color={whiteText}
            className="trust_us"
            style={{ position: "relative", top: "-3rem" }}
          >
            {t("registration.we_provide")}
          </Text>
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

export default Registration;
