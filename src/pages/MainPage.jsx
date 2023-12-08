//Taylor Zweigle, 2023
import React from "react";

import { Box, Grid } from "@mui/material";

import TimelineCalendar from "../components/timelineCalendar/TimelineCalendar";

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
            height: "100%",
          }}
        >
          &nbsp;
        </Box>
      </Grid>
      <Grid item xs={12} md={10}>
        <TimelineCalendar />
      </Grid>
    </Grid>
  );
};

export default MainPage;
