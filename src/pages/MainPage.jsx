//Taylor Zweigle, 2023
import React from "react";

import { Box, Grid, Stack } from "@mui/material";

import TimelineCalendar from "../components/timelineCalendar/TimelineCalendar";
import MonthCalendar from "../components/monthCalendar/MonthCalendar";

const MainPage = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={3}>
        <Box
          sx={{
            backgroundColor: "grey.100",
            padding: "8px",
            borderRight: "1px",
            borderRightStyle: "solid",
            borderRightColor: "grey.300",
            height: "100%",
          }}
        >
          <Stack direction="column" justifyContent="space-between" sx={{ height: "100%" }}>
            <Box>&nbsp;</Box>
            <MonthCalendar />
          </Stack>
        </Box>
      </Grid>
      <Grid item xs={12} md={9}>
        <TimelineCalendar />
      </Grid>
    </Grid>
  );
};

export default MainPage;
