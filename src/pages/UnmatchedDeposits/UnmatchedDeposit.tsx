import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Layout from "../../components/Layout";
import UiCard from "../../components/UiCard";
import UnmatchedDepositTable from "../../components/UnmatchedDeposits/UnmatchedDepositTable";

export default function UnmatchedDeposit() {
  return (
    <Layout>
      <Box sx={{ maxWidth: "90%", margin: "0 auto" }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: "40px",
            lineHeight: "48px",
            fontWeight: "700",
            color: "#005640",
            mb: "20px",
            textTransform: "capitalize",
          }}
        >
          Unmatched deposits
        </Typography>
        <UiCard padding="30px 20px" maxHeight="65vh">
          <UnmatchedDepositTable />
        </UiCard>
      </Box>
    </Layout>
  );
}
