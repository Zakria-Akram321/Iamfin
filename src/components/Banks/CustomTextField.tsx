import { Box, TextField } from "@mui/material";
import React from "react";

interface CustomTextField {
  placeholder?: string;
  name?: string;
  onChange?: (e: any) => void;
  icon?: string;
  customStyles?: { [key: string]: string };
  type?: string;
}

const CustomTextField: React.FC<CustomTextField> = ({
  placeholder,
  name,
  onChange,
  icon,
  customStyles,
  type,
}) => {
  return (
    <Box sx={{ position: "relative" }}>
      <TextField
        sx={{
          width: `${customStyles?.width ? customStyles?.width : "100%"}`,
          "& .MuiOutlinedInput-root": {
            borderRadius: "10px",
          },
          "& input": {
            padding: `${
              customStyles?.padding ? customStyles.padding : "0 20px 0px 40px"
            }`,
            height: `${customStyles?.height ? customStyles.height : "auto"}`,
            backgroundColor: "rgba(240, 243, 238, 1)",
            border: "none",
            outline: "none",
            borderRadius: `${
              customStyles?.borderRadius ? customStyles.borderRadius : "0"
            }`,
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        }}
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      />
      {icon && (
        <Box
          component="img"
          src={icon}
          sx={{
            position: "absolute",
            top: `${
              customStyles?.iconTopPosition
                ? customStyles.iconTopPosition
                : "50%"
            }`,
            left: "10px",
            width: `${customStyles?.iconWidth}`,
            height: `${customStyles?.iconHeight}`,
            transform: "translate(0, -50%)",
          }}
        />
      )}
    </Box>
  );
};

export default CustomTextField;
