import {
  Box,
  Grid,
  Typography,
  TextField,
  useMediaQuery,
  styled,
  Button,
} from "@mui/material";
import React from "react";
import CustomButtons from "../CustomButtons";

const initialValues = {
  bankName: "",
  accountName: "",
  wireRoutingNumber: "",
  accountNumber: "",
  routingNumber: "",
  bankAddress: "",
  email: "",
  swiftIban: "",
  reference: "",
  bankFile: null,
};

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const ViewSendBanksModal = ({ setOpenModal }: any) => {
  const [formValues, setFormValues] = React.useState(initialValues);
  const mediumScreen = useMediaQuery(
    "(min-width: 1100px) and (max-width:1500px)"
  );

  const handleChange = (e: any) => {
    console.log(e.target.type);
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    console.log(formValues);
  };
  const sendClickHandler = (e: any) => {
    e.preventDefault();
  };
  const closeClickHandler = (e: any) => {
    setOpenModal(false);
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
          mb: mediumScreen ? "20px" : "30px",
        }}
      >
        View / Send Bank Account Details
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
            Bank Name:
          </Typography>
        </Grid>
        <Grid item xs={5.9}>
          <AddBanksTextField
            name="bankName"
            value={formValues.bankName}
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
          <Typography
            sx={{
              color: "rgba(20, 48, 42, 1)",
              fontSize: mediumScreen ? "15px" : "18px",
            }}
          >
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
          <Typography
            sx={{
              color: "rgba(20, 48, 42, 1)",
              fontSize: mediumScreen ? "15px" : "18px",
            }}
          >
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
          <Typography
            sx={{
              color: "rgba(20, 48, 42, 1)",
              fontSize: mediumScreen ? "15px" : "18px",
            }}
          >
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
          <Typography
            sx={{
              color: "rgba(20, 48, 42, 1)",
              fontSize: mediumScreen ? "15px" : "18px",
            }}
          >
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
          <Typography
            sx={{
              color: "rgba(20, 48, 42, 1)",
              fontSize: mediumScreen ? "15px" : "18px",
            }}
          >
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
          <Typography
            sx={{
              color: "rgba(20, 48, 42, 1)",
              fontSize: mediumScreen ? "15px" : "18px",
            }}
          >
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
      <Grid container justifyContent="space-between" mb="10px">
        <Grid item xs={5.9} sx={{ textAlign: "right" }}>
          <Typography
            sx={{
              color: "rgba(20, 48, 42, 1)",
              fontSize: mediumScreen ? "15px" : "18px",
            }}
          >
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
      <Grid
        container
        justifyContent="space-between"
        mb="10px"
        alignItems="center"
        mt={mediumScreen ? "20px" : "30px"}
      >
        <Grid item xs={3.9} sx={{ textAlign: "right" }}>
          <Typography
            sx={{
              color: "rgba(20, 48, 42, 1)",
              fontSize: mediumScreen ? "15px" : "18px",
            }}
          >
            Upload Bank File:
          </Typography>
        </Grid>
        <Grid
          item
          xs={3.9}
          sx={{
            backgroundColor: "rgba(240, 243, 238, 1)",
            boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.02)",
            borderRadius: "5px",
            width: "258px",
            height: mediumScreen ? "32.26px" : "42.26px",
            fontSize: mediumScreen ? "12px" : "16px",
            color: "rgba(0, 86, 64, 1)",
            padding: "0px 12px",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
          }}
        >
          {formValues.bankFile ? formValues.bankFile : "Select File"}
        </Grid>
        <Grid item xs={3.9} sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            sx={{
              textTransform: "capitalize",
              backgroundColor: "rgba(0, 206, 126, 1)",
              width: mediumScreen ? "110px" : "120px",
              height: mediumScreen ? "29.26px" : "39.26px",
              p: "0",
              fontSize: mediumScreen ? "12px" : "16px",
              fontWeight: 700,
              letterSpacing: "1.2px",
              "&:hover": {
                backgroundColor: "rgba(0, 176, 96, 1)",
              },
            }}
          >
            Upload
            <VisuallyHiddenInput
              type="file"
              name="bankFile"
              onChange={handleChange}
            />
          </Button>
        </Grid>
      </Grid>
      <Box sx={{ textAlign: "center", mt: mediumScreen ? "30px" : "50px" }}>
        <TextField
          type="email"
          name="email"
          value={formValues.email}
          placeholder="Enter Email Address"
          sx={{
            backgroundColor: "rgba(240, 243, 238, 1)",
            boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.02)",
            borderRadius: "5px",
            "& input": {
              p: "0",
              width: "331px",
              height: "42.26px",
              padding: "0px 12px",
              boxSizing: "border-box",
              "&::placeholder": {
                fontStyle: "italic",
              },
            },
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: "30px" }}>
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
          successButtonText="send"
          declineButtonText="close"
          onSuccessButtonClick={sendClickHandler}
          onDeclineButtonClick={closeClickHandler}
        />
      </Box>
    </Box>
  );
};

export default ViewSendBanksModal;

interface AddBanksTextFieldProps {
  name: string;
  value: string;
  onChange: (e: any) => void;
  placeholder: string;
  multiline?: boolean;
  type?: string;
}

const AddBanksTextField: React.FC<AddBanksTextFieldProps> = ({
  name,
  value,
  onChange,
  placeholder,
  multiline,
  type,
}) => {
  const mediumScreen = useMediaQuery(
    "(min-width: 1100px) and (max-width:1500px)"
  );

  return (
    <TextField
      type={type}
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
          fontSize: mediumScreen ? "12px" : "16px",
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
