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
export const TermsOfUse = () => {
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
            Terms of Use
          </Heading>

          {/* Section 1: Acceptance of Terms */}
          <Box>
            <Heading as="h2" size="lg" mb="3" color="gray.700">
              1. Acceptance of Terms
            </Heading>
            <Text mb="4">
              By using the Maqbarah Directory website, you agree to comply with
              these Terms of Use. If you do not agree, please do not use this
              site.
            </Text>
          </Box>

          <Separator />

          {/* Section 2: Use of Services */}
          <Box>
            <Heading as="h2" size="lg" mb="3" color="gray.700">
              2. Use of Services
            </Heading>
            <Text mb="4">You may use the website to:</Text>
            <List.Root gap="2" variant="plain" align="center">
              <List.Item>
                <List.Indicator asChild color="forest.500">
                  <MdCheckCircle />
                </List.Indicator>
                Search for burial grounds.
              </List.Item>
              <List.Item>
                <List.Indicator asChild color="forest.500">
                  <MdCheckCircle />
                </List.Indicator>
                Submit Maqbarah information.
              </List.Item>
            </List.Root>
            <List.Root gap="2" variant="plain" align="center">
              <List.Item>
                <List.Indicator asChild color="forest.500">
                  <MdCheckCircle />
                </List.Indicator>
                Access Islamic burial guides.
              </List.Item>
            </List.Root>
            <Text mb="4">You agree not to:</Text>
            <List.Root gap="2" variant="plain" align="center">
              <List.Item>
                <List.Indicator asChild color="forest.500">
                  <MdCheckCircle />
                </List.Indicator>
                Submit false or misleading information.
              </List.Item>
              <List.Item>
                <List.Indicator asChild color="forest.500">
                  <MdCheckCircle />
                </List.Indicator>
                Use the website for illegal activities.
              </List.Item>
            </List.Root>
            <List.Root gap="2" variant="plain" align="center">
              <List.Item>
                <List.Indicator asChild color="forest.500">
                  <MdCheckCircle />
                </List.Indicator>
                Attempt to hack, disrupt, or misuse the platform.
              </List.Item>
            </List.Root>
          </Box>

          <Separator />

          {/* Section 3: Submission Guidelines & Moderation */}
          <Box>
            <Heading as="h2" size="lg" mb="3" color="gray.700">
              3. Submission Guidelines & Moderation
            </Heading>
            <Text mb="4">
              When submitting a burial ground, ensure the information is
              accurate and verifiable. <br />
              All submissions are subject to review and verification before
              publication.
              <br /> We reserve the right to modify or remove submissions that
              contain incorrect, misleading, or inappropriate content.
              <br /> If a Maqbarah’s details change or are incorrect, users can
              submit corrections.
            </Text>
          </Box>

          <Separator />

          {/* Section 4: Limitation of Liability */}
          <Box>
            <Heading as="h2" size="lg" mb="3" color="gray.700">
              4. Limitation of Liability
            </Heading>
            <Text mb="4">
              We strive to provide accurate information, but we do not guarantee
              that all data is up-to-date. We are not responsible for any loss
              or inconvenience caused by errors or missing information.
              <br /> Use the Maqbarah Directory at your own discretion and
              verify information where necessary.
            </Text>
          </Box>

          <Separator />

          {/* Section 5: Intellectual Property */}
          <Box>
            <Heading as="h2" size="lg" mb="3" color="gray.700">
              5. Intellectual Property
            </Heading>
            <Text mb="4">
              All content, including text, logos, and images, belongs to
              Maqbarah Directory unless otherwise stated.
              <br /> Users may not copy, distribute, or modify content without
              permission.
            </Text>
          </Box>

          <Separator />

          {/* Section 6: Legal Disclaimer */}
          <Box>
            <Heading as="h2" size="lg" mb="3" color="gray.700">
              6. Legal Disclaimer
            </Heading>
            <Text mb="4">
              The Maqbarah Directory serves as a community resource and does not
              provide legal or religious rulings on burial grounds. <br /> Users
              should consult local Islamic scholars, mosques, or authorities for
              guidance on burial-related matters.
            </Text>
          </Box>

          <Separator />

          {/* Section 7: Termination of Access */}
          <Box>
            <Heading as="h2" size="lg" mb="3" color="gray.700">
              7. Termination of Access
            </Heading>
            <Text mb="4">
              We reserve the right to suspend or terminate access for users who
              violate these Terms.
            </Text>
          </Box>

          <Separator />

          {/* Section 8: Changes to Terms */}
          <Box>
            <Heading as="h2" size="lg" mb="3" color="gray.700">
              8. Changes to Terms
            </Heading>
            <Text mb="4">
              These Terms may be updated periodically. Continued use of the
              website after changes means you accept the new Terms.
            </Text>
            <Text mb="2">📅 Last updated: April 4, 2025.</Text>
            <Text>📩 Contact Us: privacy@maqbarahdirectory.com.ng</Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};
