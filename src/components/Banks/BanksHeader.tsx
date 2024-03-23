import { Box } from "@mui/material";
import CustomButtons from "../CustomButtons";
import React from "react";
import FilterIcon from "../../../public/assets/filter_big.png";
import CustomTextField from "./CustomTextField";

const BanksHeader = () => {
  const [filterByCountry, setFilterByCountry] = React.useState<string>("");
  const [filterByBank, setFilterByBank] = React.useState<string>("");
  const addClickHandler = () => {};
  const deleteClickHandler = () => {};

  console.log("filterByBank", filterByBank);
  console.log("filterByCountry", filterByCountry);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <CustomTextField
            placeholder="Filter by country"
            name="filterByCountry"
            onChange={(e: any) => setFilterByCountry(e.target.value)}
            icon={FilterIcon}
            customStyles={{
              width: "259px",
              height: "40px",
              iconHeight: "24px",
              iconWidth: "24px",
            }}
          />
          <CustomTextField
            placeholder="Filter by bank"
            name="filterByBank"
            onChange={(e: any) => setFilterByBank(e.target.value)}
            icon={FilterIcon}
            customStyles={{
              width: "259px",
              height: "40px",
              iconHeight: "24px",
              iconWidth: "24px",
            }}
          />
        </Box>
      </Box>
      <CustomButtons
        customStyle={{
          successBackgroundColor: "rgba(0, 206, 126, 1)",
          successButtonHoverColor: "rgba(0, 176, 96, 1)",
          declineBackgroundColor: "rgba(170, 50, 45, 1)",
          declineButtonHoverColor: "rgba(140, 30, 25, 1)",
          height: "40px",
          width: "100px",
          fontSize: "16px",
        }}
        successButtonText="add"
        declineButtonText="delete"
        onSuccessButtonClick={addClickHandler}
        onDeclineButtonClick={deleteClickHandler}
      />
    </Box>
  );
};

export default BanksHeader;
