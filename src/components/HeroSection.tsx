import { Box, Button, Flex, Grid, HStack, Text, Image } from "@chakra-ui/react";
import { fadeInUp } from "@/app/utils/animations";
import Link from "next/link";

const HeroSection = () => {
  return (
    <Box
      py={{ base: 12, md: 20 }}
      borderBottom="1px solid"
      borderColor="gray.900"
      animation={`${fadeInUp} 0.8s ease-out 0.2s both`}
    >
      <Grid
        templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
        gap={8}
        alignItems="center"
      >
        {/* Left side - Text content */}
        <Box>
          <HStack gap={2} mb={4}>
            <Box w="8px" h="8px" bg="#10b981" borderRadius="full" />
            <Text
              fontSize="xs"
              color="gray.600"
              fontFamily="monospace"
              textTransform="uppercase"
            >
              Available for Opportunities
            </Text>
          </HStack>
          <Text
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
            fontWeight="bold"
            letterSpacing="-0.02em"
            mb={6}
            lineHeight="1.1"
          >
            Full-Stack Developer
            <br />
            Building Scalable Systems
          </Text>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="gray.500"
            maxW="600px"
            lineHeight="1.8"
          >
            I’m Ahmed Abdelkhaliq—call me Abdelkhaliq 😄. A 17‑year‑old
            full‑stack developer from Egypt 🇪🇬, I turn curiosity into code and
            ideas into apps. What began as fascination with syntax has grown
            into a passion for building tools people actually use.
          </Text>
          <Flex
            gap={4}
            mt={8}
            direction={{ base: "column", sm: "row" }}
            w={{ base: "full", sm: "auto" }}
          >
            <Link href="/projects">
              <Button
                bg="white"
                color="black"
                h="48px"
                px={8}
                borderRadius="0"
                fontSize="sm"
                fontWeight="bold"
                textTransform="uppercase"
                w={{ base: "full", sm: "auto" }}
                _hover={{ bg: "gray.200" }}
              >
                View Projects
              </Button>
            </Link>
            <Link href="/blog">
              <Button
                bg="transparent"
                color="white"
                h="48px"
                px={8}
                borderRadius="0"
                fontSize="sm"
                fontWeight="bold"
                textTransform="uppercase"
                border="1px solid"
                borderColor="gray.900"
                w={{ base: "full", sm: "auto" }}
                _hover={{ borderColor: "gray.600" }}
              >
                Read My Blog
              </Button>
            </Link>
          </Flex>
        </Box>

        {/* Right side - Image slideshow */}
        <Box
          position="relative"
          h={{ base: "300px", md: "400px", lg: "500px" }}
          overflow="hidden"
          display={{ base: "none", lg: "block" }}
        >
          {/* Slideshow indicators */}
          <HStack
            position="absolute"
            bottom={4}
            left="50%"
            transform="translateX(-50%)"
            gap={2}
            zIndex={10}
          >
            <Image src="https://i.postimg.cc/90rKSbFt/me.jpg" />
          </HStack>
        </Box>
      </Grid>
    </Box>
  );
};

export default HeroSection;
