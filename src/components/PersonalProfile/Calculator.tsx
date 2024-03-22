import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Dropdown from "./Dropdown";

const Calculator = () => {
  const optionsBuySellDropdown = ["Currency Dropdown", "USD", "GBP", "EUR"];
  return (
    <>
      <Typography
        variant="h4"
        sx={{
          fontSize: "16px",
          marginBottom: "10px",
          fontWeight: "600",
        }}
      >
        Calculator
      </Typography>
      <Box
        className="calculatorMain"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxSizing: "border-box",
        }}
      >
        <Box className="calculatorContent" sx={{ width: "77%" }}>
          <Box
            className="calculatorContentBuySell"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box className="buySellBtn" sx={{ width: "33%" }}>
              <Button
                variant="contained"
                sx={{ background: "#00CE7E", marginRight: "20px" }}
              >
                Buy
              </Button>
              <Button variant="contained" color="error">
                Sell
              </Button>
            </Box>
            <Box className="buySellCurrencyDropdown" sx={{ width: "33%" }}>
              <Dropdown
                label={""}
                options={optionsBuySellDropdown}
                fieldType={"dropdown"}
              />
            </Box>
            <Box className="buySellValueInput" sx={{ width: "33%" }}>
              <Dropdown label={""} fieldType={"input"} placeholder={"Value"} />
            </Box>
          </Box>
          <Box className="calculatorContentUseReceive">
            <Box className="useReceiveText"></Box>
            <Box className="useReceiveCurrencyDropdown"></Box>
            <Box className="useReceiveValueInput"></Box>
          </Box>
        </Box>
        <Box className="calculatorBtn" sx={{ width: "18%" }}>
          <Button variant="contained" sx={{ background: "#00CE7E" }}>
            Confirm
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Calculator;
