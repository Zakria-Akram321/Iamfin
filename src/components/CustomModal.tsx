import React, { ReactNode } from "react";
import { Box, Modal, useMediaQuery } from "@mui/material";

interface CustomModalProps {
  children?: ReactNode;
  open: boolean;
  handleClose: () => void;
}

const CustomModal: React.FC<CustomModalProps> = ({
  children,
  open,
  handleClose,
}) => {
  const mediumScreen = useMediaQuery(
    "(min-width: 1100px) and (max-width:1500px)"
  );

  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "59%",
            transform: "translate(-50%, -50%)",
            width: mediumScreen ? 650 : 860,
            bgcolor: "rgba(255, 255, 255, 1)",
            boxShadow: "4px 4px 10px 0px rgba(0, 0, 0, 0.1)",
            pt: mediumScreen ? 6 : 7,
            pr: mediumScreen ? 7 : 12,
            pl: mediumScreen ? 7 : 11,
            pb: mediumScreen ? 6 : 7,
            boxSizing: "border-box",
            borderRadius: "10px",
          }}
        >
          {children}
        </Box>
      </Modal>
    </Box>
  );
};

export default CustomModal;
