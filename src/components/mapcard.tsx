import { Box, Flex, Text, Button, useColorModeValue, useDisclosure, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, HStack, Link } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { getStatusColor } from "./utils";

const Map = dynamic(() => import('./map'), { ssr: false });

export default function MapCard({zones}) {
  const cardBg = useColorModeValue("white", "gray.700");
  const cardShadow = useColorModeValue("md", "dark-md");
  const textPrimary = useColorModeValue("gray.800", "whiteAlpha.900");
  const textSecondary = useColorModeValue("gray.500", "whiteAlpha.700");
  const mapBg = useColorModeValue("gray.100", "gray.600");

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
    <Box borderRadius="2xl" p={5} bg={cardBg} boxShadow={cardShadow} mb={6}>
      <Flex align="center" justify="space-between" mb={4} flexWrap="wrap">
        <Box>
          <Text fontSize="sm" fontWeight="semibold" color={textPrimary}>
            Campus Map
          </Text>
          <Text fontSize="xs" color={textSecondary}>
            Tap a zone to view details
          </Text>
        </Box>

        <Button
          variant="ghost"
          fontSize="sm"
          fontWeight="medium"
          color={textPrimary}
          _hover={{ bg: "transparent", textDecoration: "underline" }}
          mt={{ base: 2, md: 0 }}
          onClick={onOpen}
        >
          View Full
        </Button>
      </Flex>

      {/* Placeholder map area */}
      <Flex h="60" borderRadius="xl" overflow="hidden">
        <Map zones={zones}/>
      </Flex>
    </Box>

    {/* Drawer for zone details */}
      <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent borderTopRadius="2xl" p={5}>
          <DrawerCloseButton />
        <DrawerBody>
            <Flex h="100%" borderRadius="xl" overflow="hidden">
              <Map zones={zones}/>
            </Flex>
        </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
