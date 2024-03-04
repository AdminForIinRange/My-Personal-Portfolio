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
import Draggable from "react-draggable";
import Vite from "../../assets/Logos/Vitejs-logo.svg";

import VSC from "../../assets/Logos/Visual_Studio_Code_1.35_icon.svg.png";
import Figma from "../../assets/Logos/1667px-Figma-logo.svg.png";
import Github from "../../assets/Logos/25231.png";

import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import ProjectOneCard from "../../components/3DCardEffect/ProjectOneCard";
import LeftRightAnimation from "../../components/Animations/LeftRightAnimation";

import useScreenSize from "../../hook/useScreenSize";
import ComponentTitles from "../../components/ComponentTitle/ComponentTitle";

import TutoringSite from "../../assets/Screenshot 2024-03-03 185041.png";

export default function Projects() {
  const PorjectOne = {
    ReactLogoUse: true,
    ReduxLogoUse: true,
    ChakraUILogoUse: true,
    TailwindUse: true,
    FramerMotionUse: true,
    NodejsUse: true,
    FirebaseUse: true,
    GTPApiUse: false,
  };

  const PorjectTwo = {
    ReactLogoUse: true,
    ReduxLogoUse: true,
    ChakraUILogoUse: true,
    TailwindUse: false,
    FramerMotionUse: false,
    NodejsUse: true,
    FirebaseUse: true,
    GTPApiUse: false,
  };

  const { isSmallScreen } = useScreenSize(); // Custom hook for handling screen size

  return (
    <VStack justify="center" align="center" mt={"200px"} id="Projects">
      <ComponentTitles mainTitle={"Check it out"} subTitle={"Projects"} />

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
        {isSmallScreen ? (
          <>
            <VStack minW={"350px"} maxW={"450px"} align={"left"} mb={"50px"}>
              <LeftRightAnimation>
                <ProjectOneCard
                  Stack={PorjectOne}
                  Gitlink={"https://github.com/AdminForIinRange/AIgoals"}
                  WebLink={"https://aigoals.web.app/"}
                  Imageid={AIGoals}
                  Title={"Frontend AI Startup"}
                  Desc={`AIGoals is an engaging frontend application crafted for pure enjoyment. Born out of a spirit of playful exploration, this project embodies the essence of modern tech-startup culture.`}
                  MainColor={"rgb(107,70,193, 1)"}
                  SecColor={"purple"}
                />
              </LeftRightAnimation>
            </VStack>
            <VStack minW={"350px"} maxW={"450px"} align={"left"} mb={"50px"}>
              <LeftRightAnimation>
                <ProjectOneCard
                  Stack={PorjectTwo}
                  Gitlink={"https://github.com/AdminForIinRange/Tutoring-Website"}
                  WebLink={"https://tutorsite-68141.web.app/"}
                  Imageid={TutoringSite}
                  Title={"Tutoring Site Landing Page"}
                  Desc={`I developed a tutor landing page as a personal project for fun, experimenting with different technologies and frameworks just for the joy of learning and creating.`}
                  MainColor={"teal"}
                  SecColor={"gray"}
                />
              </LeftRightAnimation>
            </VStack>
          </>
        ) : (
          <>
            <VStack minW={"350px"} maxW={"600px"} align={"left"} mb={"50px"}>
              <LeftRightAnimation>
                <ProjectOneCard
                  Stack={PorjectOne}
                  OnReactLogo={"true"}
                  Gitlink={"https://github.com/AdminForIinRange/AIgoals"}
                  WebLink={"https://aigoals.web.app/"}
                  Imageid={AIGoals}
                  Title={"Frontend AI Startup"}
                  Desc={`AIGoals is an engaging frontend application crafted for pure enjoyment. Born out of a spirit of playful exploration, this project embodies the essence of modern tech-startup culture.`}
                  MainColor={"rgb(107,70,193, 1)"}
                  SecColor={"purple"}
                />
              </LeftRightAnimation>
            </VStack>
            <VStack minW={"350px"} maxW={"600px"} align={"left"} mb={"50px"}>
              <LeftRightAnimation>
                <ProjectOneCard
                  Stack={PorjectTwo}
                  Gitlink={"https://github.com/AdminForIinRange/Tutoring-Website"}
                  WebLink={"https://tutorsite-68141.web.app/"}
                  Imageid={TutoringSite}
                  Title={"Tutoring Site Landing Page"}
                  Desc={`I developed a tutor landing page as a personal project for fun, experimenting with different technologies and frameworks just for the joy of learning and creating.`}
                  MainColor={"teal"}
                  SecColor={"gray"}
                />
              </LeftRightAnimation>
            </VStack>
          </>
        )}
      </HStack>
    </VStack>
  );
}
