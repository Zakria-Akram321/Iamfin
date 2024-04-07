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
  {
    id: 1,
    date: "29 Aug 2023",
    source: "Text Field",
    reference: "Text Field",
    currencyFunded: "GBP",
    currencyReceived: "GBP",
    fundingAmount: 20200,
    receivedAmount: 300,
    recipient: "Text Field",
    method: "Auto",
    release: "Release",
    releaseCheckbox: false,
  },
  {
    id: 2,
    date: "29 Aug 2023",
    source: "Text Field",
    reference: "Text Field",
    currencyFunded: "GBP",
    currencyReceived: "GBP",
    fundingAmount: 20200,
    receivedAmount: 300,
    recipient: "Text Field",
    method: "Manual",
    release: "Release",
    releaseCheckbox: false,
  },
  {
    id: 3,
    date: "29 Aug 2023",
    source: "Text Field",
    reference: "Text Field",
    currencyFunded: "GBP",
    currencyReceived: "GBP",
    fundingAmount: 20200,
    receivedAmount: 300,
    recipient: "Text Field",
    method: "Auto",
    release: "Release",
    releaseCheckbox: false,
  },
  {
    id: 4,
    date: "29 Aug 2023",
    source: "Text Field",
    reference: "Text Field",
    currencyFunded: "GBP",
    currencyReceived: "GBP",
    fundingAmount: 20200,
    receivedAmount: 300,
    recipient: "Text Field",
    method: "Manual",
    release: "Release",
    releaseCheckbox: false,
  },
  {
    id: 5,
    date: "29 Aug 2023",
    source: "Text Field",
    reference: "Text Field",
    currencyFunded: "GBP",
    currencyReceived: "GBP",
    fundingAmount: 20200,
    receivedAmount: 300,
    recipient: "Text Field",
    method: "Auto",
    release: "Release",
    releaseCheckbox: false,
  },
  {
    id: 6,
    date: "29 Aug 2023",
    source: "Text Field",
    reference: "Text Field",
    currencyFunded: "GBP",
    currencyReceived: "GBP",
    fundingAmount: 20200,
    receivedAmount: 300,
    recipient: "Text Field",
    method: "Auto",
    release: "Release",
    releaseCheckbox: false,
  },
  {
    id: 7,
    date: "29 Aug 2023",
    source: "Text Field",
    reference: "Text Field",
    currencyFunded: "GBP",
    currencyReceived: "GBP",
    fundingAmount: 20200,
    receivedAmount: 300,
    recipient: "Text Field",
    method: "Manual",
    release: "Release",
    releaseCheckbox: false,
  },
];

const MatchedDeposit = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalType, setModalType] = React.useState("");
  const [matchDepositRowData, setMatchDepositRowData] = React.useState(rows);
  const [releaseAllChecked, setReleaseAllChecked] = React.useState(false);
  const [totalSelected, setTotalSelected] = React.useState(0);
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
    const countOfItemsSelected = matchDepositRowData.filter(
      (row) => row.releaseCheckbox
    ).length;
    setTotalSelected(countOfItemsSelected);
    setModalOpen(true);
    setModalType("release-modal");
    console.log(modalType);
  };

  const releaseAllCheckboxChangeHanlder = (e: any) => {
    const isChecked = e.target.checked;
    setReleaseAllChecked(isChecked);
    setMatchDepositRowData((prevData) =>
      prevData.map((row) => ({ ...row, releaseCheckbox: isChecked }))
    );
  };

  const handleCheckboxChange = (id: any) => {
    const updatedRowData = matchDepositRowData.map((row) => {
      if (row.id === id) {
        return {
          ...row,
          releaseCheckbox: !row.releaseCheckbox,
        };
      }
      return row;
    });
    setMatchDepositRowData(updatedRowData);
    setReleaseAllChecked(updatedRowData.every((row) => row.releaseCheckbox));
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
                            checked={releaseAllChecked}
                            onChange={releaseAllCheckboxChangeHanlder}
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
              {matchDepositRowData.map((row: any) => (
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
                        checked={row.releaseCheckbox}
                        onChange={() => handleCheckboxChange(row.id)}
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
          releaseCount={totalSelected}
        />
      )}
    </Layout>
  );
};

export default MatchedDeposit;
