import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import UiCard from "../../components/UiCard";
import InfoCard from "../../components/PersonalProfile/InfoCard";
import TransactionHistory from "../../components/PersonalProfile/TransactionHistory";

const ProfileLeftPart = () => {
  const depositOptions = ["Method Dropdown", "one", "two", "three"];
  const currencyOptions = ["Currency Dropdown", "USD", "GBP", "EUR"];
  return (
    <>
      <Box
        component="div"
        className="profilePageLeftSingle"
        sx={{ marginTop: "20px" }}
      >
        <UiCard padding={"30px 15px"}>
          <InfoCard
            labelDropdown1={"Deposit"}
            optionsDropdown1={depositOptions}
            labelDropdown2={"Currency"}
            optionsDropdown2={currencyOptions}
            labelTextField="Amount"
            placeholderTextField={"Enter the Amount"}
          />
        </UiCard>
      </Box>
      <Box
        component="div"
        className="profilePageLeftSingle"
        sx={{ marginTop: "20px" }}
      >
        <UiCard padding={"30px 15px"}>
          <InfoCard
            labelDropdown1={"Deposit"}
            optionsDropdown1={depositOptions}
            labelDropdown2={"Currency"}
            optionsDropdown2={currencyOptions}
            labelTextField="Amount"
            placeholderTextField={"Enter the Amount"}
          />
        </UiCard>
      </Box>
      <Box
        component="div"
        className="profilePageLeftSingle"
        sx={{ marginTop: "20px" }}
      >
        <UiCard padding={"30px 15px"}>
          <Typography
            variant="h4"
            sx={{
              fontSize: "16px",
              marginBottom: "15px",
              fontWeight: "600",
            }}
          >
            Pay a Beneficiary
          </Typography>
          <InfoCard
            labelDropdown1={"Beneficiary"}
            optionsDropdown1={depositOptions}
            labelDropdown2={"Currency"}
            optionsDropdown2={currencyOptions}
            labelTextField="Amount"
            placeholderTextField={"Enter the Amount"}
          />
          <Box component="div" className="btn" sx={{ textAlign: "center" }}>
            <Button variant="contained" sx={{ background: "#00CE7E" }}>
              Add a Beneficiary
            </Button>
          </Box>
        </UiCard>
      </Box>

      <Box
        component="div"
        className="profilePageLeftSingle"
        sx={{ marginTop: "20px" }}
      >
        <UiCard padding={"30px 15px"}>
          <Typography
            variant="h4"
            sx={{
              fontSize: "16px",
              marginBottom: "15px",
              fontWeight: "600",
            }}
          >
            Transaction History
          </Typography>
          <TransactionHistory />
        </UiCard>
      </Box>
    </>
  );
};

export default ProfileLeftPart;
