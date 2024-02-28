import React from 'react'
import LeftRightAnimation from '../Animations/LeftRightAnimation'
import { Text,VStack } from "@chakra-ui/react";
export default function ComponentTitles({mainTitle, subTitle}) {
  return (
    <>
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
        <LeftRightAnimation>


    <LeftRightAnimation>
    <Text
      textAlign={"left"}
      fontFamily={"Raleway"}
      fontSize="35px"
      color={"	#f0d86e"}
    >
    {mainTitle}
    </Text>
  </LeftRightAnimation>
  <LeftRightAnimation>
    <Text
      fontFamily={"Raleway"}
      color={"wheat"}
      fontWeight="700"
      fontSize={{
        base: "50px",
        xsm: "50px",
        ssm: "50px",
        sm: "70px",
        md: "90px",
        lg: "100px",
        xl: "100px",
        xxl: "110px",
        xxxl: "100px",
      }}
      whiteSpace="nowrap"
    >
    {subTitle}
    </Text>
  </LeftRightAnimation>
  </LeftRightAnimation>
      </VStack>
    </>
  )

}
