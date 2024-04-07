import { Box, Button } from "@mui/material";
import React from "react";

interface CustomButtons {
  successButtonText: string;
  declineButtonText: string;
  customStyle: { [key: string]: string };
  onSuccessButtonClick: (e?: any) => void;
  onDeclineButtonClick: (e?: any) => void;
}

const CustomButtons: React.FC<CustomButtons> = ({
  customStyle,
  successButtonText,
  declineButtonText,
  onSuccessButtonClick,
  onDeclineButtonClick,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: `${
          customStyle.flexDirection ? customStyle.flexDirection : "row"
        }`,
        alignItems: "center",
        gap: "20px",
      }}
    >
      <Button
        sx={{
          fontWeight: 700,
          textTransform: "uppercase",
          backgroundColor: `${customStyle.successBackgroundColor}`,
          color: "white",
          borderRadius: "10px",
          height: `${customStyle.height}`,
          width: `${customStyle.width}`,
          fontSize: `${customStyle.fontSize}`,
          boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.1)",
          "&:hover": {
            backgroundColor: `${customStyle.successButtonHoverColor}`,
          },
        }}
        onClick={onSuccessButtonClick}
      >
        {successButtonText}
      </Button>
      <Button
        sx={{
          fontWeight: 700,
          textTransform: "uppercase",
          backgroundColor: `${customStyle.declineBackgroundColor}`,
          color: "white",
          borderRadius: "10px",
          height: `${customStyle.height}`,
          width: `${customStyle.width}`,
          fontSize: `${customStyle.fontSize}`,
          boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.1)",
          "&:hover": {
            backgroundColor: `${customStyle.declineButtonHoverColor}`,
          },
        }}
        onClick={onDeclineButtonClick}
      >
        {declineButtonText}
      </Button>
    </Box>
  );
};

export default CustomButtons;
