//Taylor Zweigle, 2023
import React from "react";

import { Avatar, Box, Grid, Stack, Typography } from "@mui/material";

import MonthCalendar from "../components/monthCalendar/MonthCalendar";
import TimelineCalendar from "../components/timelineCalendar/TimelineCalendar";
import ToggleThemeButton from "../components/buttons/ToggleThemeButton";

const MainPage = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={3}>
        <Box
          sx={{
            padding: "8px",
            borderRight: "1px",
            borderRightStyle: "solid",
            borderRightColor: "grey.300",
            height: "100%",
          }}
        >
          <Stack direction="column" justifyContent="space-between" sx={{ height: "100%" }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Stack direction="row" alignItems="center" gap={2}>
                <Avatar>TZ</Avatar>
                <Typography>Taylor Zweigle</Typography>
              </Stack>
              <ToggleThemeButton />
            </Stack>
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
