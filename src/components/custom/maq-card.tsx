import { IMaqbarahCardProps } from "@/interface/maqbarah";
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
  Link,
} from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";

export const MaqCard = ({ details }: { details: IMaqbarahCardProps }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="xl"
      overflow="hidden"
      boxShadow="md"
      bg={"white"}
      maxW="sm"
    >
      <Image
        src={details.imageUrl}
        alt={details.name}
        objectFit="cover"
        w="100%"
        h="160px"
      />

      <Box p={4}>
        <Stack gap={1}>
          <Text fontWeight="semibold" fontSize="md">
            {details.name}
          </Text>
          <Text fontSize="sm" color="gray.500">
            {`${details.address}, ${details.city}, ${details.lga}, ${details.state}.`}
          </Text>

          <Flex justify="space-between" align="center" mt={2}>
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
            <Dialog.Root scrollBehavior={"inside"} size={"full"}>
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
                      <Dialog.Title color={"forestgreen"}>
                        {details.name}
                      </Dialog.Title>
                    </Dialog.Header>
                    <Dialog.Body>
                      <Stack>
                        <Flex justifyContent={"space-between"} direction={['column', 'row']}>
                          <Text fontWeight={"semibold"}>Address:</Text>
                          <Text
                            color={"forestgreen"}
                          >{`${details.address}, ${details.city}, ${details.lga}, ${details.state}.`}</Text>
                        </Flex>
                        <Separator />
                        <Flex justifyContent={"space-between"} direction={['column', 'row']}>
                          <Text fontWeight={"semibold"}>Landmarks:</Text>
                          <Text color={"forestgreen"}>{details.landmark}</Text>
                        </Flex>
                        <Separator />
                        <Flex justifyContent={"space-between"} direction={['column', 'row']}>
                          <Text fontWeight={"semibold"}>Contact Person:</Text>
                          <Text
                            color={"forestgreen"}
                          >{`${details.contactPersonName} - ${details.contactPersonRole}`}</Text>
                        </Flex>
                        <Separator />
                        <Flex justifyContent={"space-between"} direction={['column', 'row']}>
                          <Text fontWeight={"semibold"}>Contact Phone:</Text>
                          <Link
                            href={`tel:${details.contactPersonPhone}`}
                            color="forest.600"
                            _hover={{ textDecoration: "underline" }}
                          >
                            {details.contactPersonPhone}
                          </Link>
                        </Flex>
                        <Separator />
                        <Flex justifyContent={"space-between"} direction={['column', 'row']}>
                          <Text fontWeight={"semibold"}>
                            Type of Ownership:
                          </Text>
                          <Text color={"forestgreen"}>
                            {details.typeOfOwnership.join(", ")}
                          </Text>
                        </Flex>
                        <Separator />
                        <Flex justifyContent={"space-between"} direction={['column', 'row']}>
                          <Text fontWeight={"semibold"}>Managing Body:</Text>
                          <Text color={"forestgreen"}>
                            {details.managingBody}
                          </Text>
                        </Flex>
                        <Separator />
                        <Flex justifyContent={"space-between"} direction={['column', 'row']}>
                          <Text fontWeight={"semibold"}>
                            Opening & Closing Times:
                          </Text>
                          <Text color={"forestgreen"}>
                            {details.openingHours}
                          </Text>
                        </Flex>
                        <Separator />
                        <Flex justifyContent={"space-between"} direction={['column', 'row']}>
                          <Text fontWeight={"semibold"}>
                            Emergency Available:
                          </Text>
                          <Text color={"forestgreen"}>
                            {details.emergencyAccessAvailable}
                          </Text>
                        </Flex>
                        <Separator />
                        <Flex justifyContent={"space-between"} direction={['column', 'row']}>
                          <Text fontWeight={"semibold"}>
                            Who Can Be Burried?:
                          </Text>
                          <Text color={"forestgreen"}>
                            {details.deceasedGroup.join(", ")}
                          </Text>
                        </Flex>
                        <Separator />
                        <Flex justifyContent={"space-between"} direction={['column', 'row']}>
                          <Text fontWeight={"semibold"}>
                            Is Burial Free or Paid?:
                          </Text>
                          <Text color={"forestgreen"}>
                            {details.paymentType.join(", ")}
                          </Text>
                        </Flex>
                        <Separator />
                        <Flex justifyContent={"space-between"} direction={['column', 'row']}>
                          <Text fontWeight={"semibold"}>
                            Payment Breakdown:
                          </Text>
                          <Text color={"forestgreen"}>
                            {details.paymentDetails}
                          </Text>
                        </Flex>
                        <Separator />
                        <Flex justifyContent={"space-between"} direction={['column', 'row']}>
                          <Text fontWeight={"semibold"}>Payment Method:</Text>
                          <Text color={"forestgreen"}>
                            {details.paymentMethod.join(", ")}
                          </Text>
                        </Flex>
                        <Separator />
                        <Flex justifyContent={"space-between"} direction={['column', 'row']}>
                          <Text fontWeight={"semibold"}>
                            Available Services:
                          </Text>
                          <Text color={"forestgreen"}>
                            {details.availableServices.join(", ")}
                          </Text>
                        </Flex>
                        <Separator />
                        <Flex justifyContent={"space-between"} direction={['column', 'row']}>
                          <Text fontWeight={"semibold"}>
                            Facilities Available:
                          </Text>
                          <Text color={"forestgreen"}>
                            {details.facilitiesAvailable.join(", ")}
                          </Text>
                        </Flex>
                        <Separator />
                        <Flex justifyContent={"space-between"} direction={['column', 'row']}>
                          <Text fontWeight={"semibold"}>Addtional Notes:</Text>
                          <Text color={"forestgreen"}>
                            {details.additionalNotes}
                          </Text>
                        </Flex>
                        <Stack>
                          <Text fontWeight={"semibold"}>Images:</Text>
                          <Flex flexWrap={'wrap'} gap={2}>
                            <Image src="/images/idif-4.jpg" boxSize={"350px"} />
                            <Image src="/images/idif-3.jpg" boxSize={"350px"} />
                            <Image src="/images/idif-1.jpg" boxSize={"350px"} />
                            <Image src="/images/idif-2.jpg" boxSize={"350px"} />
                          </Flex>
                        </Stack>
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
