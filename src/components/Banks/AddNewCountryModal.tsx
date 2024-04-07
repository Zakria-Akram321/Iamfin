import { Box, Grid, TextField, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import CustomButtons from "../CustomButtons";

const initialValues = {
  countryName: "",
};

const AddNewCountryModal = ({ setShowModal }: any) => {
  const [formValues, setFormValues] = React.useState(initialValues);
  const mediumScreen = useMediaQuery(
    "(min-width: 1100px) and (max-width:1500px)"
  );

  const handleChange = (e: any) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    console.log(formValues);
  };
  const saveClickHandler = (e: any) => {
    e.preventDefault();
  };
  const cancelClickHandler = (e: any) => {
    setShowModal("");
    e.preventDefault();
  };
  return (
    <Box>
      <Typography
        sx={{
          fontSize: mediumScreen ? "24px" : "32px",
          color: "rgba(0, 86, 64, 1)",
          fontWeight: 700,
          textTransform: "capitalize",
          mb: mediumScreen ? "15px" : "20px",
        }}
      >
        Add new country
      </Typography>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        mb="10px"
      >
        <Grid item xs={5.9} sx={{ textAlign: "right" }}>
          <Typography
            sx={{
              color: "rgba(20, 48, 42, 1)",
              fontSize: mediumScreen ? "15px" : "18px",
            }}
          >
            Country Name:
          </Typography>
        </Grid>
        <Grid item xs={5.9}>
          <AddCountryTextField
            name="countryName"
            value={formValues.countryName}
            onChange={handleChange}
            placeholder="Sample Text"
          />
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center", mt: "50px" }}>
        <CustomButtons
          customStyle={{
            successBackgroundColor: "rgba(0, 206, 126, 1)",
            successButtonHoverColor: "rgba(0, 176, 96, 1)",
            declineBackgroundColor: "rgba(170, 50, 45, 1)",
            declineButtonHoverColor: "rgba(140, 30, 25, 1)",
            height: mediumScreen ? "35px" : "40px",
            width: mediumScreen ? "90px" : "100px",
            fontSize: mediumScreen ? "12px" : "16px",
          }}
          successButtonText="save"
          declineButtonText="cancel"
          onSuccessButtonClick={saveClickHandler}
          onDeclineButtonClick={cancelClickHandler}
        />
      </Box>
    </Box>
  );
};

export default AddNewCountryModal;

interface AddCountryTextFieldProps {
  name: string;
  value: string;
  onChange: (e: any) => void;
  placeholder: string;
  multiline?: boolean;
}

const AddCountryTextField: React.FC<AddCountryTextFieldProps> = ({
  name,
  value,
  onChange,
  placeholder,
  multiline,
}) => {
  const mediumScreen = useMediaQuery(
    "(min-width: 1100px) and (max-width:1500px)"
  );

  return (
    <TextField
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      multiline={multiline ? true : false}
      rows={multiline ? (mediumScreen ? 3 : 4) : 1}
      sx={{
        backgroundColor: "rgba(240, 243, 238, 1)",
        boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.02)",
        borderRadius: "5px",
        "& input": {
          p: "0",
          width: "258px",
          height: mediumScreen ? "32.26px" : "42.26px",
          fontSize: mediumScreen ? "12px" : "16px",
          color: "rgba(0, 86, 64, 1)",
          padding: "0px 12px",
          boxSizing: "border-box",
          "&::placeholder": {
            opacity: "1",
          },
        },
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
        "& .MuiInputBase-multiline": {
          padding: "0",
        },
        "& textarea": {
          p: "0",
          width: "258px",
          color: "rgba(0, 86, 64, 1)",
          padding: "10px 12px",
          fontSize: mediumScreen ? "12px" : "16px",
          boxSizing: "border-box",
          "&::placeholder": {
            opacity: "1",
          },
        },
      }}
    />
  );
};
