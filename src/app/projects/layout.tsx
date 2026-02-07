import NavBar from "@/components/NavBar";
import { Box, Container } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return (
    <Box position="relative" minH="100vh" w="full" bg="#000000">
      <Box
        position="absolute"
        inset={0}
        zIndex={0}
        backgroundImage={`
          linear-gradient(to right, #050505, transparent 1px),
          linear-gradient(to bottom, #050505, transparent 1px)
        `}
        backgroundSize="40px 40px"
        pointerEvents="none"
      />

      <NavBar />

      <Box display="flex" justifyContent="center" w="full">
        <Container
          maxW="1600px"
          position="relative"
          zIndex={1}
          color="white"
          px={{ base: 4, md: 6 }}
        >
          {children}
        </Container>
      </Box>
    </Box>
  );
}
