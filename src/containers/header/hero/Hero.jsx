import HeroCopy from "./HeroCopy";
import HeroFigure from "./HeroFigure.jsx";
import { Stack } from "@chakra-ui/react";
import Header from "../../../constant/HEADER";

export default function Hero() {
  return (
    <Stack
      position={"relative"}
      top={{ base: "75px", lg: "75px" }}
      gap={"20px"}
      display="flex"
      flexDirection={{ lg: "row", base: "column" }}
      justifyContent="space-between"
      alignItems={{ base: "flex-end", lg: "flex-start" }}
      maxW="1200px"
      margin="auto"
    >
      <HeroCopy heading={Header.heading} paragraph={Header.paragraph} />
      <HeroFigure copy={Header.subheading} />
    </Stack>
  );
}
