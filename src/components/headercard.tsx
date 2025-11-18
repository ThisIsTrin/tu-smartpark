import { Box, Flex, Text, IconButton, useColorModeValue, Avatar, Spacer, useColorMode } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export default function HeaderComp() {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "gray.100");
  const shadow = useColorModeValue("sm", "sm-dark");

  return (
    <Box
      bg={bg}
      px={{ base: 4, md: 6 }}
      py={3}
      boxShadow={shadow}
      borderBottomRadius="2xl"
      position="sticky"
      top={0}
      zIndex={10}
    >
      <Flex align="center">
        {/* Left: Menu Button */}

        {/* Title */}
        <Box>
          <Text fontSize="xl" fontWeight="bold" color={textColor}>
            TU Smart Park
          </Text>
          <Text fontSize="sm" color={useColorModeValue("gray.500", "gray.400")}>
            Made by TU109 Group 3
          </Text>
        </Box>

        <Spacer />

        {/* Right: Dark/Light toggle and profile */}
        <Flex align="center" gap={3}>
          <IconButton
            aria-label="Toggle color mode"
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            variant="ghost"
            size="md"
            onClick={toggleColorMode}
          />
        </Flex>
      </Flex>
    </Box>
  );
}
