//Taylor Zweigle, 2023
import React from "react";

import { Button, ButtonGroup, Stack, Typography } from "@mui/material";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const HeaderControls = () => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ padding: "16px" }}>
      <Typography variant="h5">Janurary 2023</Typography>
      <Stack direction="row" alignItems="center" gap={2}>
        <Button variant="outlined">Today</Button>
        <Stack direction="row" alignItems="center" gap={0}>
          <ButtonGroup size="md">
            <Button>
              <ChevronLeftIcon />
            </Button>
            <Button>
              <ChevronRightIcon />
            </Button>
          </ButtonGroup>
        </Stack>
        <Button variant="contained">Add Event</Button>
      </Stack>
    </Stack>
  );
};

export default HeaderControls;
