import { Box, useMediaQuery } from "@mui/material";
import logo from "../Assets/Logo.png";
import arrow from "../Assets/Expand_down_light.png";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import profile from "../Assets/User_cicrle_light.png";
import { Link, useLocation } from "react-router-dom";
import { Toolbar } from "@mui/material";

const drawerWidth = 280;

interface Props {
  window?: () => Window;
}

export default function SideDrawer(props: Props) {
  const location = useLocation();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const mediumScreen = useMediaQuery(
    "(min-width: 1100px) and (max-width:1500px)"
  );

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <img
        src={logo}
        width={mediumScreen ? "160px" : "191px"}
        style={{ marginTop: "27px", marginLeft: "0px" }}
      />
      <List sx={{ paddingX: "50px", marginTop: "35px" }}>
        {[
          "Dashboard",
          "Reports",
          "Unmatched",
          "Matched",
          "Withdraw",
          "Profiles",
          "Banks",
          "Fees",
          "UserRights",
          "Settings",
          "Archive",
        ].map((text, index) => (
          <ListItem
            key={index}
            disablePadding
            sx={{ justifyContent: "flex-end" }}
          >
            <Link
              to={`/${text.toLowerCase()}`}
              style={{ textDecoration: "none" }}
            >
              <ListItemButton
                sx={{
                  padding: "3px",
                  transition: "background-color 0.3s ease",
                  textAlign: "right",
                  fontFamily: "Lato",
                  fontWeight: 400,
                  textTransform: "capitalize",
                  backgroundColor: "transparent",
                  color:
                    location.pathname === `/${text.toLowerCase()}`
                      ? "#00CE7E"
                      : "#14302A",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "#00CE7E",
                  },
                }}
              >
                <ListItemText
                  sx={{
                    "& span": {
                      fontSize: mediumScreen ? "16px" : "20px",
                    },
                  }}
                  primary={
                    text.toLowerCase() === "userrights" ? "User Rights" : text
                  }
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", height: "0px" }}>
      <AppBar
        position="fixed"
        sx={{
          width: mediumScreen
            ? `calc(100% - ${220}px)`
            : `calc(100% - ${drawerWidth}px)`,
          ml: mediumScreen ? `${220}px` : `${drawerWidth}px`,
          backgroundColor: "White",
          borderRadius: " 0px 0px 10px 0px",
          boxShadow: "5px 0px 10px 0px rgba(30, 30, 30, 0.25)",
          height: "85px",
          alignItem: "center",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            paddingX: "15px",
            paddingY: "10px",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <img src={profile} style={{ width: "35px" }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              color: "#14302A",
              fontFamily: "Lato",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
              marginLeft: "12px",
            }}
          >
            Blockkoin Admin
          </Typography>
          <img src={arrow} style={{ marginTop: "6px", width: "22px" }} />
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          height: "0px",
        }}
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: mediumScreen ? "230px" : drawerWidth,
              borderRadius: "0px 10px 10px 0px",
              backgroundColor: "#FFF",
              boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.25)",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: {
              xs: "none",
              sm: "block",
              width: mediumScreen ? "230px" : drawerWidth,
            },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: mediumScreen ? "230px" : drawerWidth,
              borderRadius: "0px 10px 10px 0px",
              backgroundColor: "#FFF",
              boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.25)",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
