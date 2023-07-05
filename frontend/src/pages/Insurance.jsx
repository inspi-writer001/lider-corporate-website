import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import 'react-multi-carousel/lib/styles.css';

import BlurryBlob from '../components/BlurryBlob';
import PartnersList from '../components/PartnersList';
import { useTranslation } from 'react-i18next';
import { Text, useColorMode } from '@chakra-ui/react';
import { Card } from 'react-bootstrap';

import {
  useInView,
  useScroll,
  motion,
  animate,
  useTransform,
} from 'framer-motion';
import { motion as motion3 } from 'framer-motion-3d';
import { Canvas, useThree, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { USDZLoader } from 'three/examples/jsm/loaders/USDZLoader';
import caravan from '../assets/carravan_registration.png';
import putTag from '../assets/put_tag_registration.png';
import confusedRegistration from '../assets/confused_registration.png';
import ferrari from '../assets/ferarri_registration.png';
import tagRegistration from '../assets/tag_registration.png';
import house from '../assets/night-house.png';
import consultation from '../assets/consultant.png';
import family from '../assets/family.png';
import office from '../assets/office_empty.jpg';
import carousel from 'react-multi-carousel';
const Images = [ferrari, house, consultation, family, office];

const TextLis = [
  'Keep yourself and your vehicle protected with our reliable auto insurance policies. We offer comprehensive coverage options that safeguard you against accidents, theft, damage, and liability. Drive with confidence, knowing that we have your back',
  "Your home is your sanctuary, and we're here to ensure it remains safe and secure. Our home insurance plans provide comprehensive coverage for your property, belongings, and liability. Whether you're a homeowner or a renter, let us provide the peace of mind you deserve",
  'Taking care of your health is paramount, and having the right health insurance plan is crucial. We offer a range of health insurance options that provide coverage for medical expenses, prescriptions, hospital stays, and more. Your well-being is our top priority',
  "Ensure the financial security of your loved ones with our life insurance policies. We offer various coverage options that provide financial support in the event of an untimely loss. Protect your family's future and create a legacy that lasts",
  "Running a business comes with inherent risks, but we're here to mitigate them. Our business insurance solutions cover a wide range of industries and protect against property damage, liability claims, cyber threats, and more. Safeguard your business and focus on what you do best",
];

const HeaderLis = [
  'Auto Insurance',
  'Home Insurance',
  'Health Insurance',
  'Life Insurance',
  'Business Insurance',
];

import {
  Environment,
  OrbitControls,
  useFBX,
  ScrollControls,
  useFBO,
  useTexture,
  PerspectiveCamera,
} from '@react-three/drei';
import { Suspense } from 'react';

import obj from '/models/house_scene.fbx';
import tx1 from '/models/textures_compressed/Concrete.jpg';
import tx2 from '/models/textures_compressed/Curb.jpg';
import tx3 from '/models/textures_compressed/Ground.jpg';
import tx4 from '/models/textures_compressed/Marble.jpg';
import tx5 from '/models/textures_compressed/Pool.jpg';
import tx6 from '/models/textures_compressed/Stairs.jpg';
import tx7 from '/models/textures_compressed/Tarmac.jpg';
import tx8 from '/models/textures_compressed/Walkway.jpg';
import tx9 from '/models/textures_compressed/Wood1.jpg';
import tx10 from '/models/textures_compressed/Wood2.jpg';
import tx11 from '/models/textures_compressed/glass.jpg';
import tx12 from '/models/textures_compressed/wallo.png';
// import tx13 from "/models/textures_compressed/Concrete.jpg";
import './Pages.css';
import Scroller from '../components/Scroller';
import Carousel from 'react-multi-carousel';

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
      if (child.name === 'water') {
        child.material.map = pool;
      }
      // Assign texture2 to material2
      if (child.name === 'Ground') {
        child.material.map = ground;
      }
      if (child.name === 'Patio') {
        child.material.map = concrete;
      }
      if (child.name == 'Fence03') {
        child.material.map = wood1;
      }
      if (child.name == 'Shades') {
        child.material.map = curb;
      }
      if (child.name == 'Walls_Main') {
        child.material.map = wall;
      }
      if (child.name == 'Railing') {
        child.material.map = glass;
      }
      if (child.name === 'Balcony') {
        child.material.map = glass;
      }
      if (child.name === 'Ground_floor_glasswall') {
        child.material.map = glass;
      }
      if (
        child.name === 'Window002' ||
        child.name === 'Window001' ||
        child.name === 'Window'
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

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
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
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};
const Insurance = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  let whiteText = colorMode == 'light' ? 'black' : 'white';
  const { t } = useTranslation();
  return (
    <div>
      {/* <Canvas
        style={{
          position: "absolute",
          height: "170vh",
          width: "100vw"
        }}
      >
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 3, 5]} />
          <Scene />

          <ambientLight intensity={0.2} />
          <camera fov={75} near={0.1} far={1000} z={5} lookAt={[0, 20, 0]} />
          <pointLight position={[200, 0, 0]} intensity={1.5} />
          <pointLight position={[-200, 0, 0]} intensity={1.5} />
          <pointLight position={[0, 0, 200]} intensity={0.5} />

          <pointLight position={[0, 20, 0]} intensity={0.35} />
          <pointLight position={[0, -20, 0]} intensity={0.35} />

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
      <div className="insurance_body">
        <Scroller
          Headers={HeaderLis}
          BodyContent={TextLis}
          carList={Images}
          steps={[10, 20, 30, 40, 50]}
        />
        <div className="first_banner">
          <BlurryBlob
            height={90}
            style={{
              position: 'absolute',
              top: '-35rem',
              left: 'auto',
              right: 'auto',
              marginLeft: '0',
              marginRight: '0',
              zIndex: '0 !important',
            }}
          />
        </div>
        <div className="arc_container">
          <div className="top_arc" style={{ top: '10rem' }}></div>
        </div>
        <div className="second_banner">
          <div className="background_ball">
            <Text
              color={whiteText}
              style={{ marginTop: '1rem' }}
              className="_low_price"
            >
              {t('insurance.price')}
            </Text>
            <Text color={whiteText} className="_insurance">
              {t('insurance.insurance')}
            </Text>
          </div>
        </div>
        <div className="another_div">
          <div className="top_div">
            <Text
              color={whiteText}
              className="left_ why_us"
              style={{ fontSize: '2.5rem' }}
            >
              {t('insurance.why_us')}
            </Text>
            <Text color={whiteText} className="right_">
              {t('insurance.text1')}
            </Text>
          </div>
          <div className="bottom_div">
            <Text color={whiteText} className="left_ a">
              {t('insurance.text2')}
            </Text>
            <Text color={whiteText} className="right_ a">
              {t('insurance.text3')}
            </Text>
          </div>
        </div>
        <div className="arc_container">
          <div
            className="top_arc"
            style={{ top: '-18rem', transform: 'rotate(180deg)' }}
          ></div>
        </div>
        <div className="best_offer second_banner" style={{ top: '12rem' }}>
          <div className="background_ball">
            <Text color={whiteText} className="_low_price">
              {t('insurance.best')}
            </Text>
            <Text
              color={whiteText}
              className="_insurance"
              style={{
                marginTop: '-11rem',
                fontSize: '2.5rem',
                // color: "white",
                fontWeight: 'bold',
                textTransform: 'uppercase',
              }}
            >
              {t('insurance.offers')}
            </Text>
          </div>
        </div>
        <div className="first_banner">
          <BlurryBlob
            height={90}
            style={{
              position: 'absolute',
              top: '50rem',
              left: 'auto',
              right: 'auto',
              marginLeft: '0',
              marginRight: '0',
              zIndex: '0 !important',
            }}
          />
        </div>

        <h2 color={whiteText} className="text-center mb-5">
          {t('insurance.trust')}
        </h2>
        {/* <div className="those">THOSE</div> */}

        <Carousel responsive={responsive} autoPlay draggable swipeable arrows={false}>
          {PartnersList.map((item, index) => (
            <Card key={index} style={{ backgroundColor: 'transparent' }}>
              <Card.Img variant="top" src={item.img} />
            </Card>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Insurance;
