import React, { useState } from "react";
import Formformik from "../formik";
import { Grid, Typography } from "@mui/material";
import FtextField from "../../field/textField";
import SubmitButton from "../../field/submitButton";
import FileList from "../../List/fileList";
import ButtonUpload from "../../field/buttonUpload";
import TextEditor from "../../field/textEditor";
import initialValues from "../../../models/case";

import { apiCases } from "../../../services";

import theme from "./styles";

export default function FormCase() {
  const [file, setFile] = useState([]);

  const onSubmit = async (values) => {
    await apiCases.Add(values).then((response) => {
      console.log(response);
    });
  };

  return (
    <Formformik item={initialValues} onSubmit={onSubmit}>
      <Grid container spacing={2} style={theme.container}>
        <Grid item xs={6} display="flex" justifyContent="flex-end">
          <Typography variant="h6" color="primary">
            Solicitud de revisión de videos
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          display="flex"
          justifyContent="flex-end"
          sx={{ pr: "5px" }}
        >
          <Typography variant="h8" color="primary">
            Caso #: 0001
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <FtextField label="Solicitante" name="name" />
          <FtextField label="Ciudad" name="city" />
          <FtextField label="Agencia" name="agency" />
        </Grid>
        <Grid item xs={6}>
          <FtextField label="Lugar Incidente" name="place" />
          <FtextField label="Fecha Inicial" name="startDate" />
          <FtextField label="Fecha Final" name="endDate" />
        </Grid>
        <Grid item xs={12} sx={{ pr: "5px" }}>
          <Typography variant="h8" color="primary">
            Detalle del inicidente (sea especifico)
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextEditor />
        </Grid>
        <Grid item xs={12} display="flex">
          <ButtonUpload file={file} setFile={setFile} />
        </Grid>
        <Grid item xs={12}>
          <FileList file={file} setFile={setFile} />
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="flex-end">
          <SubmitButton title="Send" />
        </Grid>
      </Grid>
    </Formformik>
  );
}
