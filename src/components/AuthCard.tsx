
import {Box } from '@mui/material';
import * as React from "react";


export interface AuthCardProps {
  children: React.ReactNode;
}

const AuthCard = (props: AuthCardProps) => {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Box
        component="div"
        sx={{
          p: 6,
          backgroundColor: "white",
          maxWidth: "70%",
          margin: "0 auto",
          borderRadius: "10px",
          boxShadow: "10px 10px 4px 0px #0000000D",
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default AuthCard;
