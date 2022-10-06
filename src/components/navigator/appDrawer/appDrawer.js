import React from "react";

import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Dashboard, CameraOutdoor, Storage, Store } from "@mui/icons-material";

export default function AppDrawer({ toggleDrawer, state }) {
  return (
    <React.Fragment>
      <SwipeableDrawer
        anchor="left"
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem button component={Link} to="/mycases">
              <ListItemIcon>
                <CameraOutdoor />
              </ListItemIcon>
              <ListItemText primary="My Cases" />
            </ListItem>
            <ListItem button component={Link} to="/sharedcases">
              <ListItemIcon>
                <Storage />
              </ListItemIcon>
              <ListItemText primary="Shared Cases" />
            </ListItem>
          </List>
        </Box>
      </SwipeableDrawer>
    </React.Fragment>
  );
}
