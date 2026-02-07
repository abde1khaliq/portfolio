"use client";

import {
  Box,
  Heading,
  Text,
  VStack,
  Button,
  Flex,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const MotionBox = motion.create(Box);

export default function NotFound() {
  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg={{ base: "gray.50", _dark: "#050505" }}
      p={4}
    >
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        maxW="md"
        w="100%"
        textAlign="center"
      >
        <VStack gap={8}>
          <VStack gap={2}>
            <Heading
              fontSize="6xl"
              fontWeight="black"
              lineHeight="1"
              color={{ base: "black", _dark: "white" }}
            >
              404
            </Heading>
            <Heading
              fontSize="xl"
              color={{ base: "gray.700", _dark: "gray.300" }}
            >
              Lost in space?
            </Heading>
            <Text color="gray.500" fontSize="sm" maxW="300px">
              How did you end up here?
            </Text>
          </VStack>

          <VStack w="100%" gap={3}>
            <Button
              asChild
              bg="white"
              color="black"
              size="lg"
              w="50%"
              _hover={{ opacity: 0.9 }}
            >
              <Link href="/">Back to Home page</Link>
            </Button>

            <Button
              variant="ghost"
              color="gray.500"
              p={"5"}
              size="sm"
              onClick={() => window.history.back()}
            >
              <ChevronLeft size={16} /> Go Back
            </Button>
          </VStack>
        </VStack>
      </MotionBox>
    </Flex>
  );
}
