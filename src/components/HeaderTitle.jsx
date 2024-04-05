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
import useScreenSize from "../hook/useScreenSize";

export default function HeaderTitle() {
  const { isSmallScreen } = useScreenSize();
  return (
    <Stack align={"center"} p={"3%"}>
      <VStack
        justify="center"
        align="left"
        mt="100px"
        textShadow="0px 0px 50px black"
        textAlign={{
          base: "center",
          xsm: "center",
          ssm: "center",
          sm: "center",
          md: "center",
          lg: "left",
          xl: "left",
          xxl: "left",
          xxxl: "left",
        }}
      >
        <LeftRightAnimation>
          <Box
            transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
            _hover={{
              transform: "scale(1.03)",
              filter: "drop-shadow(0px 0px 10px #ECC94B)",
            }}
          >
            <Text
              fontSize={{
                base: "20px",
                xsm: "20px",
                ssm: "20px",
                sm: "30px",
                md: "30px",
                lg: "35px",
                xl: "35px",
                xxl: "50px",
                xxxl: "40px",
              }}
              fontFamily={"Raleway"}
              color={"	#f0d86e"}
              whiteSpace={"wrap"}
            >
              {isSmallScreen
                ? " Crafting Engaging Web Experiences,"
                : "Crafting Engaging Web Experiences,"}
            </Text>
          </Box>
        </LeftRightAnimation>

        <LeftRightAnimation>
          <Box
            transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
            _hover={{
              transform: "scale(1.03)",
              filter: "drop-shadow(0px 0px 10px #FFFFF0)",
            }}
          >
            <Text
              transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
              fontFamily={"Raleway"}
              color={"wheat"}
              fontWeight="700"
              textAlign={{
                base: "center",
                xsm: "center",
                ssm: "center",
                sm: "center",
                md: "center",
                lg: "left",
                xl: "left",
                xxl: "left",
                xxxl: "left",
              }}
              fontSize={{
                base: "75px",
                xsm: "75px",
                ssm: "85px",
                sm: "100px",
                md: "120px",
                lg: "90px",
                xl: "120px",
                xxl: "150px",
                xxxl: "150px",
              }}
              whiteSpace={{
                base: "wrap",
                xsm: "wrap",
                ssm: "wrap",
                sm: "wrap",
                md: "wrap",
                lg: "nowrap",
                xl: "nowrap",
                xxl: "nowrap",
                xxxl: "nowrap",
              }}
            >
              Full Stack Developer
            </Text>
          </Box>
        </LeftRightAnimation>

        <LeftRightAnimation>
          <Box
            transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
            _hover={{
              transform: "scale(1.03)",
              filter: "drop-shadow(0px 0px 10px #ECC94B)",
            }}
          >
            {isSmallScreen ? (
              <Text
                fontSize={{
                  base: "12.5px",
                  xsm: "12.5px",
                  ssm: "13.5px",
                  sm: "15.5px",
                  md: "15.5px",
                  lg: "15.5px",
                  xl: "15.5px",
                  xxl: "22.5px",
                  xxxl: "22.5px",
                }}
                color={"	#fff4c4"}
                fontFamily={"Raleway"}
              >
                Hello!, I'm a fervent self taught Full-Stack Developer
                specializing in{" "}
                <Text as={"span"} textDecoration={"underline"}>
                  frontend
                </Text>
                , with a knack for enhancing web experiences through both UI/UX
                and code.
              </Text>
            ) : (
              <Text
                fontSize={{
                  base: "12.5px",
                  xsm: "12.5px",
                  ssm: "13.5px",
                  sm: "15.5px",
                  md: "15.5px",
                  lg: "15.5px",
                  xl: "15.5px",
                  xxl: "22.5px",
                  xxxl: "22.5px",
                }}
                color={"	#fff4c4"}
                fontFamily={"Raleway"}
              >
                Hello!, I'm a fervent self taught Full-Stack Developer
                specializing in{" "}
                <Text as={"span"} textDecoration={"underline"}>
                  frontend
                </Text>
                , <br /> with a knack for enhancing web experiences through both
                UI/UX and code.
              </Text>
            )}
          </Box>
        </LeftRightAnimation>
      </VStack>
    </Stack>
  );
}
