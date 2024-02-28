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

//CREATE AN OBJ ELEMENT WITH NAMES AND SRC SO YOU CAN MAP OVER IT, BUT EACH
//SECTION OF THE ACCORIDAN MUST BE DIFFRENT, WITHIN THIER RESPECTIVE CATOGORY
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
import { useInView } from "framer-motion";
import { useRef } from "react";
import LeftRightAnimation from "../../components/Animations/LeftRightAnimation";
import ComponentTitles from "../../components/ComponentTitle/ComponentTitle";


export default function Skills() {
  return (
    <VStack justify="center" align="center" mt={"300px"}  id="Skills"  >
         <ComponentTitles
         mainTitle={"Acquired skills"}
         subTitle={"My Skills Sets"}
         />

   

      <Accordion
        color={"	#fff4c4"}
        mt={"100px"}
        defaultIndex={[]}
        allowMultiple
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
      >
        <LeftRightAnimation>
          <Text
            color={"	#f0d86e"}
            fontFamily={"Raleway"}
            fontSize={{
              base: "30px",
              xsm: "30px",
              ssm: "30px",
              sm: "40px",
              md: "40px",
              lg: "50px",
              xl: "50px",
              xxl: "50px",
              xxxl: "50px",
            }}
            fontWeight={700}
            p={"1% 0% 1% 0%"}
            
          >
            Front End
          </Text>
        </LeftRightAnimation>
        <AccordionItem border={" 0px"}>
          <AccordionButton
            color={"	#fff4c4"}
            fontFamily={"Raleway"}
            fontSize={"30px"}
            p={"1% 0% 1% 0%"}
          >
            <LeftRightAnimation>
              <Text
                whiteSpace={"nowrap"}
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
              >
                JavaScript Frameworks/Libraries
              </Text>
            </LeftRightAnimation>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel border={" 0px"} p={"3%"}>
            <HStack align={"end"} gap={{
           base: "40px",
           xsm: "40px",
           ssm: "40px",
           sm: "40px",
           md: "40px",
           lg: "60px",
           xl: "60px",
           xxl: "60px",
           xxxl: "60px",
         }} flexWrap={"wrap"}
         fontSize={"12px"}
         >
          
              <VStack
                transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                _hover={{
                  transform: "scale(1.03)",
                  filter: "drop-shadow(0px 0px 10px #ECC94B)",
                }}
                w={"8%"}
              >
                <Image loading="lazy" src={JsLogo} borderRadius={"10px"} />
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
                <Image loading="lazy" src={ReactLogo} />
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
                <Image loading="lazy" src={ReduxLogo} />
                <Text>Redux</Text>
              </VStack>
            </HStack>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem border={" 0px"}>
          <AccordionButton
            fontFamily={"Raleway"}
            fontSize={"30px"}
            p={"1% 0% 1% 0%"}
            color={"	#fff4c4"}
          >
            <LeftRightAnimation>
              <Text
                whiteSpace={"nowrap"}
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
              >
                Frontend Development Tools/Libraries
              </Text>
            </LeftRightAnimation>

            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel border={" 0px"}  p={"3%"} >
            <HStack align={"end"} gap={{
           base: "40px",
           xsm: "40px",
           ssm: "40px",
           sm: "40px",
           md: "40px",
           lg: "60px",
           xl: "60px",
           xxl: "60px",
           xxxl: "60px",
         }} flexWrap={"wrap"}    fontSize={"12px"}>
              <VStack
                transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                _hover={{
                  transform: "scale(1.03)",
                  filter: "drop-shadow(0px 0px 10px #ED8936)",
                }}
                w={"9.5%"}
              >
                <Image loading="lazy" src={HTMLlogo} />
                <Text>HTML</Text>
              </VStack>

              <VStack
                transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                _hover={{
                  transform: "scale(1.03)",
                  filter: "drop-shadow(0px 0px 10px #4299E1)",
                }}
                w={"7%"}
              >
                <Image loading="lazy" src={CSSlogo} />
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
                <Image loading="lazy" src={tailwind} />
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
                <Image
                  loading="lazy"
                  src={chakraUIlogo}
                  borderRadius={"100px"}
                />
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
                <Image loading="lazy" src={MaterialUI} />
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
                <Image loading="lazy" src={BootStrap} />
                <Text>Bootstrap</Text>
              </VStack>

              <VStack
                transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                _hover={{
                  transform: "scale(1.03)",
                  filter: "drop-shadow(0px 0px 10px #0BC5EA)",
                }}
              >
                <Text
                  fontWeight={"bold"}
                  fontSize={{
                    base: "15px",
                    xsm: "15px",
                    ssm: "15px",
                    sm: "15px",
                    md: "30px",
                    lg: "35px",
                    xl: "35px",
                    xxl: "40px",
                    xxxl: "40px",
                  }}
                  color={"#22b5bf"}
                >
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
                <Image loading="lazy" src={ThreeJs} />
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
                <Image loading="lazy" src={Sass} />
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
                <Image loading="lazy" src={Jest} />
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
                <Image loading="lazy" src={Animatecss} borderRadius={"30px"} />
                <Text>Animate.css</Text>
              </VStack>
              <VStack
                transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                _hover={{
                  transform: "scale(1.03)",
                  filter: "drop-shadow(0px 0px 10px #A0AEC0)",
                }}
                w={"8%"}
              >
                <Image loading="lazy" src={FramerMotion} />
                <Text textAlign={"center"}>Framer Motion</Text>
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
          sm: "90%",
          md: "90%",
          lg: "90%",
          xl: "80%",
          xxl: "70%",
          xxxl: "70%",
        }}
      >
        <Text
          fontFamily={"Raleway"}
          fontSize={{
            base: "30px",
            xsm: "30px",
            ssm: "30px",
            sm: "40px",
            md: "40px",
            lg: "50px",
            xl: "50px",
            xxl: "50px",
            xxxl: "50px",
          }}
          fontWeight={700}
          p={"1% 0% 1% 0%"}
          color={"	#f0d86e"}
        >
          <LeftRightAnimation>Backend</LeftRightAnimation>
        </Text>

        <AccordionItem border={" 0px"}>
          <AccordionButton
            fontFamily={"Raleway"}
            fontSize={"30px"}
            p={"1% 0% 1% 0%"}
            color={"	#fff4c4"}
          >
            <LeftRightAnimation>
              <Text
                whiteSpace={"nowrap"}
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
              >
                Backend Technologies/Tools
              </Text>
            </LeftRightAnimation>

            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel border={" 0px"} p={"3%"}>
            <HStack align={"end"} gap={{
           base: "40px",
           xsm: "40px",
           ssm: "40px",
           sm: "40px",
           md: "40px",
           lg: "60px",
           xl: "60px",
           xxl: "60px",
           xxxl: "60px",
         }} flexWrap={"wrap"}    fontSize={"12px"}>
              <VStack
                transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                _hover={{
                  transform: "scale(1.03)",
                  filter: "drop-shadow(0px 0px 10px #48BB78)",
                }}
                w={"8%"}
              >
                <Image loading="lazy" src={Nodejs} />
                <Text>Nodejs</Text>
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
                  fontSize={{
                    base: "25px",
                    xsm: "25px",
                    ssm: "35px",
                    sm: "45px",
                    md: "50px",
                    lg: "65px",
                    xl: "75px",
                    xxl: "80px",
                    xxxl: "80px",
                  }}
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
                <Image loading="lazy" src={Firebase} />
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
                <Image loading="lazy" src={mongoDB} />
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
                <Image loading="lazy" src={GrpahQL} />
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
                <Image loading="lazy" src={SocketIO} />
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
                <Image loading="lazy" src={GIT} />
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
                <Image loading="lazy" src={GTPApi} />
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
                <Image loading="lazy" src={PuppeteerJS} />
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
                <Image loading="lazy" src={Docker} />
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
          sm: "90%",
          md: "90%",
          lg: "90%",
          xl: "80%",
          xxl: "70%",
          xxxl: "70%",
        }}
      >
        <Text
          fontFamily={"Raleway"}
          fontSize={{
            base: "30px",
            xsm: "30px",
            ssm: "30px",
            sm: "40px",
            md: "40px",
            lg: "50px",
            xl: "50px",
            xxl: "50px",
            xxxl: "50px",
          }}
          fontWeight={700}
          p={"1% 0% 1% 0%"}
          color={"	#f0d86e"}
        >
          <LeftRightAnimation>Extra</LeftRightAnimation>
        </Text>

        <AccordionItem border={" 0px"}>
          <AccordionButton
            fontFamily={"Raleway"}
            fontSize={"30px"}
            p={"1% 0% 1% 0%"}
            color={"	#fff4c4"}
          >
            <LeftRightAnimation>
              <Text
                whiteSpace={"nowrap"}
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
              >
                {" "}
                Extra workplace/development tools
              </Text>
            </LeftRightAnimation>

            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel border={" 0px"} p={"3%"}>
            <HStack align={"end"} gap={{
           base: "40px",
           xsm: "40px",
           ssm: "40px",
           sm: "40px",
           md: "40px",
           lg: "60px",
           xl: "60px",
           xxl: "60px",
           xxxl: "60px",
         }} flexWrap={"wrap"}    fontSize={"12px"} >
              <VStack
                transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                _hover={{
                  transform: "scale(1.03)",
                  filter: "drop-shadow(0px 0px 10px #9F7AEA)",
                }}
                w={"8%"}
              >
                <Image loading="lazy" src={Vite} />
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
                <Image loading="lazy" src={VSC} />
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
                <Image loading="lazy" src={Figma} />
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
