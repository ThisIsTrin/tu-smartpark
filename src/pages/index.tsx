import { Box, Modal, VStack} from "@chakra-ui/react"
import MapCard from "../components/mapcard";
import Search from "../components/search";
import SpotsCard from "../components/spotscard";
import ZoneList from "../components/zones";
import { useState } from "react";
import HeaderComp from "../components/headercard";


interface Zone {
  id: string;
  name: string;
  capacity: number;
  free: number;
  status: "green" | "yellow" | "red";
  href: string;
  coords: L.LatLngExpression
}

const ZONES: Zone[] = [
  { id: "A", name: "Zone A", free: 7, capacity: 40,  status: "green", href: "https://maps.app.goo.gl/j9p4K5ur8uEcbN3H8?g_st=ipc", coords: [14.074523,100.602241]},
  { id: "B", name: "Zone B", free: 4, capacity: 50, status: "yellow", href: "https://maps.app.goo.gl/djyBmFttehQb8xRUA?g_st=ipc", coords: [14.073110,100.616623]},
  { id: "C", name: "Zone C", free: 0, capacity: 60, status: "red", href: "https://maps.app.goo.gl/vethEx6Dpzdo8Jzz8?g_st=ipc", coords: [14.070734,100.607740]},
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredZones = ZONES.filter((zone) =>
    zone.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  


  return(
    <Box p={4} minH="100vh" >
      <HeaderComp/>
      <VStack spacing={4} align="stretch" px={{base: 2, md: 10}} py={20}>
        <SpotsCard zones={ZONES}/>
        <Search onSearchChange={(value: string) => setSearchQuery(value)}/>
        <ZoneList zones={filteredZones}/>
        <MapCard zones={ZONES}/>
      </VStack>
    </Box>

  )
};

export default Index;
