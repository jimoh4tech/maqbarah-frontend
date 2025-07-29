import { Box } from "@chakra-ui/react";
import { Hero } from "./components/custom/hero";
import { Header } from "./components/custom/header";
import { Footer } from "./components/custom/footer";
import { SearchSection } from "./components/custom/search-section";
import { ResourcesSection } from "./components/custom/resources";
import { ContactUsSection } from "./components/custom/contact-us";
import { DonateSection } from "./components/custom/donate";

function App() {
  return (
    <Box>
      <Header />
      <Hero />
      <SearchSection />
      <ResourcesSection />*
      <DonateSection />
      <ContactUsSection />
      {/* Ensure the Footer is included at the end of the page */}
      <Footer />
    </Box>
  );
}

export default App;
