import { AppBar, Toolbar, Typography } from "@mui/material"
import  { Refresh} from '@mui/icons-material';


function Navbar(){

function refreshExtension(){
  chrome.runtime.reload()
}

const Pointer = {cursor: 'pointer'}

    return(
      <AppBar elevation={0}>
        <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          minHeight: 40}}
        >
          <Typography sx={{
            fontSize: 18,
            fontFamily: ["HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue",
            "Helvetica", "Arial", "Lucida Grande", "sans-serif"].join(','),
            fontWeight: "bold",
            color: 'white'
          }}>
            HYPETRACK
          </Typography>
          <Refresh style={Pointer} onClick={refreshExtension}/>
        </Toolbar>
      </AppBar>
    )
}

export default Navbar
