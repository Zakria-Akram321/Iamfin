import Layout from "../../Layout";
import { Box, Typography } from "@mui/material";
import MatchWithClientHeader from "./MatchWithClientHeader";

const MatchwithClientMain = () => {
  return (
    <Layout>
      <Box sx={{ maxWidth: "90%", m: "0 auto" }}>
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
        <Box>
          <MatchWithClientHeader />
        </Box>
      </Box>
    </Layout>
  );
};

export default MatchwithClientMain;
