import { Box, Heading, Text, VStack, Container, Icon } from "@chakra-ui/react";
import { RefObject } from "react";
import { FaHandHoldingHeart } from "react-icons/fa"; // Icon for donation/support

export function DonateSection({
  donateRef,
}: {
  donateRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    <Box
      as="section"
      py={{ base: "12", md: "20" }} // Vertical padding
      bg="forest.50" // Light forest background to stand out
      color="gray.800" // Default text color
      textAlign="center" // Center align content
      ref={donateRef}
    >
      <Container maxW="container.md" px={{ base: "4", md: "8" }}>
        <VStack gap={{ base: "6", md: "8" }}>
          <Icon
            as={FaHandHoldingHeart}
            w={{ base: "12", md: "16" }}
            h={{ base: "12", md: "16" }}
            color="forest.600"
          />

          <Heading
            as="h2"
            size={{ base: "xl", md: "2xl" }}
            fontWeight="bold"
            color="forest.800"
            mb="2"
          >
            Support Our Cause
          </Heading>

          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="forest.700"
            maxW="lg"
          >
            We are working on exciting ways for you to contribute to our
            mission.
          </Text>

          <Text
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight="semibold"
            color="forest.900"
            mt="4" // Extra margin from previous text
            bg="white"
            p="4"
            borderRadius="lg"
            shadow="md"
            border="2px dashed"
            borderColor="forest.300"
          >
            Donation details coming soon!
          </Text>

          <Text fontSize="sm" color="gray.500" mt="2">
            Thank you for your patience and interest in supporting us.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}
