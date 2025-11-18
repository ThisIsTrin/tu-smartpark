import { Flex, Box, Input, InputGroup, InputLeftElement, IconButton, useColorModeValue } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { FiFilter } from "react-icons/fi";

interface SearchProps {
  onSearchChange: (value: string) => void;
}

export default function Search({ onSearchChange }: SearchProps) {
  const inputBg = useColorModeValue("white", "gray.700");
  const inputPlaceholder = useColorModeValue("gray.400", "gray.400");
  const iconColor = useColorModeValue("gray.500", "gray.300");
  const buttonBg = useColorModeValue("white", "gray.700");
  const buttonColor = useColorModeValue("gray.600", "gray.200");
  const boxShadow = useColorModeValue("sm", "sm-dark");

  return (
    <Flex gap={3} mb={6} flexWrap="wrap">
      <Box flex="1">
        <InputGroup
          p={1}
          borderRadius="xl"
          boxShadow={boxShadow}
          bg={inputBg}
          alignItems="center"
        >
          <InputLeftElement pointerEvents="none">
            <SearchIcon color={iconColor} />
          </InputLeftElement>

          <Input
            placeholder="Search building or zone (e.g., SC, SIIT)"
            fontSize="sm"
            border="none"
            _focus={{ boxShadow: "none" }}
            _placeholder={{ color: inputPlaceholder }}
            bg={inputBg}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </InputGroup>
      </Box>
    </Flex>
  );
}
