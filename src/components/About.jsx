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



  function QuoteAnimation({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref);
 
    return (
      <Box
       
        ref={ref}
        className={isInView ? "animate__animated animate__fadeInLeft animate__fast " : "animate__animated animate__fadeOutLeft animate__fast"}
        
      >
        {children}
      </Box>
    );
  }



export default function About() {
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
          fontFamily={"Corben"}
          fontSize="35px"
          color={"	#f0d86e"}
          
        >
          Hi, Welcome
        </Text>
        
        </QuoteAnimation>
        <QuoteAnimation>
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
         
        >
          About me
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
          xxl: "20px",
          xxxl: "20px",
        }}
      >

        
        <VStack align={"center"} w={"100%"}>

        <QuoteAnimation>
          <Box bgColor={"wheat"} w={"100%"} h={"300px"} borderRadius={"15px"}  />

          <Text  color={"	#f0d86e"} mt={"30px"} >
            As a self-taught full-stack web developer with a special focus
            on frontend development, I bring together my diverse experiences and
            skills to craft captivating user interfaces and seamless web
            experiences.
          </Text>
          </QuoteAnimation>
        </VStack>

        <VStack align={"center"} w={"100%"}>
        <QuoteAnimation>
          <Text  color={"	#f0d86e"} mb={"30px"}>
        My dad bought a Windows XP computer me at
            5 yrs of age, I immersed myself in its UI/UX. At 14, I started coding with Unity,
            and later discovering my passion for Web development.
            <br />
            <br />
            Despite graduating high school with two scholarships, I found myself
            drawn more towards the self-taught path, I found my true learning
            path through self-teaching.
          </Text>

          <Box bgColor={"wheat"} w={"100%"} h={"200px"} borderRadius={"15px"} />
          </QuoteAnimation>
        </VStack>
      </HStack>
    </VStack>
  );
}
