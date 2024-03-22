import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Layout from "../../components/Layout";
import InfoCard from "../../components/PersonalProfile/InfoCard";
import UiCard from "../../components/UiCard";
import { useState } from "react";

import ProfileLeftPart from "./ProfileLeftPart";
import ProfileRightPart from "./ProfileRightPart";

export default function Profile() {
  const [user, setUser] = useState("John");

  return (
    <Layout>
      <Box
        component="div"
        className="profilePageLeftSingle"
        sx={{ maxWidth: "95%", margin: "0 auto" }}
      >
        <Typography
          variant="h4"
          sx={{ fontSize: "20px" }}
        >{`Welcome ${user}`}</Typography>
      </Box>
      <Box
        component="div"
        className="profilePageMainFlex"
        sx={{ display: "flex", gap: "20px", maxWidth: "95%", margin: "0 auto" }}
      >
        <Box
          component="div"
          className="profilePageFlexLeft"
          sx={{ maxWidth: "50%" }}
        >
          <ProfileLeftPart />
        </Box>
        <Box
          component="div"
          className="profilePageFlexRight"
          sx={{ maxWidth: "50%" }}
        >
          <ProfileRightPart />
        </Box>
      </Box>
    </Layout>
  );
}
