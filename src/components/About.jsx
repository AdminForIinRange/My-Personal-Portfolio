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
import AIGoals from "../assets/Screenshot 2024-02-26 124604.png";
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
  const [imgSwitch, setImgSwitch] = useState(AIGoals);

  const cardRef = useRef(null);
  let bounds;

  function rotateToMouse(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2,
    };
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    cardRef.current.style.transform = `
      scale3d(1.07, 1.07, 1.07)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 5}deg
      )
    `;

    cardRef.current.querySelector(".glow").style.backgroundImage = `
      radial-gradient(
        circle at
        ${center.x * 2 + bounds.width / 2}px
        ${center.y * 2 + bounds.height / 2}px,
        rgb(255, 255, 255, 0.35),
        rgb(0, 0, 0, 0.25)
      )
    `;
  }

  function handleMouseEnter() {
    bounds = cardRef.current.getBoundingClientRect();
    document.addEventListener("mousemove", rotateToMouse);
  }

  function handleMouseLeave() {
    document.removeEventListener("mousemove", rotateToMouse);
    cardRef.current.style.transform = "";
    cardRef.current.querySelector(".glow").style.backgroundImage = "";
  }

  return (
    <VStack justify="center" align="center" mt={"200px"} id="About">
      
      <VStack
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
          ssm: "wrap",
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
        <VStack align={"center"} w={"100%"}>
          <QuoteAnimation>
            <Text textAlign={"left"} color={"	#f0d86e"} mt={"30px"}>
              As a self-taught full-stack web developer with a specializing in
              frontend, I bring together my diverse experiences and skills to
              craft captivating user interfaces and seamless web experiences.
            </Text>
          </QuoteAnimation>
        </VStack>

        <VStack align={"left"} w={"100%"}>
          <QuoteAnimation>
            <Box
              bgColor={"#29292F"}
     minW={"400px"}
              w={"100%"}
              h={"300px"}
              borderRadius={"15px"}
              bgImage={imgSwitch}
              backgroundRepeat={"no-repeat"}
              bgSize={"cover"}
              backgroundPosition={"center"}
              style={{
                borderRadius: "15px",
                backgroundColor: "00000",
              }}
              className="card3d"
              ref={cardRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="glow" style={{ borderRadius: "15px" }}></div>
            </Box>
            <VStack mt={"10px"}>
              <HStack gap={"40px"} fontSize={"40px"} color="#f0d86e"  >
                <Icon  transition="transform, 0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.3)",
                  filter: "drop-shadow(0px 0px 10px #f0d86e)",
                }}
                  viewBox="0 0 200 200"
                  onClick={() => {
                    setImgSwitch("ImgOne");

                  }}
                >
                  <path
                    fill="currentColor"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                  />
                </Icon>
                <Icon
                 transition="transform, 0.3s ease-in-out"
                 _hover={{
                   transform: "scale(1.3)",
                   filter: "drop-shadow(0px 0px 10px #f0d86e)",
                 }}
                  viewBox="0 0 200 200"
                  onClick={() => {
                    setImgSwitch("ImgTwo");
                  }}
                >
                  <path
                    fill="currentColor"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                  />
                </Icon>

                <Icon
                 transition="transform, 0.3s ease-in-out"
                 _hover={{
                   transform: "scale(1.3)",
                   filter: "drop-shadow(0px 0px 10px #f0d86e)",
                 }}
                  viewBox="0 0 200 200"
                  onClick={() => {
                    setImgSwitch(AIGoals);
                  }}
                >
                  <path
                    fill="currentColor"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                  />
                </Icon>
              </HStack>
            </VStack>
          </QuoteAnimation>
        </VStack>
      </HStack>
    </VStack>
  );
}
