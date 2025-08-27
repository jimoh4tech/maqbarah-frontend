import { Footer } from "@/components/custom/footer";
import { Header } from "@/components/custom/header";
import { Box } from "@chakra-ui/react";
import { RefObject } from "react";
import { Outlet } from "react-router-dom";

export const Layout = ({
  refs,
}: {
  refs: RefObject<HTMLDivElement | null>[];
}) => {
  return (
    <Box>
      <Header refs={refs} />
      <Outlet />
      <Footer refs={refs} />
    </Box>
  );
};
