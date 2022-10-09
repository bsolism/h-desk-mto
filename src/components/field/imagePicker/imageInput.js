import React, { useState } from "react";
import ButtonUpload from "../../field/buttonUpload";
import { Typography, Stack, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const Input = styled("input")({
  display: "none",
});

export default function ImageInput({ file, setFile }) {
  const handleChangeFile = ({ target }) => {
    const fileReader = new FileReader();
    const name = target.accept.includes("PDF") ? "pdf" : "image";
    fileReader.readAsDataURL(target.files[0]);
    setFile((file) => [...file, target.files[0]]);
    // setFieldValue("support", [...file, target.files[0]]);
  };

  return (
    <>
      <div style={{ marginTop: 5 }}>
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
      </div>
    </>
  );
}
