import { Box, Typography } from "@mui/material";
import BanksHeader from "./BanksHeader";
import BanksTable from "./BanksTable";

const data = [
  {
    bank: "fnb",
    active: true,
    rank: 1,
    default: true,
    intlDefault: false,
    details: "Currencies receivable: ZAR",
  },
  {
    bank: "standard bank",
    active: false,
    rank: 2,
    default: false,
    intlDefault: false,
    details: "Currencies receivable: ZAR",
  },
  {
    bank: "ABSA",
    active: false,
    rank: 5,
    default: false,
    intlDefault: true,
    details: "Currencies receivable: ZAR",
  },
];

const tableHeadings = [
  "banks",
  "active",
  "rank",
  "default",
  "intl. default",
  "details",
];

const BanksMain = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        p: "30px",
        boxShadow: "10px 10px 4px 0px rgba(0, 0, 0, 0.05)",
        // minHeight: "727px",
        borderRadius: "10px",
      }}
    >
      <BanksHeader />
      <Box sx={{ marginTop: "40px" }}>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: "24px",
            color: "#005640",
            fontWeight: 700,
          }}
        >
          south africa
        </Typography>
        <BanksTable tableHeadings={tableHeadings} banksData={data} />
      </Box>
      <Box sx={{ marginTop: "40px" }}>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: "24px",
            color: "#005640",
            fontWeight: 700,
          }}
        >
          united kingdom
        </Typography>
        <BanksTable tableHeadings={tableHeadings} banksData={data} />
      </Box>
    </Box>
  );
};

export default BanksMain;
