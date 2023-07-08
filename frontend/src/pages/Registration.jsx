import './Pages.css';
import BlurryBlob from '../components/BlurryBlob';
import { useTranslation } from 'react-i18next';
import office from '../assets/office_empty.jpg';
import oldCar from '../assets/old-car.png';
import newCar from '../assets/new-car.png';
import farmCar from '../assets/farm.png';
import regCar from '../assets/put_tag_registration.png';
// import { motion } from "framer-motion";
import { Text, useColorMode } from '@chakra-ui/react';
import {
  useInView,
  useScroll,
  motion,
  animate,
  useTransform,
} from 'framer-motion';
import { motion as motion3 } from 'framer-motion-3d';
import { Canvas, useThree, useFrame, useLoader } from '@react-three/fiber';

import {
  Environment,
  OrbitControls,
  useFBX,
  useGLTF,
  ScrollControls,
  useTexture,
} from '@react-three/drei';
import { Suspense, useRef, useEffect } from 'react';

import obj from '/models/plane_model.fbx';
import Scroller from '../components/Scroller';
import homeImage from '../assets/night-house.png';
import carImage from '../assets/new-car.png';

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
  let whiteText = colorMode == 'light' ? 'black' : 'white';
  const { t } = useTranslation();

  const RegisterationCarList = [newCar, oldCar, regCar];
  const RegisterationHeaders = [
    `${t('registration.header1')}`,
    `${t('registration.header2')}`,
    `${t('registration.header3')}`,
  ];

  const RegisterationBodyContent = [
    `${t('registration.text1')}`,
    `${t('registration.text2')}`,
    `${t('registration.text3')}`,
  ];

  return (
    <div>
      <div
        className="insurance_body"
        style={{ color: `${whiteText} !important` }}
      >
        <div className="second_banner">
          <div className="threed_scene"></div>
        </div>
        <section
          className="scroller panel"
          style={{ minHeight: '100vh', margin: '100px' }}
        >
          <Scroller
            BodyContent={RegisterationBodyContent}
            Headers={RegisterationHeaders}
            carList={RegisterationCarList}
            steps={[10, 20, 30]}
          />
        </section>
      </div>
    </div>
  );
};

export default Registration;
