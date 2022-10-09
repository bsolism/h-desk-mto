import React from "react";
import Formformik from "../formik";
import { Grid, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import moment from "moment";
import RadioButton from "../../field/radioButton";
import TextEditor from "../../field/textEditor";
import FieldAuto from "../../field/autoComplete";
import SubmitButton from "../../field/submitButton";
import { user } from "../../../utils/user";

import theme from "./styles";

export default function FormCaseRequest({ data }) {
  console.log(data);
  return (
    <ThemeProvider theme={theme}>
      <Formformik
      //   initialValues={initialValues}
      //   onSubmit={onSubmit}
      //   innerRef={ref}
      >
        <Grid container spacing={2} style={theme.container}>
          <Grid item xs={4} display="flex">
            <Typography variant="title" color="primary">
              Departamento de monitoreo
            </Typography>
          </Grid>
          <Grid item xs={4} display="flex" justifyContent="center">
            <Typography variant="title" color="primary">
              Revision de videos
            </Typography>
          </Grid>
          <Grid item xs={4} display="flex" justifyContent="flex-end">
            <Typography variant="title" color="primary" marginRight={2}>
              Ficha N°{" " + (data.id > 0) ? data.id : " "}
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} style={theme.container}>
          <Grid item xs={4}>
            <Grid width="100%">
              <Typography variant="text" color="primary">
                Fecha Solicitud:{" " + moment(data.date).format("DD-MM-yyyy")}
              </Typography>
            </Grid>
            <Grid width="100%">
              <RadioButton
                labelTitle="Type"
                nameR1="Interno"
                nameR2="Solicitado"
                labelR1="R. Interno"
                labelR2="R. Solicitado"
                data={data}
              />
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid width="100%">
              <Typography variant="text" color="primary">
                Ciudad: {data.city.name}
              </Typography>
            </Grid>
            <Grid width="100%">
              <Typography variant="text" color="primary">
                Agencia: {data.agency.name}
              </Typography>
            </Grid>
            <Grid width="100%">
              <Typography variant="text" color="primary">
                Lugar: {data.place}
              </Typography>
            </Grid>
            <Grid width="100%">
              <Typography variant="text" color="primary">
                Fecha Inicio:{" "}
                {moment(data.dateInit).format("DD-MMM-yyyy HH:mm")}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={4} justifyContent="end">
            <Grid width="100%">
              <Typography variant="text" color="primary" marginRight={2}>
                Fecha Emision:{" " + moment(new Date()).format("DD-MM-yyyy")}
              </Typography>
            </Grid>
            <Grid width="100%">
              <Typography variant="text" color="primary" marginRight={2}>
                Solicitante:{data.id > 0 ? data.user.name : user[0].name}
              </Typography>
            </Grid>
            <Grid width="100%">
              <Typography variant="text" color="primary">
                Revision a cargo:
                {" " + data.city === "Tegucigalpa"
                  ? " Monitoreo TGU"
                  : " Monitoreo SPS"}
              </Typography>
            </Grid>
            <Grid width="100%">
              <Typography variant="text" color="primary">
                Fecha Final: {moment(data.dateEnd).format("DD-MMM-yyyy HH:mm")}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={2} style={theme.container}>
          <Grid item xs={12} display="flex">
            <Typography variant="text" color="primary">
              Requerimiento:
            </Typography>
          </Grid>
          <Grid item xs={12} display="flex">
            {data.id > 0 ? (
              <Typography
                variant="text"
                color="primary"
                dangerouslySetInnerHTML={{ __html: `${data.detail}` }}
              />
            ) : (
              <TextEditor request="request" />
            )}
          </Grid>
        </Grid>
        <Grid container spacing={2} style={theme.container}>
          <Grid item xs={12} display="flex">
            <Typography variant="text" color="primary">
              Hallazgos:
            </Typography>
          </Grid>
          <Grid item xs={12} display="flex" paddingRight={2}>
            <TextEditor request="request" />
          </Grid>
          <Grid item xs={12} display="flex">
            <Typography variant="text" color="primary">
              Conclusión:
            </Typography>
          </Grid>
          <Grid item xs={12} display="flex" paddingRight={2}>
            <TextEditor request="request" />
          </Grid>
        </Grid>
        <Grid>
          <Grid item xs={12} display="flex">
            <FieldAuto />
          </Grid>
        </Grid>
        <Grid container spacing={2} style={theme.container}>
          <Grid item xs={12} display="flex">
            <Typography variant="text" color="primary">
              Comentarios:
            </Typography>
          </Grid>
          <Grid item xs={12} display="flex" paddingRight={2}>
            <TextEditor request="request" />
          </Grid>
        </Grid>
        <Grid container spacing={2} style={theme.container}>
          <Grid item xs={12} marginBottom={2}>
            <SubmitButton title="Send" />
          </Grid>
        </Grid>
      </Formformik>
    </ThemeProvider>
  );
}
