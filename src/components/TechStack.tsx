"use client";
import { Box, Grid, HStack, Text, Image, Span } from "@chakra-ui/react";
import fadeIn, { fadeInUp } from "@/app/utils/animations";
import { keyframes } from "@emotion/react";

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

const techStackCategories = [
  {
    category: "Backend",
    technologies: [
      { name: "Python", icon: "https://skillicons.dev/icons?i=py" },
      { name: "Django", icon: "https://skillicons.dev/icons?i=django" },
      {
        name: "FastAPI",
        icon: "https://skillicons.dev/icons?i=fastapi",
        learning: true,
      },
      {
        name: "GraphQL",
        icon: "https://skillicons.dev/icons?i=graphql",
        learning: true,
      },
    ],
  },
  {
    category: "Frontend",
    technologies: [
      { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
      { name: "TypeScript", icon: "https://skillicons.dev/icons?i=ts" },
      { name: "React", icon: "https://skillicons.dev/icons?i=react" },
      { name: "Next.js", icon: "https://skillicons.dev/icons?i=nextjs" },
      { name: "Tailwind", icon: "https://skillicons.dev/icons?i=tailwind" },
      { name: "Bootstrap", icon: "https://skillicons.dev/icons?i=bootstrap" },
      { name: "Vite", icon: "https://skillicons.dev/icons?i=vite" },
      { name: "Npm", icon: "https://skillicons.dev/icons?i=npm" },
      { name: "Bun", icon: "https://skillicons.dev/icons?i=bun" },
      { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
      {
        name: "Apollo",
        icon: "https://skillicons.dev/icons?i=apollo",
        learning: true,
      },
    ],
  },
  {
    category: "Databases",
    technologies: [
      { name: "SQLite", icon: "https://skillicons.dev/icons?i=sqlite" },
      { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
      { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
      { name: "PostgreSQL", icon: "https://skillicons.dev/icons?i=postgres" },
      { name: "Supabase", icon: "https://skillicons.dev/icons?i=supabase" },
      {
        name: "Redis",
        icon: "https://skillicons.dev/icons?i=redis",
      },
    ],
  },
  {
    category: "DevOps & Tools I use",
    technologies: [
      { name: "VS Code", icon: "https://skillicons.dev/icons?i=vscode" },
      { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
      { name: "GitHub", icon: "https://skillicons.dev/icons?i=github" },
      { name: "Vercel", icon: "https://skillicons.dev/icons?i=vercel" },
      { name: "Linux", icon: "https://skillicons.dev/icons?i=linux" },
      { name: "Postman", icon: "https://skillicons.dev/icons?i=postman" },
      {
        name: "Fedora",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fedora/fedora-original.svg",
      },
    ],
  },
];

const TechStack = () => {
  const totalTech = techStackCategories.reduce(
    (acc, cat) => acc + cat.technologies.length,
    0,
  );

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
          My Tech Stack, presented in the sequence of my learning journey
        </Text>
        <Text fontSize="xs" color="gray.600" fontFamily="monospace">
          <Span fontSize={"20px"} color="#10b981">
            {totalTech}
          </Span>{" "}
          Technologies
        </Text>
      </HStack>

      {techStackCategories.map((category, categoryIndex) => (
        <Box key={categoryIndex} mb={{ base: 8, md: 10 }}>
          <Text
            fontSize={{ base: "sm", md: "md" }}
            color="gray.400"
            fontFamily="monospace"
            mb={4}
            textTransform="uppercase"
            letterSpacing="wider"
          >
            {category.category}
          </Text>
          <Grid
            templateColumns={{
              base: "repeat(3, 1fr)",
              sm: "repeat(4, 1fr)",
              md: "repeat(5, 1fr)",
              lg: "repeat(6, 1fr)",
            }}
            gap={{ base: 3, md: 4 }}
          >
            {category.technologies.map((tech, i) => (
              <Box
                key={i}
                p={{ base: 3, md: 4 }}
                border="1px solid"
                borderColor={tech.learning ? "#10b981" : "gray.900"}
                _hover={{
                  borderColor: tech.learning ? "#10b981" : "gray.600",
                  bg: "#050505",
                }}
                transition="all 0.2s"
                animation={`${fadeIn} 0.5s ease-out ${
                  0.6 + categoryIndex * 0.1 + i * 0.03
                }s both`}
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap={2}
                position="relative"
              >
                {tech.learning && (
                  <>
                    <Box
                      position="absolute"
                      top={2}
                      right={2}
                      w="8px"
                      h="8px"
                      borderRadius="full"
                      bg="#10b981"
                      animation={`${pulse} 2s ease-in-out infinite`}
                    />
                    <Text
                      position="absolute"
                      top={-3}
                      left="50%"
                      transform="translateX(-50%)"
                      fontSize="2xs"
                      color="#10b981"
                      fontFamily="monospace"
                      whiteSpace="nowrap"
                      bg="black"
                      px={2}
                    >
                      Currently Learning
                    </Text>
                  </>
                )}
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
      ))}
    </Box>
  );
};

export default TechStack;
