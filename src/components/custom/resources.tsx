import { Box, Flex, For, Heading, Text } from "@chakra-ui/react";
import { FiHelpCircle } from "react-icons/fi";
import { ResourceCard } from "./resource-card";
import { RefObject } from "react";
import { toaster } from "../ui/toaster";

export const ResourcesSection = ({
  resourcesRef,
}: {
  resourcesRef: RefObject<HTMLDivElement | null>;
}) => {
  const resourceData = [
    {
      title: "Islamic Burial Guide",
      description:
        "A comprehensive guide on Islamic burial practices and Janazah procedures.",
      buttonText: "Read Guide",
      icon: FiHelpCircle,
    },
    {
      title: "Local Burial Services",
      description:
        "Find local burial services and Janazah providers in your area.",
      buttonText: "Find Services",
      icon: FiHelpCircle,
    },
    {
      title: "Community Support",
      description:
        "Connect with community organizations for support during Janazah.",
      buttonText: "Get Support",
      icon: FiHelpCircle,
    },
  ];

  const showComingSoonToast = () => {
    console.log("I was clicked");
    toaster.create({
      title: "Info",
      description: "Coming Soon!",
      type: "info",
    });
  };

  return (
    <Box
      bg="gray.100"
      py={8}
      px={{ base: 4, md: 20 }}
      borderRadius="md"
      boxShadow="md"
      ref={resourcesRef}
    >
      <Flex direction={"column"} align="center" justify="space-between" gap={4}>
        <Heading
          as="h2"
          size={{ base: "lg", md: "2xl" }}
          mb={{ base: 4, md: 0 }}
        >
          Islamic Resources
        </Heading>
        <Text fontSize="md" color="gray.600" textAlign={"center"}>
          Educational materials on Janazah procedures and burial guidelines
        </Text>

        <Flex gap={5} wrap="wrap" justify="center" mt={6}>
          <For each={resourceData}>
            {(item) => (
              <ResourceCard
                key={item.title}
                {...item}
                onClick={showComingSoonToast}
              />
            )}
          </For>
        </Flex>
      </Flex>
    </Box>
  );
};
