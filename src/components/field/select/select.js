import React, { useState, useEffect } from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { useFormikContext } from "formik";

export default function FieldSelect({
  name,
  label,
  disabled = false,
  data,
  setId,
  id,
  setDisabled,
}) {
  const [select, setSelect] = useState("");
  const { setFieldValue, values } = useFormikContext();

  const handleChange = (e) => {
    //setSelect(e.target.value);
    setFieldValue(name + "Id", e.target.value);
    if (name === "city") setId(e.target.value);
    if (name === "city") setDisabled(false);
  };

  return (
    <FormControl fullWidth variant="standard">
      <InputLabel>{label}</InputLabel>
      <Select
        sx={{ fontSize: 12 }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={values[name + "Id"] > 0 ? values[name + "Id"] : ""}
        displayEmpty
        disabled={disabled}
        defaultValue=""
        onChange={handleChange}
      >
        {data !== undefined
          ? data.length > 0
            ? data.map((value, index) => (
                <MenuItem key={index} value={value.id}>
                  {value.name}{" "}
                </MenuItem>
              ))
            : null
          : null}
      </Select>
    </FormControl>
  );
}
