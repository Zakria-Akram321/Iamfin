import { Box, Typography, useMediaQuery } from "@mui/material";
import BanksHeader from "./BanksHeader";
import BanksTable from "./BanksTable";
import React from "react";

const data = [
  {
    country: "south africa",
    banks: [
      {
        id: 1,
        bank: "fnb",
        active: true,
        rank: 1,
        default: true,
        intlDefault: false,
        details: "Currencies receivable: ZAR",
      },
      {
        id: 2,
        bank: "standard bank",
        active: false,
        rank: 2,
        default: false,
        intlDefault: false,
        details: "Currencies receivable: ZAR",
      },
      {
        id: 3,
        bank: "ABSA",
        active: false,
        rank: 5,
        default: false,
        intlDefault: true,
        details: "Currencies receivable: ZAR",
      },
    ],
  },
  {
    country: "united kingdom",
    banks: [
      {
        id: 1,
        bank: "fnb",
        active: true,
        rank: 1,
        default: true,
        intlDefault: false,
        details: "Currencies receivable: ZAR",
      },
      {
        id: 2,
        bank: "standard bank",
        active: false,
        rank: 2,
        default: false,
        intlDefault: false,
        details: "Currencies receivable: ZAR",
      },
      {
        id: 3,
        bank: "ABSA",
        active: false,
        rank: 5,
        default: false,
        intlDefault: true,
        details: "Currencies receivable: ZAR",
      },
    ],
  },
];

const BanksMain = () => {
  const [bankData, setBankData] = React.useState(data);
  const mediumScreen = useMediaQuery(
    "(min-width: 1100px) and (max-width:1500px)"
  );

  const getTableHeadings = (bankObject: any) => {
    const keys = Object.keys(bankObject).filter((key) => key !== "id");
    return keys;
  };

  console.log(bankData);

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
      {/* {bankData.map((singleBankObject: any) => ( */}
      <>
        <Box sx={{ marginTop: "40px" }}>
          {/* <Typography
              sx={{
                textTransform: "uppercase",
                fontSize: mediumScreen ? "18px" : "24px",
                color: "#005640",
                fontWeight: 700,
              }}
            >
              {singleBankObject.country}
            </Typography> */}

          <BanksTable
          // tableHeadings={getTableHeadings(singleBankObject.banks[0])}
          // banksData={singleBankObject.banks}
          // country={singleBankObject.country}
          // setBankData={setBankData}
          />
        </Box>
      </>
      {/* // ))} */}
    </Box>
  );
};

export default BanksMain;
