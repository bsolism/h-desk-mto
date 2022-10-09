import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function FieldAuto() {
  return (
    <Stack spacing={3} sx={{ width: 500 }}>
      <Autocomplete
        multiple
        id="tags-standard"
        options={top100Films}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <TextField {...params} variant="standard" label="Compartir con:" />
        )}
      />
    </Stack>
  );
}
const top100Films = [
  { name: "Gabriel Urquia", year: 1994 },
  { name: "Alan Licona", year: 1972 },
  { name: "Alan Flores", year: 1974 },
  { name: "Lourdes Murillo", year: 2008 },
];
