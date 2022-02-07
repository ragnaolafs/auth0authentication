
import React from "react";
import { Box, CircularProgress } from '@material-ui/core';

function Loading() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      marginTop={5}
    >
      <CircularProgress />
    </Box>
  );
}

export default Loading;