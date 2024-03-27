import { Box, useMediaQuery } from "@mui/material";
import CustomButtons from "../CustomButtons";
import React from "react";
import FilterIcon from "../../Assets/filter_big.png";
import CustomTextField from "./CustomTextField";
import CustomModal from "../CustomModal";
import AddBanksModal from "./AddBanksModal";
import DeleteBanksModal from "./DeleteBankModal";
import ConfirmDeleteAccount from "./ConfirmDeleteAccount";

const BanksHeader = () => {
  const [filterByCountry, setFilterByCountry] = React.useState<string>("");
  const [filterByBank, setFilterByBank] = React.useState<string>("");
  const [showModal, setShowModal] = React.useState<string>("");
  const [addOpen, setAddOpen] = React.useState<boolean>(false);
  const [deleteOpen, setDeleteOpen] = React.useState<boolean>(false);
  const [openConfirmDeleteModal, setOpenConfirmDeleteModal] =
    React.useState(false);
  const mediumScreen = useMediaQuery(
    "(min-width: 1100px) and (max-width:1500px)"
  );

  console.log(showModal);

  const handleConfirmDeleteModalClose = () => {
    setOpenConfirmDeleteModal(false);
  };
  const addClickHandler = () => {
    setShowModal("add");
    setAddOpen(true);
  };
  const deleteClickHandler = () => {
    setShowModal("delete");
    setDeleteOpen(true);
  };

  const handleModalClose = () => {
    setAddOpen(false);
    setDeleteOpen(false);
  };

  console.log("filterByBank", filterByBank);
  console.log("filterByCountry", filterByCountry);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <CustomTextField
              placeholder="Filter by country"
              name="filterByCountry"
              onChange={(e: any) => setFilterByCountry(e.target.value)}
              icon={FilterIcon}
              customStyles={{
                width: mediumScreen ? "200px" : "259px",
                height: mediumScreen ? "35px" : "40px",
                iconHeight: mediumScreen ? "18px" : "24px",
                iconWidth: mediumScreen ? "18px" : "24px",
                fontSize: mediumScreen ? "12px" : "16px",
              }}
            />
            <CustomTextField
              placeholder="Filter by bank"
              name="filterByBank"
              onChange={(e: any) => setFilterByBank(e.target.value)}
              icon={FilterIcon}
              customStyles={{
                width: mediumScreen ? "200px" : "259px",
                height: mediumScreen ? "35px" : "40px",
                iconHeight: mediumScreen ? "18px" : "24px",
                iconWidth: mediumScreen ? "18px" : "24px",
                fontSize: mediumScreen ? "12px" : "16px",
              }}
            />
          </Box>
        </Box>
        <CustomButtons
          customStyle={{
            successBackgroundColor: "rgba(0, 206, 126, 1)",
            successButtonHoverColor: "rgba(0, 176, 96, 1)",
            declineBackgroundColor: "rgba(170, 50, 45, 1)",
            declineButtonHoverColor: "rgba(140, 30, 25, 1)",
            height: mediumScreen ? "35px" : "40px",
            width: mediumScreen ? "90px" : "100px",
            fontSize: mediumScreen ? "14px" : "16px",
          }}
          successButtonText="add"
          declineButtonText="delete"
          onSuccessButtonClick={addClickHandler}
          onDeclineButtonClick={deleteClickHandler}
        />
      </Box>
      {showModal === "add" && (
        <CustomModal open={addOpen} handleClose={handleModalClose}>
          <AddBanksModal setShowModal={setShowModal} />
        </CustomModal>
      )}
      {showModal === "delete" && (
        <CustomModal open={deleteOpen} handleClose={handleModalClose}>
          <DeleteBanksModal
            setShowModal={setShowModal}
            setConfirmDeleteModal={setOpenConfirmDeleteModal}
          />
        </CustomModal>
      )}
      {showModal === "confirmDelete" && (
        <ConfirmDeleteAccount
          open={openConfirmDeleteModal}
          handleClose={handleConfirmDeleteModalClose}
          setShowModal={setShowModal}
        />
      )}
    </>
  );
};

export default BanksHeader;
