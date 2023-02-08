import './App.css';
import { ThemeProvider, Box, Container } from '@mui/material';
import { theme } from './Components/Theme';
import Navbar from './Components/Navbar/Navbar';
import { AboutMe } from './Content/AboutMe';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <header className="App-header">
          <Navbar></Navbar>
          <Container>
            <Box sx={{ my: 2 }}>
              { AboutMe }
            </Box>
          </Container>
          <p>
            <span className="heart">♥️</span> 🖥️🐶☕
          </p>
          <p className="small">
            <code>
              Site is under construction 🔧
            </code>
          </p>
        </header>
      </ThemeProvider>
    </div>
  );
}

export default App;
