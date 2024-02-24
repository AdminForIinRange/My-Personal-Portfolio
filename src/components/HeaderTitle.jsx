import React, { useRef, useState } from "react";
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
export default function HeaderTitle() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <Stack align={"center"} p={"3%"}>
      <VStack
        justify="center"
        align="left"
        mt="100px"
        textShadow="0px 0px 50px black"
      >
        <Box
          transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
          _hover={{
            transform: "scale(1.03)",
            filter: "drop-shadow(0px 0px 10px #ECC94B)",
          }}
        >
          <Text 
          ref={ref}
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
            fontFamily={"Corben"}
            color={"	#f0d86e"}
            className="animate__animated animate__fadeInDown"
            whiteSpace={"wrap"}
          >
            Crafting Engaging Web Experiences,
          </Text>
        </Box>

        <Box
          transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
          _hover={{
            transform: "scale(1.03)",
            filter: "drop-shadow(0px 0px 10px #FFFFF0)",
          }}
        >
          <Text
            transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
            fontFamily="Corben"
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
            Full Stack Developer.
          </Text>
        </Box>

        <Box
          transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
          _hover={{
            transform: "scale(1.03)",
            filter: "drop-shadow(0px 0px 10px #ECC94B)",
          }}
        >
          <Text
            fontSize={{
              base: "5.5px",
              xsm: "5.5px",
              ssm: "5.5px",
              sm: "8.5px",
              md: "10.5px",
              lg: "12.5px",
              xl: "15.5px",
              xxl: "22.5px",
              xxxl: "22.5px",
            }}
            color={"	#fff4c4"}
            fontFamily="sans-serif"
            className="animate__animated animate__fadeInUp"
          >
            👋 Hello! I'm Anjesh, a fervent Full-Stack Developer 🚀 specializing
            in frontend, <br /> with a knack for enhancing web experiences
            through both UI/UX and code 🖥️🎨
          </Text>
        </Box>
      </VStack>
    </Stack>
  );
}
