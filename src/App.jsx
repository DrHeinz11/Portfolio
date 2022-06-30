import { Container, Stack } from "@chakra-ui/react";
import { Hero, Navbar } from "./containers/export";
function App() {
  return (
    <Container bg="black" width="100%" maxW="100%">
      <Navbar />
      <Hero />
      <Container maxWidth="100%" height="100vh" bg={"primary.gray"}></Container>
    </Container>
  );
}

export default App;
