import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import FormCaseRequest from "../../components/form/formCaseRequest";
import MainLayout from "../../layout/mainLayout";
import Body from "../../components/body";
import {
  Grid,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import SummarizeIcon from "@mui/icons-material/Summarize";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { Link } from "react-router-dom";
import Media from "../../components/media";
import Supports from "../../components/supports";
import InitialValues from "../../models/case";

import theme from "./styles";

export default function CaseRequest() {
  const location = useLocation();
  console.log(location);
  const [component, setComponent] = useState(1);
  const [data, setData] = useState(
    location.state !== null ? location.state[0] : InitialValues
  );
  const style = {
    marginLeft: "-7%",
    height: "100vh",
  };
  const style2 = {
    height: "100vh",
  };
  return (
    <MainLayout>
      <Body>
        <Grid container spacing={2}>
          <Grid item xs={2} style={style}>
            <Box>
              <List>
                <ListItem button onClick={() => setComponent(1)}>
                  <ListItemIcon>
                    <SummarizeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Report" />
                </ListItem>
                <ListItem button onClick={() => setComponent(2)}>
                  <ListItemIcon>
                    <AttachFileIcon />
                  </ListItemIcon>
                  <ListItemText primary="Support" />
                </ListItem>
                <ListItem button onClick={() => setComponent(3)}>
                  <ListItemIcon>
                    <PermMediaIcon />
                  </ListItemIcon>
                  <ListItemText primary="Media" />
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid item xs={10} style={style2}>
            {component === 1 ? (
              <FormCaseRequest data={data} setData={setData} />
            ) : component === 2 ? (
              <Supports data={data} />
            ) : (
              <Media data={data} setData={setData} />
            )}
          </Grid>
        </Grid>
        {/* <Grid container spacing={2} style={theme.container}>
          
              <FormCaseRequest />
        </Grid> */}
      </Body>
    </MainLayout>
  );
}
