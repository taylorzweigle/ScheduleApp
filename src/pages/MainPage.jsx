//Taylor Zweigle, 2023
import React from "react";

import { Box, Grid, Stack } from "@mui/material";

import TimelineCalendar from "../components/timelineCalendar/TimelineCalendar";
import TimelineCalendarControls from "../components/timelineCalendarControls/TimelineCalendarControls";

const MainPage = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={2}>
        <Box
          sx={{
            backgroundColor: "grey.100",
            borderRight: "1px",
            borderRightStyle: "solid",
            borderRightColor: "grey.300",
            height: "100vh",
          }}
        >
          &nbsp;
        </Box>
      </Grid>
      <Grid item xs={12} md={10}>
        <Box sx={{ padding: "16px" }}>
          <Stack direction="column" gap={2}>
            <TimelineCalendarControls />
            <TimelineCalendar />
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
};

export default MainPage;
