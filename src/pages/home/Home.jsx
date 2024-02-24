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
  AvatarGroup,
  Container,
  Spacer,
} from "@chakra-ui/react";
import HeaderTitle from "../../components/HeaderTitle";
import AnimatedCursor from "react-animated-cursor"

import HoveringArrow from "../../components/HoveringArrow";
import About from "../../components/About.jsx";
import Skills from "../../components/Skills.jsx";
import Quote from "../../components/Quote.jsx";
export default function Home() {
  
  return (
    <>
    
    <HeaderTitle />
    <HoveringArrow />
    <Quote />
    <About />
    <Skills />
    




    <AnimatedCursor 
   innerSize={15}
   outerSize={30}
   color=' 237, 137, 54'
   outerAlpha={0.2}
   innerScale={0.7}
   outerScale={3}
   clickables={[
     'a',
     'input[type="text"]',
     'input[type="email"]',
     'input[type="number"]',
     'input[type="submit"]',
     'input[type="image"]',
     'label[for]',
     'select',
     'textarea',
     'button',
     '.link',
 
   
    ]}/>

    </>
  );
}
