import './App.css';
import PersonRegistration from './personregistration'
import { yellow, orange } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import UserForms from './userforms'

const theme = createTheme({
  palette: {
    appColor: {
      main: yellow,
    }
  },
  typography: {
    fontFamily: 'Roboto',
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
    <PersonRegistration type="Student"/>
    </ThemeProvider>
  );
}



export default App;
