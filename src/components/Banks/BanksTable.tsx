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
  Typography,
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
  bankFile:"/test.png",
  email:"test@test.com"
};

const data = [
  {
    country: "south africa",
    banks: [
      {
        id: 1,
        bank: "fnb",
        active: true,
        rank: 1,
        default: true,
        intlDefault: false,
        details: "Currencies receivable: ZAR",
      },
      {
        id: 2,
        bank: "standard bank",
        active: false,
        rank: 2,
        default: false,
        intlDefault: false,
        details: "Currencies receivable: ZAR",
      },
      {
        id: 3,
        bank: "ABSA",
        active: false,
        rank: 5,
        default: false,
        intlDefault: true,
        details: "Currencies receivable: ZAR",
      },
    ],
  },
  {
    country: "united kingdom",
    banks: [
      {
        id: 1,
        bank: "fnb",
        active: true,
        rank: 1,
        default: true,
        intlDefault: false,
        details: "Currencies receivable: ZAR",
      },
      {
        id: 2,
        bank: "standard bank",
        active: false,
        rank: 2,
        default: false,
        intlDefault: false,
        details: "Currencies receivable: ZAR",
      },
      {
        id: 3,
        bank: "ABSA",
        active: false,
        rank: 5,
        default: false,
        intlDefault: true,
        details: "Currencies receivable: ZAR",
      },
    ],
  },
];

interface BanksTableProps {
  banksData?: any;
  tableHeadings?: any;
  setBankData?: any;
  country?: any;
}

const BanksTable: React.FC<BanksTableProps> = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [expandModal, setExpandModal] = React.useState(false);
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
  const [confirmDeleteModalByIcon, setConfirmDeleteModalByIcon] =
    React.useState(false);
  const [bankData, setBankData] = React.useState(data);
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

  const defaultClickHandler = (country: any, bankId: any) => {
    // Create a new copy of data
    const updatedData = bankData.map((countryItem) => {
      if (countryItem.country === country) {
        // Update the banks array for the specific country
        const updatedBanks = countryItem.banks.map((bank) => {
          // Check if the current bank is the one being clicked
          if (bank.id === bankId) {
            // Set intlDefault to true for the clicked bank
            return { ...bank, default: true };
          }
          // Set intlDefault to false for all other banks
          return { ...bank, default: false };
        });
        return { ...countryItem, banks: updatedBanks };
      }
      return countryItem;
    });
    setBankData(updatedData);
  };

  const intlDefaultClickHandler = (country: any, bankId: any) => {
    // Create a new copy of data
    const updatedData = bankData.map((countryItem) => {
      if (countryItem.country === country) {
        // Update the banks array for the specific country
        const updatedBanks = countryItem.banks.map((bank) => {
          if (bank.id === bankId) {
            // Toggle the intlDefault value
            return { ...bank, intlDefault: !bank.intlDefault };
          }
          return bank;
        });
        return { ...countryItem, banks: updatedBanks };
      }
      return countryItem;
    });

    // Set the updated data
    setBankData(updatedData);
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
      {bankData.map((table: any, index: number) => (
        <Box sx={{ marginTop: "40px" }} key={index}>
          <Typography
            sx={{
              textTransform: "uppercase",
              fontSize: mediumScreen ? "18px" : "24px",
              color: "#005640",
              fontWeight: 700,
            }}
          >
            {table.country}
          </Typography>
          <TableContainer
            component={Paper}
            sx={{
              p: mediumScreen ? "15px 10px" : "20px 16px",
              boxSizing: "border-box",
              boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.1)",
              backgroundColor: "rgba(240, 243, 238, 1)",
            }}
          >
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  {Object.keys(data[0].banks[0])
                    .filter((key) => key != "id")
                    ?.map((heading: any) => (
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
                {table.banks?.map((row: any, index: number) => (
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
                          alignItems: "center",
                          position: "relative",
                        }}
                      >
                        <input
                          type="checkbox"
                          className="abc"
                          style={{
                            height: "22px",
                            width: "22px",
                            backgroundColor: "transparent",
                            border: "1px solid rgba(0, 86, 64, 1)",
                            borderRadius: "4px" /* Optional: Rounded corners */,
                            outline:
                              "none" /* Optional: Remove focus outline */,
                            appearance: "none",
                            zIndex: "2",
                          }}
                          name="default"
                          onChange={() =>
                            defaultClickHandler(table.country, row.id)
                          }
                        />
                        {row.default ? (
                          <Box
                            sx={{
                              backgroundColor: "rgba(0, 86, 64, 1)",
                              height: mediumScreen ? "8px" : "10px",
                              width: mediumScreen ? "8px" : "10px",
                              borderRadius: mediumScreen ? "2px" : "3px",
                              position: "absolute",
                              top: "50%",
                              transform: "translate(0%, -50%)",
                              zIndex: "1",
                            }}
                          ></Box>
                        ) : (
                          <Box />
                        )}
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
                          alignItems: "center",
                          position: "relative",
                        }}
                      >
                        <input
                          type="checkbox"
                          className="abc"
                          style={{
                            height: "22px",
                            width: "22px",
                            backgroundColor: "transparent",
                            border: "1px solid rgba(0, 86, 64, 1)",
                            borderRadius: "4px" /* Optional: Rounded corners */,
                            outline:
                              "none" /* Optional: Remove focus outline */,
                            appearance: "none",
                            zIndex: "2",
                          }}
                          name="intlDefault"
                          // checked={row.intlDefault ? true : false}
                          onChange={() =>
                            intlDefaultClickHandler(table.country, row.id)
                          }
                        />
                        {row.intlDefault ? (
                          <Box
                            sx={{
                              backgroundColor: "rgba(0, 86, 64, 1)",
                              height: mediumScreen ? "8px" : "10px",
                              width: mediumScreen ? "8px" : "10px",
                              borderRadius: mediumScreen ? "2px" : "3px",
                              position: "absolute",
                              top: "50%",
                              transform: "translate(0%, -50%)",
                              zIndex: "1",
                            }}
                          ></Box>
                        ) : (
                          <Box />
                        )}
                      </Box>
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: mediumScreen ? "16px" : "20px",
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
        </Box>
      ))}
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
