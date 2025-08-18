import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  Link,
  Container,
  Flex,
} from "@chakra-ui/react";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md"; // Material Design Icons
import { FaWhatsapp } from "react-icons/fa"; // Font Awesome for WhatsApp
import { RefObject } from "react";
import { FaFacebook, FaTelegram } from "react-icons/fa6";

export function ContactUsSection({
  contactUsRef,
}: {
  contactUsRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    <Box
      as="section"
      py={{ base: "10", md: "16" }} // Vertical padding
      bg="white" // White background
      color="gray.800" // Default text color
      textAlign="center" // Center align content
      ref={contactUsRef} // Reference for scrolling
    >
      <Container maxW="container.md" px={{ base: "4", md: "8" }}>
        <VStack gap={4}>
          <Heading
            as="h2"
            size={{ base: "lg", md: "2xl" }}
            mb={{ base: 4, md: 0 }}
          >
            Get in Touch
          </Heading>

          <Text fontSize="md" color="gray.600" textAlign={"center"}>
            Have questions or need assistance? Reach out to us through any of
            the channels below.
          </Text>

          <Flex gap={6} wrap="wrap" justify="center" mt={6}>
            {/* Office Address */}
            <HStack
              gap="4"
              align="flex-start"
              p="3"
              bg="gray.50"
              borderRadius="md"
              shadow="sm"
              w={"350px"}
              h={"150px"}
            >
              <Icon as={MdLocationOn} w={6} h={6} color="forest.500" />
              <VStack align="flex-start" gap="0">
                <Text fontWeight="semibold" fontSize="lg">
                  Office Address
                </Text>
                <Text fontSize="md" color="gray.700">
                  C/o: Idris Adisa Central Mosque
                </Text>
                <Text fontSize="md" color="gray.700" textAlign={"left"}>
                  2, Mazi Street, Oke-Agbo, Shibiri Ekunpa, Oto-Awori LCDA, Ojo
                  LGA, Lagos State, Nigeria.
                </Text>
              </VStack>
            </HStack>

            {/* Email */}
            <HStack
              gap="4"
              align="flex-start"
              p="3"
              bg="gray.50"
              borderRadius="md"
              shadow="sm"
              w={"350px"}
              h={"150px"}
            >
              <Icon as={MdEmail} w={6} h={6} color="forest.500" />
              <VStack align="flex-start" gap="0">
                <Text fontWeight="semibold" fontSize="lg">
                  Email Us
                </Text>
                <Link
                  href="mailto:maqbarahdirectoryng@gmail.com"
                  fontSize="md"
                  color="forest.600"
                  _hover={{ textDecoration: "underline" }}
                >
                  maqbarahdirectoryng@gmail.com
                </Link>
              </VStack>
            </HStack>

            {/* Phone Numbers */}
            <HStack
              gap="4"
              align="flex-start"
              p="3"
              bg="gray.50"
              borderRadius="md"
              shadow="sm"
              w={"350px"}
              h={"150px"}
            >
              <Icon as={MdPhone} w={6} h={6} color="forest.500" />
              <VStack align="flex-start" gap="0">
                <Text fontWeight="semibold" fontSize="lg">
                  Call Us
                </Text>
                <Link
                  href="tel:+2348026992605"
                  fontSize="md"
                  color="forest.600"
                  _hover={{ textDecoration: "underline" }}
                >
                  +2348026992605
                </Link>
                <Link
                  href="tel:+2348035684288"
                  fontSize="md"
                  color="forest.600"
                  _hover={{ textDecoration: "underline" }}
                >
                  +2348035684288
                </Link>
                <Link
                  href="tel:+2348029492750"
                  fontSize="md"
                  color="forest.600"
                  _hover={{ textDecoration: "underline" }}
                >
                  +2348029492750
                </Link>
                <Link
                  href="tel:+2349091385211"
                  fontSize="md"
                  color="forest.600"
                  _hover={{ textDecoration: "underline" }}
                >
                  +2349091385211
                </Link>
              </VStack>
            </HStack>

            {/* WhatsApp */}
            <HStack
              gap="4"
              align="flex-start"
              p="3"
              bg="gray.50"
              borderRadius="md"
              shadow="sm"
              w={"350px"}
              h={"150px"}
            >
              <Icon as={FaWhatsapp} w={6} h={6} color="forest.500" />
              <VStack align="flex-start" gap="0">
                <Text fontWeight="semibold" fontSize="lg">
                  WhatsApp
                </Text>
                <Link
                  href="https://wa.me/2348026992605"
                  fontSize="md"
                  color="forest.600"
                  _hover={{ textDecoration: "underline" }}
                  target="_blank"
                >
                  Chat on WhatsApp
                </Link>
              </VStack>
            </HStack>
            {/* Telegram */}
            <HStack
              gap="4"
              align="flex-start"
              p="3"
              bg="gray.50"
              borderRadius="md"
              shadow="sm"
              w={"350px"}
              h={"150px"}
            >
              <Icon as={FaTelegram} w={6} h={6} color="forest.500" />
              <VStack align="flex-start" gap="0">
                <Text fontWeight="semibold" fontSize="lg">
                  Telegram
                </Text>
                <Link
                  href="https://t.me/maqbarahdirectory"
                  fontSize="md"
                  color="forest.600"
                  _hover={{ textDecoration: "underline" }}
                  target="_blank"
                >
                  Join Telegram Group
                </Link>
              </VStack>
            </HStack>
            {/* Facebook */}
            <HStack
              gap="4"
              align="flex-start"
              p="3"
              bg="gray.50"
              borderRadius="md"
              shadow="sm"
              w={"350px"}
              h={"150px"}
            >
              <Icon as={FaFacebook} w={6} h={6} color="forest.500" />
              <VStack align="flex-start" gap="0">
                <Text fontWeight="semibold" fontSize="lg">
                  Facebook
                </Text>
                <Link
                  href="https://www.facebook.com/profile.php?id=61575141770717&mibextid=ZbWKwL"
                  fontSize="md"
                  color="forest.600"
                  _hover={{ textDecoration: "underline" }}
                  target="_blank"
                >
                  Visit Our Facebook Page
                </Link>
              </VStack>
            </HStack>
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
}
