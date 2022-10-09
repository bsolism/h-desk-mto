import React from "react";
import TextField from "@mui/material/TextField";
import { useFormikContext, ErrorMessage } from "formik";

export default function FtextField({ label, name, value, ...props }) {
  const { setFieldValue, values } = useFormikContext();

  const handleChange = (e) => {
    setFieldValue(name, e.target.value);
  };
  return (
    <TextField
      required
      id={name}
      name={name}
      label={label}
      fullWidth
      variant="standard"
      onChange={(e) => handleChange(e)}
      value={value !== undefined ? value : values[name]}
      inputProps={{ style: { fontSize: 12 } }}
      {...props}
    />
  );
}
