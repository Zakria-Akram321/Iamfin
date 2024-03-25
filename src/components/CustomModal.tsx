import React, { ReactNode } from "react";
import { Box, Modal } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "59%",
  transform: "translate(-50%, -50%)",
  width: 860,
  bgcolor: "rgba(255, 255, 255, 1)",
  boxShadow: "4px 4px 10px 0px rgba(0, 0, 0, 0.1)",
  pt: 7,
  pr: 12,
  pl: 11,
  pb: 7,
  boxSizing: "border-box",
  borderRadius: "10px",
};

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
  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style }}>{children}</Box>
      </Modal>
    </Box>
  );
};

export default CustomModal;
