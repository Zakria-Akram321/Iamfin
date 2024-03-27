import { Box, Typography } from "@mui/material";
import PendingRelease from "./PendingRelease";
import DeclinedWithdrawal from "./DeclinedWithdrawal";
import Layout from "../../components/Layout";

const Withdrawals = () => {
  return (
    <Layout>
      <Box sx={{ maxWidth: "85%", margin: "0 auto" }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: "40px",
            lineHeight: "48px",
            fontWeight: "700",
            color: "#005640",
            mb: "40px",
          }}
        >
          Withdrawals
        </Typography>

        {/* Pending Release */}
        <Box component="div">
          <PendingRelease />
        </Box>

        {/* Declined Withdrawals */}
        <Box component="div" sx={{ marginTop: "30px" }}>
          <DeclinedWithdrawal />
        </Box>
      </Box>
    </Layout>
  );
};

export default Withdrawals;
