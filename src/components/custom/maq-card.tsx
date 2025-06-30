import { Box, Badge, Flex, Image, Text, Icon, Stack } from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";

type CemeteryCardProps = {
  name: string;
  location: string;
  imageUrl: string;
  verified?: boolean;
};

export const MaqCard = ({
  name,
  location,
  imageUrl,
  verified = true,
}: CemeteryCardProps) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="xl"
      overflow="hidden"
      boxShadow="md"
      bg={"white"}
      maxW="sm"
    >
      <Image src={imageUrl} alt={name} objectFit="cover" w="100%" h="160px" />

      <Box p={4}>
        <Stack gap={1}>
          <Text fontWeight="semibold" fontSize="md">
            {name}
          </Text>
          <Text fontSize="sm" color="gray.500">
            {location}
          </Text>

          <Flex justify="space-between" align="center" mt={2}>
            {verified && (
              <Badge
                colorScheme="forest"
                variant="subtle"
                fontSize="0.75rem"
                px={2}
                py={0.5}
                borderRadius="full"
              >
                ✅ Verified
              </Badge>
            )}
            <Icon as={FiArrowRight} boxSize={4} color="gray.600" />
          </Flex>
        </Stack>
      </Box>
    </Box>
  );
};
