import * as React from "react";

import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

function MuiDatePicker() {
  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));
  console.log(value);
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <form>
      <label>
        Wpisz datę:
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3}>
            <DesktopDatePicker
              label="Date desktop"
              inputFormat="MM/dd/yyyy"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
          <button onClick={() => alert(value.toString())}>Data</button>
        </LocalizationProvider>
      </label>
    </form>
  );
}

export default MuiDatePicker;
