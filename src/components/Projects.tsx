"use client";

import { Box, Flex, HStack, VStack, Text, Button } from "@chakra-ui/react";
import Link from "next/link";
import fadeIn, { fadeInUp } from "@/app/utils/animations";

const projects = [
  {
    id: "001",
    title: "Vireon - Security / Moderation API",
    desc: "A moderation API made with care & love by me, built for real-world impact. It leverages AI-driven analysis and detection, designed for scalability and open collaboration.",
    stack: "Djangorestframework · Python · MySQL · Gemini API",
    status: "Open Source",
    demoUrl: "https://www.youtube.com/watch?v=6b2xKeDb3B4&t=5s",
    sourceUrl: "https://github.com/abde1khaliq/Vireon",
  },
  {
    id: "002",
    title: "Schnack - A Bot for German Language Learning",
    desc: "Schnack is an interactive Discord bot designed to help users practice and improve their German language skills through immersive conversation. Built with Python and Django REST Framework, it offers structured dialogue flows, vocabulary reinforcement, and grammar correction. Ideal for learners seeking a playful yet rigorous language companion.",
    stack: "Djangorestframework · Python · MySQL · Gemini API · Discord API",
    status: "Open Source",
    demoUrl: "https://github.com/abde1khaliq/Schnack",
    sourceUrl: "https://github.com/abde1khaliq/Schnack",
  },
  {
    id: "003",
    title: "Wordify - Image-based PDF Convertor",
    desc: "Wordify is a lightweight, offline desktop application that converts PDF files into editable Word documents with a clean, modern interface. Built with Python and CustomTkinter",
    stack: "Python · Tkinter · Huggingface API",
    status: "Open Source · Deprecated",
    demoUrl: "https://github.com/abde1khaliq/Wordify/releases/tag/v1.1",
    sourceUrl: "https://github.com/abde1khaliq/Wordify",
  },
  {
    id: "004",
    title: "Fync - Chatting Application",
    desc: "Fync was a challenging project, I challenged myself to make a chatting app that uses vanilla JS (Chaos) and Djangorestframework as my backend",
    stack: "Djangorestframework · Python · Vanilla JS · Tailwind",
    status: "Open Source · Not Functional",
    demoUrl: "https://github.com/abde1khaliq/Fync",
    sourceUrl: "https://github.com/abde1khaliq/Fync",
  },
];

const Projects = () => {
  return (
    <Box
      py={{ base: 12, md: 16 }}
      borderBottom="1px solid"
      borderColor="gray.900"
      animation={`${fadeInUp} 0.8s ease-out 0.6s both`}
    >
      <HStack justify="space-between" mb={8}>
        <Text
          fontSize="xs"
          color="gray.600"
          fontFamily="monospace"
          textTransform="uppercase"
        >
          Featured Projects
        </Text>
        <Text fontSize="xs" color="gray.600" fontFamily="monospace">
          {projects.length.toString().padStart(2, "0")} Projects
        </Text>
      </HStack>
      <VStack gap={{ base: 3, md: 4 }} align="stretch">
        {projects.map((project, i) => (
          <Box
            key={project.id}
            p={{ base: 4, md: 6 }}
            border="1px solid"
            borderColor="gray.900"
            _hover={{ borderColor: "gray.600", bg: "#050505" }}
            transition="all 0.2s"
            animation={`${fadeIn} 0.6s ease-out ${0.8 + i * 0.1}s both`}
          >
            <Flex
              justify="space-between"
              mb={3}
              direction={{ base: "column", sm: "row" }}
              gap={{ base: 2, sm: 0 }}
            >
              <HStack gap={3}>
                <Text fontSize="xs" color="gray.600" fontFamily="monospace">
                  #{project.id}
                </Text>
                <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold">
                  {project.title}
                </Text>
              </HStack>
              <HStack gap={2}>
                <Box w="6px" h="6px" bg="#10b981" borderRadius="full" />
                <Text fontSize="xs" color="gray.600" fontFamily="monospace">
                  {project.status}
                </Text>
              </HStack>
            </Flex>
            <Text color="gray.400" mb={4} fontSize={{ base: "xs", md: "sm" }}>
              {project.desc}
            </Text>
            <Text fontSize="xs" color="gray.600" fontFamily="monospace" mb={4}>
              {project.stack}
            </Text>
            <Flex
              gap={3}
              direction={{ base: "column", sm: "row" }}
              w={{ base: "full", sm: "auto" }}
            >
              <Link
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  bg="white"
                  color="black"
                  h={{ base: "40px", md: "44px" }}
                  px={6}
                  borderRadius="0"
                  fontSize="xs"
                  fontWeight="bold"
                  textTransform="uppercase"
                  w={{ base: "full", sm: "auto" }}
                  _hover={{ bg: "gray.200" }}
                  fontFamily="monospace"
                >
                  Try Demo
                </Button>
              </Link>
              <Link
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  bg="transparent"
                  color="white"
                  h={{ base: "40px", md: "44px" }}
                  px={6}
                  borderRadius="0"
                  fontSize="xs"
                  fontWeight="bold"
                  textTransform="uppercase"
                  border="1px solid"
                  borderColor="gray.900"
                  w={{ base: "full", sm: "auto" }}
                  _hover={{ borderColor: "gray.600", bg: "#050505" }}
                  fontFamily="monospace"
                >
                  Source Code
                </Button>
              </Link>
            </Flex>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Projects;
