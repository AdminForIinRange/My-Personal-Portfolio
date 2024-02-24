import React, { useState } from "react";
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

//CREATE AN OBJ ELEMENT WITH NAMES AND SRC SO YOU CAN MAP OVER IT, BUT EACH
//SECTION OF THE ACCORIDAN MUST BE DIFFRENT, WITHIN THIER RESPECTIVE CATOGORY
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

export default function Skills() {
  return (
    <VStack justify="center" align="center" mt={"300px"}>
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
          xxxl: "70%",
        }}
        align="left"
        justify="center"
        mt="100px"
        textShadow="0px 0px 50px black"
      >
        <Text
          textAlign={"left"}
          fontFamily={"Corben"}
          fontSize="35px"
          color={"	#f0d86e"}
          className="animate__animated animate__fadeInDown"
        >
          Acquired skills
        </Text>
        <Text
          fontFamily={"Corben"}
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
            xxl: "110px",
            xxxl: "120px",
          }}
          whiteSpace="nowrap"
          className="animate__animated animate__fadeInUp"
        >
          My Skills Sets
        </Text>
      </VStack>

      <Accordion
        color={"	#fff4c4"}
        mt={"100px"}
        defaultIndex={[]}
        allowMultiple
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
      >
        <Text
          color={"	#f0d86e"}
          fontFamily={"Corben"}
          fontSize={"50px"}
          fontWeight={700}
          p={"1% 0% 1% 0%"}
        >
          Front End
        </Text>
        <AccordionItem border={" 0px"}>
          <AccordionButton
            color={"	#fff4c4"}
            fontFamily={"Corben"}
            fontSize={"30px"}
            p={"1% 0% 1% 0%"}
          >
            JavaScript Frameworks/Libraries
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel border={" 0px"} p={"3%"}>
            <HStack align={"end"} gap={"120px"} flexWrap={"wrap"}>
              <VStack
                transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                _hover={{
                  transform: "scale(1.03)",
                  filter: "drop-shadow(0px 0px 10px #ECC94B)",
                }}
                w={"8%"}
              >
                <Image src={JsLogo} borderRadius={"10px"} />
                <Text>JavaScript</Text>
              </VStack>

              <VStack
                transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                _hover={{
                  transform: "scale(1.03)",
                  filter: "drop-shadow(0px 0px 10px #0BC5EA)",
                }}
                w={"8%"}
              >
                <Image src={ReactLogo} />
                <Text>React</Text>
              </VStack>

              <VStack
                transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                _hover={{
                  transform: "scale(1.03)",
                  filter: "drop-shadow(0px 0px 10px #A0AEC0)",
                }}
                w={"10%"}
              >
                <Image
                  src={NextJSlogo}
                  style={{ filter: "brightness(0) invert(1)" }}
                />
                <Text>Next.js</Text>
              </VStack>

              <VStack
                transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                _hover={{
                  transform: "scale(1.03)",
                  filter: "drop-shadow(0px 0px 10px #9F7AEA)",
                }}
                w={"8%"}
              >
                <Image src={ReduxLogo} />
                <Text>Redux</Text>
              </VStack>
            </HStack>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem border={" 0px"}>
          <AccordionButton
            fontFamily={"Corben"}
            fontSize={"30px"}
            p={"1% 0% 1% 0%"}
            color={"	#fff4c4"}
          >
            Frontend Development Tools/Libraries
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel border={" 0px"} p={"3%"}>
            <HStack align={"end"} gap={"120px"} flexWrap={"wrap"}>
              <VStack
                transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                _hover={{
                  transform: "scale(1.03)",
                  filter: "drop-shadow(0px 0px 10px #ED8936)",
                }}
                w={"8%"}
              >
                <Image src={HTMLlogo} />
                <Text>HTML</Text>
              </VStack>

              <VStack
                transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                _hover={{
                  transform: "scale(1.03)",
                  filter: "drop-shadow(0px 0px 10px #4299E1)",
                }}
                w={"5.8%"}
              >
                <Image src={CSSlogo} />
                <Text>CSS</Text>
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
                <Text>Tailwind CSS</Text>
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
                <Text>Chakra UI</Text>
              </VStack>

              <VStack
                transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                _hover={{
                  transform: "scale(1.03)",
                  filter: "drop-shadow(0px 0px 10px #4299E1)",
                }}
                w={"8%"}
              >
                <Image src={MaterialUI} />
                <Text>Material UI</Text>
              </VStack>

              <VStack
                transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                _hover={{
                  transform: "scale(1.03)",
                  filter: "drop-shadow(0px 0px 10px #9F7AEA)",
                }}
                w={"8%"}
              >
                <Image src={BootStrap} />
                <Text>Bootstrap</Text>
              </VStack>

              <VStack
                transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                _hover={{
                  transform: "scale(1.03)",
                  filter: "drop-shadow(0px 0px 10px #0BC5EA)",
                }}
              >
                <Text fontWeight={"bold"} fontSize={"40px"} color={"#22b5bf"}>
                  {"<ReCharts />"}
                </Text>
                <Text>ReCharts</Text>
              </VStack>

              <VStack
                transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                _hover={{
                  transform: "scale(1.03)",
                  filter: "drop-shadow(0px 0px 10px #A0AEC0)",
                }}
                w={"8%"}
              >
                <Image src={ThreeJs} />
                <Text>Three.js</Text>
              </VStack>

              <VStack
                transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                _hover={{
                  transform: "scale(1.03)",
                  filter: "drop-shadow(0px 0px 10px #ED64A6)",
                }}
                w={"8%"}
              >
                <Image src={Sass} />
                <Text>Sass</Text>
              </VStack>

              <VStack
                transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                _hover={{
                  transform: "scale(1.03)",
                  filter: "drop-shadow(0px 0px 10px #ED64A6)",
                }}
                w={"8%"}
              >
                <Image src={Jest} />
                <Text>Jest</Text>
              </VStack>

              <VStack
                transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                _hover={{
                  transform: "scale(1.03)",
                  filter: "drop-shadow(0px 0px 10px #A0AEC0)",
                }}
                w={"8%"}
              >
                <Image src={Animatecss} borderRadius={"30px"} />
                <Text>Animate.css</Text>
              </VStack>
            </HStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Accordion
        color={"	#fff4c4"}
        mt={"100px"}
        defaultIndex={[]}
        allowMultiple
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
      >
        <Text
          fontFamily={"Corben"}
          fontSize={"50px"}
          fontWeight={700}
          p={"1% 0% 1% 0%"}
          color={"	#f0d86e"}
        >
          Backend
        </Text>

        <AccordionItem border={" 0px"}>
          <AccordionButton
            fontFamily={"Corben"}
            fontSize={"30px"}
            p={"1% 0% 1% 0%"}
            color={"	#fff4c4"}
          >
            Backend Technologies/Tools
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel border={" 0px"} p={"3%"}>
            <HStack align={"end"} gap={"120px"} flexWrap={"wrap"}>
              <VStack
                transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                _hover={{
                  transform: "scale(1.03)",
                  filter: "drop-shadow(0px 0px 10px #48BB78)",
                }}
                w={"8%"}
              >
                <Image src={Nodejs} />
                <Text>Firebase</Text>
              </VStack>

              <VStack
                transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                _hover={{
                  transform: "scale(1.03)",
                  filter: "drop-shadow(0px 0px 10px #A0AEC0)",
                }}
                w={"8%"}
              >
                <Text
                  fontWeight={"100"}
                  fontFamily={"Raleway"}
                  fontSize={"80px"}
                  color={"white"}
                >
                  {`Ex`}
                </Text>
                <Text>Express</Text>
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
                <Text>Firebase</Text>
              </VStack>

              <VStack
                transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                _hover={{
                  transform: "scale(1.03)",
                  filter: "drop-shadow(0px 0px 10px #48BB78)",
                }}
                w={"8%"}
              >
                <Image src={mongoDB} />
                <Text>MongoDB</Text>
              </VStack>

              <VStack
                transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                _hover={{
                  transform: "scale(1.03)",
                  filter: "drop-shadow(0px 0px 10px #ED64A6)",
                }}
                w={"8%"}
              >
                <Image src={GrpahQL} />
                <Text>GraphQL</Text>
              </VStack>

              <VStack
                transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                _hover={{
                  transform: "scale(1.03)",
                  filter: "drop-shadow(0px 0px 10px #A0AEC0)",
                }}
                w={"8%"}
              >
                <Image src={SocketIO} />
                <Text>Socket.IO</Text>
              </VStack>

              <VStack
                transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                _hover={{
                  transform: "scale(1.03)",
                  filter: "drop-shadow(0px 0px 10px #ED8936)",
                }}
                w={"8%"}
              >
                <Image src={GIT} />
                <Text>GIT</Text>
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
                <Text>GTP API</Text>
              </VStack>

              <VStack
                transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                _hover={{
                  transform: "scale(1.03)",
                  filter: "drop-shadow(0px 0px 10px #48BB78)",
                }}
                w={"6%"}
              >
                <Image src={PuppeteerJS} />
                <Text>PuppeteerJS</Text>
              </VStack>

              <VStack
                transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                _hover={{
                  transform: "scale(1.03)",
                  filter: "drop-shadow(0px 0px 10px #4299E1)",
                }}
                w={"8%"}
              >
                <Image src={Docker} />
                <Text>Docker</Text>
              </VStack>
            </HStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Accordion
        color={"	#fff4c4"}
        mt={"100px"}
        defaultIndex={[]}
        allowMultiple
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
      >
        <Text
          fontFamily={"Corben"}
          fontSize={"50px"}
          fontWeight={700}
          p={"1% 0% 1% 0%"}
          color={"	#f0d86e"}
        >
          Extra
        </Text>

        <AccordionItem border={" 0px"}>
          <AccordionButton
            fontFamily={"Corben"}
            fontSize={"30px"}
            p={"1% 0% 1% 0%"}
            color={"	#fff4c4"}
          >
            Extra workplace/development tools
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel border={" 0px"} p={"3%"}>
            <HStack align={"end"} gap={"120px"} flexWrap={"wrap"}>
              <VStack
                transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                _hover={{
                  transform: "scale(1.03)",
                  filter: "drop-shadow(0px 0px 10px #9F7AEA)",
                }}
                w={"8%"}
              >
                <Image src={Vite} />
                <Text>Vite</Text>
              </VStack>

              <VStack
                transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                _hover={{
                  transform: "scale(1.03)",
                  filter: "drop-shadow(0px 0px 10px #4299E1)",
                }}
                w={"6.5%"}
              >
                <Image src={VSC} />
                <Text>VSC</Text>
              </VStack>

              <VStack
                transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                _hover={{
                  transform: "scale(1.03)",
                  filter: "drop-shadow(0px 0px 10px #A0AEC0)",
                }}
                w={"4.5%"}
              >
                <Image src={Figma} />
                <Text>Figma</Text>
              </VStack>

              <VStack
                transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                _hover={{
                  transform: "scale(1.03)",
                  filter: "drop-shadow(0px 0px 10px #A0AEC0)",
                }}
                w={"8%"}
              >
                <Image
                  src={Github}
                  style={{ filter: "brightness(0) invert(1)" }}
                />
                <Text>Github</Text>
              </VStack>
            </HStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </VStack>
  );
}
