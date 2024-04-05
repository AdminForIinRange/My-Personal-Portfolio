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

import React, { Children } from "react";
import { useRef } from "react";

import AIGoals from "../../assets/Screenshot 2024-02-26 124604.png";
import JsLogo from "../../assets/Logos/JavaScript-logo (1).png";
import ReactLogo from "../../assets/Logos/React-icon.svg.png";
import NextJSlogo from "../../assets/Logos/nextjs-icon-2048x1234-pqycciiu.png";
import ReduxLogo from "../../assets/Logos/redux.svg";

import HTMLlogo from "../../assets/Logos/HTML5_logo_and_wordmark.svg.png";

import CSSlogo from "../../assets/Logos/CSS3_logo_and_wordmark.svg.png";

import tailwind from "../../assets/Logos/tailwind-css3232.logowik.png";
import chakraUIlogo from "../../assets/Logos/unnamed.jpg";
import MaterialUI from "../../assets/Logos/material-ui-icon-2048x1626-on580ia9.png";

import BootStrap from "../../assets/Logos/bootstrap-4-logo-png-transparent.png";
import ThreeJs from "../../assets/Logos/e4f86d2200d2d35c30f7b1494e96b9595ebc2751.png";

import Sass from "../../assets/Logos/seal-color.png";
import Jest from "../../assets/Logos/1_i37IyHf6vnhqWIA9osxU3w.png";
import Animatecss from "../../assets/Logos/2b93f700-a724-11ea-89af-e780fd85245b.png";
import FramerMotion from "../../assets/Logos/framer-motion.svg";

import Nodejs from "../../assets/Logos/node-js.png";
import Firebase from "../../assets/Logos/firebase-1-logo-png-transparent.png";

import mongoDB from "../../assets/Logos/mongodb-leaf_256x256.png";
import GrpahQL from "../../assets/Logos/GraphQL_Logo.svg.png";
import SocketIO from "../../assets/Logos/1024px-Socket-io.svg.png";
import GIT from "../../assets/Logos/Git_icon.svg.png";
import GTPApi from "../../assets/Logos/openai-white-logomark.png";
import PuppeteerJS from "../../assets/Logos/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png";
import Docker from "../../assets/Logos/97_Docker_logo_logos-512.webp";

import Vite from "../../assets/Logos/Vitejs-logo.svg";

import VSC from "../../assets/Logos/Visual_Studio_Code_1.35_icon.svg.png";
import Figma from "../../assets/Logos/1667px-Figma-logo.svg.png";
import Github from "../../assets/Logos/25231.png";

import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
export default function ProjectOneCard({
  Imageid,
  Title,
  Desc,
  WebLink,
  Gitlink,
  Stack,
  MainColor,
  SecColor,
}) {
  const {
    ReactLogoUse,
    ReduxLogoUse,
    ChakraUILogoUse,
    TailwindUse,
    FramerMotionUse,
    NodejsUse,
    FirebaseUse,
    GTPApiUse,
  } = Stack;

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
        ${Math.log(distance) * 5}deg
      )
    `;

    cardRef.current.querySelector(".glow").style.backgroundImage = `
      radial-gradient(
        circle at
        ${center.x * 2 + bounds.width / 2}px
        ${center.y * 2 + bounds.height / 2}px,
        rgb(255, 255, 255, 0.35),
        rgb(0, 0, 0, 0.25)
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
    <Box
      mb={"25px"}
      style={{
        borderRadius: "15px",
        backgroundColor: MainColor,
      }}
      className="card3d"
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Text
        textAlign={"left"}
        fontSize={{
          base: "20px",
          xsm: "20px",
          ssm: "20px",
          sm: "20px",
          md: "20px",
          lg: "20px",
          xl: "25px",
          xxl: "25px",
          xxxl: "25px",
        }}
        color={`${SecColor}.200`}
        textIndent={"10px"}
      >
        {Title}
      </Text>
      <Box p={"2%"} w={"100%"} h={"100%"}>
        <Box h={"100%"} borderRadius={"15px"}>
          <Image loading="lazy" src={Imageid} borderRadius={"10px"} />
        </Box>

        <HStack gap={"2.5%"} w={"60%"} p={"2% 0% 0% 0%"}>
          {ReactLogoUse ? (
            <VStack w={"8%"}>
              <Image loading="lazy" src={ReactLogo} />
            </VStack>
          ) : (
            <></>
          )}
          {ReduxLogoUse ? (
            <VStack w={"8%"}>
              <Image loading="lazy" src={ReduxLogo} />
            </VStack>
          ) : (
            <></>
          )}

          {ChakraUILogoUse ? (
            <VStack w={"8%"}>
              <Image loading="lazy" src={chakraUIlogo} borderRadius={"100px"} />
            </VStack>
          ) : (
            <></>
          )}

          {TailwindUse ? (
            <VStack w={"10%"}>
              <Image loading="lazy" src={tailwind} />
            </VStack>
          ) : (
            <></>
          )}

          {FramerMotionUse ? (
            <VStack w={"8%"}>
              <Image loading="lazy" src={FramerMotion} />
            </VStack>
          ) : (
            <></>
          )}

          {NodejsUse ? (
            <VStack w={"8%"}>
              <Image loading="lazy" src={Nodejs} />
            </VStack>
          ) : (
            <></>
          )}

          {FirebaseUse ? (
            <VStack w={"6%"}>
              <Image loading="lazy" src={Firebase} />
            </VStack>
          ) : (
            <></>
          )}

          {GTPApiUse ? (
            <VStack w={"8%"}>
              <Image loading="lazy" src={GTPApi} />
            </VStack>
          ) : (
            <></>
          )}
        </HStack>
      </Box>

      <div className="glow" style={{ borderRadius: "15px" }}></div>

      <HStack
        mt={"15px"}
        p={"2%"}
        align={" left"}
        w={"100%"}
        maxW={"600"}
        h={"100px"}
        bgColor={`${SecColor}.200`}
        borderRadius={"15px"}
      >
        <Text
          fontWeight={"500"}
          textAlign={"Left"}
          fontFamily={"Raleway"}
          fontSize={{
            base: "15px",
            xsm: "15px",
            ssm: "15px",
            sm: "15px",
            md: "15px",
            lg: "15px",
            xl: "15px",
            xxl: "17px",
            xxxl: "17px",
          }}
        >
          {Desc}
        </Text>
      </HStack>
      <HStack
        justify={"center"}
        w={"100%"}
        transition="transform, 0.3s ease-in-out, "
      >
        <a style={{ marginTop: "12.5px" }} target="_blank" href={WebLink}>
          <Button
            bgColor={`${SecColor}.400`}
            fontSize={"15px"}
            p={""}
            rightIcon={<ExternalLinkIcon />}
          >
            View Live Deploy
          </Button>
        </a>
        <a style={{ marginTop: "12.5px" }} target="_blank" href={Gitlink}>
          <Button
            bgColor={`${SecColor}.400`}
            fontSize={"15px"}
            p={""}
            rightIcon={<ExternalLinkIcon />}
          >
            View Github
          </Button>
        </a>
      </HStack>
    </Box>
  );
}
