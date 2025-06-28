import { Box } from "@chakra-ui/react";
import { Hero } from "./components/custom/hero";
import { Header } from "./components/custom/header";
import { Footer } from "./components/custom/footer";

function App() {
  return (
    <Box>
      <Header />
      <Hero />
      <Footer />
    </Box>
  );
}

export default App;
