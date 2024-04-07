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
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandIcon from "../../Assets/expand-icon.png";
import DeleteBanksModal from "./DeleteBankModal";
import ConfirmDeleteAccount from "./ConfirmDeleteAccount";

const expandBankData = {
  bankName: "FNB",
  accountName: "ABC",
  wireRoutingNumber: "1234567",
  accountNumber: "AF565744477",
  swiftIban: "56565777",
  routingNumber: "6676676",
  bankAddress: "New York,  USA",
  reference: "XYZ",
};

interface BanksTableProps {
  banksData?: any;
  tableHeadings?: any;
}

const BanksTable: React.FC<BanksTableProps> = ({
  banksData,
  tableHeadings,
}) => {
  const [openModal, setOpenModal] = React.useState(false);
  const [expandModal, setExpandModal] = React.useState(false);
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
  const [confirmDeleteModalByIcon, setConfirmDeleteModalByIcon] =
    React.useState(false);
  const mediumScreen = useMediaQuery(
    "(min-width: 1100px) and (max-width:1500px)"
  );

  const hanldeBankRowClick = () => {
    setOpenModal(true);
  };
  const handleModalClose = () => {
    setOpenModal(false);
    setExpandModal(false);
    setOpenDeleteModal(false);
    setConfirmDeleteModalByIcon(false);
  };

  const expandClickHandler: any = (bankId: any) => {
    // Send a request based on Id bank Id to get the relevant data for the expand pop-up/modal
    //Here I am using a dummy data defined at the start of this component
    console.log(bankId);
    setExpandModal(true);
  };

  const deleteClickHandler: any = (bankId: any) => {
    //We can pass the same dummy data that we have fetched for the expand pop-up/modal
    //As we need same information for expand and delete pop-ups/modals
    console.log(bankId);
    setOpenDeleteModal(true);
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
                      "&:hover": {
                        color: "blue",
                      },
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
                <TableCell
                  sx={{
                    fontSize: mediumScreen ? "16px" : "20px",
                    // display: "flex",
                    // justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box>{row.details}</Box>
                    <Box sx={{ display: "flex", gap: "10px" }}>
                      <Box>
                        <Box
                          component="img"
                          src={ExpandIcon}
                          sx={{ cursor: "pointer" }}
                          onClick={() => expandClickHandler(row.id)}
                        />
                      </Box>
                      <Box>
                        <DeleteIcon
                          sx={{
                            color: "rgba(170, 50, 45, 1)",
                            cursor: "pointer",
                          }}
                          onClick={() => deleteClickHandler(row.id)}
                        />
                      </Box>
                    </Box>
                  </Box>
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
      {expandModal && (
        <CustomModal open={expandModal} handleClose={handleModalClose}>
          <ViewSendBanksModal
            setExpandModal={setExpandModal}
            modalData={expandBankData}
          />
        </CustomModal>
      )}
      {openDeleteModal && (
        <CustomModal open={openDeleteModal} handleClose={handleModalClose}>
          <DeleteBanksModal
            setShowModal={setOpenDeleteModal}
            setConfirmDeleteModal={setConfirmDeleteModalByIcon}
            modalData={expandBankData}
          />
        </CustomModal>
      )}
      {confirmDeleteModalByIcon && (
        <>
          <ConfirmDeleteAccount
            open={confirmDeleteModalByIcon}
            handleClose={handleModalClose}
            setShowModal={setConfirmDeleteModalByIcon}
            setDeleteModal={setOpenDeleteModal}
          />
        </>
      )}
    </>
  );
};

export default BanksTable;
