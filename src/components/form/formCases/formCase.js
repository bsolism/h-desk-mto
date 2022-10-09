import React, { useState, useEffect, useRef } from "react";
import Formformik from "../formik";
import { Grid, Typography } from "@mui/material";
import { toast } from "react-toastify";
import FtextField from "../../field/textField";
import SubmitButton from "../../field/submitButton";
import FileList from "../../List/fileList";
import ButtonUpload from "../../field/buttonUpload";
import TextEditor from "../../field/textEditor";
import FieldSelect from "../../field/select";
import initialValues from "../../../models/case";
import { user } from "../../../utils/user";
import useHookCase from "./useHookCase";
import DatePicker from "../../field/datePicker";

import { apiCases } from "../../../services";

import theme from "./styles";

export default function FormCase() {
  const [file, setFile] = useState([]);
  const [city, setCity] = useState("");
  const ref = useRef(null);
  const [localities, getLocalities] = useHookCase();
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    ref.current.setFieldValue("claimant", user[1].name);
    ref.current.setFieldValue("userId", user[1].id);

    getLocalities();
  }, [file]);

  const onSubmit = async (values, { resetForm }) => {
    console.log(values);
    //toast.warning("Saving");
    const promise = new Promise((resolve) =>
      apiCases
        .Add(values)
        .then((res) => res)
        .then((json) => setTimeout(() => resolve(json), 3000))
    );
    toast.promise(promise, {
      pending: "Sending",
      success: "Success",
      error: "error",
    });
    promise.then((res) => {
      if (res.status === 200) {
        resetForm();
        ref.current.setFieldValue("claimant", user[1].name);
        ref.current.setFieldValue("userId", user[1].id);
        ref.current.setFieldValue("detail", "");
        setFile([]);
        setCity("");
        setDisabled(true);
      } else {
        toast.warning("Save Error");
      }
    });
  };

  return (
    <Formformik
      initialValues={initialValues}
      onSubmit={onSubmit}
      innerRef={ref}
    >
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
          <FtextField label="Solicitante" name="claimant" />
          <FieldSelect
            name="city"
            label="City"
            data={localities}
            setId={setCity}
            id={city}
            setDisabled={setDisabled}
          />
          <FieldSelect
            name="agency"
            label="Agency"
            data={
              city > 0
                ? localities.filter((x) => x.id === city)[0].agencies
                : localities
            }
            disabled={disabled}
          />
        </Grid>
        <Grid item xs={6}>
          <FtextField label="Lugar Incidente" name="place" />
          <DatePicker name="dateInit" label="Start Date" />
          <DatePicker name="dateEnd" label="End Date" />
        </Grid>
        <Grid item xs={12} sx={{ pr: "5px" }}>
          <Typography variant="h8" color="primary">
            Detalle del inicidente (sea especifico)
          </Typography>
          <FtextField label="Asunto" name="title" />
        </Grid>
        <Grid item xs={12} sx={{ mr: "10px" }}>
          <TextEditor request="request" />
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
