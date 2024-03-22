
import {Box } from '@mui/material';
import SideDrawal from "../../components/SideDrawer";
import Typography from '@mui/material/Typography';
import { Toolbar } from "@mui/material";

export default function UserRights() {
  return (

      <Box sx={{ display:"flex"}} >
      <SideDrawal/>
      
      <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
          <Typography paragraph>
          UserRight
          </Typography>
          
        </Box>
     
      
      </Box>
  )
}
