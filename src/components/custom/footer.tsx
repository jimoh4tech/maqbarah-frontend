import {
  Box,
  Flex,
  Stack,
  Text,
  Link,
  Icon,
  Image,
  HStack,
} from "@chakra-ui/react";
import { FaWhatsapp, FaGlobe, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <Box bg="forest.700" color="white" px={{ base: 6, md: 20 }} py={10} mt={20}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        alignItems={{ base: "center", md: "flex-start" }}
        gap={10}
      >
        {/* Branding */}
        <Stack
          gap={4}
          maxW="250px"
          alignItems={{ base: "center", md: "flex-start" }}
        >
          <HStack align="center">
            <Image src="/images/logo.png" alt="Maqbarah Logo" />
          </HStack>
          <Text fontSize="sm" color="green.100">
            Connecting Muslims with verified burial grounds across Nigeria.
          </Text>
          <HStack gap={4} mt={2}>
            <Link href="#" color={"white"}>
              <Icon as={FaWhatsapp} boxSize={4} />
            </Link>
            <Link href="#" color={"white"}>
              <Icon as={FaGlobe} boxSize={4} />
            </Link>
            <Link href="#" color={"white"}>
              <Icon as={FaTwitter} boxSize={4} />
            </Link>
          </HStack>
        </Stack>

        {/* Quick Links */}
        <Stack
          gap={2}
          minW="150px"
          alignItems={{ base: "center", md: "flex-start" }}
        >
          <Text fontWeight="semibold" mb={1}>
            Quick Links
          </Text>
          <Link href="#" color={"white"}>
            Search Maqbarah
          </Link>
          <Link href="#" color={"white"}>
            Submit Location
          </Link>
          <Link href="#" color={"white"}>
            Resources
          </Link>
          <Link href="#" color={"white"}>
            Contact Us
          </Link>
        </Stack>

        {/* Resources */}
        <Stack
          gap={2}
          minW="150px"
          alignItems={{ base: "center", md: "flex-start" }}
        >
          <Text fontWeight="semibold" mb={1}>
            Resources
          </Text>
          <Link href="#" color={"white"}>
            Janazah Guide
          </Link>
          <Link href="#" color={"white"}>
            FAQs
          </Link>
          <Link href="#" color={"white"}>
            Islamic Guidelines
          </Link>
          <Link href="#" color={"white"}>
            Privacy Policy
          </Link>
        </Stack>
      </Flex>
    </Box>
  );
};
