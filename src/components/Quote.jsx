import React, { useEffect, useRef, useState } from "react";
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
import LeftRightAnimation from "./Animations/LeftRightAnimation";


export default function Quote() {
  return (
     <VStack

    fontSize={{
      base: "40px",
      xsm: "40px",
      ssm: "40px",
      sm: "50px",
      md: "60px",
      lg: "70px",
      xl: "100px",
      xxl: "120px",
      xxxl: "120px",
    }}
    
      justify={"left"}
      align={"left"}
      p={"5%"}
      color={"wheat"}
    
     
    >
      <LeftRightAnimation>
        <Box
        mt={"250px"}
          color={"	#f0d86e"}
          transition="transform 0.3s ease-in-out, boxShadow 1s ease-in-out"
          _hover={{
            transform: "scale(1.03)",
            filter: "drop-shadow(0px 0px 5px #ED8936)",
          }}
        >
          <Text as={"span"} fontFamily={"Raleway"} fontWeight={400}>
            The simplest explanation
          </Text>
        </Box>
        <Box
          color={"	#f0d86e"}
          transition="transform 0.3s ease-in-out, boxShadow 1s ease-in-out"
          _hover={{
            transform: "scale(1.03)",
            filter: "drop-shadow(0px 0px 5px #ED8936)",
          }}
        >
          <Text as={"span"} fontFamily={"Raleway"} fontWeight={400}>
            given,
          </Text>
        </Box>
      </LeftRightAnimation>

    
        <LeftRightAnimation transition="transform 0.3s ease-in-out, boxShadow 1s ease-in-out">
          <Box     mt={"350px"}
            color={"	#f0d86e"}
            transition="transform 0.3s ease-in-out, boxShadow 1s ease-in-out"
            _hover={{
              transform: "scale(1.03)",
              filter: "drop-shadow(0px 0px 5px #ED8936)",
            }}
          >
            <Text as={"span"} fontWeight={400} fontFamily={"Raleway"}>
              {" "}
              that encompasses all
            </Text>
          </Box>
          <Box
            color={"	#f0d86e"}
            transition="transform 0.3s ease-in-out, boxShadow 1s ease-in-out"
            _hover={{
              transform: "scale(1.03)",
              filter: "drop-shadow(0px 0px 5px #ED8936)",
            }}
          >
            <Text as={"span"} fontWeight={400} fontFamily={"Raleway"}>
              {" "}
              variables is often
            </Text>
          </Box>
          <Box
            color={"	#f0d86e"}
            transition="transform 0.3s ease-in-out, boxShadow 1s ease-in-out"
            _hover={{
              transform: "scale(1.03)",
              filter: "drop-shadow(0px 0px 5px #ED8936)",
            }}
          >
            <Text as={"span"} fontWeight={400} fontFamily={"Raleway"}>
              {" "}
              the closest to truth,
            </Text>
          </Box>
        </LeftRightAnimation>


      <LeftRightAnimation>
        <Box     mt={"350px"}
          color={"	#f0d86e"}
          transition="transform 0.3s ease-in-out, boxShadow 1s ease-in-out"
          _hover={{
            transform: "scale(1.03)",
            filter: "drop-shadow(0px 0px 5px #ED8936)",
          }}
        >
          <Text as={"span"} fontWeight={400} fontFamily={"Raleway"}>
            {" "}
            for complexity tends to
          </Text>
        </Box>
        <Box
          color={"	#f0d86e"}
          transition="transform 0.3s ease-in-out, boxShadow 1s ease-in-out"
          _hover={{
            transform: "scale(1.03)",
            filter: "drop-shadow(0px 0px 5px #ED8936)",
          }}
        >
          <Text as={"span"} fontWeight={400} fontFamily={"Raleway"}>
            {" "}
            obscure rather than reveal. 
          </Text>
        </Box>

        <Text
          color={"	#f0d86e"}
          transition="transform 0.3s ease-in-out, boxShadow 1s ease-in-out"
          _hover={{
            transform: "scale(1.03)",
            filter: "drop-shadow(0px 0px 5px #ED8936)",
          }}
          fontSize={{
            base: "20px",
            xsm: "20px",
            ssm: "20px",
            sm: "40px",
            md: "40px",
            lg: "40px",
            xl: "40px",
            xxl: "40px",
            xxxl: "40px",
          }}
          fontWeight={400}
          fontFamily={"Raleway"}
        >
          -Occam's Razor
        </Text>
      </LeftRightAnimation>
      </VStack>
  );
}
