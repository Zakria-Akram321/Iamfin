import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import UiCard from "../../components/UiCard";
import Balance from "../../components/PersonalProfile/Balance";
import CalculatorAndComparison from "../../components/PersonalProfile/CalculatorAndComparison";
import Document from "../../components/PersonalProfile/Document";

const ProfileRightPart = () => {
  return (
    <>
      <Box
        component="div"
        className="profilePageRightSingle"
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
            Balances
          </Typography>
          <Balance />
        </UiCard>
      </Box>

      <Box
        component="div"
        className="profilePageRightSingle"
        sx={{ marginTop: "20px" }}
      >
        <UiCard padding={"30px 15px"}>
          <CalculatorAndComparison />
        </UiCard>
      </Box>
      <Box
        component="div"
        className="profilePageRightSingle"
        sx={{ marginTop: "20px" }}
      >
        <UiCard padding={"30px 15px"}>
          <Document />
        </UiCard>
      </Box>
    </>
  );
};

export default ProfileRightPart;
