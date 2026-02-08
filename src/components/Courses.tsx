"use client";
import { Box, Grid, HStack, VStack, Text, Image, Link } from "@chakra-ui/react";
import fadeIn, { fadeInUp } from "@/app/utils/animations";
import { keyframes } from "@emotion/react";

const shimmer = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`;

const courses = [
  {
    title: "Complete Python Mastery",
    issuer: "codewithmosh.com",
    date: "2025-05-08",

    image: "https://i.postimg.cc/sDjVrKzz/python-mastery.png",
    verified: true,
  },
  {
    title: "The Ultimate Django Series: Part 1",
    issuer: "codewithmosh.com",
    date: "2025-06-10",

    image: "https://i.postimg.cc/cH0zn9XN/django-part-1.png",
    verified: true,
  },
  {
    title: "The Ultimate Django Series: Part 2",
    issuer: "codewithmosh.com",
    date: "2025-06-19",

    image: "https://i.postimg.cc/SRQHwTMT/django-part-2.png",
    verified: true,
  },
  {
    title: "The Ultimate Django Series: Part 3",
    issuer: "codewithmosh.com",
    date: "2025-06-28",

    image: "https://i.postimg.cc/mrCxMF4h/django-part-1.png",
    verified: true,
  },
  {
    title: "Ultimate Javascript Part 1: Fundamentals",
    issuer: "codewithmosh.com",
    date: "2025-06-03",

    image: "https://i.postimg.cc/Hk19nJSg/javascript.png",
    verified: true,
  },
  {
    title: "Ultimate Javascript Part 2: Advanced Topics",
    issuer: "codewithmosh.com",
    date: "2025-09-27",

    image: "https://i.postimg.cc/NGynrHkZ/javascript2.png",
    verified: true,
  },
  {
    title: "React 18 for Beginners",
    issuer: "codewithmosh.com",
    date: "2025-12-23",

    image: "https://i.postimg.cc/MKVr9J4b/react18.png",
    verified: true,
  },
];

const Certificates = () => {
  return (
    <Box
      py={{ base: 12, md: 16 }}
      borderBottom="1px solid"
      borderColor="gray.900"
      animation={`${fadeInUp} 0.8s ease-out 0.4s both`}
    >
      {/* Header */}
      <HStack justify="space-between" mb={8} flexWrap="wrap" gap={2}>
        <Text
          fontSize="xs"
          color="gray.600"
          fontFamily="monospace"
          textTransform="uppercase"
        >
          Courses & Achievements
        </Text>
        <HStack gap={4}>
          <HStack gap={1}>
            <Box w="8px" h="8px" borderRadius="full" bg="#10b981" />
            <Text fontSize="xs" color="gray.600" fontFamily="monospace">
              Verified
            </Text>
          </HStack>
          <Text fontSize="xs" color="gray.600" fontFamily="monospace">
            <Text as="span" fontSize="20px" color="#10b981">
              {courses.length}
            </Text>{" "}
            Courses
          </Text>
        </HStack>
      </HStack>

      {/* Certificates Grid */}
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={{ base: 4, md: 6 }}
      >
        {courses.map((course, index) => (
          <Link key={index} _hover={{ textDecoration: "none" }}>
            <Box
              w="500px"
              position="relative"
              h="full"
              border="1px solid"
              borderColor="gray.900"
              bg="black"
              overflow="hidden"
              transition="all 0.3s ease"
              animation={`${fadeIn} 0.5s ease-out ${0.6 + index * 0.1}s both`}
              _hover={{
                borderColor: "#10b981",
                bg: "#050505",
                "& .shimmer-effect": {
                  opacity: 1,
                },
              }}
            >
              {/* Shimmer Effect */}
              <Box
                className="shimmer-effect"
                position="absolute"
                top={0}
                left={0}
                right={0}
                h="2px"
                opacity={0}
                transition="opacity 0.3s"
                background="linear-gradient(90deg, transparent, #10b981, transparent)"
                backgroundSize="200% 100%"
                animation={`${shimmer} 2s linear infinite`}
              />

              {/* Verified Badge */}
              {course.verified && (
                <Box
                  position="absolute"
                  top={3}
                  right={3}
                  display="flex"
                  alignItems="center"
                  gap={1}
                  bg="rgba(16, 185, 129, 0.1)"
                  border="1px solid"
                  borderColor="#10b981"
                  px={2}
                  py={1}
                  borderRadius="sm"
                >
                  <Box w="6px" h="6px" borderRadius="full" bg="#10b981" />
                  <Text
                    fontSize="2xs"
                    color="#10b981"
                    fontFamily="monospace"
                    textTransform="uppercase"
                  >
                    Verified
                  </Text>
                </Box>
              )}

              <VStack align="stretch" p={6} spaceX={4} spaceY={4}>
                {/* Logo */}
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Image
                    src={course.image}
                    alt={course.issuer}
                    maxH="200px"
                    maxW="200px"
                    objectFit="contain"
                  />
                </Box>

                {/* Certificate Info */}
                <VStack align="stretch" spaceX={2} spaceY={2} flex={1}>
                  <Text
                    fontSize={{ base: "sm", md: "md" }}
                    fontFamily="monospace"
                    color="white"
                    fontWeight="600"
                    lineHeight="1.4"
                  >
                    {course.title}
                  </Text>

                  <Text fontSize="xs" color="gray.400" fontFamily="monospace">
                    {course.issuer}
                  </Text>

                  {/* Date & ID */}
                  <HStack
                    pt={2}
                    borderTop="1px solid"
                    borderColor="gray.900"
                    justify="space-between"
                    flexWrap="wrap"
                    gap={2}
                  >
                    <Text
                      fontSize="2xs"
                      color="gray.600"
                      fontFamily="monospace"
                    >
                      Issued {course.date}
                    </Text>
                  </HStack>
                </VStack>
              </VStack>
            </Box>
          </Link>
        ))}
      </Grid>

      {/* Footer Note */}
      <Box
        mt={8}
        p={4}
        border="1px solid"
        borderColor="gray.900"
        borderLeft="3px solid"
        borderLeftColor="#10b981"
        animation={`${fadeIn} 0.5s ease-out 1s both`}
      >
        <Text fontSize="xs" color="gray.500" fontFamily="monospace">
          💡 All courses are verifiable through serial number. Click on any
          certificate to view the official credential.
        </Text>
      </Box>
    </Box>
  );
};

export default Certificates;
