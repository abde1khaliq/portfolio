"use client";

import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import fadeIn, { fadeInUp } from "@/app/utils/animations";

const blogPosts = [
  {
    date: "2026.02.07",
    title: "Just Finished Building My new portfolio.",
    readTime: "8 min",
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
          Latest Articles
        </Text>
        <Text fontSize="xs" color="gray.600" fontFamily="monospace">
          {blogPosts.length} Posts
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
              <Text
                fontSize="xs"
                color="gray.600"
                fontFamily="monospace"
                flexShrink={0}
              >
                {post.readTime}
              </Text>
            </Flex>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Blog;
