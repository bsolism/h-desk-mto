import React, { useState } from "react";
import { FormControlLabel, FormGroup, TextField } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useFormikContext } from "formik";

export default function DatePicker({ name, label }) {
  const [value, setValue] = useState(null);
  const { setFieldValue, values } = useFormikContext();
  const handleChange = (value) => {
    //setValue(value);
    setFieldValue(name, value);
  };
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          label={label}
          value={values[name] !== "" ? values[name] : null}
          onChange={(val) => handleChange(val)}
          renderInput={(params) => (
            <TextField
              variant="standard"
              sx={{ fontSize: 12, width: "98%" }}
              {...params}
              inputProps={{
                ...params.inputProps,
                style: { fontSize: 12 },
              }}
            />
          )}
        />
      </LocalizationProvider>
    </>
  );
}
