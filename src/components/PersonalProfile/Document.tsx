import { Box, Button, Typography } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Document = () => {
  const kycDocumentData = [
    {
      title: "Identity Docuemts",
      image: "/assets/logo.png",
      expiryDate: "dd/mm/yyyy",
    },
    {
      title: "Proof of Address",
      image: "/assets/logo.png",
      expiryDate: "dd/mm/yyyy",
    },
    {
      title: "Bank Statement",
      image: "/assets/logo.png",
      expiryDate: "dd/mm/yyyy",
    },
    {
      title: "Selfie",
      image: "/assets/logo.png",
      expiryDate: "dd/mm/yyyy",
    },
    {
      title: "Combined Selfie",
      image: "/assets/logo.png",
      expiryDate: "dd/mm/yyyy",
    },
    {
      title: "Tax Clearance",
      image: "/assets/logo.png",
      expiryDate: "dd/mm/yyyy",
    },
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
        Documents
      </Typography>
      <Box className="documentMain">
        <Box
          className="documentStatment"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography paragraph sx={{ margin: "0" }}>
            Statements
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]} sx={{ width: "60%" }}>
              <DatePicker label="Basic date picker" />
            </DemoContainer>
          </LocalizationProvider>
        </Box>
        <Box className="documentKyc" sx={{ marginTop: "20px" }}>
          <Typography
            variant="h4"
            sx={{
              fontSize: "16px",
              marginBottom: "10px",
              fontWeight: "600",
            }}
          >
            Kyc Documents
          </Typography>
          <Box
            component="div"
            sx={{
              display: "flex",
              flexWrap: "nowrap",
              justifyContent: "space-between",
            }}
          >
            {kycDocumentData.map((item: any) => (
              <Box sx={{ width: "16%" }}>
                <Typography
                  variant="h6"
                  sx={{ fontSize: "16px", minHeight: "50px" }}
                >
                  {item.title}
                </Typography>
                <Box
                  component="div"
                  sx={{
                    border: "1px solid rgba(0,0,0,0.4)",
                    padding: "10px 0px",
                  }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    alt={`${item.title} image`}
                    sx={{ marginBottom: "15px" }}
                  ></Box>
                  <Box
                    component="div"
                    sx={{
                      textAlign: "center",
                      marginBottom: "15px",
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{ background: "#00CE7E", fontSize: "10px" }}
                    >
                      View
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        background: "#00CE7E",
                        fontSize: "10px",
                        marginTop: "10px",
                      }}
                    >
                      Upload
                    </Button>
                  </Box>
                  <Box component="div">
                    <Typography
                      variant="h6"
                      sx={{ fontSize: "14px", textAlign: "center" }}
                    >
                      Expiry Date
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ fontSize: "14px", textAlign: "center" }}
                    >
                      {item.expiryDate}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Document;
