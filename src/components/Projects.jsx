import React, { useEffect, useState } from "react";
import {
  Step,
  StepDescription,
  Input,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  HStack,
  Heading,
  InputGroup,
  Card,
  CardHeader,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  CardBody,
  Highlight,
  CardFooter,
  Divider,
  AspectRatio,
  ButtonGroup,
  Center,
  Flex,
  Button,
  Text,
  Stack,
  Box,
  useBreakpointValue,
  Menu,
  MenuButton,
  VStack,
  MenuList,
  MenuItem,
  Wrap,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Grid,
  GridItem,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  InputLeftAddon,
  InputRightAddon,
  useSteps,
  AbsoluteCenter,
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Container,
  Spacer,
} from "@chakra-ui/react";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaShare, FaCheck, FaComment } from "react-icons/fa";
import AIGoals from "../assets/Screenshot 2024-02-26 124604.png";
import JsLogo from "../assets/Logos/JavaScript-logo (1).png";
import ReactLogo from "../assets/Logos/React-icon.svg.png";
import NextJSlogo from "../assets/Logos/nextjs-icon-2048x1234-pqycciiu.png";
import ReduxLogo from "../assets/Logos/redux.svg";

import HTMLlogo from "../assets/Logos/HTML5_logo_and_wordmark.svg.png";

import CSSlogo from "../assets/Logos/CSS3_logo_and_wordmark.svg.png";

import tailwind from "../assets/Logos/tailwind-css3232.logowik.png";
import chakraUIlogo from "../assets/Logos/unnamed.jpg";
import MaterialUI from "../assets/Logos/material-ui-icon-2048x1626-on580ia9.png";

import BootStrap from "../assets/Logos/bootstrap-4-logo-png-transparent.png";
import ThreeJs from "../assets/Logos/e4f86d2200d2d35c30f7b1494e96b9595ebc2751.png";

import Sass from "../assets/Logos/seal-color.png";
import Jest from "../assets/Logos/1_i37IyHf6vnhqWIA9osxU3w.png";
import Animatecss from "../assets/Logos/2b93f700-a724-11ea-89af-e780fd85245b.png";
import FramerMotion from "../assets/Logos/framer-motion.svg";

import Nodejs from "../assets/Logos/node-js.png";
import Firebase from "../assets/Logos/firebase-1-logo-png-transparent.png";

import mongoDB from "../assets/Logos/mongodb-leaf_256x256.png";
import GrpahQL from "../assets/Logos/GraphQL_Logo.svg.png";
import SocketIO from "../assets/Logos/1024px-Socket-io.svg.png";
import GIT from "../assets/Logos/Git_icon.svg.png";
import GTPApi from "../assets/Logos/openai-white-logomark.png";
import PuppeteerJS from "../assets/Logos/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png";
import Docker from "../assets/Logos/97_Docker_logo_logos-512.webp";
import Draggable from 'react-draggable';
import Vite from "../assets/Logos/Vitejs-logo.svg";

import VSC from "../assets/Logos/Visual_Studio_Code_1.35_icon.svg.png";
import Figma from "../assets/Logos/1667px-Figma-logo.svg.png";
import Github from "../assets/Logos/25231.png";

import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import Card3D from "./Card3D";

function QuoteAnimation({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [onOpen, setOnOpen] = useState();
  const [onClose, setOnClose] = useState();

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 2) + 1;
    if (randomNumber === 1) {
      setOnOpen("animate__animated animate__fadeInRight animate__fast ");
      setOnClose("animate__animated animate__fadeOutLeft animate__fast");
    } else {
      setOnOpen("animate__animated animate__fadeInLeft animate__fast ");
      setOnClose("animate__animated animate__fadeOutRight animate__fast");
    }
  }, [isInView]);

  return (
    <Box ref={ref} className={isInView ? onOpen : onClose}>
      {children}
    </Box>
  );
}

export default function Projects() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Assuming small screen width is less than 768px
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <VStack justify="center" align="center" mt={"200px"} id="Projects">
        
      <VStack
        w={{
          base: "90%",
          xsm: "90%",
          ssm: "90%",
          sm: "90%",
          md: "90%",
          lg: "90%",
          xl: "80%",
          xxl: "70%",
          xxxl: "70%",
        }}
        align="left"
        justify="center"
        mt="100px"
        textShadow="0px 0px 50px black"
      >
        <QuoteAnimation>
          <Text
            textAlign={"left"}
            fontFamily={"Raleway"}
            fontSize="35px"
            color={"	#f0d86e"}
          >
            uhh..., yea
          </Text>
        </QuoteAnimation>
        <QuoteAnimation>
          <Text
            fontFamily={"Raleway"}
            color={"wheat"}
            fontWeight="700"
            fontSize={{
              base: "50px",
              xsm: "50px",
              ssm: "50px",
              sm: "70px",
              md: "90px",
              lg: "100px",
              xl: "100px",
              xxl: "110px",
              xxxl: "110px",
            }}
            whiteSpace="nowrap"
          >
            Projects
          </Text>
        </QuoteAnimation>
      </VStack>

   
      
  <HStack
    w={"100%"}
    flexWrap={{
      base: "Wrap",
      xsm: "Wrap",
      ssm: "Wrap",
      sm: "Wrap",
      md: "Wrap",
      lg: "Wrap",
      xl: "nowrap",
      xxl: "nowrap",
      xxxl: "nowrap",
    }}
    fontFamily={"Raleway"}
    justify={"center"}
    align={"start"}
    mt={"100px"}
    p={"3%"}
    gap={"3%"}
  >
   
    {isSmallScreen ? <>
      <VStack minW={"350px"} maxW={"450px"} align={"left"} mb={"50px"}>
      <QuoteAnimation>
        <Card3D
          Imageid={AIGoals}
          Title={"Frontend AI Startup"}
          Desc={`Personalized tasks, insights, and seamless integration for
            productivity. Users input goals, track progress visually, and
            receive adaptive recommendations.`}
        />
      </QuoteAnimation>
    </VStack>

    </>
    :
    
    <VStack minW={"350px"} maxW={"600px"} align={"left"} mb={"50px"}>
      <QuoteAnimation>
        <Card3D
          Imageid={AIGoals}
          Title={"Frontend AI Startup"}
          Desc={`Personalized tasks, insights, and seamless integration for
            productivity. Users input goals, track progress visually, and
            receive adaptive recommendations.`}
        />
      </QuoteAnimation>
    </VStack>
}
   
  

  </HStack>


    </VStack>
  );
}
