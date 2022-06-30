import { extendTheme } from "@chakra-ui/react";
import "@fontsource/montserrat";

const theme = extendTheme({
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Montserrat', sans-serif`,
  },
  textStyles: {
    h2: {
      fontSize: { base: "1rem", lg: "2.5rem" },
      fontWeight: "900",
    },
    p: {
      fontSize: { base: ".5rem", lg: "1rem" },
      fontWeight: "400",
    },
  },
  colors: {
    primary: {
      gray: "#EFEFEF",
      grayBold: "#ccc",
      black: "#000",
      orange: "#ED743D",
    },
  },
});

export default theme;
