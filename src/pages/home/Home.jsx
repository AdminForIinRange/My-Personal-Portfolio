
import HeaderTitle from "../../components/HeaderTitle";
import AnimatedCursor from "react-animated-cursor";

import HoveringArrow from "../../components/HoveringArrow";
import About from "../../components/About.jsx";
import Skills from "../../components/Skills.jsx";
import Quote from "../../components/Quote.jsx";

export default function Home() {
  return (
    <>



<h1 className="text-19xl font-bold underline">
      Hello world!
    </h1>

      <HeaderTitle />
      <HoveringArrow />
      <Quote />
      <About />
      <Skills />
      <AnimatedCursor
        innerSize={15}
        outerSize={30}
        color=" 237, 137, 54"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={3}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
    </>
  );
}
