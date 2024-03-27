import { Box, Typography, useMediaQuery } from "@mui/material";
import MatchWithClientHeaderTable from "./MatchWithClientHeaderTable";

const MatchWithClientHeader = () => {
  const mediumScreen = useMediaQuery(
    "(min-width: 1100px) and (max-width:1500px)"
  );
  return (
    <Box>
      <Box
        sx={{
          background: "rgba(0, 86, 64, 1)",
          boxShadow: "0px 10px 4px 0px rgba(0, 0, 0, 0.05)",
          p: "15px 30px",
          borderRadius: "10px",
        }}
      >
        <Typography
          sx={{
            color: "rgba(0, 206, 126, 1)",
            fontSize: mediumScreen ? "18px" : "24px",
            fontWeight: 700,
            lineHeight: "28.8px",
            maxWidth: mediumScreen ? "190px" : "259px",
            textTransform: "uppercase",
          }}
        >
          Unmatched Deposits
        </Typography>
        <Box sx={{ p: "10px 0px 20px" }}>
          <MatchWithClientHeaderTable />
        </Box>
      </Box>
    </Box>
  );
};

export default MatchWithClientHeader;
