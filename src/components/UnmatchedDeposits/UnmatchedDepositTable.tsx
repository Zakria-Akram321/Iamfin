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
} from "@mui/material";
import CustomTextField from "../Banks/CustomTextField";
import searchIcon from "../../Assets/Search.png";
import { Link } from "react-router-dom";

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

const UnmatchedDepositTable = () => {
  const [search, setSearch] = React.useState<string>("");
  console.log(search);
  return (
    <TableContainer
      component={Paper}
      className="unmatched-deposit-table-main"
      sx={{
        p: "20px 15px",
        boxSizing: "border-box",
        boxShadow: "0",
        backgroundColor: "rgba(255, 255, 255, 1)",
        maxHeight: "65vh",
        overflowY: "auto",
      }}
    >
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {tableHeading.map((heading: string, index: number) => (
              <TableCell
                key={index}
                sx={{
                  textTransform: "capitalize",
                  fontWeight: 700,
                  fontSize: "20px",
                  color: "rgba(20, 48, 42, 1)",
                }}
              >
                <>
                  {heading === "reference" ? (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      {heading}
                      <CustomTextField
                        placeholder="Search"
                        name="search"
                        onChange={(e: any) => setSearch(e.target.value)}
                        icon={searchIcon}
                        customStyles={{
                          width: "190px",
                          height: "30px",
                          iconHeight: "12px",
                          iconWidth: "12px",
                          padding: "0px 20px 0px 30px",
                          iconTopPosition: "50%",
                        }}
                      />
                    </Box>
                  ) : (
                    heading
                  )}
                </>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: any, index: number) => (
            <TableRow key={index} sx={{ height: "40px" }}>
              {Object.values(row).map((column: any, index: number) => (
                <TableCell key={index} sx={{ fontSize: "15px" }}>
                  {column}
                </TableCell>
              ))}
              <TableCell>
                <Link
                  to="/"
                  style={{ color: "rgba(0, 86, 64, 1)", fontSize: "15px" }}
                >
                  Match
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UnmatchedDepositTable;
