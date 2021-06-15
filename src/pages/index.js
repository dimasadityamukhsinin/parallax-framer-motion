import React from "react";
import ReactDOM from "react-dom";

import { ThemeProvider } from "styled-components";

import {
  Annotation,
  Box,
  Container,
  FlexList,
  FlexItem,
  Heading,
  Paragraph,
  ParallaxBox,
  theme
} from "../../ui";

import "../../ui/molecules/global-styles/global.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Box textAlign="center">
          <Heading as="h1">Framer Motion Example - Parallax Box</Heading>
        </Box>
        <FlexList flexDirection="row" my={6}>
          <FlexList width={1 / 2} mr={1}>
            {[...Array(6).keys()].map((item, key) => (
              <ParallaxBox key={key}>
                <FlexItem>{item + 1}</FlexItem>
              </ParallaxBox>
            ))}
          </FlexList>
          <FlexList width={1 / 2} ml={1}>
            {[...Array(6).keys()].map((item, key) => (
              <ParallaxBox key={key} fadeOut={true}>
                <FlexItem>{item + 1}</FlexItem>
              </ParallaxBox>
            ))}
          </FlexList>
        </FlexList>
        <Heading as="h3">ParallaxBox props:</Heading>
        <Box>
          <Paragraph>
            yOffset? = 100,
            <Annotation> number > 0</Annotation>
          </Paragraph>
          <Paragraph>
            easing? = [0.42, 0, 0.58, 1],
            <Annotation>
              [number, number, number, number] | "linear" | "easeIn" | "easeOut"
              | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" |
              "backOut" | "backInOut" | "anticipate" | EasingFunction
            </Annotation>
          </Paragraph>
          <Paragraph>
            triggerPoint? = 0.1,
            <Annotation>
              value between 0 and 1 (top and bottom of the window), point to
              start animation
            </Annotation>
          </Paragraph>
          <Paragraph>
            fadeOut? = false,
            <Annotation>
              true | false - fade an element out on end of the animation
            </Annotation>
          </Paragraph>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
