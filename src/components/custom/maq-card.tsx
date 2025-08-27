import {
  Box,
  Badge,
  Flex,
  Image,
  Text,
  Icon,
  Stack,
  Dialog,
  IconButton,
  Portal,
  CloseButton,
  Separator,
} from "@chakra-ui/react";
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
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <IconButton variant="outline" size="sm">
                  <Icon as={FiArrowRight} boxSize={4} color="gray.600" />
                </IconButton>
              </Dialog.Trigger>
              <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                  <Dialog.Content>
                    <Dialog.Header>
                      <Dialog.Title>{name}</Dialog.Title>
                    </Dialog.Header>
                    <Dialog.Body>
                      <Stack>
                        <Flex justifyContent={"space-between"}>
                          <Text fontWeight={"semibold"}>Address:</Text>
                          <Text>{location}</Text>
                        </Flex>
                        <Separator />
                        <Flex justifyContent={"space-between"}>
                          <Text fontWeight={"semibold"}>Landmarks:</Text>
                          <Text>{location}</Text>
                        </Flex>
                        <Separator />
                        <Flex justifyContent={"space-between"}>
                          <Text fontWeight={"semibold"}>Contact Person:</Text>
                          <Text>{location}</Text>
                        </Flex>
                        <Separator />
                        <Flex justifyContent={"space-between"}>
                          <Text fontWeight={"semibold"}>
                            Type of Ownership:
                          </Text>
                          <Text>{location}</Text>
                        </Flex>
                        <Separator />
                        <Flex justifyContent={"space-between"}>
                          <Text fontWeight={"semibold"}>Managing Body:</Text>
                          <Text>{location}</Text>
                        </Flex>
                        <Separator />
                        <Flex justifyContent={"space-between"}>
                          <Text fontWeight={"semibold"}>
                            Opening & Closing Times:
                          </Text>
                          <Text>{location}</Text>
                        </Flex>
                        <Separator />
                        <Flex justifyContent={"space-between"}>
                          <Text fontWeight={"semibold"}>
                            Emergency Available:
                          </Text>
                          <Text>{location}</Text>
                        </Flex>
                        <Separator />
                        <Flex justifyContent={"space-between"}>
                          <Text fontWeight={"semibold"}>
                            Who Can Be Burried?:
                          </Text>
                          <Text>{location}</Text>
                        </Flex>
                        <Separator />
                        <Flex justifyContent={"space-between"}>
                          <Text fontWeight={"semibold"}>
                            Is Burial Free or Paid?:
                          </Text>
                          <Text>{location}</Text>
                        </Flex>
                        <Separator />
                        <Flex justifyContent={"space-between"}>
                          <Text fontWeight={"semibold"}>
                            Payment Breakdown:
                          </Text>
                          <Text>{location}</Text>
                        </Flex>
                      </Stack>
                    </Dialog.Body>
                    <Dialog.CloseTrigger asChild>
                      <CloseButton size="sm" />
                    </Dialog.CloseTrigger>
                  </Dialog.Content>
                </Dialog.Positioner>
              </Portal>
            </Dialog.Root>
          </Flex>
        </Stack>
      </Box>
    </Box>
  );
};
