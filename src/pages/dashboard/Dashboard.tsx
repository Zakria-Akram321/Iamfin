import { Box } from "@mui/material";
import SideDrawal from "../../components/SideDrawer";
import Typography from "@mui/material/Typography";
import { Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import BankData from "./components/BanksData";
import Funds from "./components/Funds";
import FireBlocks from "./components/FireBlocks";
import PerformanceMatric from "./components/PerformanceMatric";
import Layout from "../../components/Layout";

export default function Dashboard() {
  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: "left",
    color: "black",
  }));

  return (
    // <Box
    //   sx={{
    //     display: "flex",
    //     backgroundColor: "#f0f3ee",
    //     marginLeft: "40px",
    //     overflow: "hidden",
    //   }}
    // >
    //   <SideDrawal />
    <Layout>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "#f0f3ee",
          p: "0 24px 24px ",
          overflow: "hidden",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: "35px",
            fontWeight: "700",
            color: "#005640",
            fontFamily: "Aleo",
            marginBottom: "10px",
          }}
        >
          Dashboard
        </Typography>

        <Box sx={{ width: "100%", overflow: "hidden" }}>
          <Grid
            container
            rowSpacing={5}
            columnSpacing={{ xs: 2, sm: 4, md: 15 }}
          >
            <Grid item xs={6}>
              <Item>
                <span
                  style={{ textDecoration: "underline", fontWeight: "Bold" }}
                >
                  Banks
                </span>{" "}
                <BankData />
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <span
                  style={{ textDecoration: "underline", fontWeight: "Bold" }}
                >
                  Fireblocks
                </span>{" "}
                <FireBlocks />
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <span
                  style={{ textDecoration: "underline", fontWeight: "Bold" }}
                >
                  Funds
                </span>
                <Funds />
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <span
                  style={{ textDecoration: "underline", fontWeight: "Bold" }}
                >
                  Performance Metrics
                </span>
                <PerformanceMatric />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Layout>
    // </Box>
  );
}
