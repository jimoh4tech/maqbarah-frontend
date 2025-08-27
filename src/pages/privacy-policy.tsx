import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
export const PrivacyPolicy = () => {
  return (
    <Stack mt={-20}>
      <Box
        as="section"
        py={{ base: "14", md: "28" }} // Vertical padding// A shade of purple for the background, matching the image
        color="black" // White text color for readability on the dark background
        position="relative"
        overflow="hidden" // Ensures any background effects are contained
        textAlign="center" // Centers all text content within the section
        mx={-2}
      >
        {/* Subtle background pattern/texture - Approximated with a radial gradient for a soft glow effect */}
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          width="150%" // Make it larger than the container to ensure full coverage
          height="150%" // Make it larger than the container
          bgGradient="radial(closest-side, rgba(255, 255, 255, 0.08), transparent 70%)" // Light, subtle white glow
          filter="blur(80px)" // Apply a blur to create a soft, diffused light
          zIndex="0" // Place behind content
          opacity="0.6" // Adjust opacity for desired subtlety
          pointerEvents="none" // Ensure it doesn't interfere with interaction
        />

        <Container
          maxW="container.lg"
          px={{ base: "4", md: "8" }}
          zIndex="1"
          mt={20}
        >
          <VStack gap={{ base: "4", md: "6" }}>
            <Heading
              as="h2"
              size={{ base: "xl", md: "2xl", lg: "3xl" }} // Responsive heading size
              fontWeight="bold"
              lineHeight="shorter"
              color="white" // Explicitly white for heading
            >
              Privacy Notice For Maqbarah Directory
            </Heading>
            <Text
              fontSize="sm"
              color="whiteAlpha.800" // Slightly transparent white for description
              maxW="xl" // Max width for readability
            >
              Effective date: AUGUST 2025
            </Text>
          </VStack>
        </Container>
      </Box>

      <Box p={{ base: 4, md: 8 }}>
        <Stack>
          <Heading>1. Introduction</Heading>
          <Text fontSize={"sm"}>
            Coming soon
          </Text>
          <Heading>2. Definitions</Heading>
          <Text fontSize={"sm"}>
           Coming soon
          </Text>
        </Stack>
      </Box>
    </Stack>
  );
};
