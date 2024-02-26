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

import Vite from "../assets/Logos/Vitejs-logo.svg";

import VSC from "../assets/Logos/Visual_Studio_Code_1.35_icon.svg.png";
import Figma from "../assets/Logos/1667px-Figma-logo.svg.png";
import Github from "../assets/Logos/25231.png";

import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

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
  const cardRef = useRef(null);
  let bounds;

  function rotateToMouse(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2,
    };
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    cardRef.current.style.transform = `
      scale3d(1.07, 1.07, 1.07)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 7}deg
      )
    `;

    cardRef.current.querySelector(".glow").style.backgroundImage = `
      radial-gradient(
        circle at
        ${center.x * 2 + bounds.width / 2}px
        ${center.y * 2 + bounds.height / 2}px,
        #fffff555,
        #0000000f
      )
    `;
  }

  function handleMouseEnter() {
    bounds = cardRef.current.getBoundingClientRect();
    document.addEventListener("mousemove", rotateToMouse);
  }

  function handleMouseLeave() {
    document.removeEventListener("mousemove", rotateToMouse);
    cardRef.current.style.transform = "";
    cardRef.current.querySelector(".glow").style.backgroundImage = "";
  }
  return (
    <VStack justify="center" align="center" mt={"200px"}>
      <VStack
        w={{
          base: "90%",
          xsm: "90%",
          ssm: "90%",
          sm: "80%",
          md: "80%",
          lg: "80%",
          xl: "70%",
          xxl: "70%",
          xxxl: "90%",
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
            fontSize="50px"
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
              base: "20px",
              xsm: "20px",
              ssm: "20px",
              sm: "40px",
              md: "40px",
              lg: "60px",
              xl: "80px",
              xxl: "120px",
              xxxl: "130px",
            }}
            whiteSpace="nowrap"
          >
            Projects
          </Text>
        </QuoteAnimation>
      </VStack>

      <HStack
        fontFamily={"Raleway"}
        justify={"center"}
        align={"start"}
        mt={"100px"}
      >
        
        <VStack align={"left"} w={"100%"}>
          <QuoteAnimation>
            <div
              style={{
                borderRadius: "15px",
                backgroundColor: " rgb(107,70,193, 0.5)",
              }}
              className="card3d"
              ref={cardRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Text
                textAlign={"left"}
                fontSize={"30px"}
                color={"purple.200"}
                textIndent={"10px"}
              >
                AI Goals
              </Text>
              <Box p={"2%"} w={"600px"} h={"100%"}>
                <Box h={"100%"} borderRadius={"15px"}>
                  <Image src={AIGoals} borderRadius={"10px"} />
                </Box>

                <HStack gap={"2.5%"} w={"60%"} p={"2% 0% 0% 0%"}>
                  <VStack
                    transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                    _hover={{
                      transform: "scale(1.03)",
                      filter: "drop-shadow(0px 0px 10px #0BC5EA)",
                    }}
                    w={"8%"}
                  >
                    <Image src={ReactLogo} />
                  </VStack>

                  <VStack
                    transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                    _hover={{
                      transform: "scale(1.03)",
                      filter: "drop-shadow(0px 0px 10px #0BC5EA)",
                    }}
                    w={"8%"}
                  >
                    <Image src={ReduxLogo} />
                  </VStack>

                  <VStack
                    transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                    _hover={{
                      transform: "scale(1.03)",
                      filter: "drop-shadow(0px 0px 10px #0BC5EA)",
                    }}
                    w={"8%"}
                  >
                    <Image src={chakraUIlogo} borderRadius={"100px"} />
                  </VStack>
                  <VStack
                    transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                    _hover={{
                      transform: "scale(1.03)",
                      filter: "drop-shadow(0px 0px 10px #0BC5EA)",
                    }}
                    w={"10%"}
                  >
                    <Image src={tailwind} />
                  </VStack>

                  <VStack
                    transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                    _hover={{
                      transform: "scale(1.03)",
                      filter: "drop-shadow(0px 0px 10px #A0AEC0)",
                    }}
                    w={"8%"}
                  >
                    <Image src={FramerMotion} />
                  </VStack>

                  <VStack
                    transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                    _hover={{
                      transform: "scale(1.03)",
                      filter: "drop-shadow(0px 0px 10px #48BB78)",
                    }}
                    w={"8%"}
                  >
                    <Image src={Nodejs} />
                  </VStack>

                  <VStack
                    transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                    _hover={{
                      transform: "scale(1.03)",
                      filter: "drop-shadow(0px 0px 10px #ECC94B)",
                    }}
                    w={"6%"}
                  >
                    <Image src={Firebase} />
                  </VStack>

                  <VStack
                    transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                    _hover={{
                      transform: "scale(1.03)",
                      filter: "drop-shadow(0px 0px 10px #A0AEC0)",
                    }}
                    w={"8%"}
                  >
                    <Image src={GTPApi} />
                  </VStack>
                </HStack>
              </Box>

              <div className="glow" style={{ borderRadius: "15px" }}></div>
            </div>
            <HStack w={"25%"}>
              <a
                style={{ marginTop: "12.5px" }}
                target="_blank"
                href="https://aigoals.web.app"
              >
                <Button
                  fontSize={"15px"}
                  p={""}
                  rightIcon={<ExternalLinkIcon />}
                >
                  View Live Deploy
                </Button>
              </a>
              <a
                style={{ marginTop: "12.5px" }}
                target="_blank"
                href="https://github.com/AdminForIinRange/AIgoals"
              >
                <Button
                  fontSize={"15px"}
                  p={""}
                  rightIcon={<ExternalLinkIcon />}
                >
                  View Github
                </Button>
              </a>
            </HStack>
          </QuoteAnimation>
        </VStack>
      </HStack>
    </VStack>
  );
}
