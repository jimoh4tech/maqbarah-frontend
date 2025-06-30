import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import { FiHelpCircle } from "react-icons/fi";

type InfoCardProps = {
  title: string;
  description: string;
  buttonText: string;
  icon: React.ElementType;
  onClick?: () => void;
};

export const ResourceCard = ({
  title,
  description,
  buttonText,
  onClick,
}: InfoCardProps) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="xl"
      p={5}
      bg="white"
      shadow="sm"
      maxW={{ base: "sm", sm: "1/2", md: "1/3" }}
    >
      <Flex align="center" mb={3}>
        <Icon
          as={FiHelpCircle}
          boxSize={5}
          color="forest.700"
          bg="forest.100"
          borderRadius="full"
          p="1"
          mr={2}
        />
        <Text fontWeight="bold">{title}</Text>
      </Flex>

      <Text fontSize="sm" color="gray.600" mb={4}>
        {description}
      </Text>

      <Button
        size="sm"
        variant="outline"
        color="forest.700"
        borderColor="forest.700"
        _hover={{ bg: "forest.50" }}
        onClick={onClick}
      >
        {buttonText}
      </Button>
    </Box>
  );
};
