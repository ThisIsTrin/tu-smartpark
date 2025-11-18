import { useState } from "react";
import {
  Box,
  Grid,
  Flex,
  Text,
  Button,
  useColorModeValue,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  HStack,
} from "@chakra-ui/react";
import Link from "next/link";

export default function ZoneList({ zones }) {
  const cardBg = useColorModeValue("white", "gray.700");
  const cardShadow = useColorModeValue("md", "dark-md");
  const cardHoverShadow = useColorModeValue("lg", "dark-lg");
  const textPrimary = useColorModeValue("gray.800", "whiteAlpha.900");
  const textSecondary = useColorModeValue("gray.500", "whiteAlpha.700");

  // Drawer state
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedZone, setSelectedZone] = useState(null);

  const openZoneDrawer = (zone) => {
    setSelectedZone(zone);
    onOpen();
  };

  // Function to get status color
  const getStatusColor = (zone) =>
    zone.status === "green"
      ? useColorModeValue("green.400", "green.300")
      : zone.status === "yellow"
      ? useColorModeValue("yellow.400", "yellow.300")
      : useColorModeValue("red.400", "red.300");

  return (
    <>
      <Grid templateColumns="1fr" gap={3} mb={6}>
        {zones.map((zone) => {
          const statusColor = getStatusColor(zone);

          return (
            <Box
              key={zone.id}
              bg={cardBg}
              borderRadius="2xl"
              p={4}
              boxShadow={cardShadow}
              _hover={{ boxShadow: cardHoverShadow }}
              transition="0.2s"
              cursor="pointer"
              onClick={() => openZoneDrawer(zone)}
            >
              <Flex align="center" justify="space-between">
                {/* Left side */}
                <Flex align="center" gap={3}>
                  {/* Status bubble */}
                  <Flex
                    w="40px"
                    h="40px"
                    borderRadius="lg"
                    align="center"
                    justify="center"
                    bg={statusColor + "33"} // light transparent background
                  >
                    <Box w="10px" h="10px" borderRadius="full" bg={statusColor} />
                  </Flex>

                  {/* Zone text */}
                  <Box>
                    <Text fontSize="sm" fontWeight="semibold" color={textPrimary}>
                      {zone.name}
                    </Text>
                    <Text fontSize="xs" color={textSecondary}>
                      Capacity: {zone.capacity}
                    </Text>
                  </Box>
                </Flex>

                {/* Right side */}
                <Flex align="center" gap={3}>
                  <Box textAlign="right">
                    <Text fontSize="sm" color={textSecondary}>
                      Free
                    </Text>
                    <Text fontSize="lg" fontWeight="bold" color={statusColor}>
                      {zone.free > 0 ? `${zone.free} free` : "Not available"}
                    </Text>
                  </Box>
                  <Link href={zone.href}>
                    <Button
                      size="sm"
                      colorScheme="teal"
                      onClick={(e) => e.stopPropagation()} // prevent card click
                    >
                      Go
                    </Button>
                  </Link>
                </Flex>
              </Flex>
            </Box>
          );
        })}
      </Grid>

      {/* Drawer for zone details */}
      <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent borderTopRadius="2xl" p={5}>
          <DrawerCloseButton />
          {selectedZone && (
            <>
              <DrawerHeader>
                <Text fontSize="xs" color={textSecondary}>
                  {selectedZone.name}
                </Text>
                <Text fontSize="lg" fontWeight="bold" color={getStatusColor(selectedZone)}>
                  {selectedZone.free > 0 ? selectedZone.free : "None"}
                </Text>
              </DrawerHeader>
              <DrawerBody>
                <HStack spacing={4}>
                  <Box flex="1" bg={cardBg} borderRadius="xl" p={4}>
                    <Text fontSize="xs" color={textSecondary}>
                      Capacity
                    </Text>
                    <Text
                      fontSize="lg"
                      fontWeight="bold"
                      mt={1}
                      color={textPrimary}
                    >
                      {selectedZone.capacity}
                    </Text>
                  </Box>

                  <Box flex="1" bg={cardBg} borderRadius="xl" p={4}>
                    <Text fontSize="xs" color={textSecondary}>
                      Estimated Walk
                    </Text>
                    <Text fontSize="lg" fontWeight="bold" mt={1}>
                      4 min
                    </Text>
                  </Box>
                </HStack>

                <Link href={selectedZone.href} passHref>
                  <Button as="a" colorScheme="teal" width="100%" mt={4}>
                    Navigate
                  </Button>
                </Link>
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
