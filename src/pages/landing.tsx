import { ContactUsSection } from "@/components/custom/contact-us";
import { DonateSection } from "@/components/custom/donate";
import { Hero } from "@/components/custom/hero";
import { ResourcesSection } from "@/components/custom/resources";
import { SearchSection } from "@/components/custom/search-section";
import { DirectorySubmissionForm } from "@/components/custom/submit";
import { RefObject } from "react";

export const LandingPage = ({
  refs,
}: {
  refs: RefObject<HTMLDivElement | null>[];
}) => {
    return (
      <>
        <Hero heroRef={refs[0]} submitRef={refs[2]} searchRef={refs[1]} />
        <SearchSection searchRef={refs[1]} />
        <DirectorySubmissionForm submitRef={refs[2]} />
        <ResourcesSection resourcesRef={refs[3]} />
        <DonateSection donateRef={refs[4]} />
        <ContactUsSection contactUsRef={refs[5]} />
      </>
    );
}