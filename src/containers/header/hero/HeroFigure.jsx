import { Stack, Image, Heading, Box } from "@chakra-ui/react";
import figure from "../../../assets/Hero__img.png";
import arrow from "../../../assets/Arrow-orange.svg";

export default function HeroFigure({ copy }) {
  return (
    <Stack
      maxW={{ lg: "50%", base: "75%" }}
      position="relative"
      margin={{ base: "0 auto", lg: "0" }}
      top={{ lg: "100px", base: "0" }}
    >
      <Box
        display="flex"
        flexDirection={"row"}
        align="flex-start"
        justifyContent="flex-start"
        gap={"5px"}
      >
        <Heading
          color="#fff"
          fontSize={{ lg: "2rem", md: "1.75rem", base: "1.25rem" }}
          maxWidth="75%"
        >
          {copy}
        </Heading>
        <Image
          src={arrow}
          maxW={{ lg: "48px", md: "38px", base: "28px" }}
          maxH={{ lg: "48px", md: "38px", base: "28px" }}
        />
      </Box>
      <Image
        src={figure}
        w="100%"
        alignSelf={{ base: "center", lg: "0" }}
        margin={{ base: "10px 0", md: "0" }}
        h="100%"
        objectFit={"cover"}
      />
    </Stack>
  );
}
