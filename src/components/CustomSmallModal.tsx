import React, { ReactNode } from "react";
import { Box, Modal, Typography, useMediaQuery } from "@mui/material";

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
            left: "57%",
            transform: "translate(-50%, -50%)",
            width: mediumScreen ? 550 : 680,
            bgcolor: "rgba(255, 255, 255, 1)",
            boxShadow: "4px 4px 10px 0px rgba(0, 0, 0, 0.1)",
            pt: style?.pt ? style.pt : mediumScreen ? 8 : 10,
            pr: style?.pr ? style.pr : mediumScreen ? 6 : 11,
            pl: style?.pl ? style.pl : mediumScreen ? 6 : 11,
            pb: style?.pb ? style.pb : mediumScreen ? 8 : 10,
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
                sx={{
                  width: mediumScreen ? "100px" : "125px",
                  height: mediumScreen ? "100px" : "125px",
                }}
              />
              <Typography
                component="h1"
                sx={{
                  ...customStyles,
                  fontSize: mediumScreen ? "26px" : "36px",
                  textAlign: "center",
                  fontWeight: 700,
                  m: mediumScreen ? "20px 0px" : "30px 0px",
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
