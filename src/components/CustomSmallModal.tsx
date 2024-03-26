import React, { ReactNode } from "react";
import { Box, Modal, Typography } from "@mui/material";

interface CustomSmallModalProps {
  children?: ReactNode;
  open: boolean;
  handleClose: () => void;
  customStyles?: any;
  iconImage: any;
  title: any;
  style?: any;
}

const CustomSmallModal: React.FC<CustomSmallModalProps> = ({
  open,
  children,
  handleClose,
  customStyles,
  iconImage,
  title,
  style,
}) => {
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
            left: "57%",
            transform: "translate(-50%, -50%)",
            width: 680,
            bgcolor: "rgba(255, 255, 255, 1)",
            boxShadow: "4px 4px 10px 0px rgba(0, 0, 0, 0.1)",
            pt: style?.pt ? style.pt : 10,
            pr: style?.pr ? style.pr : 11,
            pl: style?.pl ? style.pl : 11,
            pb: style?.pb ? style.pb : 10,
            boxSizing: "border-box",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box
                component="img"
                src={iconImage}
                sx={{ width: "125px", height: "125px" }}
              />
              <Typography
                component="h1"
                sx={{
                  ...customStyles,
                  fontSize: "36px",
                  textAlign: "center",
                  fontWeight: 700,
                  m: "30px 0px",
                }}
              >
                {title}
              </Typography>
            </Box>
            <Box>{children}</Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default CustomSmallModal;
