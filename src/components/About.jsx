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
          xxxl: "90%",
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
            Hi, Welcome
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
          xxl: "25px",
          xxxl: "20px",
        }}
      >
        <VStack align={"center"} w={"100%"}>
          <QuoteAnimation>
            <Text textAlign={"left"} color={"	#f0d86e"} mt={"30px"}>
              As a self-taught full-stack web developer with a specializing in
              frontend, I bring together my diverse experiences and
              skills to craft captivating user interfaces and seamless web
              experiences.
            </Text>
          </QuoteAnimation>
        </VStack>

        <VStack align={"left"} w={"100%"}>
          <QuoteAnimation>
            <Box
              bgColor={"wheat"}
              w={"100%"}
              h={"300px"}
              borderRadius={"15px"}
            ></Box>
          </QuoteAnimation>
        </VStack>
      </HStack>

     
    </VStack>
  );
}
