"use client";

import { Box, Grid, HStack, Text, Image, Span } from "@chakra-ui/react";
import fadeIn, { fadeInUp } from "@/app/utils/animations";

const techStack = [
  { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
  { name: "TypeScript", icon: "https://skillicons.dev/icons?i=ts" },
  { name: "React", icon: "https://skillicons.dev/icons?i=react" },
  { name: "Tailwind", icon: "https://skillicons.dev/icons?i=tailwind" },
  { name: "Bootstrap", icon: "https://skillicons.dev/icons?i=bootstrap" },
  { name: "Next.js", icon: "https://skillicons.dev/icons?i=nextjs" },
  { name: "Vite", icon: "https://skillicons.dev/icons?i=vite" },
  { name: "Npm", icon: "https://skillicons.dev/icons?i=npm" },
  { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
  { name: "Bun", icon: "https://skillicons.dev/icons?i=bun" },
  { name: "Vercel", icon: "https://skillicons.dev/icons?i=vercel" },
  { name: "Python", icon: "https://skillicons.dev/icons?i=py" },
  { name: "Django", icon: "https://skillicons.dev/icons?i=django" },
  { name: "FastAPI", icon: "https://skillicons.dev/icons?i=fastapi" },
  { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
  { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
  { name: "SQLite", icon: "https://skillicons.dev/icons?i=sqlite" },
  { name: "PostgreSQL", icon: "https://skillicons.dev/icons?i=postgres" },
  { name: "Supabase", icon: "https://skillicons.dev/icons?i=supabase" },
  { name: "Redis", icon: "https://skillicons.dev/icons?i=redis" },
  { name: "GitHub", icon: "https://skillicons.dev/icons?i=github" },
  { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
  { name: "Linux", icon: "https://skillicons.dev/icons?i=linux" },

  {
    name: "Fedora",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fedora/fedora-original.svg",
  },
];

const TechStack = () => {
  return (
    <Box
      py={{ base: 12, md: 16 }}
      borderBottom="1px solid"
      borderColor="gray.900"
      animation={`${fadeInUp} 0.8s ease-out 0.4s both`}
    >
      <HStack justify="space-between" mb={8}>
        <Text
          fontSize="xs"
          color="gray.600"
          fontFamily="monospace"
          textTransform="uppercase"
        >
          Tech Stack & Technology I use
        </Text>
        <Text fontSize="xs" color="gray.600" fontFamily="monospace">
          <Span fontSize={"20px"} color="#10b981">
            {techStack.length}
          </Span>{" "}
          Technologies
        </Text>
      </HStack>
      <Grid
        templateColumns={{
          base: "repeat(3, 1fr)",
          sm: "repeat(4, 1fr)",
          md: "repeat(5, 1fr)",
          lg: "repeat(6, 1fr)",
        }}
        gap={{ base: 3, md: 4 }}
      >
        {techStack.map((tech, i) => (
          <Box
            key={i}
            p={{ base: 3, md: 4 }}
            border="1px solid"
            borderColor="gray.900"
            _hover={{
              borderColor: "gray.600",
              bg: "#050505",
            }}
            transition="all 0.2s"
            animation={`${fadeIn} 0.5s ease-out ${0.6 + i * 0.03}s both`}
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={2}
          >
            <Image
              src={tech.icon}
              alt={tech.name}
              w={{ base: "30px", md: "40px" }}
              h={{ base: "30px", md: "40px" }}
              objectFit="contain"
            />
            <Text
              fontSize={{ base: "2xs", md: "xs" }}
              fontFamily="monospace"
              color="white"
              textAlign="center"
            >
              {tech.name}
            </Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default TechStack;
