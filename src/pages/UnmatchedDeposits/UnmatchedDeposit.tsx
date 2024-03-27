import { Box, useMediaQuery } from "@mui/material";
import Typography from "@mui/material/Typography";
import Layout from "../../components/Layout";
import UiCard from "../../components/UiCard";
import UnmatchedDepositTable from "../../components/UnmatchedDeposits/UnmatchedDepositTable";

const tableHeading = ["date", "source", "reference", "currency", "amount", ""];
const rows = [
  {
    date: "01 Jan 2023",
    source: "Text Field",
    reference: "TextField",
    currency: "GBP",
    amount: 20000,
  },
  {
    date: "01 Jan 2023",
    source: "Text Field",
    reference: "TextField",
    currency: "GBP",
    amount: 20000,
  },
  {
    date: "01 Jan 2023",
    source: "Text Field",
    reference: "TextField",
    currency: "GBP",
    amount: 20000,
  },
  {
    date: "01 Jan 2023",
    source: "Text Field",
    reference: "TextField",
    currency: "GBP",
    amount: 20000,
  },
  {
    date: "01 Jan 2023",
    source: "Text Field",
    reference: "TextField",
    currency: "GBP",
    amount: 20000,
  },
  {
    date: "01 Jan 2023",
    source: "Text Field",
    reference: "TextField",
    currency: "GBP",
    amount: 20000,
  },
  {
    date: "01 Jan 2023",
    source: "Text Field",
    reference: "TextField",
    currency: "GBP",
    amount: 20000,
  },
  {
    date: "01 Jan 2023",
    source: "Text Field",
    reference: "TextField",
    currency: "GBP",
    amount: 20000,
  },
  {
    date: "01 Jan 2023",
    source: "Text Field",
    reference: "TextField",
    currency: "GBP",
    amount: 20000,
  },
  {
    date: "01 Jan 2023",
    source: "Text Field",
    reference: "TextField",
    currency: "GBP",
    amount: 20000,
  },
  {
    date: "01 Jan 2023",
    source: "Text Field",
    reference: "TextField",
    currency: "GBP",
    amount: 20000,
  },
  {
    date: "01 Jan 2023",
    source: "Text Field",
    reference: "TextField",
    currency: "GBP",
    amount: 20000,
  },
  {
    date: "01 Jan 2023",
    source: "Text Field",
    reference: "TextField",
    currency: "GBP",
    amount: 20000,
  },
  {
    date: "01 Jan 2023",
    source: "Text Field",
    reference: "TextField",
    currency: "GBP",
    amount: 20000,
  },
  {
    date: "01 Jan 2023",
    source: "Text Field",
    reference: "TextField",
    currency: "GBP",
    amount: 20000,
  },
  {
    date: "01 Jan 2023",
    source: "Text Field",
    reference: "TextField",
    currency: "GBP",
    amount: 20000,
  },
  {
    date: "01 Jan 2023",
    source: "Text Field",
    reference: "TextField",
    currency: "GBP",
    amount: 20000,
  },
  {
    date: "01 Jan 2023",
    source: "Text Field",
    reference: "TextField",
    currency: "GBP",
    amount: 20000,
  },
  {
    date: "01 Jan 2023",
    source: "Text Field",
    reference: "TextField",
    currency: "GBP",
    amount: 20000,
  },
  {
    date: "01 Jan 2023",
    source: "Text Field",
    reference: "TextField",
    currency: "GBP",
    amount: 20000,
  },
  {
    date: "01 Jan 2023",
    source: "Text Field",
    reference: "TextField",
    currency: "GBP",
    amount: 20000,
  },
  {
    date: "01 Jan 2023",
    source: "Text Field",
    reference: "TextField",
    currency: "GBP",
    amount: 20000,
  },
  {
    date: "01 Jan 2023",
    source: "Text Field",
    reference: "TextField",
    currency: "GBP",
    amount: 20000,
  },
  {
    date: "01 Jan 2023",
    source: "Text Field",
    reference: "TextField",
    currency: "GBP",
    amount: 20000,
  },
  {
    date: "01 Jan 2023",
    source: "Text Field",
    reference: "TextField",
    currency: "GBP",
    amount: 20000,
  },
  {
    date: "01 Jan 2023",
    source: "Text Field",
    reference: "TextField",
    currency: "GBP",
    amount: 20000,
  },
];

export default function UnmatchedDeposit() {
  const mediumScreen = useMediaQuery(
    "(min-width: 1100px) and (max-width:1500px)"
  );
  return (
    <Layout>
      <Box
        sx={{ maxWidth: "90%", m: mediumScreen ? "0 30px 0 auto" : "0 auto" }}
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
        <UiCard
          padding={mediumScreen ? "10px 10px" : "30px 20px"}
          maxHeight="65vh"
        >
          <UnmatchedDepositTable
            tableHeadings={tableHeading}
            tableData={rows}
          />
        </UiCard>
      </Box>
    </Layout>
  );
}
