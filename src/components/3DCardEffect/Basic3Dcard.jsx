import { Box } from "@chakra-ui/react";
import React, { useRef } from "react";

export default function Basic3Dcard({ imgID }) {
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
    <Box
      bgColor={"#29292F"}
      minW={{
        base: "350px",
        xsm: "350px",
        ssm: "450px",
        sm: "600px",
        md: "400px",
        lg: "400px",
        xl: "500px",
        xxl: "600px",
        xxxl: "500px",
      }}
      w={"100%"}
      h={"300px"}
      borderRadius={"15px"}
      bgImage={imgID}
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
  );
}
