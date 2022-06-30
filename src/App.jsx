import { Box, Stack } from "@chakra-ui/react";
import Navbar from "./containers/header/navbar/navbar";
import Hero from "./containers/header/hero/Hero";
function App() {
  return (
    <Box bg="black">
      <Navbar />
      <Stack maxW={"1200px"} margin="auto">
        <Hero />
      </Stack>
      <Box w="100%" height="100vh" bg={"primary.gray"}></Box>
    </Box>
  );
}

export default App;
