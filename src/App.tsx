import { Box } from "@chakra-ui/react";
import { Hero } from "./components/custom/hero";
import { Header } from "./components/custom/header";
import { Footer } from "./components/custom/footer";
import { SearchSection } from "./components/custom/search-section";
import { ResourcesSection } from "./components/custom/resources";

function App() {
  return (
    <Box>
      <Header />
      <Hero />
      <SearchSection />
      <ResourcesSection />
      <Footer />
    </Box>
  );
}

export default App;
