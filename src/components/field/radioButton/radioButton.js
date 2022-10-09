import React, { useState, useEffect } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RadioButton({
  labelTitle,
  nameR1,
  nameR2,
  labelR1,
  labelR2,
  data,
}) {
  const [check, setCheck] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [disabled1, setDisabled1] = useState(false);
  console.log(data);

  useEffect(() => {
    checkStatus();
  }, []);

  const checkStatus = () => {
    if (labelTitle === "Type") {
      if (data.id > 0) {
        setCheck(true);
        setDisabled1(true);
        setCheck1(false);
        setDisabled(false);
      } else {
        setCheck(false);
        setDisabled1(false);
        setCheck1(true);
        setDisabled(true);
      }
    }
  };

  return (
    <FormControl>
      <FormLabel
        id="demo-row-radio-buttons-group-label"
        style={{ fontSize: 14 }}
      >
        {labelTitle} :
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel
          value={nameR1}
          control={<Radio checked={check1} disabled={disabled1} />}
          label={labelR1}
          style={{ fontSize: 14 }}
        />
        <FormControlLabel
          value={nameR2}
          control={<Radio checked={check} disabled={disabled} />}
          label={labelR2}
          style={{ fontSize: 14 }}
        />
      </RadioGroup>
    </FormControl>
  );
}
