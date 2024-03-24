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
import searchIcon from "../../../Assets/search.png";
import CustomTextField from "../../Banks/CustomTextField";

const tableHeading = ["date", "source", "reference", "currency", "amount"];
const rows = [
  {
    date: "01 Jan 2023",
    source: "Text Field",
    reference: "TextField",
    currency: "GBP",
    amount: 20000,
  },
];

const MatchWithClientHeaderTable = () => {
  const [search, setSearch] = React.useState<string>("");
  console.log(search);
  return (
    <TableContainer
      component={Paper}
      className="unmatched-deposit-table-main"
      sx={{
        // p: "20px 15px",
        boxSizing: "border-box",
        boxShadow: "0",
        backgroundColor: "transparent",
        maxHeight: "65vh",
        overflowY: "auto",
        maxWidth: "1100px",
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
                  color: "white",
                  border: "none !important",
                  width: "20px",
                  p: 0,
                }}
              >
                {heading === "reference" ? (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    {heading}
                    <Box sx={{ opacity: "0", zIndex: "-1" }}>
                      <CustomTextField
                        placeholder="Search"
                        name="search"
                        onChange={(e: any) => setSearch(e.target.value)}
                        icon={searchIcon}
                        customStyles={{
                          width: "50px",
                          height: "30px",
                          iconHeight: "12px",
                          iconWidth: "12px",
                          padding: "0px 20px 0px 30px",
                          iconTopPosition: "50%",
                        }}
                      />
                    </Box>
                  </Box>
                ) : (
                  heading
                )}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row: any, index: number) => (
            <TableRow key={index} sx={{ height: "50px" }}>
              {Object.values(row).map((column: any, index: number) => (
                <TableCell
                  key={index}
                  sx={{
                    fontSize: "16px",
                    border: "none",
                    color: "white",
                    p: "0",
                  }}
                >
                  {column}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MatchWithClientHeaderTable;
