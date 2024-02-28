import React, { useState } from "react";
import AIGoals from "../../assets/Screenshot 2024-02-26 124604.png";
import { HStack, Icon, VStack } from "@chakra-ui/react";
import LeftRightAnimation from "../Animations/LeftRightAnimation";
import Basic3Dcard from "../3DCardEffect/Basic3Dcard";

export default function MyImages() {
 
  const [ImagesSelect, setImagesSelect] = useState([
    {
      id: 1,
      src: AIGoals,
      checked: false,
    },
    {
      id: 2,
      src: AIGoals,
      checked: false,
    },
    {
      id: 3,
      src: AIGoals,
      checked: false,
    },
  ]);
  const [imgSwitch, setImgSwitch] = useState(AIGoals);

  return (
    <VStack
      align={{
        base: "center",
        xsm: "center",
        ssm: "center",
        sm: "left",
        md: "left",
        lg: "left",
        xl: "left",
        xxl: "left",
        xxxl: "left",
      }}
      w={"100%"}
    >
      <LeftRightAnimation>
        <Basic3Dcard imgID={imgSwitch} />
        <VStack mt={"10px"}>
          <HStack gap={"40px"} fontSize={"40px"} color="#f0d86e">
            {ImagesSelect.map(({ id, src, checked }) => {
              return (
                <>
                  <Icon
                    key={id}
                    color={checked ? "wheat" : "#f0d86e"}
                    transition="transform, 0.3s ease-in-out"
                    _hover={{
                      transform: "scale(1.3)",
                      filter: "drop-shadow(0px 0px 10px #f0d86e)",
                    }}
                    viewBox="0 0 200 200"
                    onClick={() => {
                      const updatedImages = ImagesSelect.map((image) => {
                        if (image.id === id) {
                          return { ...image, checked: true };
                        } else {
                          return { ...image, checked: false };
                        }
                      });
                      setImagesSelect(updatedImages);
                      setImgSwitch(src);
                    }}
                  >
                    <path
                      fill="currentColor"
                      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                    />
                  </Icon>
                </>
              );
            })}
          </HStack>
        </VStack>
      </LeftRightAnimation>
    </VStack>
  );
}
