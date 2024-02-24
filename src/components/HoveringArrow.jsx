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
import { ArrowDownIcon } from "@chakra-ui/icons";
export default function HoveringArrow() {
  return (
    <VStack justify="center" align="center" fontFamily={"font"} >
    <HStack justify="center" align="center">
      <VStack justify="left" align="left" mt="200px"   transition="transform, 0.3s ease-in-out, boxShadow 1s ease-in-out"
                _hover={{
                  transform: "scale(1.03)",
                  filter: "drop-shadow(0px 0px 10px #A0AEC0)",
                }}>
        <Text
          fontSize={"100px"}
          color={"white"}
          filter=" drop-shadow(0px 0px 10px wheat)"
          className="infinite-up-down-hover"
        >
          <VStack>
            <ArrowDownIcon />
          </VStack>
        </Text>
      </VStack>
    </HStack>
  </VStack>
  )
}
