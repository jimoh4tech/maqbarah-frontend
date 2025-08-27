import { Box } from "@chakra-ui/react";
import { LightMode } from "./components/ui/color-mode";
import { Toaster } from "./components/ui/toaster";
import { Router } from "./route/routes";

function App() {
  

  return (
    <Box>
      <>
        <LightMode>
          <Toaster />
          <Router />
        </LightMode>
      </>
    </Box>
  );
}

export default App;
