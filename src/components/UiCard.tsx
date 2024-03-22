import { Box } from "@mui/material";

const UiCard = (props: any) => {
  return (
    <Box
      component="div"
      sx={{
        p: `${props.padding}`,
        backgroundColor: "white",
        maxWidth: `${props.width}`,
        margin: "0 auto",
        borderRadius: "10px",
        boxShadow: "10px 10px 4px 0px #0000000D",
      }}
    >
      {props.children}
    </Box>
  );
};

export default UiCard;
