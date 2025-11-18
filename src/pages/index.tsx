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
}

const ZONES: Zone[] = [
  { id: "A", name: "Zone A", free: 7, capacity: 40,  status: "green", href: "https://maps.app.goo.gl/j9p4K5ur8uEcbN3H8?g_st=ipc" },
  { id: "B", name: "Zone B", free: 4, capacity: 50, status: "yellow", href: "https://maps.app.goo.gl/djyBmFttehQb8xRUA?g_st=ipc" },
  { id: "C", name: "Zone C", free: 0, capacity: 60, status: "red", href: "https://maps.app.goo.gl/vethEx6Dpzdo8Jzz8?g_st=ipc"},
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
        <MapCard/>
      </VStack>
    </Box>

  )
};

export default Index;
