import { Box, Grid, Typography, TextField, useMediaQuery } from "@mui/material";
import React from "react";
import CustomButtons from "../CustomButtons";
import LiveSearch from "./LiveSearch";

const initialValues = {
  accountName: "",
  wireRoutingNumber: "",
  accountNumber: "",
  routingNumber: "",
  bankAddress: "",
  reference: "",
};

const accountNames = [
  { id: "1", name: "FNB" },
  { id: "2", name: "Standard Bank" },
  { id: "3", name: "ABC Bank" },
  { id: "4", name: "ABSA" },
  { id: "5", name: "ABC Bank" },
  { id: "6", name: "ABSA" },
  { id: "7", name: "ABC Bank" },
  { id: "8", name: "ABSA" },
  { id: "9", name: "ABC Bank" },
  { id: "10", name: "ABSA" },
];
const accountNumbers = [
  { id: "1", name: "1234543" },
  { id: "2", name: "6767671" },
  { id: "3", name: "2778652" },
  { id: "4", name: "11234543" },
  { id: "5", name: "8998999" },
  { id: "6", name: "11117787" },
  { id: "7", name: "189876771" },
  { id: "8", name: "166799977" },
  { id: "9", name: "11676769" },
  { id: "10", name: "17878666" },
];

const DeleteBanksModal = ({
  setShowModal,
  setConfirmDeleteModal,
  modalData,
}: any) => {
  const [formValues, setFormValues] = React.useState(
    modalData ? modalData : initialValues
  );
  const mediumScreen = useMediaQuery(
    "(min-width: 1100px) and (max-width:1500px)"
  );

  const handleChange = (e: any) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    console.log(formValues);
  };
  const deleteClickHandler = (e: any) => {
    setShowModal("confirmDelete");
    setConfirmDeleteModal(true);
    e.preventDefault();
  };
  const cancelClickHandler = (e: any) => {
    setShowModal("");
    e.preventDefault();
  };

  const [results, setResults] = React.useState<any[]>();
  const [accountNumberResults, setaccountNumberResults] =
    React.useState<any[]>();

  const handleAccountNameSearchChange = (e: any) => {
    const { target } = e;
    if (!target.value.trim()) return setResults([]);

    const filteredValue = accountNames.filter((accountName) =>
      accountName.name.toLowerCase().startsWith(target.value.toLowerCase())
    );

    setResults(filteredValue);
  };

  const handleAccountNumberSearchChange = (e: any) => {
    const { target } = e;
    if (!target.value.trim()) return setResults([]);

    const filteredValue = accountNumbers.filter((accountName) =>
      accountName.name.toLowerCase().startsWith(target.value.toLowerCase())
    );

    setaccountNumberResults(filteredValue);
  };

  return (
    <>
      <Box>
        <Typography
          sx={{
            fontSize: mediumScreen ? "24px" : "32px",
            color: "rgba(170, 50, 45, 1)",
            fontWeight: 700,
            textTransform: "capitalize",
            mb: mediumScreen ? "20px" : "30px",
          }}
        >
          Delete accountName Account
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
              Account Name:
            </Typography>
          </Grid>
          <Grid item xs={5.9}>
            <LiveSearch
              results={results}
              value={formValues.accountName}
              renderItem={(item) => <p>{item.name}</p>}
              onChange={handleAccountNameSearchChange}
              onSelect={(item) =>
                setFormValues({ ...formValues, accountName: item.name })
              }
              name="accountName"
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
              Account Number:
            </Typography>
          </Grid>
          <Grid item xs={5.9}>
            <LiveSearch
              results={accountNumberResults}
              value={formValues.accountNumber}
              renderItem={(item) => <p>{item.name}</p>}
              onChange={handleAccountNumberSearchChange}
              onSelect={(item) =>
                setFormValues({ ...formValues, accountNumber: item.name })
              }
              name="accountNumber"
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
              height: mediumScreen ? "35px" : "40px",
              width: mediumScreen ? "90px" : "100px",
              fontSize: mediumScreen ? "12px" : "16px",
            }}
            successButtonText="delete"
            declineButtonText="cancel"
            onSuccessButtonClick={deleteClickHandler}
            onDeclineButtonClick={cancelClickHandler}
          />
        </Box>
      </Box>
    </>
  );
};

export default DeleteBanksModal;

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
          color: "rgba(170, 50, 45, 1)",
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
          color: "rgba(170, 50, 45, 1)",
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
