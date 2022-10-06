import React from "react";
import TextField from "@mui/material/TextField";
import { useFormikContext, ErrorMessage } from "formik";

export default function FtextField({ label, name, ...props }) {
  const { setFieldValue, values } = useFormikContext();
  return (
    <TextField
      required
      id={name}
      name={name}
      label={label}
      fullWidth
      variant="standard"
      onChange={(e) => console.log(e)}
      //   value={values[name]}
      inputProps={{ style: { fontSize: 12 } }}
      {...props}
    />
  );
}
