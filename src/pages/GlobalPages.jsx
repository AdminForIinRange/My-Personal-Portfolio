import React, { Suspense } from "react";
import AnimatedCursor from "react-animated-cursor";

// Lazy load components
const LazyHeaderTitle = React.lazy(() => import("../components/HeaderTitle.jsx"));
const LazyHoveringArrow = React.lazy(() => import("../components/HoveringArrow"));
const LazyQuote = React.lazy(() => import("../components/Quote.jsx"));
const LazyAbout = React.lazy(() => import("./About/About.jsx"));
const LazySkills = React.lazy(() => import("./Skills/Skills.jsx"));
const LazyProjects = React.lazy(() => import("./Projects/Projects.jsx"));
const LazyContact = React.lazy(() => import("./Contact/Contact.jsx"));

export default function GlobalPage() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyHeaderTitle />
        <LazyHoveringArrow />
        <LazyQuote />
        <LazyAbout />
        <LazySkills />
        <LazyProjects />
        <LazyContact />
      </Suspense>
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
