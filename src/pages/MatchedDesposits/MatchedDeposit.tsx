import {
  Box,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  useMediaQuery,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CloseIcon from "@mui/icons-material/Close";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Layout from "../../components/Layout";
import React from "react";
import ReleaseDepositModal from "../../components/MatchedDeposits/ReleaseDepositModal";
import DeclineDepositModal from "../../components/MatchedDeposits/DeclineDepositModal";

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

  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalType, setModalType] = React.useState("");
  const mediumScreen = useMediaQuery(
    "(min-width: 1100px) and (max-width:1500px)"
  );

  const handleDeclineModalOpen = () => {
    setModalOpen(true);
    setModalType("decline-modal");
  };

  const handleClose = () => {
    setModalOpen(false);
    setModalType("");
  };

  const releaseAllDeposits = () => {
    setModalOpen(true);
    setModalType("release-modal");
    console.log(modalType);
  };

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
            mb: mediumScreen ? "15px" : "20px",
          }}
        >
          Matched Desposit
        </Typography>
        {/* <TableComponent tableHeadings={tableHeadings}> */}
        <TableContainer
          component={Paper}
          sx={{ p: "20px 15px", boxSizing: "border-box" }}
        >
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                {tableHeadings.map((item: any) => {
                  return (
                    <TableCell sx={{ fontWeight: "700" }}>
                      {item !== "Release All" ? (
                        item
                      ) : (
                        <>
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
                              backgroundColor: "#005640",
                              boxShadow: "4px 4px 4px 0px #0000001A",
                              fontSize: "12px",
                              fontWeight: "700",
                              display: "inline",
                              p: "5px 20px",
                            }}
                            onClick={releaseAllDeposits}
                          >
                            {"Release All"}
                          </Button>
                        </>
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
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
                        onClick={handleDeclineModalOpen}
                      />
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* </TableComponent> */}
      </Box>
      {modalType === "decline-modal" && (
        <DeclineDepositModal
          open={modalOpen}
          handleClose={handleClose}
          setModalType={setModalType}
        />
      )}
      {modalType === "release-modal" && (
        <ReleaseDepositModal
          open={modalOpen}
          handleClose={handleClose}
          setModalType={setModalType}
        />
      )}
    </Layout>
  );
};

export default MatchedDeposit;
