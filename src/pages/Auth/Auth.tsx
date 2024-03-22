import {Box } from '@mui/material';
import AuthCard from "../../components/AuthCard";
import Typography from "@mui/material/Typography/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";

const Auth = () => {
  const [signUp, setSignUp] = useState(false);
  console.log(signUp);

  return (
    <AuthCard>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Box component="div" sx={{ width: "40%" }}>
          <Box component="div">
            <Box
              component="img"
              sx={{ width: "191px", height: "59px" }}
              src="/assets/logo.png"
            ></Box>
            <Box
              component="div"
              sx={{ mt: "40px", boxSizing: "border-box", pl: "50px" }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: "40px",
                  color: "#005640",
                  fontWeight: "700",
                  mb: "10px",
                }}
              >
                {signUp ? "Admin Dashboard" : "Request Access"}
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontSize: "21px", color: "#005640", mb: "30px" }}
              >
                Please sign in
              </Typography>
              <Box component="form">
                <Box
                  component="input"
                  type="email"
                  placeholder="Enter Email Address"
                  sx={{
                    width: "100%",
                    p: "15px",
                    outline: "none",
                    border: "none",
                    backgroundColor: "#F0F3EE",
                    boxShadow: "4px 4px 4px 0px #00000005",
                    borderRadius: "5px",
                    mb: "20px",
                  }}
                  name="email"
                />
                <Box
                  component="input"
                  type="password"
                  placeholder="Enter Email Address"
                  sx={{
                    width: "100%",
                    p: "15px",
                    outline: "none",
                    border: "none",
                    backgroundColor: "#F0F3EE",
                    boxShadow: "4px 4px 4px 0px #00000005",
                    borderRadius: "5px",
                    mb: "20px",
                  }}
                  name="password"
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    p: "10px 20px",
                    mt: "10px",
                    backgroundColor: "#00CE7E",
                    boxShadow: "4px 4px 4px 0px #0000001A",
                    borderRadius: "10px",
                  }}
                >
                  SIGN IN
                </Button>
              </Box>
              <Typography
                paragraph
                sx={{
                  color: "#005640",
                  textDecoration: "underline",
                  mt: "15px",
                  cursor: "pointer",
                }}
                onClick={() => setSignUp(!signUp)}
              >
                Register
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box component="div" sx={{ width: "55%" }}>
          <Box component="img" src="assets/signIn-main.png"></Box>
        </Box>
      </Box>
    </AuthCard>
  );
};

export default Auth;
