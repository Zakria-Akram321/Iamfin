import { Button, Grid } from "@mui/material";
import React from "react";
import CustomTextField from "../../Banks/CustomTextField";

const initialValues = {
  name1: "",
  name2: "",
  name3: "",
  name4: "",
  name5: "",
};

const MatchWithClientSearchFields: React.FC = () => {
  const [formValues, setFormValues] = React.useState<any>(initialValues);

  const formChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item xs={1.85}>
        <CustomTextField
          placeholder="Search by name"
          name="name1"
          customStyles={{
            height: "40px",
            padding: "0px 20px",
            borderRadius: "10px",
          }}
          onChange={formChangeHandler}
        />
      </Grid>
      <Grid item xs={1.85}>
        <CustomTextField
          placeholder="Search by name"
          name="name2"
          customStyles={{
            height: "40px",
            padding: "0px 20px",
            borderRadius: "10px",
          }}
          onChange={formChangeHandler}
        />
      </Grid>
      <Grid item xs={1.85}>
        <CustomTextField
          placeholder="Search by name"
          name="name3"
          customStyles={{
            height: "40px",
            padding: "0px 20px",
            borderRadius: "10px",
          }}
          onChange={formChangeHandler}
        />
      </Grid>
      <Grid item xs={1.85}>
        <CustomTextField
          placeholder="Search by name"
          name="name4"
          customStyles={{
            height: "40px",
            padding: "0px 20px",
            borderRadius: "10px",
          }}
          onChange={formChangeHandler}
        />
      </Grid>
      <Grid item xs={1.85}>
        <CustomTextField
          placeholder="Search by name"
          name="name5"
          customStyles={{
            height: "40px",
            padding: "0px 20px",
            borderRadius: "10px",
          }}
          onChange={formChangeHandler}
        />
      </Grid>
      <Grid item xs={1.85} textAlign="right">
        <Button
          variant="contained"
          sx={{
            boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.1)",
            backgroundColor: "rgba(0, 206, 126, 1)",
            borderRadius: "10px",
            width: "127px",
            height: "40px",
            textTransform: "uppercase",
          }}
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default MatchWithClientSearchFields;
