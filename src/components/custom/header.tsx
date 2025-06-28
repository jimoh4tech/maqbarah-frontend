import {
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  useDisclosure,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import { MdOutlineDehaze } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const Links = [
  "Home",
  "Search Maqbarah",
  "Submit Maqbarah",
  "Resources",
  "Support",
  "Contact",
];

const NavLink = ({ children }: { children: React.ReactNode }) => (
  <Link
    px={3}
    py={2}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: "gray.100",
    }}
    href={"#"}
    fontWeight="medium"
  >
    {children}
  </Link>
);

export const Header = () => {
  const { open, onOpen, onClose } = useDisclosure();
  const [login, setLogin] = useState(false);

  return (
    <Box
      bg={"white"}
      px={4}
      py={4}
      boxShadow="sm"
      position="sticky"
      top={0}
      zIndex={999}
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        {/* Logo Section */}
        <HStack gap={4}>
          <Image src="/images/logo.png" alt="Maqbarah Directory" />
        </HStack>

        {/* Desktop Nav */}
        <HStack gap={6} display={{ base: "none", md: "flex" }}>
          {Links.map((link) => (
            <NavLink key={link}>{link}</NavLink>
          ))}
        </HStack>

        {/* Toggle & Mobile Menu */}
        <Flex alignItems={"center"}>
          <IconButton
            size="md"
            aria-label="Open Menu"
            display={{ md: "none" }}
            onClick={open ? onClose : onOpen}
            mr={2}
          >
            {open ? <FiX /> : <FiMenu />}
          </IconButton>
          <IconButton size="md" variant="ghost" aria-label="Toggle Color Mode">
            {login ? <MdOutlineDehaze /> : <FaUser />}
          </IconButton>
        </Flex>
      </Flex>

      {/* Mobile Nav Menu */}
      {open ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack gap={4}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};
