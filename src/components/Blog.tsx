"use client";

import { Box, Flex, HStack, Span, Text, VStack } from "@chakra-ui/react";
import fadeIn, { fadeInUp } from "@/app/utils/animations";

const blogPosts = [
  {
    date: "Sunday, February 8, 2026",
    title:
      "Today was a milestone — I dove into the world of GraphQL and started exploring Apollo for dynamic data fetching on the frontend, while experimenting with Strawberry on the backend. The ability to shape responses precisely around queries feels liberating compared to the rigidness of REST. GraphQL isn’t just powerful; it’s actually fun to use, and right now it feels like my much‑needed breather from the endless grind of RESTful APIs.",
  },
  {
    date: "Saturday, February 7, 2026",
    title:
      "Just wrapped up building my brand‑new portfolio to showcase my journey, projects, and the skills I’ve been sharpening. Seeing everything come together in one place feels like a huge step forward in defining my developer identity.",
  },
];

const Blog = () => {
  return (
    <Box
      py={{ base: 12, md: 16 }}
      borderBottom="1px solid"
      borderColor="gray.900"
      animation={`${fadeInUp} 0.8s ease-out 0.8s both`}
    >
      <HStack justify="space-between" mb={8}>
        <Text
          fontSize="xs"
          color="gray.600"
          fontFamily="monospace"
          textTransform="uppercase"
        >
          My Blog Posts
        </Text>
        <Text fontSize="xs" color="gray.600" fontFamily="monospace">
          <Span fontSize={"20px"} color="#10b981">
            {blogPosts.length.toString().padStart(2, "0")}
          </Span>{" "}
          Posts
        </Text>
      </HStack>
      <VStack gap={0} align="stretch">
        {blogPosts.map((post, i) => (
          <Box
            p={5}
            key={i}
            py={{ base: 4, md: 5 }}
            borderBottom={i !== blogPosts.length - 1 ? "1px solid" : "none"}
            borderColor="gray.900"
            _hover={{ bg: "#050505" }}
            transition="all 0.2s"
            cursor="pointer"
            animation={`${fadeIn} 0.5s ease-out ${1 + i * 0.1}s both`}
          >
            <Flex
              justify="space-between"
              align="start"
              direction={{ base: "column", sm: "row" }}
              gap={{ base: 2, sm: 0 }}
            >
              <VStack align="start" gap={2}>
                <Text fontSize="xs" color="gray.600" fontFamily="monospace">
                  {post.date}
                </Text>
                <Text fontSize={{ base: "sm", md: "md" }} fontWeight="medium">
                  {post.title}
                </Text>
              </VStack>
            </Flex>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Blog;
