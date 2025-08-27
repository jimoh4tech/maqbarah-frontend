import {
  Box,
  Flex,
  Stack,
  Text,
  Link,
  Image,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { RefObject } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

export const Footer = ({
  refs,
}: {
  refs: RefObject<HTMLDivElement | null>[];
}) => {
  return (
    <Box bg="forest.700" color="white" px={{ base: 6, md: 20 }} pt={10} mt={20}>
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
          <HStack align="center" w={"150px"}>
            <Image src="/images/logo_light.png" alt="Maqbarah Logo" />
          </HStack>
          <Text fontSize="sm" color="green.100">
            Connecting Muslims to <b>Verified Maqbarah</b> (Cementary) Across
            Nigeria.
          </Text>
          {/* <Text fontSize="sm" color="green.100">
            &copy; Maqbarah Directory, {` ${new Date().getFullYear()}`}
          </Text> */}
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
          <Link
            onClick={() =>
              refs[1].current?.scrollIntoView({ behavior: "smooth" })
            }
            color={"white"}
          >
            Search Maqbarah
          </Link>
          <Link
            onClick={() =>
              refs[2].current?.scrollIntoView({ behavior: "smooth" })
            }
            color={"white"}
          >
            Submit Location
          </Link>
          <Link
            onClick={() =>
              refs[3].current?.scrollIntoView({ behavior: "smooth" })
            }
            color={"white"}
          >
            Resources
          </Link>
          <Link
            onClick={() =>
              refs[5].current?.scrollIntoView({ behavior: "smooth" })
            }
            color={"white"}
          >
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
          <Link href="/privacy-policy" color={"white"}>
            Privacy Policy
          </Link>
        </Stack>
      </Flex>
      <Flex alignItems={'baseline'} justifyContent={'space-between'}>
        <Text
          fontSize="sm"
          color="green.100"
          textAlign={"center"}
          mt={16}
          pb={2}
        >
          &copy; Maqbarah Directory, {` ${new Date().getFullYear()}`}.
        </Text>
        <IconButton
          bgColor={"white"}
          onClick={() =>
            refs[0].current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <FaArrowUpLong color="green" />
        </IconButton>
      </Flex>
    </Box>
  );
};
