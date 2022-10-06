import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import AppDrawer from "../appDrawer";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../utils/theme";

export default function AppBarNav() {
  const [state, setState] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="blueLight">
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              color="primary"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              color="primary"
              sx={{ flexGrow: 1 }}
            >
              Grupo Flores | Monitoreo HelpDesk
            </Typography>
            <Button color="primary">Login</Button>
          </Toolbar>
          <Button
            edge="start"
            color="primary"
            size="small"
            sx={{ ml: 4, width: "10%", height: "2em", fontSize: 11 }}
            component={Link}
            to="/case"
          >
            New Case
          </Button>
        </AppBar>
        <AppDrawer toggleDrawer={toggleDrawer} state={state} />
      </Box>
    </ThemeProvider>
  );
}
