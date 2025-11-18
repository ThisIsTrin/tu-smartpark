import { 
  Box, 
  CircularProgress, 
  CircularProgressLabel, 
  Flex, 
  Text, 
  useColorModeValue 
} from "@chakra-ui/react";

interface Zone {
  id: string;
  name: string;
  capacity: number;
  free: number;
  status: "green" | "yellow" | "red";
  href: string;
}

interface SpotsCardProps {
  zones: Zone[];
}

export default function SpotsCard({ zones }: SpotsCardProps) {
  const bg = useColorModeValue("white", "gray.700");
  const textPrimary = useColorModeValue("gray.800", "whiteAlpha.900");
  const textSecondary = useColorModeValue("gray.500", "whiteAlpha.700");
  const trackColor = useColorModeValue("gray.200", "whiteAlpha.300");
  const progressColor = useColorModeValue("teal.500", "teal.300");

  // Calculate totals
  const totalFree = zones.reduce((sum, z) => sum + z.free, 0);
  const totalCapacity = zones.reduce((sum, z) => sum + z.capacity, 0);
  const occupancy = totalCapacity > 0 ? Math.round((totalFree / totalCapacity) * 100) : 0;

  return (
    <Box
      borderRadius="2xl"
      p={6}
      bg={bg}
      boxShadow="xl"
      minW="280px"
    >
      <Flex align="center" justify="space-between" flexWrap="wrap">
        {/* Left text */}
        <Box mb={{ base: 4, md: 0 }}>
          <Text fontSize="sm" color={textSecondary}>
            Available Spots
          </Text>
          <Text fontSize="3xl" fontWeight="bold" mt={1} lineHeight="1" color={textPrimary}>
            {totalFree}{" "}
            <Text as="span" fontSize="md" fontWeight="medium" opacity={0.8}>
              spots
            </Text>
          </Text>

          <Text fontSize="sm" mt={1} color={textSecondary}>
            Across monitored zones
          </Text>
        </Box>

        {/* Circular visual */}
        <CircularProgress
          value={occupancy}
          size="7rem"
          thickness="8px"
          trackColor={trackColor}
          color={progressColor}
        >
          <CircularProgressLabel>
            <Box textAlign="center">
              <Text fontSize="sm" color={textSecondary}>
                Occupancy
              </Text>
              <Text fontSize="lg" fontWeight="bold" color={textPrimary}>
                {occupancy}%
              </Text>
            </Box>
          </CircularProgressLabel>
        </CircularProgress>
      </Flex>
    </Box>
  );
}
