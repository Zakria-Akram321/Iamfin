import { Box } from "@mui/material";
import Calculator from "./Calculator";
import Comparison from "./Comparison";

const CalculatorAndComparison = () => {
  return (
    <Box className="calculatorAndComparisonMain">
      <Box className="calculator">
        <Calculator />
      </Box>
      <Box className="comparison" sx={{ marginTop: "25px" }}>
        <Comparison />
      </Box>
    </Box>
  );
};

export default CalculatorAndComparison;
