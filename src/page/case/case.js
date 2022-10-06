import React from "react";
import MainLayout from "../../layout/mainLayout";
import Body from "../../components/body";
import FormCase from "../../components/form/formCases";
import { Grid } from "@mui/material";
import theme from "./styles";

export default function Case() {
  return (
    <MainLayout>
      <Body>
        <Grid container spacing={2} style={theme.container}>
          <FormCase />
        </Grid>
      </Body>
    </MainLayout>
  );
}
