import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { RefObject } from "react";
import { IoSearch } from "react-icons/io5";

export const Hero = ({
  heroRef,
  searchRef,
  submitRef,
}: {
  heroRef: RefObject<HTMLDivElement | null>;
  searchRef: RefObject<HTMLDivElement | null>;
  submitRef: RefObject<HTMLDivElement | null>;
}) => {
  return (
    <Box
      bg="forest.700"
      color="white"
      py={16}
      px={{ base: 4, md: 20 }}
      ref={heroRef}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
      >
        {/* Text Content */}
        <Box flex="1" mb={{ base: 10, md: 0 }}>
          <Heading
            as="h1"
            size={{ base: "2xl", md: "4xl" }}
            fontWeight="bold"
            lineHeight="short"
          >
            Find Verified <br />
            Muslim Cemeteries <br />
            in Nigeria
          </Heading>
          <Text fontSize="lg" mt={6} color="whiteAlpha.900">
            Locate Muslim burial grounds (Maqabir) by state, LGA, or GPS
            coordinates. Access caretaker contacts and contribute to our growing
            directory.
          </Text>

          <Stack direction={{ base: "column", sm: "row" }} gap={4} mt={8}>
            <Button
              colorPalette="forest"
              variant="subtle"
              bgColor={"white"}
              onClick={() =>
                searchRef.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <IoSearch />
              Search Maqbarah
            </Button>
            <Button
              colorPalette={"forest"}
              variant={"outline"}
              color={"white"}
              onClick={() =>
                submitRef.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Submit New Maqbarah
            </Button>
          </Stack>
        </Box>

        {/* Image */}
        <Box flex="1" pl={{ md: 12 }}>
          <Image
            src="/images/hero.png"
            alt="Muslim Cemetery"
            borderRadius="lg"
            objectFit="cover"
            width="100%"
            maxH="350px"
            boxShadow="xl"
          />
        </Box>
      </Flex>
    </Box>
  );
};
