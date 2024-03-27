import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import CustomSmallModal from "../CustomSmallModal";
import CustomButtons from "../CustomButtons";
import iconImage from "../../Assets/exclamation-mark.png";

interface ReleaseDepositModalProps {
  open: boolean;
  handleClose: () => void;
  setModalType?: any;
}

const ReleaseDepositModal: React.FC<ReleaseDepositModalProps> = ({
  open,
  handleClose,
  setModalType,
}) => {
  const mediumScreen = useMediaQuery(
    "(min-width: 1100px) and (max-width:1500px)"
  );

  const releaseClickHandler = () => {};
  const cancelClickHandler = () => {
    setModalType("");
  };
  return (
    <Box>
      <CustomSmallModal
        open={open}
        handleClose={handleClose}
        customStyles={{ color: "rgba(0, 86, 64, 1)" }}
        iconImage={iconImage}
        title={
          <Box sx={{ fontFamily: "Aleo !important" }}>
            Release{" "}
            <b
              style={{
                color: "rgba(0, 206, 126, 1)",
                fontSize: mediumScreen ? "30px" : "38px",
              }}
            >
              12
            </b>{" "}
            Payments?
          </Box>
        }
      >
        <Box>
          <Box sx={{ textAlign: "center", mb: "30px" }}>
            <Typography mb="15px" fontSize={mediumScreen ? "15px" : "18px"}>
              This action cannot be undone.
            </Typography>
            <Typography mb="15px" fontSize={mediumScreen ? "15px" : "18px"}>
              Are you sure you want to release these payments?
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: mediumScreen ? "40px" : "60px",
            }}
          >
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
              successButtonText="release"
              declineButtonText="cancel"
              onSuccessButtonClick={releaseClickHandler}
              onDeclineButtonClick={cancelClickHandler}
            />
          </Box>
        </Box>
      </CustomSmallModal>
    </Box>
  );
};

export default ReleaseDepositModal;
