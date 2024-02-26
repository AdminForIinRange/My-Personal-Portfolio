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
  Textarea,
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

import youtube from "../assets/Logos/youtube.png";

import linkden from "../assets/Logos/apps.21465.9007199266245564.5c86c318-51bf-425a-9b3d-75e1fd3198b1.png";

import Gmail from "../assets/Logos/Gmail_icon_(2020).svg.webp";

import LinkdenScreenShot from "../assets/linkdenScreenShot.png";
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

export default function Contact() {
  return (
    <VStack align="center" mt={"200px"}>
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
            fontSize="50px"
            color={"	#f0d86e"}
          >
            Reach Out
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
            Contact Me
          </Text>
        </QuoteAnimation>
      </VStack>

      <HStack
        flexWrap={{
          base: "wrap",
          xsm: "wrap",
          ssm: "nowrap",
          sm: "nowrap",
          md: "nowrap",
          lg: "nowrap",
          xl: "nowrap",
          xxl: "nowrap",
          xxxl: "nowrap",
        }}
        fontFamily={"Raleway"}
        justify={"center"}
        align={"start"}
        mt={"100px"}
        gap={{
          base: "30px",
          xsm: "30px",
          ssm: "30px",
          sm: "40px",
          md: "40px",
          lg: "40px",
          xl: "50px",
          xxl: "50px",
          xxxl: "50px",
        }}
        w={{
          base: "90%",
          xsm: "90%",
          ssm: "90%",
          sm: "80%",
          md: "80%",
          lg: "80%",
          xl: "70%",
          xxl: "70%",
          xxxl: "70%",
        }}
        fontSize={{
          base: "13px",
          xsm: "13px",
          ssm: "13px",
          sm: "13px",
          md: "13px",
          lg: "14px",
          xl: "17px",
          xxl: "30px",
          xxxl: "20px",
        }}
      >
        <VStack align={"center"} w={"100%"}>
          <QuoteAnimation>
            <Text textAlign={"left"} color={"	#f0d86e"} mt={"30px"}>
              Let's collaborate to create dynamic and user-friendly web
              solutions tailored to your needs.
            </Text>


<HStack  w={"120%"} justify={"center"}>   <Divider  mt={"10px"} borderColor={"wheat"} />
<Text color={"wheat"} ml={"20px"} fontWeight={"600"}>
    or
</Text>

</HStack>
         

            <Text textAlign={"left"} color={"	#f0d86e"} mt={"30px"} fontSize={"25px"}>
                <HStack gap={"10px"}>
                <Image src={Gmail} w={"4%"} />
               
              <a  target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=bhattaraianjesh123@gmail.com">
                {" "}
                <Text as={"span"} textDecorationLine={"underline"}>
                  {" "}
                  bhattaraianjesh123@gmail.com{" "}
                </Text>{" "}
              </a>
              </HStack>
            </Text>

            <Text textAlign={"left"} color={"	#f0d86e"} mt={"30px"} fontSize={"25px"}>
                <HStack gap={"10px"}>
                <Image src={linkden} w={"4%"} />
               
              <a target="_blank" href="https://www.linkedin.com/in/anjesh-bhattarai/">
                {" "}
                <Text as={"span"} textDecorationLine={"underline"}>
                  {" "}
                 anjesh-bhattarai
                </Text>{" "}
              </a>
              </HStack>
            </Text>
          </QuoteAnimation>
        </VStack>

        <VStack align={"left"} w={"100%"}>
          <QuoteAnimation>
            <VStack>
              <QuoteAnimation>
                <VStack
                  color={"white"}
                  w={"400px"}
                  h={"100%"}
                  borderRadius={"15px"}
                >
                  <FormControl>
                    <FormLabel htmlFor="name"> Name</FormLabel>
                    <Input
                      transition="transform, 0.3s ease-in-out"
                      _hover={{
                        transform: "scale(1.03)",
                        filter: "drop-shadow(0px 0px 10px #ECC94B)",
                      }}
                      id="name"
                      type="name"
                      w={"100%"}
                      required
                      value={""}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </FormControl>
                  <FormControl mt={"20px"}>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input
                      transition="transform, 0.3s ease-in-out"
                      _hover={{
                        transform: "scale(1.03)",
                        filter: "drop-shadow(0px 0px 10px #ECC94B)",
                      }}
                      id="email"
                      type="email"
                      required
                      autoComplete="current-email"
                      w={"100%"}
                      value={""}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormControl>
                  <FormControl mt={"20px"}>
                    <FormLabel htmlFor="message">Message</FormLabel>
                    <Textarea
                      transition="transform, 0.3s ease-in-out"
                      _hover={{
                        transform: "scale(1.03)",
                        filter: "drop-shadow(0px 0px 10px #ECC94B)",
                      }}
                      id="message"
                      type="message"
                      required
                      autoComplete="current-message"
                      w={"100%"}
                      value={""}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </FormControl>

                  <Button mt={"10px"} type="submit">
                    Send
                  </Button>
                </VStack>
              </QuoteAnimation>
            </VStack>

            <VStack mt={"10px"}>
              <HStack gap={"40px"} fontSize={"40px"} color="#f0d86e"></HStack>
            </VStack>
          </QuoteAnimation>
        </VStack>
      </HStack>
    </VStack>
  );
}
