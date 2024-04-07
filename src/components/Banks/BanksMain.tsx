import { Box } from "@mui/material";
import BanksHeader from "./BanksHeader";
import BanksTable from "./BanksTable";

const BanksMain = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        p: "30px",
        boxShadow: "10px 10px 4px 0px rgba(0, 0, 0, 0.05)",
        borderRadius: "10px",
      }}
    >
      <BanksHeader />
      <>
        <Box sx={{ marginTop: "40px" }}>
          <BanksTable />
        </Box>
      </>
    </Box>
  );
};

export default BanksMain;
