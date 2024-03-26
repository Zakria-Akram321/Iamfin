import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Checkbox, Button } from "@mui/material";
import React from "react";
import ReleaseDepositModal from "./MatchedDeposits/ReleaseDepositModal";

const TableComponent = (props: any) => {
  const [modal, setModal] = React.useState<string>("");
  const [openRelease, setOpenRelease] = React.useState(false);

  const handleClose = () => {
    setOpenRelease(false);
  };

  const releaseAllDeposits = () => {
    setModal("release-deposit");
    setOpenRelease(true);
  };
  return (
    <>
      <TableContainer
        component={Paper}
        sx={{ p: "20px 15px", boxSizing: "border-box" }}
      >
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              {props.tableHeadings.map((item: any) => {
                return (
                  <TableCell sx={{ fontWeight: "700" }}>
                    {item !== "Release All" ? (
                      item
                    ) : (
                      <>
                        <Checkbox
                          sx={{
                            display: "inline",
                            color: "#005640",
                            "&.Mui-checked": {
                              color: "#005640",
                            },
                          }}
                        />
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "#005640",
                            boxShadow: "4px 4px 4px 0px #0000001A",
                            fontSize: "12px",
                            fontWeight: "700",
                            display: "inline",
                            p: "5px 20px",
                          }}
                          onClick={releaseAllDeposits}
                        >
                          {"Release All"}
                        </Button>
                      </>
                    )}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>{props.children}</TableBody>
        </Table>
      </TableContainer>
      {modal === "release-deposit" && (
        <ReleaseDepositModal
          open={openRelease}
          setOpenRelease={setOpenRelease}
          handleClose={handleClose}
        />
      )}
    </>
  );
};

export default TableComponent;
