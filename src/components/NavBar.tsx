"use client";

import { Box, Button, Flex, Text, HStack } from "@chakra-ui/react";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  return (
    <Box
      as="nav"
      h={{ base: "60px", md: "50px" }}
      w="100%"
      bg="#050505"
      borderBottom="1px solid"
      borderColor="gray.900"
      display="flex"
      justifyContent="center"
      position="sticky"
      top={0}
      zIndex={1000}
    >
      <Flex
        w="100%"
        maxW="1200px"
        h="100%"
        alignItems="stretch"
        justifyContent="space-between"
        px={{ base: 4, md: 0 }}
      >
        <HStack h="full" gap={0}>
          <Box
            h="full"
            w={{ base: "50px", md: "56px" }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRight="1px solid"
            borderColor="gray.900"
            color="gray.600"
            fontSize={{ base: "lg", md: "xl" }}
            fontFamily="monospace"
          >
            {pathname !== "/" ? (
              <Link href="/">
                <ChevronLeft />
              </Link>
            ) : (
              <span>+</span>
            )}
          </Box>
          <Box
            h="full"
            px={{ base: 3, md: 5 }}
            display="flex"
            alignItems="center"
            borderRight={"1px solid"}
            borderColor={"gray.900"}
          >
            <Text
              color="white"
              fontSize={{ base: "xs", md: "sm" }}
              textTransform="uppercase"
              letterSpacing="2px"
              fontWeight="bold"
            >
              Ahmed Abdelkhaliq
            </Text>
          </Box>
          <HStack
            h="full"
            px={5}
            gap={2}
            display={{ base: "none", md: "flex" }}
            alignItems="center"
            borderRight="1px solid"
            borderColor="gray.900"
          >
            <Box w="7px" h="7px" bg="#10b981" borderRadius="full" />
            <Text color="gray.600" fontSize="11px" fontFamily="monospace">
              STATUS: STABLE
            </Text>
          </HStack>
          <HStack
            h="full"
            px={5}
            gap={2}
            display={{ base: "none", lg: "flex" }}
            alignItems="center"
            borderRight="1px solid"
            borderColor="gray.900"
          >
            <Text color="gray.600" fontSize="11px" fontFamily="monospace">
              BRANCH:
            </Text>
            <Text color="#10b981" fontSize="11px" fontFamily="monospace">
              development
            </Text>
          </HStack>
        </HStack>

        <HStack h="full" gap={0}>
          <HStack
            h="full"
            px={5}
            gap={4}
            display={{ base: "none", lg: "flex" }}
            alignItems="center"
            borderLeft="1px solid"
            borderColor="gray.900"
          >
            <HStack gap={1.5} alignItems="center">
              <Box display="flex" gap="1px" alignItems="flex-end">
                <Box w="2.5px" h="4px" bg="white" />
                <Box w="2.5px" h="6px" bg="white" />
                <Box w="2.5px" h="8px" bg="white" />
                <Box w="2.5px" h="10px" bg="white" />
              </Box>
              <Text color="gray.600" fontSize="11px" fontFamily="monospace">
                82ms
              </Text>
            </HStack>
            <HStack gap={1.5} alignItems="center">
              <Text color="gray.600" fontSize="11px" fontFamily="monospace">
                CPU:
              </Text>
              <Text color="#10b981" fontSize="11px" fontFamily="monospace">
                24%
              </Text>
            </HStack>
            <HStack gap={1.5} alignItems="center">
              <Text color="gray.600" fontSize="11px" fontFamily="monospace">
                MEM:
              </Text>
              <Text color="#3b82f6" fontSize="11px" fontFamily="monospace">
                2.1GB
              </Text>
            </HStack>
          </HStack>
          <Box
            h="full"
            px={5}
            display={{ base: "none", md: "flex" }}
            alignItems="center"
            borderLeft="1px solid"
            borderColor="gray.900"
            color="gray.600"
            fontSize="11px"
            fontFamily="monospace"
          >
            41.40338, 2.17403
          </Box>
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
            Contact
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default NavBar;
