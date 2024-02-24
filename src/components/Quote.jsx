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
    <VStack
      fontSize={"120px"}
      mt={"200px"}
      justify={"left"}
      align={"left"}
      p={"5%"}
      color={"wheat"}
      ref={ref}
      className={isInView ? onOpen : onClose}
    >
      {children}
    </VStack>
  );
}

export default function Quote() {
  return (
    <>
      <QuoteAnimation>
        <Box
        color={"#b0b848"}
          transition="transform 0.3s ease-in-out, boxShadow 1s ease-in-out"
          _hover={{
            transform: "scale(1.03)",
            filter: "drop-shadow(0px 0px 10px #48BB78)",
          }}
        >
          <Text as={"span"} fontFamily={"Raleway"} fontWeight={200}>
            The simplest explanation
          </Text>
        </Box>
        <Box
        color={"#b0b848"}
          transition="transform 0.3s ease-in-out, boxShadow 1s ease-in-out"
          _hover={{
            transform: "scale(1.03)",
            filter: "drop-shadow(0px 0px 10px #48BB78)",
          }}
        >
          <Text as={"span"} fontFamily={"Raleway"} fontWeight={200}>
             given,
          </Text>
        </Box>
      </QuoteAnimation>

      <QuoteAnimation>
        <QuoteAnimation transition="transform 0.3s ease-in-out, boxShadow 1s ease-in-out" >
          <Box
        
          color={"#a97909"}
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
        
          color={"#a97909"}
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
   
          color={"#a97909"}
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
        </QuoteAnimation>
      </QuoteAnimation>

      

      <QuoteAnimation>
        <Box
        color={"#f0d86e"}
          transition="transform 0.3s ease-in-out, boxShadow 1s ease-in-out"
          _hover={{
            transform: "scale(1.03)",
            filter: "drop-shadow(0px 0px 5px #ECC94B)",
          }}
        >
          <Text as={"span"} fontWeight={700} fontFamily={"Raleway"}>
            {" "}
            for complexity tends to 
           
          </Text>
        </Box>
        <Box
        color={"#f0d86e"}
          transition="transform 0.3s ease-in-out, boxShadow 1s ease-in-out"
          _hover={{
            transform: "scale(1.03)",
            filter: "drop-shadow(0px 0px 5px #ECC94B)",
          }}
        >
          <Text as={"span"} fontWeight={700} fontFamily={"Raleway"}>
            {" "}
             obscure rather than reveal. "
           
          </Text>
        </Box>
       


        <Text  transition="transform 0.3s ease-in-out, boxShadow 1s ease-in-out"  _hover={{
            transform: "scale(1.03)",
            filter: "drop-shadow(0px 0px 5px white)",
          }} color={"wheat"}  fontSize={"50px"} fontWeight={300} fontFamily={"Raleway"}>
              -Occam's Razor
            </Text>
        
      </QuoteAnimation>
    </>
  );
}
