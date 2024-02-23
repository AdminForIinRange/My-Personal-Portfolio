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
export default function About() {
  return (
    <VStack justify="center" align="center">
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
          color={"wheat"}
          className="animate__animated animate__fadeInDown"
        >
          Hi, Welcome
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
          About me
        </Text>
      </VStack>

      <HStack
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
          base: "10px",
          xsm: "10px",
          ssm: "10px",
          sm: "10px",
          md: "12px",
          lg: "14px",
          xl: "17px",
          xxl: "17px",
          xxxl: "17px",
        }}
      >
        <VStack align={"center"} w={"100%"}>
          <Box bgColor={"wheat"} w={"100%"} h={"300px"} borderRadius={"15px"} />

          <Text color={"wheat"} mt={"10px"}>
            Now, as a self-taught full-stack web developer with a special focus
            on frontend development, I bring together my diverse experiences and
            skills to craft captivating user interfaces and seamless web
            experiences.
          </Text>
        </VStack>

        <VStack align={"center"} w={"100%"}>
          <Text color={"wheat"} mb={"10px"}>
            Growing up in Adalaide, my dad bought a Windows XP computer me at
            5yrs of age, I immersed myself in its interface and games, sparking
            my interest in technology. At 14, I started coding with Unity,
            discovering my passion for game development.
            <br />
            <br />
            Despite graduating high school with two scholarships, I found myself
            drawn more towards the self-taught path, I found my true learning
            path through self-teaching.
          </Text>

          <Box bgColor={"wheat"} w={"100%"} h={"200px"} borderRadius={"15px"} />
        </VStack>
      </HStack>
    </VStack>
  );
}
