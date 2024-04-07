import {
  Typography,
  Box,
  TableContainer,
  Table,
  TableHead,
  Paper,
  useMediaQuery,
} from "@mui/material";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CloseIcon from "@mui/icons-material/Close";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import React from "react";
import ReleaseWithdrawalModal from "../../components/WithdrawalModals/ReleaseWithdrawalModal";

const declinedWithdrawalTableHeading = [
  "Date",
  "Source",
  "Reference",
  "Currency",
  "Total Amount",
  "Recipient",
  "Decline Reason",
  "Release All",
];

const tableRowData = [
  {
    id: 1,
    date: "29 Aug 2023",
    source: "Text Field",
    reference: "Text Field",
    currency: "GBP",
    totalAmount: 20200,
    recipient: "Text Field",
    declineReason: "View",
    release: "Release",
    releaseCheckbox: false,
  },
  {
    id: 2,
    date: "29 Aug 2023",
    source: "Text Field",
    reference: "Text Field",
    currency: "GBP",
    totalAmount: 20200,
    recipient: "Text Field",
    declineReason: "View",
    release: "Release",
    releaseCheckbox: false,
  },
  {
    id: 3,
    date: "29 Aug 2023",
    source: "Text Field",
    reference: "Text Field",
    currency: "GBP",
    totalAmount: 20200,
    recipient: "Text Field",
    declineReason: "View",
    release: "Release",
    releaseCheckbox: false,
  },
  {
    id: 4,
    date: "29 Aug 2023",
    source: "Text Field",
    reference: "Text Field",
    currency: "GBP",
    totalAmount: 20200,
    recipient: "Text Field",
    declineReason: "View",
    release: "Release",
    releaseCheckbox: false,
  },
];
const DeclinedWithdrawal = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalType, setModalType] = React.useState("");
  const [declinedWithdrawalRowData, setDeclinedWithdrawalRowData] =
    React.useState(tableRowData);
  const [releaseAllChecked, setReleaseAllChecked] = React.useState(false);
  const [totalSelected, setTotalSelected] = React.useState(0);
  const mediumScreen = useMediaQuery(
    "(min-width: 1100px) and (max-width:1500px)"
  );

  const handleClose = () => {
    setModalOpen(false);
    setModalType("");
  };

  const releaseAllWithdrawals = () => {
    const countOfItemsSelected = declinedWithdrawalRowData.filter(
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
    setDeclinedWithdrawalRowData((prevData) =>
      prevData.map((row) => ({ ...row, releaseCheckbox: isChecked }))
    );
  };

  const handleCheckboxChange = (id: any) => {
    const updatedRowData = declinedWithdrawalRowData.map((row) => {
      if (row.id === id) {
        return {
          ...row,
          releaseCheckbox: !row.releaseCheckbox,
        };
      }
      return row;
    });
    setDeclinedWithdrawalRowData(updatedRowData);
    setReleaseAllChecked(updatedRowData.every((row) => row.releaseCheckbox));
  };

  return (
    <>
      <Typography
        variant="h6"
        sx={{
          fontSize: mediumScreen ? "18px" : "24px",
          fontWeight: "400",
          color: "#AA322D",
        }}
      >
        Declined Withdrawals
      </Typography>
      <TableContainer
        component={Paper}
        sx={{ p: "20px 15px", boxSizing: "border-box" }}
      >
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              {declinedWithdrawalTableHeading?.map((item: any) => {
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
                            fontSize: mediumScreen ? "11px" : "12px",
                            fontWeight: "700",
                            display: "inline",
                            p: mediumScreen ? "5px 15px" : "5px 20px",
                          }}
                          onClick={releaseAllWithdrawals}
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
          {declinedWithdrawalRowData.map((row: any) => (
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
              <TableCell
                align="left"
                sx={{
                  color: "#005640",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                {row.declineReason}
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
                      fontSize: mediumScreen ? "11px" : "12px",
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
        </Table>
      </TableContainer>
      {modalType === "release-modal" && (
        <ReleaseWithdrawalModal
          open={modalOpen}
          handleClose={handleClose}
          setModalType={setModalType}
          releaseCount={totalSelected}
        />
      )}
    </>
  );
};

export default DeclinedWithdrawal;
