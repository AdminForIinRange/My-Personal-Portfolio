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

import youtube from "../../assets/Logos/youtube.png";

import linkden from "../../assets/Logos/apps.21465.9007199266245564.5c86c318-51bf-425a-9b3d-75e1fd3198b1.png";

import Gmail from "../../assets/Logos/Gmail_icon_(2020).svg.webp";

import LinkdenScreenShot from "../../assets/linkdenScreenShot.png";

import LeftRightAnimation from "../../components/Animations/LeftRightAnimation";
import ComponentTitles from "../../components/ComponentTitle/ComponentTitle";
import { useDispatch } from 'react-redux';
import { ContactMe } from "../../features/modal/FormSlice";

export default function Contact() {
  const dispatch = useDispatch();

const [name, setName] =  useState()
const [email, setEmail] = useState() 
const [message, setMessage] = useState()

const [submited, setSubmited ] = useState(false)


const onSubmit = (e) => {
  e.preventDefault();
  dispatch(ContactMe({ name, email, message }));
  // Resetting form fields
  setName('');
  setEmail('');
  setMessage('');
  setSubmited(true)

  // Additional logic...
};



  return (
    <VStack align="center" mt={"200px"} id="Contact">
      <ComponentTitles mainTitle={"Reach Out"} subTitle={"Contact Me"} />

      <HStack
        flexWrap={{
          base: "wrap",
          xsm: "wrap",
          ssm: "wrap",
          sm: "wrap",
          md: "nowrap",
          lg: "nowrap",
          xl: "nowrap",
          xxl: "nowrap",
          xxxl: "nowrap",
        }}
        fontFamily={"Raleway"}
        justify={"center"}
        align={"start"}
        mt={{
          base: "0px",
          xsm: "00px",
          ssm: "30px",
          sm: "40px",
          md: "40px",
          lg: "40px",
          xl: "50px",
          xxl: "50px",
          xxxl: "50px",
        }}
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
          base: "15.5px",
          xsm: "15.5px",
          ssm: "15.5px",
          sm: "15.5px",
          md: "15.5px",
          lg: "15.5px",
          xl: "15.5px",
          xxl: "22.5px",
          xxxl: "22.5px",
        }}
      >
        <VStack align={"center"} w={"100%"}>
          <LeftRightAnimation>
            <Text textAlign={"left"} color={"	#f0d86e"} mt={"30px"}>
              Let's collaborate to create dynamic and user-friendly web
              solutions tailored to your needs.
            </Text>

            <HStack w={"100%"} justify={"center"}>
              {" "}
              <Divider mt={"10px"} borderColor={"wheat"} />
            </HStack>

            <Text
              textAlign={"left"}
              color={"	#f0d86e"}
              mt={"30px"}
              fontSize={"15px"}
            >
              <HStack gap={"10px"}>
                <Image src={Gmail} w={"4%"} />

                <a
                  target="_blank"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=bhattaraianjesh123@gmail.com"
                >
                  {" "}
                  <Text as={"span"} textDecorationLine={"underline"}>
                    {" "}
                    bhattaraianjesh123@gmail.com{" "}
                  </Text>{" "}
                </a>
              </HStack>
            </Text>

            <Text
              textAlign={"left"}
              color={"	#f0d86e"}
              mt={"30px"}
              fontSize={"15px"}
            >
              <HStack gap={"10px"}>
                <Image src={linkden} w={"4%"} />

                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/anjesh-bhattarai/"
                >
                  {" "}
                  <Text as={"span"} textDecorationLine={"underline"}>
                    {" "}
                    anjesh-bhattarai
                  </Text>{" "}
                </a>
              </HStack>
            </Text>
          </LeftRightAnimation>
        </VStack>

        <VStack align={"left"} w={"100%"}>
          <VStack>
            <VStack
            
              color={"	#f0d86e"}
              w={"400px"}
              h={"100%"}
              borderRadius={"15px"}
              p={{
                base: "9",
                xsm: "9",
                ssm: "5",
                sm: "0",
                md: "0",
                lg: "0",
                xl: "0",
                xxl: "0",
                xxxl: "0",
              }}
            >
             <form onSubmit={onSubmit} style={{width:'100%'}} >

       
              <FormControl>
                <FormLabel htmlFor="name"> Name</FormLabel>
                <Input
                  borderColor={"	#f0d86e"}
                  transition="transform, 0.3s ease-in-out"
                  _hover={{
                    transform: "scale(1.03)",
                    filter: "drop-shadow(0px 0px 10px #ECC94B)",
                  }}
                  id="name"
                  type="name"
                  w={"100%"}
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
              <FormControl mt={"20px"}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  borderColor={"	#f0d86e"}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl mt={"20px"}>
                <FormLabel htmlFor="message">Message</FormLabel>
                <Textarea
                  borderColor={"	#f0d86e"}
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
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </FormControl>

              <Button  w={"100%"} mt={"10px"} type="submit" bgColor={submited ? "green.400":"	#f0d86e"}>
             { submited ? <> Thank you 😄 </> :  "Send"}
              </Button>
              </form>
            </VStack>
          </VStack>

          <VStack mt={"10px"}>
            <HStack gap={"40px"} fontSize={"40px"} color="#f0d86e"></HStack>
          </VStack>
        </VStack>
      </HStack>
    </VStack>
  );
}
