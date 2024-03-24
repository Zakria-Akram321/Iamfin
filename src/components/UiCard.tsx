import { Box } from "@mui/material";

const UiCard = (props: any) => {
  return (
    <Box
      component="div"
      className="uicard-main"
      sx={{
        p: `${props.padding}`,
        backgroundColor: "white",
        maxWidth: `${props.width}`,
        margin: "0 auto",
        borderRadius: "10px",
        boxShadow: "10px 10px 4px 0px #0000000D",
        maxHeight: `${props.maxHeight ? props.maxHeight : "auto"}`,
      }}
    >
      {props.children}
    </Box>
  );
};

export default UiCard;
