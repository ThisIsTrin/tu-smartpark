export const getStatusColor = (status: string, colorMode: "light" | "dark") => {
  if (status === "green") {
    return colorMode === "light" ? "green.400" : "green.300";
  }
  if (status === "yellow") {
    return colorMode === "light" ? "yellow.400" : "yellow.300";
  }
  return colorMode === "light" ? "red.400" : "red.300";
};