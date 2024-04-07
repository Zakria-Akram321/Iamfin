import {
  Box,
  Button,
  TextField,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import CustomSmallModal from "../CustomSmallModal";
import CustomButtons from "../CustomButtons";
import iconImage from "../../Assets/queation-mark-green.png";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

interface ReasonForMatchModalProps {
  open: boolean;
  handleClose: () => void;
  setModalOpen?: any;
}

const ReasonForMatchModal: React.FC<ReasonForMatchModalProps> = ({
  open,
  handleClose,
  setModalOpen,
}) => {
  const [proofOfPayment, setProofOfPayment] = React.useState<any>(null);
  const mediumScreen = useMediaQuery(
    "(min-width: 1100px) and (max-width:1500px)"
  );
  console.log(proofOfPayment);

  const matchClickHandler = () => {};
  const cancelClickHandler = () => {
    setModalOpen(false);
  };

  const formSubmitHandler = () => {};
  return (
    <Box>
      <CustomSmallModal
        open={open}
        handleClose={handleClose}
        customStyles={{
          color: "rgba(0, 86, 64, 1)",
          border: "3px solid rgba(0, 206, 126, 1)",
        }}
        iconImage={iconImage}
        title="Match Details"
        style={{
          pt: mediumScreen ? 7 : 9,
          pr: mediumScreen ? 7 : 8,
          pl: mediumScreen ? 7 : 8,
          pb: mediumScreen ? 7 : 9,
        }}
      >
        <form onSubmit={formSubmitHandler}>
          <Box>
            <Box sx={{ textAlign: "center", mb: "30px" }}>
              <Typography mb="15px" fontSize={mediumScreen ? "14px" : "18px"}>
                Please provide a reason for client / deposit match:
              </Typography>
              <TextField
                placeholder="Sample Text"
                multiline
                rows={mediumScreen ? 3 : 3.8}
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
                    width: mediumScreen ? "350px" : "427px",
                    color: "rgba(20, 48, 42, 1)",
                    padding: "10px 12px",
                    boxSizing: "border-box",
                    fontSize: mediumScreen ? "12px" : "16px",
                    "&::placeholder": {
                      opacity: "1",
                    },
                  },
                }}
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <Typography
                sx={{
                  fontSize: mediumScreen ? "12px" : "15px",
                  color: "rgba(20, 48, 42, 1)",
                }}
              >
                Upload Proof of Payment:
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Button
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                  sx={{
                    textTransform: "uppercase",
                    backgroundColor: "rgba(140, 155, 145, 1)",
                    width: mediumScreen ? "100px" : "110px",
                    fontSize: mediumScreen ? "9px" : "11px",
                    fontWeight: 700,
                    letterSpacing: "1.2px",
                    "&:hover": {
                      backgroundColor: "rgba(100, 115, 105, 1)",
                    },
                  }}
                >
                  select file
                  <VisuallyHiddenInput
                    type="file"
                    name="proofOfPayment"
                    onChange={(e: any) => setProofOfPayment(e.target.files[0])}
                  />
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "uppercase",
                    backgroundColor: "rgba(0, 206, 126, 1)",
                    width: mediumScreen ? "70px" : "110px",
                    fontSize: mediumScreen ? "9px" : "12px",
                    fontWeight: 700,
                    letterSpacing: "1.2px",
                    "&:hover": {
                      backgroundColor: "rgba(0, 176, 96, 1)",
                    },
                  }}
                >
                  Upload
                </Button>
                <Typography
                  sx={{
                    color: "rgba(20, 48, 42, 1)",
                    fontSize: mediumScreen ? "12px" : "15px",
                    fontStyle: "italic",
                  }}
                >
                  {proofOfPayment ? proofOfPayment?.name : "no file uploaded"}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: mediumScreen ? "40px" : "50px",
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
                successButtonText="match"
                declineButtonText="cancel"
                onSuccessButtonClick={matchClickHandler}
                onDeclineButtonClick={cancelClickHandler}
              />
            </Box>
          </Box>
        </form>
      </CustomSmallModal>
    </Box>
  );
};

export default ReasonForMatchModal;
