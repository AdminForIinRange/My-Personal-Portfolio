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
  InputLeftAddon,
  InputRightAddon,
  useSteps,
  AbsoluteCenter,
  Avatar,
  AvatarBadge,
  useToast,
  WrapItem,
  AvatarGroup,
  Container,
  Spacer,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Anjesh from "../assets/AnjeshPFP.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
export default function Navbar() {
  return (
    <Box p={"10px"}>
      <VStack
        justify={"center"}
        align={"center"}
        mt={"10px"}
        fontFamily={"Raleway"}
      >
        <Box w={"100%"} h={"50px"}>
          <HStack justify={"center"} h={"100%"} align={"Start"}>
            <HStack w={"90%"} justify={"center"} gap={"1%"}>
              <Text
                fontWeight={500}
                color={"wheat"}
                fontSize={{
                  base: "8.5px",
                  xsm: "8.5px",
                  ssm: "12.5px",
                  sm: "12.5px",
                  md: "12.5px",
                  lg: "12.5px",
                  xl: "15.5px",
                  xxl: "22.5px",
                  xxxl: "22.5px",
                }}
              >
                 <a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=bhattaraianjesh123@gmail.com">  <Text  as={"span"} textDecorationLine={"underline"} > bhattaraianjesh123@gmail.com </Text>  </a> 
             
              </Text>

              <Text
                fontWeight={500}
                color={"wheat"}
                fontSize={{
                  base: "10px",
                  xsm: "10px",
                  ssm: "10px",
                  sm: "10px",
                  md: "12px",
                  lg: "14px",
                  xl: "17px",
                  xxl: "19px",
                  xxxl: "17px",
                }}
              >
                <HStack>
                  <Box
                    transition="transform 0.3s ease-in-out, boxShadow 1s ease-in-out"
                    _hover={{
                      transform: "scale(1.5)",
                      filter: "drop-shadow(0px 0px 5px #63B3ED)",
                    }}
                  >
                    <a
                      target="_blank"
                      href="
               www.linkedin.com/in/anjesh-bhattarai

                    
                
                "
                    >
                      <FaLinkedin />
                    </a>{" "}
                  </Box>
                  <a
                    target="_blank"
                    href="
                https://github.com/AdminForIinRange
                
                
                "
                  >
                    {" "}
                    <Box
                      transition="transform 0.3s ease-in-out, boxShadow 1s ease-in-out"
                      _hover={{
                        transform: "scale(1.5)",
                        filter: "drop-shadow(0px 0px 5px white)",
                      }}
                    >
                      {" "}
                      <FaGithub />
                    </Box>
                  </a>
                </HStack>
              </Text>

              <Text
                fontWeight={500}
                color={"wheat"}
                fontSize={{
                  base: "10px",
                  xsm: "10px",
                  ssm: "10px",
                  sm: "10px",
                  md: "12px",
                  lg: "14px",
                  xl: "17px",
                  xxl: "19px",
                  xxxl: "17px",
                }}
              >
                
              </Text>

              <Spacer />

              <ButtonGroup
              
                colorScheme="none"
                variant="link"
               
                color={"wheat"}
              >
                <Button   fontSize={{
                base: "8.5px",
                xsm: "8.5px",
                ssm: "12.5px",
                sm: "12.5px",
                md: "12.5px",
                lg: "12.5px",
                xl: "15.5px",
                xxl: "22.5px",
                xxxl: "22.5px",
              }}
                 
                >
                  <a href="#About">About</a>
                </Button>

                <Button   fontSize={{
                base: "8.5px",
                xsm: "8.5px",
                ssm: "12.5px",
                sm: "12.5px",
                md: "12.5px",
                lg: "12.5px",
                xl: "15.5px",
                xxl: "22.5px",
                xxxl: "22.5px",
              }}
                
                > <a href="#Skills">Skills</a>
                  
                </Button>
                <Button   fontSize={{
                base: "8.5px",
                xsm: "8.5px",
                ssm: "12.5px",
                sm: "12.5px",
                md: "12.5px",
                lg: "12.5px",
                xl: "15.5px",
                xxl: "22.5px",
                xxxl: "22.5px",
              }}
                 
                >
                  <a href="#Projects">Projects</a>
                  
                </Button>
                <Button   fontSize={{
                base: "8.5px",
                xsm: "8.5px",
                ssm: "12.5px",
                sm: "12.5px",
                md: "12.5px",
                lg: "12.5px",
                xl: "15.5px",
                xxl: "22.5px",
                xxxl: "22.5px",
              }}
                 
                >
                     <a href="#Contact">Contact</a>
                  
                  
                </Button>
              </ButtonGroup>
            </HStack>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
}
