import { Box, Button, TextField, Typography, styled } from "@mui/material";
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
  console.log(proofOfPayment);
  const matchClickHandler = () => {};
  const cancelClickHandler = () => {
    setModalOpen(false);
  };
  return (
    <Box>
      <CustomSmallModal
        open={open}
        handleClose={handleClose}
        customStyles={{ color: "rgba(0, 86, 64, 1)" }}
        iconImage={iconImage}
        title="Match Details"
        style={{
          pt: 9,
          pr: 8,
          pl: 8,
          pb: 9,
        }}
      >
        <Box>
          <Box sx={{ textAlign: "center", mb: "30px" }}>
            <Typography mb="15px" fontSize="18px">
              Please provide a reason for client / deposit match:
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
                  width: "427px",
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
          <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Typography sx={{ fontSize: "15px", color: "rgba(20, 48, 42, 1)" }}>
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
                  width: "120px",
                  fontSize: "12px",
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
              <Typography
                sx={{
                  color: "rgba(20, 48, 42, 1)",
                  fontSize: "15px",
                  fontStyle: "italic",
                }}
              >
                {proofOfPayment ? proofOfPayment?.name : "no file uploaded"}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mt: "50px" }}>
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
              successButtonText="match"
              declineButtonText="cancel"
              onSuccessButtonClick={matchClickHandler}
              onDeclineButtonClick={cancelClickHandler}
            />
          </Box>
        </Box>
      </CustomSmallModal>
    </Box>
  );
};

export default ReasonForMatchModal;
