import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import TableComponent from "../../components/TableComponent";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CloseIcon from "@mui/icons-material/Close";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Layout from "../../components/Layout";

const MatchedDeposit = () => {
  const createData = (
    id: number,
    date: string,
    source: string,
    reference: string,
    currencyFunded: string,
    fundingAmount: number,
    currencyReceived: string,
    receivedAmount: number,
    recipient: string,
    method: string,
    release: string
  ) => {
    return {
      id,
      date,
      source,
      reference,
      currencyFunded,
      fundingAmount,
      currencyReceived,
      receivedAmount,
      recipient,
      method,
      release,
    };
  };

  const tableHeadings = [
    "Date",
    "Source",
    "Reference",
    "Currency",
    "Funding Amount",
    "Currency",
    "Received Amount",
    "Recipient",
    "Method",
    "Release All",
  ];

  const rows = [
    createData(
      1,
      "29 Aug 2023",
      "Text Field",
      "Text Field",
      "GBP",
      20200,
      "EUR",
      300,
      "Text Field",
      "Auto",
      "Release"
    ),
    createData(
      2,
      "29 Aug 2023",
      "Text Field",
      "Text Field",
      "GBP",
      20200,
      "EUR",
      300,
      "Text Field",
      "Manual",
      "Release"
    ),
    createData(
      3,
      "29 Aug 2023",
      "Text Field",
      "Text Field",
      "GBP",
      20200,
      "EUR",
      300,
      "Text Field",
      "Manual",
      "Release"
    ),
    createData(
      4,
      "29 Aug 2023",
      "Text Field",
      "Text Field",
      "GBP",
      20200,
      "EUR",
      300,
      "Text Field",
      "Auto",
      "Release"
    ),
    createData(
      5,
      "29 Aug 2023",
      "Text Field",
      "Text Field",
      "GBP",
      20200,
      "EUR",
      300,
      "Text Field",
      "Auto",
      "Release"
    ),
  ];

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
          Matched Desposit
        </Typography>
        <TableComponent tableHeadings={tableHeadings}>
          {rows.map((row: any) => (
            <TableRow key={row.id}>
              <TableCell scope="row">{row.date}</TableCell>
              <TableCell align="left">{row.source}</TableCell>
              <TableCell align="left">{row.reference}</TableCell>
              <TableCell align="left">{row.currencyFunded}</TableCell>
              <TableCell align="left">{row.fundingAmount}</TableCell>
              <TableCell align="left">{row.currencyReceived}</TableCell>
              <TableCell align="left">{row.receivedAmount}</TableCell>
              <TableCell
                align="left"
                sx={{ textDecoration: "underline", color: "#005640" }}
              >
                {row.recipient}
              </TableCell>
              <TableCell
                align="left"
                sx={
                  row.method === "Manual"
                    ? { textDecoration: "underline", color: "#005640" }
                    : {}
                }
              >
                {row.method}
              </TableCell>
              <TableCell align="left">
                <Box
                  component="div"
                  sx={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  <Checkbox
                    sx={{
                      display: "inline",
                      color: "#005640",
                      "&.Mui-checked": {
                        color: "#005640",
                      },
                    }}
                  />
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#00CE7E",
                      boxShadow: "4px 4px 4px 0px #0000001A",
                      fontSize: "12px",
                      fontWeight: "700",
                      display: "inline",
                    }}
                  >
                    {row.release}
                  </Button>
                  <CloseIcon
                    sx={{
                      color: "rgba(170, 50, 45, 0.75)",
                      fontWeight: "700",
                      cursor: "pointer",
                    }}
                  />
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableComponent>
      </Box>
    </Layout>
  );
};

export default MatchedDeposit;
