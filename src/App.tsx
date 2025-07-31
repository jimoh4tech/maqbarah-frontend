import { Box } from "@chakra-ui/react";
import { Hero } from "./components/custom/hero";
import { Header } from "./components/custom/header";
import { Footer } from "./components/custom/footer";
import { SearchSection } from "./components/custom/search-section";
import { ResourcesSection } from "./components/custom/resources";
import { ContactUsSection } from "./components/custom/contact-us";
import { DonateSection } from "./components/custom/donate";
import { DirectorySubmissionForm } from "./components/custom/submit";
import { useRef } from "react";

function App() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const contactUsRef = useRef<HTMLDivElement | null>(null);
  const searchRef = useRef<HTMLDivElement | null>(null);
  const submitRef = useRef<HTMLDivElement | null>(null);
  const resourcesRef = useRef<HTMLDivElement | null>(null);
  const donateRef = useRef<HTMLDivElement | null>(null);
  const refs = [
    heroRef,
    searchRef,
    submitRef,
    resourcesRef,
    donateRef,
    contactUsRef,
  ];

  return (
    <Box>
      <Header refs={refs} />
      <Hero heroRef={heroRef} submitRef={submitRef} searchRef={searchRef} />
      <SearchSection searchRef={searchRef} />
      <DirectorySubmissionForm submitRef={submitRef} />
      <ResourcesSection resourcesRef={resourcesRef} />
      <DonateSection donateRef={donateRef} />
      <ContactUsSection contactUsRef={contactUsRef} />
      <Footer />
    </Box>
  );
}

export default App;
