import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Layout from "../../components/Layout";
import BanksMain from "../../components/Banks/BanksMain";

export default function Bank() {
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
          }}
        >
          Banks
        </Typography>
        <BanksMain />
      </Box>
    </Layout>
  );
}
