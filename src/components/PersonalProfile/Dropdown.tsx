import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const Dropdown = (props: any) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <>
      <div>
        <p style={{ fontWeight: "700" }}>{props.label}</p>
      </div>
      <div style={{ width: "100%" }}>
        {props.fieldType === "dropdown" ? (
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-helper-labe">
              {props.options[0]}
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              {props.options.map((item: any, index: number) => {
                return (
                  <MenuItem value={item} key={index}>
                    {item}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        ) : (
          <TextField
            id="outlined-basic"
            variant="outlined"
            label={`${props.placeholder}`}
            sx={{ width: "100%" }}
          />
        )}
      </div>
    </>
  );
};

export default Dropdown;
