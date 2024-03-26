import {
  Box,
  Grid,
  Typography,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import React from "react";
import CustomButtons from "../CustomButtons";

const initialValues = {
  country: "",
  accountName: "",
  wireRoutingNumber: "",
  accountNumber: "",
  routingNumber: "",
  bankAddress: "",
  reference: "",
  swiftIban: "",
};

const AddBanksModal = ({setShowModal}: any) => {
  const [formValues, setFormValues] = React.useState(initialValues);
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
          fontSize: "32px",
          color: "rgba(0, 86, 64, 1)",
          fontWeight: 700,
          textTransform: "capitalize",
          mb: "20px",
        }}
      >
        Add new bank account
      </Typography>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        mb="10px"
      >
        <Grid item xs={5.9} sx={{ textAlign: "right" }}>
          <Typography sx={{ color: "rgba(20, 48, 42, 1)", fontSize: "18px" }}>
            Country:
          </Typography>
        </Grid>
        <Grid item xs={5.9}>
          <Select
            value={formValues.country}
            name="country"
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            sx={{
              width: "258px",
              height: "42.26px",
              backgroundColor: "rgba(240, 243, 238, 1)",
              border: "none",
              borderRadius: "5px",
              "& .MuiSelect-outlined": {
                color: "rgba(0, 86, 64, 1)",
                em: {
                  fontStyle: "normal",
                },
              },
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
          >
            <MenuItem value="">
              <em>DropDown</em>
            </MenuItem>
            <MenuItem value="usa">USA</MenuItem>
            <MenuItem value="uk">UK</MenuItem>
            <MenuItem value="ger">Germany</MenuItem>
          </Select>
        </Grid>
      </Grid>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        mb="10px"
      >
        <Grid item xs={5.9} sx={{ textAlign: "right" }}>
          <Typography sx={{ color: "rgba(20, 48, 42, 1)", fontSize: "18px" }}>
            Account Name:
          </Typography>
        </Grid>
        <Grid item xs={5.9}>
          <AddBanksTextField
            name="accountName"
            value={formValues.accountName}
            onChange={handleChange}
            placeholder="Sample Text"
          />
        </Grid>
      </Grid>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        mb="10px"
      >
        <Grid item xs={5.9} sx={{ textAlign: "right" }}>
          <Typography sx={{ color: "rgba(20, 48, 42, 1)", fontSize: "18px" }}>
            Swift/IBAN Number
          </Typography>
        </Grid>
        <Grid item xs={5.9}>
          <AddBanksTextField
            name="swiftIban"
            value={formValues.swiftIban}
            onChange={handleChange}
            placeholder="Sample Text"
          />
        </Grid>
      </Grid>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        mb="10px"
      >
        <Grid item xs={5.9} sx={{ textAlign: "right" }}>
          <Typography sx={{ color: "rgba(20, 48, 42, 1)", fontSize: "18px" }}>
            ACH and Wire Routing Number:
          </Typography>
        </Grid>
        <Grid item xs={5.9}>
          <AddBanksTextField
            name="wireRoutingNumber"
            value={formValues.wireRoutingNumber}
            onChange={handleChange}
            placeholder="Sample Text"
          />
        </Grid>
      </Grid>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        mb="10px"
      >
        <Grid item xs={5.9} sx={{ textAlign: "right" }}>
          <Typography sx={{ color: "rgba(20, 48, 42, 1)", fontSize: "18px" }}>
            Account Number:
          </Typography>
        </Grid>
        <Grid item xs={5.9}>
          <AddBanksTextField
            name="accountNumber"
            value={formValues.accountNumber}
            onChange={handleChange}
            placeholder="Sample Text"
          />
        </Grid>
      </Grid>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        mb="10px"
      >
        <Grid item xs={5.9} sx={{ textAlign: "right" }}>
          <Typography sx={{ color: "rgba(20, 48, 42, 1)", fontSize: "18px" }}>
            Routing Number:
          </Typography>
        </Grid>
        <Grid item xs={5.9}>
          <AddBanksTextField
            name="routingNumber"
            value={formValues.routingNumber}
            onChange={handleChange}
            placeholder="Sample Text"
          />
        </Grid>
      </Grid>
      <Grid container justifyContent="space-between" mb="10px">
        <Grid item xs={5.9} sx={{ textAlign: "right" }}>
          <Typography sx={{ color: "rgba(20, 48, 42, 1)", fontSize: "18px" }}>
            Bank Address:
          </Typography>
        </Grid>
        <Grid item xs={5.9}>
          <AddBanksTextField
            name="bankAddress"
            value={formValues.bankAddress}
            onChange={handleChange}
            placeholder="Sample Text"
            multiline
          />
        </Grid>
      </Grid>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        mb="10px"
      >
        <Grid item xs={5.9} sx={{ textAlign: "right" }}>
          <Typography sx={{ color: "rgba(20, 48, 42, 1)", fontSize: "18px" }}>
            Reference:
          </Typography>
        </Grid>
        <Grid item xs={5.9}>
          <AddBanksTextField
            name="reference"
            value={formValues.reference}
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
            height: "40px",
            width: "100px",
            fontSize: "16px",
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

export default AddBanksModal;

interface AddBanksTextFieldProps {
  name: string;
  value: string;
  onChange: (e: any) => void;
  placeholder: string;
  multiline?: boolean;
}

const AddBanksTextField: React.FC<AddBanksTextFieldProps> = ({
  name,
  value,
  onChange,
  placeholder,
  multiline,
}) => {
  return (
    <TextField
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      multiline={multiline ? true : false}
      rows={multiline ? 4 : 1}
      sx={{
        backgroundColor: "rgba(240, 243, 238, 1)",
        boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.02)",
        borderRadius: "5px",
        "& input": {
          p: "0",
          width: "258px",
          height: "42.26px",
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
          boxSizing: "border-box",
          "&::placeholder": {
            opacity: "1",
          },
        },
      }}
    />
  );
};
