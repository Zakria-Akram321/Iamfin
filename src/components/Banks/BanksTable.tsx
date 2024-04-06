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
import ViewSendBanksModal from "./ViewSendBanksModal";
import CustomModal from "../CustomModal";

interface BanksTableProps {
  banksData?: any;
  tableHeadings?: string[];
}

const BanksTable: React.FC<BanksTableProps> = ({
  banksData,
  tableHeadings,
}) => {
  const [openModal, setOpenModal] = React.useState(false);
  const mediumScreen = useMediaQuery(
    "(min-width: 1100px) and (max-width:1500px)"
  );

  const hanldeBankRowClick = () => {
    setOpenModal(true);
  };
  const handleModalClose = () => {
    setOpenModal(false);
  };
  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          p: mediumScreen ? "15px 10px" : "20px 16px",
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
                    fontSize: mediumScreen ? "16px" : "20px",
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
                <TableCell
                  sx={{
                    fontSize: mediumScreen ? "16px" : "20px",
                    textTransform: "uppercase",
                  }}
                >
                  <Box
                    onClick={hanldeBankRowClick}
                    sx={{
                      cursor: "pointer",
                      display: "inline-block",
                      "&:hover":{
                        color:"blue"
                      }
                    }}
                  >
                    {row.bank}
                  </Box>
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                    fontSize: mediumScreen ? "16px" : "20px",
                  }}
                >
                  {row.active ? "Yes" : "No"}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                    fontSize: mediumScreen ? "16px" : "20px",
                  }}
                >
                  {row.rank}
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: mediumScreen ? "16px" : "20px",
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
                        height: mediumScreen ? "16px" : "20px",
                        width: mediumScreen ? "16px" : "20px",
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
                            height: mediumScreen ? "8px" : "10px",
                            width: mediumScreen ? "8px" : "10px",
                            borderRadius: mediumScreen ? "2px" : "3px",
                          }}
                        ></Box>
                      )}
                    </Box>
                  </Box>
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
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
                        height: mediumScreen ? "16px" : "20px",
                        width: mediumScreen ? "16px" : "20px",
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
                            height: mediumScreen ? "8px" : "10px",
                            width: mediumScreen ? "8px" : "10px",
                            borderRadius: mediumScreen ? "2px" : "3px",
                          }}
                        ></Box>
                      )}
                    </Box>
                  </Box>
                </TableCell>
                <TableCell sx={{ fontSize: mediumScreen ? "16px" : "20px" }}>
                  {row.details}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {openModal && (
        <CustomModal open={openModal} handleClose={handleModalClose}>
          <ViewSendBanksModal setOpenModal={setOpenModal} />
        </CustomModal>
      )}
    </>
  );
};

export default BanksTable;
