import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import "react-multi-carousel/lib/styles.css";

import BlurryBlob from "../components/BlurryBlob";
import PartnersList from "../components/PartnersList";
import { useTranslation } from "react-i18next";
import { Text, useColorMode } from "@chakra-ui/react";
import { Card } from "react-bootstrap";

import {
  useInView,
  useScroll,
  motion,
  animate,
  useTransform
} from "framer-motion";
import { motion as motion3 } from "framer-motion-3d";
import { Canvas, useThree, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { USDZLoader } from "three/examples/jsm/loaders/USDZLoader";
import caravan from "../assets/carravan_registration.png";
import putTag from "../assets/put_tag_registration.png";
import confusedRegistration from "../assets/confused_registration.png";
import ferrari from "../assets/ferarri_registration.png";
import tagRegistration from "../assets/tag_registration.png";
import house from "../assets/night-house.png";
import consultation from "../assets/consultant.png";
import family from "../assets/family.png";
import office from "../assets/office_empty.jpg";
import carousel from "react-multi-carousel";

import {
  Environment,
  OrbitControls,
  useFBX,
  ScrollControls,
  useFBO,
  useTexture,
  PerspectiveCamera
} from "@react-three/drei";
import { Suspense } from "react";

import obj from "/models/house_scene.fbx";
import tx1 from "/models/textures_compressed/Concrete.jpg";
import tx2 from "/models/textures_compressed/Curb.jpg";
import tx3 from "/models/textures_compressed/Ground.jpg";
import tx4 from "/models/textures_compressed/Marble.jpg";
import tx5 from "/models/textures_compressed/Pool.jpg";
import tx6 from "/models/textures_compressed/Stairs.jpg";
import tx7 from "/models/textures_compressed/Tarmac.jpg";
import tx8 from "/models/textures_compressed/Walkway.jpg";
import tx9 from "/models/textures_compressed/Wood1.jpg";
import tx10 from "/models/textures_compressed/Wood2.jpg";
import tx11 from "/models/textures_compressed/glass.jpg";
import tx12 from "/models/textures_compressed/wallo.png";
// import tx13 from "/models/textures_compressed/Concrete.jpg";
import "./Pages.css";
import Scroller from "../components/Scroller";
import Carousel from "react-multi-carousel";

const Scene = () => {
  const objs = useFBX(obj);
  // const objs = useLoader(DRACOLoader, "/models/bug.drc");
  const { camera } = useThree();
  const ref = useRef();
  const controlsRef = useRef();
  const scrollRef = useRef(0);
  const libraryRef = useRef();
  const concrete = useTexture(tx1);
  const curb = useTexture(tx2);
  const ground = useTexture(tx3);
  const marble = useTexture(tx4);
  const pool = useTexture(tx5);
  const stairs = useTexture(tx6);
  const tarmac = useTexture(tx7);
  const walkway = useTexture(tx8);
  const wood1 = useTexture(tx9);
  const wood2 = useTexture(tx10);
  const glass = useTexture(tx11);
  const wall = useTexture(tx12);

  ground.repeat.set(2, 2);
  ground.wrapS = ground.wrapT = THREE.RepeatWrapping;
  wood1.repeat.set(2, 2);
  wood1.wrapS = ground.wrapT = THREE.RepeatWrapping;
  glass.repeat.set(2, 2);
  glass.wrapS = ground.wrapT = THREE.RepeatWrapping;
  concrete.repeat.set(2, 2);
  concrete.wrapS = ground.wrapT = THREE.RepeatWrapping;
  marble.repeat.set(2, 2);
  marble.wrapS = ground.wrapT = THREE.RepeatWrapping;

  objs.traverse((child) => {
    if (child.isMesh) {
      // Assign texture1 to material1
      console.log(child.name);
      if (child.name === "water") {
        child.material.map = pool;
      }
      // Assign texture2 to material2
      if (child.name === "Ground") {
        child.material.map = ground;
      }
      if (child.name === "Patio") {
        child.material.map = concrete;
      }
      if (child.name == "Fence03") {
        child.material.map = wood1;
      }
      if (child.name == "Shades") {
        child.material.map = curb;
      }
      if (child.name == "Walls_Main") {
        child.material.map = wall;
      }
      if (child.name == "Railing") {
        child.material.map = glass;
      }
      if (child.name === "Balcony") {
        child.material.map = glass;
      }
      if (child.name === "Ground_floor_glasswall") {
        child.material.map = glass;
      }
      if (
        child.name === "Window002" ||
        child.name === "Window001" ||
        child.name === "Window"
      ) {
        child.material.map = glass;
      }
    }
  });
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
      <motion3.group rotateY={rotation} ref={ref} position={[0.2, 1.005, 0]}>
        <mesh ref={controlsRef}>
          <primitive object={objs} scale={0.124} />;
        </mesh>
      </motion3.group>
    </>
  );
};

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};
const Insurance = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  let whiteText = colorMode == "light" ? "black" : "white";
  const { t } = useTranslation();
  const Images = [ferrari, house, consultation, family, office];

  const TextLis = [
    `${t("insurance.text1")}`,
    `${t("insurance.text2")}`,
    `${t("insurance.text3")}`,
    `${t("insurance.text4")}`,
    `${t("insurance.text5")}`,
    `${t("insurance.text6")}`
  ];

  const HeaderLis = [
    `${t("insurance.header1")}`,
    `${t("insurance.header2")}`,
    `${t("insurance.header3")}`,
    `${t("insurance.header4")}`,
    `${t("insurance.header5")}`,
    `${t("insurance.header6")}`
  ];
  return (
    <div>
      <section className="" style={{ margin: '100px 20px' }}>
        <Scroller
          Headers={HeaderLis}
          BodyContent={TextLis}
          carList={Images}
          steps={[10, 20, 30, 40, 50, 60]}
        />
      </section>

      <h2 color={whiteText} className="text-center mb-5">
        {t("insurance.trust")}
      </h2>
      {/* <div className="those">THOSE</div> */}

      <Carousel
        responsive={responsive}
        autoPlay
        draggable
        swipeable
        arrows={false}
      >
        {PartnersList.map((item, index) => (
          <Card key={index} style={{ backgroundColor: "transparent" }}>
            <Card.Img variant="top" src={item.img} />
          </Card>
        ))}
      </Carousel>
    </div>
  );
};

export default Insurance;
