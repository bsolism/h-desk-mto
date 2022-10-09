import React from "react";
import { Box, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../utils/theme";

export default function body({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Container fixed>
        <Box sx={{ height: "100vh" }}>{children}</Box>
      </Container>
    </ThemeProvider>
  );
}
