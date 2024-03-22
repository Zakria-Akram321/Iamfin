import { Typography, Box } from "@mui/material";
import TableComponent from "../../components/TableComponent";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CloseIcon from "@mui/icons-material/Close";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const PendingRelease = () => {
  const pendingReleaseTableHeading = [
    "Date",
    "Source",
    "Reference",
    "Currency",
    "Total Amount",
    "Recipient",
    "Release All",
  ];

  const createReleasePendingData = (
    id: number,
    date: string,
    source: string,
    reference: string,
    currency: string,
    totalAmount: number,
    recipient: string,
    release: string
  ) => {
    return {
      id,
      date,
      source,
      reference,
      currency,
      totalAmount,
      recipient,
      release,
    };
  };

  const releasePendingRowData = [
    createReleasePendingData(
      1,
      "29 Aug 2023",
      "Text Field",
      "Text Field",
      "GBP",
      20200,
      "Text Field",
      "Release"
    ),
    createReleasePendingData(
      2,
      "29 Aug 2023",
      "Text Field",
      "Text Field",
      "GBP",
      20200,
      "Text Field",
      "Release"
    ),
    createReleasePendingData(
      3,
      "29 Aug 2023",
      "Text Field",
      "Text Field",
      "GBP",
      20200,
      "Text Field",
      "Release"
    ),
    createReleasePendingData(
      4,
      "29 Aug 2023",
      "Text Field",
      "Text Field",
      "GBP",
      20200,
      "Text Field",
      "Release"
    ),
  ];
  return (
    <>
      <Typography
        variant="h6"
        sx={{ fontSize: "24px", fontWeight: "400", color: "#005640" }}
      >
        Pending Release
      </Typography>
      <TableComponent tableHeadings={pendingReleaseTableHeading}>
        {releasePendingRowData.map((row: any) => (
          <TableRow key={row.id}>
            <TableCell scope="row">{row.date}</TableCell>
            <TableCell align="left">{row.source}</TableCell>
            <TableCell align="left">{row.reference}</TableCell>
            <TableCell align="left">{row.currency}</TableCell>
            <TableCell align="left">{row.totalAmount}</TableCell>
            <TableCell
              align="left"
              sx={{ textDecoration: "underline", color: "#005640" }}
            >
              {row.recipient}
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
    </>
  );
};

export default PendingRelease;
