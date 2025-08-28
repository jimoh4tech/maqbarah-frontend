import {
  Box,
  Heading,
  Text,
  VStack,
  Container,
  Separator,
  List,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

/**
 * A React component for the Maqbarah Directory Privacy Policy.
 * It's built using Chakra UI components and contains all the policy text.
 */
export const PrivacyPolicy = () => {
  return (
    <Box as="section" py={6} bg="gray.50" color="gray.800">
      <Container maxW="container.md" px={4}>
        <VStack gap="8" align="stretch">
          <Heading
            as="h1"
            size={{ base: "xl", md: "2xl" }}
            mb="4"
            textAlign="center"
            color="forest.700"
          >
            Privacy Policy
          </Heading>

          {/* Section 1: Introduction */}
          <Box>
            <Heading as="h2" size="lg" mb="3" color="gray.700">
              1. Introduction
            </Heading>
            <Text mb="4">
              Maqbarah Directory ("we," "our," or "us") is committed to
              protecting your privacy. This Privacy Policy explains how we
              collect, use, and safeguard your information when you visit our
              website.
              <br />
              By using our services, you agree to the collection and use of
              information in accordance with this policy.
            </Text>
          </Box>

          <Separator />

          {/* Section 2: Information We Collect */}
          <Box>
            <Heading as="h2" size="lg" mb="3" color="gray.700">
              2. Information We Collect
            </Heading>
            <Text mb="4">We collect the following types of information:</Text>

            <Heading as="h3" size="md" mb="2" color="gray.600">
              A. Information You Provide
            </Heading>
            <Text mb="4">
              When submitting a Maqbarah, we collect details such as the burial
              ground name, location, and contact person. If you contact us, we
              collect your email and any details you provide.
            </Text>

            <Heading as="h3" size="md" mb="2" color="gray.600">
              B. Automatically Collected Information
            </Heading>
            <Text mb="4">
              We may collect IP addresses, browser type, and website usage data
              to improve user experience. Google Maps API may collect location
              data when you search for nearby burial grounds.
            </Text>
          </Box>

          <Separator />

          {/* Section 3: How We Use Your Information */}
          <Box>
            <Heading as="h2" size="lg" mb="3" color="gray.700">
              3. How We Use Your Information
            </Heading>
            <Text mb="4">We use the collected information to:</Text>
            <List.Root gap="2" variant="plain" align="center">
              <List.Item>
                <List.Indicator asChild color="forest.500">
                  <MdCheckCircle />
                </List.Indicator>
                Provide and improve our services.
              </List.Item>
              <List.Item>
                <List.Indicator asChild color="forest.500">
                  <MdCheckCircle />
                </List.Indicator>
                Verify and update burial ground information.
              </List.Item>
            </List.Root>
            <List.Root gap="2" variant="plain" align="center">
              <List.Item>
                <List.Indicator asChild color="forest.500">
                  <MdCheckCircle />
                </List.Indicator>
                Respond to inquiries and support requests.
              </List.Item>
              <List.Item>
                <List.Indicator asChild color="forest.500">
                  <MdCheckCircle />
                </List.Indicator>
                Prevent misuse and ensure data accuracy.
              </List.Item>
            </List.Root>
            <Text>
              We do not sell, rent, or trade your personal information.
            </Text>
          </Box>

          <Separator />

          {/* Section 4: Data Retention Policy */}
          <Box>
            <Heading as="h2" size="lg" mb="3" color="gray.700">
              4. Data Retention Policy
            </Heading>
            <Text mb="4">
              Burial ground submissions and related data will be stored
              indefinitely to maintain an updated directory.
              <br />
              If a burial ground no longer exists or has incorrect details,
              users can request an update or removal via our contact form.
              <br />
              Personal contact details of submitters will not be publicly
              displayed unless explicitly permitted.
            </Text>
          </Box>

          <Separator />

          {/* Section 5: Data Security */}
          <Box>
            <Heading as="h2" size="lg" mb="3" color="gray.700">
              5. Data Security
            </Heading>
            <Text mb="4">
              We take reasonable security measures to protect user data.
              However, no online platform is 100% secure. Users should exercise
              caution when sharing personal details.
            </Text>
          </Box>

          <Separator />

          {/* Section 6: Third-Party Services */}
          <Box>
            <Heading as="h2" size="lg" mb="3" color="gray.700">
              6. Third-Party Services
            </Heading>
            <Text mb="4">
              Our website may link to external websites (e.g., Google Maps,
              Islamic burial guides). These third-party services have their own
              privacy policies.We are not responsible for their data practices.
            </Text>
          </Box>

          <Separator />

          {/* Section 7: Your Rights */}
          <Box>
            <Heading as="h2" size="lg" mb="3" color="gray.700">
              7. Your Rights
            </Heading>
            <Text mb="4">
              You can request the removal or correction of burial ground
              information by contacting us. You can disable location tracking
              via your browser settings.
            </Text>
          </Box>

          <Separator />

          {/* Section 8: Updates to This Policy */}
          <Box>
            <Heading as="h2" size="lg" mb="3" color="gray.700">
              8. Updates to This Policy
            </Heading>
            <Text mb="4">
              We may update this Privacy Policy. Any changes will be posted
              here.
            </Text>
            <Text mb="2">📅 Last updated: April 4, 2025.</Text>
            <Text>📩 Contact Us: privacy@maqbarahdirectory.com.ng</Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};
