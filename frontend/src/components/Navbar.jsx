import { Link } from 'react-router-dom';
import loggo from '../assets/lider_logo.png';
import { useTranslation } from 'react-i18next';
import polish_logo from '../assets/polish.png';
import english_logo from '../assets/english.png';
import ukranian_logo from '../assets/ukraine.png';
import './helper.css';

import './Navbar.css';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  useColorMode,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon
} from "@chakra-ui/icons";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Dropdown } from "react-bootstrap";
import i18next from "i18next";
import "animate.css";

export default function WithSubnavigation() {
  const { t } = useTranslation();
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
        style={{ position: 'fixed', zIndex: '200000', width: '100vw' }}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}
          >
            <img
              className="animate__animated animate__rotateInDownLeft"
              src={loggo}
              style={{ width: "5rem" }}
            />
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
          style={{ alignItems: 'center' }}
        >
          {/* <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
            href={"#"}
          >
            Sign In
          </Button> */}
          <Dropdown>
            <Dropdown.Toggle
              className="lang_selector p-0"
              variant="transparent"
              id="dropdown-basic"
            >
              {t('language')}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                className="lang d-flex"
                onClick={() => i18next.changeLanguage('en')}
              >
                <img className="language me-2" src={english_logo} />{' '}
                <div className="text_lang">English</div>
              </Dropdown.Item>
              <Dropdown.Item
                className="lang d-flex"
                onClick={() => i18next.changeLanguage('pl')}
              >
                <img className="language me-2" src={polish_logo} />
                <div className="text_lang">Polish</div>
              </Dropdown.Item>
              <Dropdown.Item
                className="lang d-flex"
                onClick={() => i18next.changeLanguage('uk')}
              >
                <img className="language me-2" src={ukranian_logo} />
                <div className="text_lang">Ukranian</div>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Link to="/contact">
            <Button
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              style={{ alignSelf: 'center' }}
              fontWeight={600}
              color={'white'}
              bg={'rgb(0,156,224)'}
              href={'#'}
              _hover={{
                bg: 'rgb(17,48,65)',
              }}
            >
              {t('contact_us')}
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav funcction={onToggle} />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  // NAV_ITEMS.splice(-1, 1);
  return (
    <Stack direction={"row"} spacing={4} style={{ alignItems: "center" }}>
      {NAV_ITEMS.map((navItem, index) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                // href={navItem.href ?? "#"}
                to={navItem.href ?? '#'}
                // fontSize={"sm"}
                style={{ fontSize: '1.2rem' }}
                fontWeight={500}
                className={
                  index % 2 !== 0
                    ? "animate__animated animate__bounceInDown"
                    : "animate__animated animate__backInUp"
                }
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = ({ funcction }) => {
  const { onToggle } = useDisclosure();
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
      style={{
        position: 'fixed',
        zIndex: '2000',
        marginTop: '100px',
        width: '100vw',
      }}
    >
      {NAVV_ITEMS.map((navItem) => (
        <div onClick={funcction} className="map">
          <MobileNavItem key={navItem.label} {...navItem} />
        </div>
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack
      spacing={4}
      onClick={children && onToggle}
      position={'relative'}
      // top={"100rem"}
      scrollBehavior={'none'}
      zIndex={300}
    >
      <Link
        py={2}
        as={Link}
        to={href || '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Link>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} to={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Insurance',
    href: '/insurance',
  },
  {
    label: 'Registration',
    href: '/registration',
    // children: [
    //   {
    //     label: "Job Board",
    //     subLabel: "Find your dream design job",
    //     href: "#"
    //   },
    //   {
    //     label: "Translations",
    //     subLabel: "An exclusive list for contract work",
    //     href: "#"
    //   }
    // ]
  },

  {
    label: 'Translations',
    href: '/translations',
  },
  {
    label: 'Downloads',
    href: '/downloads',
  },
  {
    label: 'Documents',
    href: '/documents',
  },
];

const NAVV_ITEMS = [
  {
    label: 'Home',
    href: '/',
    // children: [
    //   {
    //     label: "Explore Design Work",
    //     subLabel: "Trending Design to inspire you",
    //     href: "#"
    //   },
    //   {
    //     label: "Insurance",
    //     subLabel: "Up-and-coming Designers",
    //     href: "#"
    //   }
    // ]
  },
  {
    label: 'Insurance',
    href: '/insurance',
  },
  {
    label: 'Registration',
    href: '/registration',
    // children: [
    //   {
    //     label: "Job Board",
    //     subLabel: "Find your dream design job",
    //     href: "#"
    //   },
    //   {
    //     label: "Translations",
    //     subLabel: "An exclusive list for contract work",
    //     href: "#"
    //   }
    // ]
  },

  {
    label: 'Translations',
    href: '/translations',
  },
  {
    label: 'Downloads',
    href: '/downloads',
  },
  {
    label: 'Documents',
    href: '/documents',
  },
  {
    label: 'Contact us',
    href: '/contact',
  },
];
