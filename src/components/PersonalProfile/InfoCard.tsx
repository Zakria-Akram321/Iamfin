import { Box } from "@mui/material";
import Dropdown from "./Dropdown";
import Button from "@mui/material/Button";

const InfoCard = (props: any) => {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      <Box
        component="div"
        style={{
          display: "flex",
          alignItems: "center",
          width: "47%",
          marginBottom: "10px",
          gap: "20px",
        }}
      >
        <Dropdown
          label={props.labelDropdown1}
          options={props.optionsDropdown1}
          fieldType={"dropdown"}
        />
      </Box>
      <Box
        component="div"
        style={{
          display: "flex",
          alignItems: "center",
          width: "47%",
          marginBottom: "10px",
          gap: "20px",
        }}
      >
        <Dropdown
          label={props.labelDropdown2}
          options={props.optionsDropdown2}
          fieldType={"dropdown"}
        />
      </Box>
      <Box
        component="div"
        style={{
          display: "flex",
          alignItems: "center",
          width: "47%",
          marginBottom: "10px",
          gap: "20px",
        }}
      >
        <Dropdown
          label={props.labelTextField}
          placeholder={props.placeholderTextField}
          fieldType={"input"}
        />
      </Box>
      <Box
        component="div"
        sx={{
          width: "47%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          sx={{ background: "#00CE7E", fontWeight: "700" }}
        >
          Confirm
        </Button>
      </Box>
    </Box>
  );
};

export default InfoCard;
