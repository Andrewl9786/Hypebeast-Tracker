import { Box, Typography } from "@mui/material"
import { useEffect, useState } from "react"
// import monthDays from "month-days"
import findWeekInMonth from "../utility/findWeekInMonth"
import { Today } from '@mui/icons-material/';



function Datebar(){
    const [date,setDate] = useState<Date>(new Date(''))

    useEffect(()=>{
        setDate(new Date())
    },[])

    const formattedDate = JSON.stringify(date).slice(1,11)

    return(
        <Box
        sx={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingTop: 1.5
        }}>
            <Typography sx={{
                display:'flex',
                justifyContent: 'center',
                gap: '5px'
            }}>
                <Today/>{formattedDate}
            </Typography>
            <Typography>
            Week {findWeekInMonth(date)}
            </Typography>
        </Box>
    )
}

export default Datebar
