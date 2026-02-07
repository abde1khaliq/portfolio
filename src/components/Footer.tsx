import { Box, Grid, VStack, Text, HStack, Flex } from "@chakra-ui/react";
import fadeIn from "@/app/utils/animations";

const Footer = () => {
  return (
    <Box
      py={{ base: 12, md: 16 }}
      animation={`${fadeIn} 0.8s ease-out 1s both`}
    >
      <Grid
        templateColumns={{
          base: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        }}
        gap={{ base: 8, md: 12 }}
        mb={{ base: 8, md: 12 }}
      >
        <VStack align="start" gap={4}>
          <Text
            fontSize="xs"
            color="gray.600"
            fontFamily="monospace"
            textTransform="uppercase"
          >
            Contact
          </Text>
          <VStack align="start" gap={2}>
            <Text fontSize="sm" color="white" fontFamily="monospace">
              ahmedthek3@gmail.com
            </Text>
          </VStack>
        </VStack>

        <VStack align="start" gap={4}>
          <Text
            fontSize="xs"
            color="gray.600"
            fontFamily="monospace"
            textTransform="uppercase"
          >
            Social
          </Text>
          <VStack align="start" gap={2}>
            <Text fontSize="sm" color="white" fontFamily="monospace">
              GitHub
            </Text>
            <Text fontSize="sm" color="white" fontFamily="monospace">
              LinkedIn
            </Text>
            <Text fontSize="sm" color="white" fontFamily="monospace">
              Twitter
            </Text>
          </VStack>
        </VStack>

        <VStack align="start" gap={4}>
          <Text
            fontSize="xs"
            color="gray.600"
            fontFamily="monospace"
            textTransform="uppercase"
          >
            System Info
          </Text>
          <VStack align="start" gap={2}>
            <HStack gap={2}>
              <Text fontSize="sm" color="gray.600" fontFamily="monospace">
                Build:
              </Text>
              <Text fontSize="sm" color="#10b981" fontFamily="monospace">
                v2.3.1
              </Text>
            </HStack>
            <HStack gap={2}>
              <Text fontSize="sm" color="gray.600" fontFamily="monospace">
                Status:
              </Text>
              <Text fontSize="sm" color="#10b981" fontFamily="monospace">
                Operational
              </Text>
            </HStack>
            <HStack gap={2}>
              <Text fontSize="sm" color="gray.600" fontFamily="monospace">
                Location:
              </Text>
              <Text fontSize="sm" color="white" fontFamily="monospace">
                Alexandria, EGY
              </Text>
            </HStack>
          </VStack>
        </VStack>
      </Grid>

      <Flex
        pt={{ base: 6, md: 8 }}
        borderTop="1px solid"
        borderColor="gray.900"
        justify="space-between"
        align="center"
        flexDir={{ base: "column", md: "row" }}
        gap={4}
      >
        <Text fontSize="xs" color="gray.600" fontFamily="monospace">
          © 2025 Ahmed Abdelkhaliq. All rights reserved.
        </Text>
        <HStack gap={{ base: 4, md: 6 }}>
          <Text fontSize="xs" color="gray.600" fontFamily="monospace">
            Privacy Policy
          </Text>
          <Text fontSize="xs" color="gray.600" fontFamily="monospace">
            Terms of Service
          </Text>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Footer;
