import { Typography, Box, Tabs, Tab } from "@mui/material"
import EventCard from "../components/EventCard"
import { useEffect, useState } from "react";
import { fashionRelease } from "../types";
import React from "react";
// import { Post } from "../types";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 1 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

function Main(){
    const [postDate, setPostDate] = useState<string>('');
    const [postRelease, setPostRelease] = useState<fashionRelease[]>([]);

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      console.log(event)
    setValue(newValue);
    };

    useEffect(()=>{
        chrome.storage.local.get(['postDate','postRelease'], function(result){
            // console.log("Testing",result)
            setPostDate(result.postDate)
            setPostRelease(result.postRelease)
        });
    }, [postRelease]);

    return(
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} centered>
                  <Tab label="Latest" {...a11yProps(0)} />
                  <Tab label="Search" {...a11yProps(1)} />
                {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Box>
                    <Typography>
                        Latest Drop Week: {postDate}
                    </Typography>
                    <Typography>
                        Collection Release:
                    </Typography>
                        {postRelease.map(el =>{
                            return (
                            <EventCard fashionRelease={el}/>
                            )
                        })}
                </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>

            </CustomTabPanel>
            {/* <Box sx={{marginTop:"2vw"}}>
                <Typography>
                Latest Drop Week: {postDate}
                </Typography>
                <Typography>
                Collection Release:
                </Typography>
                {postRelease.map(el =>{
                    return (
                    <EventCard fashionRelease={el}/>
                    )
                })}
            </Box> */}
        </Box>
    )
}

export default Main
