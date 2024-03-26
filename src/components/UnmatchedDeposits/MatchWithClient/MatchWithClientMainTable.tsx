import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  Paper,
  TableCell,
  TableContainer,
  TableBody,
  Box,
  Button,
} from "@mui/material";
import ReasonForMatchModal from "../ReasonForMatchModal";

const tableHeading = [
  "Client ID",
  "Name",
  "Other Name",
  "Surname",
  "DOB",
  "Match",
];
const rows = [
  {
    clientId: "Text",
    clientName: "Client Name",
    otherName: "Other Name",
    surname: "Surname",
    dob: "12 Feb 2002",
  },
  {
    clientId: "Text",
    clientName: "Client Name",
    otherName: "Other Name",
    surname: "Surname",
    dob: "12 Feb 2002",
  },
  {
    clientId: "Text",
    clientName: "Client Name",
    otherName: "Other Name",
    surname: "Surname",
    dob: "12 Feb 2002",
  },
  {
    clientId: "Text",
    clientName: "Client Name",
    otherName: "Other Name",
    surname: "Surname",
    dob: "12 Feb 2002",
  },
  {
    clientId: "Text",
    clientName: "Client Name",
    otherName: "Other Name",
    surname: "Surname",
    dob: "12 Feb 2002",
  },
  {
    clientId: "Text",
    clientName: "Client Name",
    otherName: "Other Name",
    surname: "Surname",
    dob: "12 Feb 2002",
  },
  {
    clientId: "Text",
    clientName: "Client Name",
    otherName: "Other Name",
    surname: "Surname",
    dob: "12 Feb 2002",
  },
  {
    clientId: "Text",
    clientName: "Client Name",
    otherName: "Other Name",
    surname: "Surname",
    dob: "12 Feb 2002",
  },
  {
    clientId: "Text",
    clientName: "Client Name",
    otherName: "Other Name",
    surname: "Surname",
    dob: "12 Feb 2002",
  },
  {
    clientId: "Text",
    clientName: "Client Name",
    otherName: "Other Name",
    surname: "Surname",
    dob: "12 Feb 2002",
  },
  {
    clientId: "Text",
    clientName: "Client Name",
    otherName: "Other Name",
    surname: "Surname",
    dob: "12 Feb 2002",
  },
  {
    clientId: "Text",
    clientName: "Client Name",
    otherName: "Other Name",
    surname: "Surname",
    dob: "12 Feb 2002",
  },
  {
    clientId: "Text",
    clientName: "Client Name",
    otherName: "Other Name",
    surname: "Surname",
    dob: "12 Feb 2002",
  },
  {
    clientId: "Text",
    clientName: "Client Name",
    otherName: "Other Name",
    surname: "Surname",
    dob: "12 Feb 2002",
  },
  {
    clientId: "Text",
    clientName: "Client Name",
    otherName: "Other Name",
    surname: "Surname",
    dob: "12 Feb 2002",
  },
];

const MatchWithClientMainTable: React.FC = () => {
  const [modalOpen, setModalOpen] = React.useState(false);

  const matchClickHandler = () => {
    setModalOpen(true);
  };
  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "rgba(240, 243, 238, 1)",
          p: "10px",
          borderRadius: "10px",
          boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.1)",
        }}
      >
        <TableContainer
          component={Paper}
          className="match-with-client-table-main"
          sx={{
            boxSizing: "border-box",
            boxShadow: "0",
            backgroundColor: "transparent",
            maxHeight: "30vh",
            overflowY: "auto",
            p: "0px 20px 0px 0px",
            // maxWidth: "1100px",
          }}
        >
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                {tableHeading?.map((column: string, index: number) => (
                  <TableCell
                    key={index}
                    sx={{
                      textTransform: "capitalize",
                      fontWeight: 700,
                      fontSize: "20px",
                      color: "rgba(20, 48, 42, 1)",
                      textAlign: `${column === "Match" ? "right" : "left"}`,
                      width: `${column === "Match" ? "230px" : "auto"}`,
                    }}
                  >
                    {column}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows?.map((row: any, index: number) => (
                <TableRow key={index} sx={{ height: "50px" }}>
                  {Object.values(row).map((column: any, index: number) => (
                    <TableCell key={index} sx={{ fontSize: "20px" }}>
                      {column}
                    </TableCell>
                  ))}
                  <TableCell sx={{ textAlign: "right" }}>
                    <Button
                      variant="contained"
                      sx={{
                        boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.1)",
                        backgroundColor: "rgba(0, 206, 126, 1)",
                        borderRadius: "2px",
                        width: "75px",
                        height: "30px",
                        textTransform: "uppercase",
                        fontSize: "12px",
                      }}
                      onClick={matchClickHandler}
                    >
                      Match
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      {modalOpen && (
        <ReasonForMatchModal
          open={modalOpen}
          handleClose={handleClose}
          setModalOpen={setModalOpen}
        />
      )}
    </>
  );
};

export default MatchWithClientMainTable;
