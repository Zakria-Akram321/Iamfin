import Layout from "../../Layout";
import { Box, Typography, useMediaQuery } from "@mui/material";
import MatchWithClientHeader from "./MatchWithClientHeader";
import MatchWithClientSearchFields from "./MatchWithClientSearchFields";
import UiCard from "../../UiCard";
import MatchWithClientMainTable from "./MatchWithClientMainTable";

const MatchwithClientMain = () => {
  const mediumScreen = useMediaQuery(
    "(min-width: 1100px) and (max-width:1500px)"
  );
  return (
    <Layout>
      <Box
        sx={{
          maxWidth: "90%",
          m: mediumScreen ? "0px 20px 0px auto" : "0px auto",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: mediumScreen ? "28px" : "40px",
            lineHeight: "48px",
            fontWeight: "700",
            color: "#005640",
            mb: "20px",
            textTransform: "capitalize",
          }}
        >
          Unmatched deposits
        </Typography>
        <UiCard>
          <Box>
            <MatchWithClientHeader />
          </Box>
          <Box sx={{ p: "0px 30px 40px" }}>
            <Box sx={{ m: mediumScreen ? "30px 0px" : "40px 0px" }}>
              <MatchWithClientSearchFields />
            </Box>
            <Box>
              <Typography
                variant="h1"
                sx={{
                  fontSize: mediumScreen ? "18px" : "24px",
                  lineHeight: "28.8px",
                  fontWeight: "700",
                  color: "#005640",
                  mb: "20px",
                  textTransform: "uppercase",
                }}
              >
                POTENTIAL MATCHES
              </Typography>
              <MatchWithClientMainTable />
            </Box>
          </Box>
        </UiCard>
      </Box>
    </Layout>
  );
};

export default MatchwithClientMain;
