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
  Icon,
} from "@chakra-ui/react";
import AIGoals from "../../assets/Screenshot 2024-02-26 124604.png";
import { useInView } from "framer-motion";
import { useRef } from "react";
import LeftRightAnimation from "../../components/Animations/LeftRightAnimation";
import Basic3Dcard from "../../components/3DCardEffect/Basic3Dcard";

import ComponentTitles from "../../components/ComponentTitle/ComponentTitle";
import MyImages from "../../components/ImageMapping/MyImages";

export default function About() {
  return (
    <VStack justify="center" align="center" mt={"200px"} id="About">
      <ComponentTitles mainTitle={"Hi, Welcome"} subTitle={"About me"} />

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
        justify={"left"}
        align={"start"}
        mt={{
          base: "20px",
          xsm: "20px",
          ssm: "20px",
          sm: "100px",
          md: "100px",
          lg: "100px",
          xl: "100px",
          xxl: "100px",
          xxxl: "100px",
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
          sm: "90%",
          md: "90%",
          lg: "90%",
          xl: "80%",
          xxl: "70%",
          xxxl: "70%",
        }}
        fontSize={{
          base: "17px",
          xsm: "17px",
          ssm: "17px",
          sm: "17px",
          md: "17px",
          lg: "17px",
          xl: "17px",
          xxl: "25px",
          xxxl: "20px",
        }}
      >
        <VStack align={"left"} w={"70%"}>
          <LeftRightAnimation>
            <Text textAlign={"left"} color={"	#f0d86e"} mt={"35px"}>
              As a self-taught full-stack web developer with a specializing in
              frontend, I bring together my diverse experiences and skills to
              craft captivating user interfaces and seamless web experiences.
            </Text>
          </LeftRightAnimation>
        </VStack>

    
      </HStack>
    </VStack>
  );
}
