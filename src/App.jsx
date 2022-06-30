import { Box, Stack } from "@chakra-ui/react";
import Navbar from "./containers/header/navbar/navbar";
import Hero from "./containers/header/hero/Hero";
function App() {
  return (
    <Box bg="black">
      <Stack maxW={"1200px"} margin="auto">
        <Navbar />
        <Hero />
      </Stack>
    </Box>
  );
}

export default App;
