import { Heading, Text, Image, Stack } from "@chakra-ui/react";
import Cta from "../../../assets/Arrow-scroll.svg";
export default function HeroCopy({ heading, paragraph }) {
  return (
    <Stack
      flexDirection={"column"}
      height="fit-content"
      maxWidth={{ lg: "50%", base: "100%" }}
    >
      <Heading
      color="#fff"
        w="75%"
        lineHeight={{ md: "90px", base: "55px" }}
        fontSize={{ base: "3rem", md: "4.5rem", lg: "6rem" }}
        fontWeight="900"
      >
        {heading}
      </Heading>
      <Text
      color="#fff"
        lineHeight={{ md: "30px", base: "20px" }}
        fontSize={{ base: "1rem", md: "1.5rem", lg: "1.75rem" }}
      >
        {paragraph}
      </Text>
      <Image
        alignSelf={{ lg: "flex-end", base: "center" }}
        src={Cta}
        maxW={{ base: "64px", lg: "110px" }}
      />
    </Stack>
  );
}
