import HeroCopy from "./HeroCopy";
import HeroFigure from "./HeroFigure.jsx";
import { Stack } from "@chakra-ui/react";
import Header from "../../../constant/HEADER";

export default function Hero() {
  return (
    <Stack
      position={"relative"}
      top="65px"
      gap={"20px"}
      flexDirection={{ lg: "row", base: "column" }}
      justifyContent="space-between"
    >
      <HeroCopy heading={Header.heading} paragraph={Header.paragraph} />
      <HeroFigure copy={Header.subheading} />
    </Stack>
  );
}
