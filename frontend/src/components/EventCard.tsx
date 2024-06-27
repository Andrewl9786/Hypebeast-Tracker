import { Typography, Card, Box, Stack, styled, Paper } from "@mui/material"
import { fashionRelease } from "../types"

interface Prop {
    fashionRelease: fashionRelease
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: 15,
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));

function EventCard(prop:Prop){
    return(
        <Card
        variant="outlined"
        sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            textAlign: "left",
            backgroundColor: '#E8E8E8',
            p: 1,
            mt: 1,
            mb: 1
            // text-align: left;
        }}>
            <Box sx={{ width: '100%' }}>
                <Stack spacing={1}>
                <Item>
                    <Typography sx={{
                        display:'flex',
                        justifyContent: 'space-between'
                        }}>
                        <Box sx={{
                            width: '7rem'
                        }}>
                            <Box sx={{ fontWeight: 'bold' }}>
                            Designer:
                            </Box>
                            {prop.fashionRelease.retailerBrand}
                        </Box>
                        <Box sx={{
                            width: '6rem'
                        }}>
                            <Box sx={{ fontWeight: 'bold' }}>
                            Collection:
                            </Box>
                            {prop.fashionRelease.collection}
                        </Box>
                    </Typography>
                </Item>
                <Item>
                    <Typography>
                        <Box sx={{ fontWeight: 'bold' }}>
                        Avaliability:
                        </Box>
                        {prop.fashionRelease.releaseDate}
                    </Typography>
                </Item>
                </Stack>
            </Box>
        </Card>
    )
}

export default EventCard
