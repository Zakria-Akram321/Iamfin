import { useMediaQuery } from "@mui/material";
import SideDrawer from "./SideDrawer";

const Layout = (props: any) => {
  const mediumScreen = useMediaQuery(
    "(min-width: 1200px) and (max-width:1500px)"
  );
  return (
    <div className="layout-main-flex">
      <div className="layout-nav">
        <SideDrawer />
      </div>
      <div
        className="layout-main"
        style={{
          marginTop: mediumScreen ? "120px" : "150px",
          marginBottom: mediumScreen ? "50px" : "60px",
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
