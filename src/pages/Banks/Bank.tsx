import { Box, useMediaQuery } from "@mui/material";
import Typography from "@mui/material/Typography";
import Layout from "../../components/Layout";
import BanksMain from "../../components/Banks/BanksMain";

export default function Bank() {
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
            mb: "20px",
            textTransform: "capitalize",
          }}
        >
          Banks
        </Typography>
        <BanksMain />
      </Box>
    </Layout>
  );
}
