import { Box, Typography } from "@mui/material";
import React from "react";
import CustomSmallModal from "../CustomSmallModal";
import CustomButtons from "../CustomButtons";
import iconImage from "../../Assets/exclamation-red.png";

interface ConfirmDeleteAccountProps {
  open: boolean;
  handleClose: () => void;
  setShowModal: any;
}

const ConfirmDeleteAccount: React.FC<ConfirmDeleteAccountProps> = ({
  open,
  handleClose,
  setShowModal,
}) => {
  const deleteClickHandler = () => {
    // setShowModal(false)
  };
  const cancelClickHandler = () => {
    setShowModal(false);
  };
  return (
    <Box>
      <CustomSmallModal
        open={open}
        handleClose={handleClose}
        customStyles={{ color: "rgba(170, 50, 45, 1)" }}
        iconImage={iconImage}
        title="Are You Sure?"
      >
        <Box>
          <Box sx={{ textAlign: "center", mb: "30px" }}>
            <Typography mb="15px" fontSize="18px">
              This action cannot be undone.
            </Typography>
            <Typography mb="15px" fontSize="18px">
              Are you sure you want to delete this bank account?
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mt: "60px" }}>
            <CustomButtons
              customStyle={{
                successBackgroundColor: "rgba(0, 206, 126, 1)",
                successButtonHoverColor: "rgba(0, 176, 96, 1)",
                declineBackgroundColor: "rgba(170, 50, 45, 1)",
                declineButtonHoverColor: "rgba(140, 30, 25, 1)",
                height: "40px",
                width: "100px",
                fontSize: "16px",
              }}
              successButtonText="delete"
              declineButtonText="cancel"
              onSuccessButtonClick={deleteClickHandler}
              onDeclineButtonClick={cancelClickHandler}
            />
          </Box>
        </Box>
      </CustomSmallModal>
    </Box>
  );
};

export default ConfirmDeleteAccount;
