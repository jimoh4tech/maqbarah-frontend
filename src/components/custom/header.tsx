import {
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { FiMenu, FiX } from "react-icons/fi";
import { RefObject, useState } from "react";
import { MdOutlineDehaze } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Links = [
  "Home",
  "Search Maqbarah",
  "Submit Maqbarah",
  "Resources",
  "Donate",
  "Contact",
];

const NavLink = ({
  children,
  ref,
  handleToggle,
  isMobile,
}: {
  children: React.ReactNode;
  ref: RefObject<HTMLDivElement | null>;
  handleToggle: () => void;
  isMobile?: boolean;
}) => {
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    if (isMobile) handleToggle();
  };
  return (
    <Link
      px={3}
      py={2}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: "gray.100",
      }}
      onClick={handleClick}
      fontWeight="medium"
    >
      {children}
    </Link>
  );
};

export const Header = ({
  refs,
}: {
  refs: RefObject<HTMLDivElement | null>[];
}) => {
  const { open, onOpen, onClose } = useDisclosure();
  const [login] = useState(false);
  const handleToggle = () => {
    if (open) {
      onClose();
    } else {
      onOpen();
    }
  };
  const navigate = useNavigate();
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
        <HStack gap={4} w={"150px"} onClick={() => navigate("/")} cursor={'pointer'}>
          <Image src="/images/logo_dark.png" alt="Maqbarah Directory" />
        </HStack>

        {/* Desktop Nav */}
        <HStack gap={6} display={{ base: "none", md: "flex" }}>
          {Links.map((link, index) => (
            <NavLink key={link} ref={refs[index]} handleToggle={handleToggle}>
              {link}
            </NavLink>
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
            {login ? <MdOutlineDehaze /> : null}
          </IconButton>
        </Flex>
      </Flex>

      {/* Mobile Nav Menu */}
      {open ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack gap={4}>
            {Links.map((link, index) => (
              <NavLink
                key={link}
                ref={refs[index]}
                handleToggle={handleToggle}
                isMobile
              >
                {link}
              </NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};
