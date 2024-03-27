import { Box, Typography, useMediaQuery } from "@mui/material";
import PendingRelease from "./PendingRelease";
import DeclinedWithdrawal from "./DeclinedWithdrawal";
import Layout from "../../components/Layout";

const Withdrawals = () => {
  const mediumScreen = useMediaQuery(
    "(min-width: 1100px) and (max-width:1500px)"
  );

  return (
    <Layout>
      <Box
        sx={{
          maxWidth: "90%",
          margin: mediumScreen ? "0px 20px 0px auto" : "0 auto",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: mediumScreen ? "28px" : "40px",
            lineHeight: "48px",
            fontWeight: "700",
            color: "#005640",
            mb: mediumScreen ? "15px" : "40px",
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
