import React from "react";
import { Typography, Stack, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useFormikContext } from "formik";

const Input = styled("input")({
  display: "none",
});

export default function ButtonUpload({ file, setFile }) {
  const { setFieldValue } = useFormikContext();

  const handleChangeFile = ({ target }) => {
    const fileReader = new FileReader();
    const name = target.accept.includes("PDF") ? "pdf" : "image";
    fileReader.readAsDataURL(target.files[0]);
    setFile((file) => [...file, target.files[0]]);
    setFieldValue("support", [...file, target.files[0]]);
  };
  return (
    <>
      <Typography variant="h8" color="primary">
        Cargar Archivo
      </Typography>
      <Stack spacing={2} direction="row">
        <label htmlFor="contained-button-file">
          <Input
            accept="PDF/*"
            id="contained-button-file"
            multiple
            type="file"
            onChange={handleChangeFile}
          />
          <Button variant="contained" component="span">
            Upload
          </Button>
        </label>
      </Stack>
    </>
  );
}
