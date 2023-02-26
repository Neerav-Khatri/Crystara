import React from "react";
import Navbar from "./navbar";
import { Box, Grid, GridItem ,Stack } from "@chakra-ui/react";
import {
  Stat,
  StatLabel,
  StatNumber,
  
} from "@chakra-ui/react";
const Dashboard = () => {
  return (
    <>
      <Navbar />

       {/* STACKS OF SALES AND ORDERS */}

      <Grid templateColumns={{base: "repeat(1, 1fr)",
      md: "repeat(3, 1fr)",
      lg: "repeat(3, 1fr)",}} gap={10} mt={5} p={10}>
        <GridItem w="100%" h="250" bg="purple.100" color='#5d1059'>
          <Stat textAlign={"center"} p={5} lineHeight={10}>
            <StatLabel fontSize={20} fontWeight={"bold"}>
              Active Users
            </StatLabel>
            <StatNumber fontSize={20} fontWeight={"bold"}>
              2,500
            </StatNumber>
            <StatLabel fontSize={20} fontWeight={"bold"}>
              Total Users
            </StatLabel>
            <StatNumber fontSize={20} fontWeight={"bold"}>
              22,355,500
            </StatNumber>
          </Stat>
        </GridItem>
        <GridItem w="100%" h="250" bg="purple.100" color='#5d1059'>
          <Stat textAlign={"center"} p={5} lineHeight={10}>
            <StatLabel fontSize={20} fontWeight={"bold"}>
              Last Months Sales
            </StatLabel>
            <StatNumber fontSize={20} fontWeight={"bold"}>
              12,24,560
            </StatNumber>
            <StatLabel fontSize={20} fontWeight={"bold"}>
              Last Week Sales
            </StatLabel>
            <StatNumber fontSize={20} fontWeight={"bold"}>
              35,895
            </StatNumber>
          </Stat>
        </GridItem>
        <GridItem w="100%" h="250" bg="purple.100" color='#5d1059'>
          <Stat textAlign={"center"} p={5} lineHeight={10}>
            <StatLabel fontSize={20} fontWeight={"bold"} >
              Orders Completed This Months
            </StatLabel>
            <StatNumber fontSize={20} fontWeight={"bold"}>
              25,213
            </StatNumber>
            <StatLabel fontSize={20} fontWeight={"bold"}>
              Orders Recieved This Week
            </StatLabel>
            <StatNumber fontSize={20} fontWeight={"bold"}>
              8,235
            </StatNumber>
          </Stat>
        </GridItem>
      </Grid>

       {/* GRAPHS AND PIA CHART */}
      
      <Stack direction={{base:"column", md:"row"}} spacing="24px" p={8}>
        <Box w={{base:"100%", md:"50%"}} h={{base:"100%", md:"50%"}} bg="yellow.200">
          <img src="https://www.slideteam.net/media/catalog/product/cache/1280x720/g/r/graph_showing_sales_performance_comparison_across_2_years_slide01.jpg" alt="graph sales" />
        </Box>
        <Box w={{base:"100%", md:"50%"}} h={{base:"100%", md:"50%"}} bg="tomato">
          <img src="https://www.slideteam.net/media/catalog/product/cache/1280x720/p/i/piece_pie_chart_showing_the_companys_revenue_split_slide01.jpg" alt="pia chart"  />
        </Box>
        
      </Stack>
    </>
  );
};

export default Dashboard;
