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
  useMediaQuery,
} from "@mui/material";
import CustomTextField from "../Banks/CustomTextField";
import searchIcon from "../../Assets/Search.png";
import { Link } from "react-router-dom";

interface UnmatchedDepositTableProps {
  tableHeadings?: string[];
  tableData?: any;
}

const UnmatchedDepositTable: React.FC<UnmatchedDepositTableProps> = ({
  tableHeadings,
  tableData,
}) => {
  const [search, setSearch] = React.useState<string>("");
  const mediumScreen = useMediaQuery(
    "(min-width: 1100px) and (max-width:1500px)"
  );
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
            {tableHeadings?.map((heading: string, index: number) => (
              <TableCell
                key={index}
                sx={{
                  textTransform: "capitalize",
                  fontWeight: 700,
                  fontSize: mediumScreen ? "16px" : "20px",
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
                          width: mediumScreen ? "150px" : "190px",
                          height: mediumScreen ? "24px" : "30px",
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
          {tableData?.map((row: any, index: number) => (
            <TableRow key={index} sx={{ height: "40px" }}>
              {Object.values(row).map((column: any, index: number) => (
                <TableCell
                  key={index}
                  sx={{ fontSize: mediumScreen ? "12px" : "15px" }}
                >
                  {column}
                </TableCell>
              ))}
              <TableCell>
                <Link
                  to="/match-with-client"
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
