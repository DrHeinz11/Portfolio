import { Stack, Image, Breadcrumb } from "@chakra-ui/react";
import LinkList from "./LinkList";
import logo from "../../../assets/Logo.svg";
import Links from "../../../components/Links";

export default function Navbar() {
  return (
    <Stack
      w="100%"
      p={{ base: "10px 15px", lg: "10px 25px" }}
      maxW="100%"
      h="50px"
      display="flex"
      zIndex={"100"}
      bg="black"
      position="fixed"
      justifyContent={"space-between"}
      flexDirection="row"
    >
      <Image src={logo} />

      <LinkList />

      <Breadcrumb>
        <Links
          Title={"Contact__"}
          Url="https://www.google.com"
          Color="primary.orange"
          Hover="white"
        />
      </Breadcrumb>
    </Stack>
  );
}
