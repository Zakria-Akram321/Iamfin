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

interface BanksTableProps {
  banksData?: any;
  tableHeadings?: string[];
}

const BanksTable: React.FC<BanksTableProps> = ({
  banksData,
  tableHeadings,
}) => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        p: "20px 15px",
        boxSizing: "border-box",
        boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.1)",
        backgroundColor: "rgba(240, 243, 238, 1)",
      }}
    >
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {tableHeadings?.map((heading: any) => (
              <TableCell
                key={heading}
                sx={{
                  textTransform: "capitalize",
                  fontWeight: 700,
                  fontSize: "20px",
                  color: "rgba(20, 48, 42, 1)",
                }}
              >
                {heading}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {banksData?.map((row: any, index: number) => (
            <TableRow key={index} sx={{ height: "50px" }}>
              <TableCell sx={{ fontSize: "20px", textTransform: "uppercase" }}>
                {row.bank}
              </TableCell>
              <TableCell sx={{ textAlign: "center", fontSize: "20px" }}>
                {row.active ? "Yes" : "No"}
              </TableCell>
              <TableCell sx={{ textAlign: "center", fontSize: "20px" }}>
                {row.rank}
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "20px",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      height: "20px",
                      width: "20px",
                      border: "1px solid rgba(0, 86, 64, 1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "3px",
                    }}
                  >
                    {row.default && (
                      <Box
                        sx={{
                          backgroundColor: "rgba(0, 86, 64, 1)",
                          height: "10px",
                          width: "10px",
                          borderRadius: "3px",
                        }}
                      ></Box>
                    )}
                  </Box>
                </Box>
              </TableCell>
              <TableCell sx={{ textAlign: "center", fontSize: "20px" }}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      height: "20px",
                      width: "20px",
                      border: "1px solid rgba(0, 86, 64, 1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "3px",
                    }}
                  >
                    {row.intlDefault && (
                      <Box
                        sx={{
                          backgroundColor: "rgba(0, 86, 64, 1)",
                          height: "10px",
                          width: "10px",
                          borderRadius: "3px",
                        }}
                      ></Box>
                    )}
                  </Box>
                </Box>
              </TableCell>
              <TableCell sx={{ fontSize: "20px" }}>{row.details}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BanksTable;
