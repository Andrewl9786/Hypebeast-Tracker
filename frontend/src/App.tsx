import Navbar from './components/Navbar'
import { ThemeProvider, createTheme, styled } from '@mui/material/styles'
import Main from './containers/Main'
import Datebar from './components/Datebar'
// import * as cheerio from 'cheerio';


function App() {
  const theme = createTheme({
    palette:{
      primary: {
        main: '#666666'}
    },
    typography:{
      fontFamily: ["Signika Negative", "sans-serif"].join(','),
      fontSize: 14
    }
  })

  const MainCss = styled('div')({
    maxWidth: '1280px',
    margin: '0 auto',
    textalign: 'center',
    padding: 16
  })

  return (
    <ThemeProvider theme={theme}>\
      <MainCss>
        <Navbar/>
        <Datebar/>
        <Main/>
      </MainCss>
    </ThemeProvider>
  )
}

export default App
