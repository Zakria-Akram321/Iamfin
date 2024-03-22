import { Box, TextField, Typography } from "@mui/material";

const Comparison = () => {
  const createData = (name: string) => {
    return { name };
  };

  const data = [
    createData("Competitor1"),
    createData("Competitor2"),
    createData("Competitor3"),
    createData("Competitor4"),
  ];
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
        Comparisons
      </Typography>
      <Box
        className="comparisonMain"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {data.map((item: any) => (
          <Box
            className="comparisonSingleCompetitor"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              width: "49%",
            }}
          >
            <p className="competitorName">{item.name}</p>
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="Price"
            ></TextField>
            <TextField
              id="outlined-basic"
              variant="outlined"
              disabled
              label="%"
              sx={{ textAlign: "center" }}
            ></TextField>
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="Value"
            ></TextField>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Comparison;
