import { Box, TextField, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import CustomSmallModal from "../CustomSmallModal";
import CustomButtons from "../CustomButtons";
import iconImage from "../../Assets/question-mark.png";

interface DeclineWithdrawalModalProps {
  open: boolean;
  handleClose: () => void;
  setModalType?: any;
}

const DeclineWithdrawalModal: React.FC<DeclineWithdrawalModalProps> = ({
  open,
  handleClose,
  setModalType,
}) => {
  const mediumScreen = useMediaQuery(
    "(min-width: 1100px) and (max-width:1500px)"
  );

  const declineClickHandler = () => {};
  const cancelClickHandler = () => {
    setModalType("");
  };
  return (
    <Box>
      <CustomSmallModal
        open={open}
        handleClose={handleClose}
        customStyles={{
          color: "rgba(170, 50, 45, 1)",
          border: "3px solid rgba(170, 50, 45, 1)",
        }}
        iconImage={iconImage}
        title="Decline Withdrawal?"
      >
        <Box>
          <Box sx={{ textAlign: "center", mb: "30px" }}>
            <Typography mb="15px" fontSize={mediumScreen ? "15px" : "18px"}>
              Please provide a reason for the declined deposit:
            </Typography>
            <TextField
              placeholder="Sample Text"
              multiline
              rows={3.8}
              sx={{
                backgroundColor: "rgba(240, 243, 238, 1)",
                boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.02)",
                borderRadius: "5px",
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "& .MuiInputBase-multiline": {
                  padding: "0",
                },
                "& textarea": {
                  p: "0",
                  width: mediumScreen ? "360px" : "396px",
                  color: "rgba(20, 48, 42, 1)",
                  padding: "10px 12px",
                  boxSizing: "border-box",
                  "&::placeholder": {
                    opacity: "1",
                  },
                },
              }}
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mt: "40px" }}>
            <CustomButtons
              customStyle={{
                successBackgroundColor: "rgba(0, 206, 126, 1)",
                successButtonHoverColor: "rgba(0, 176, 96, 1)",
                declineBackgroundColor: "rgba(170, 50, 45, 1)",
                declineButtonHoverColor: "rgba(140, 30, 25, 1)",
                height: mediumScreen ? "35px" : "40px",
                width: mediumScreen ? "90px" : "100px",
                fontSize: mediumScreen ? "12px" : "16px",
              }}
              successButtonText="decline"
              declineButtonText="cancel"
              onSuccessButtonClick={declineClickHandler}
              onDeclineButtonClick={cancelClickHandler}
            />
          </Box>
        </Box>
      </CustomSmallModal>
    </Box>
  );
};

export default DeclineWithdrawalModal;
