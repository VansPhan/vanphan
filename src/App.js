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
            GitHub Codespaces <span className="heart">♥️</span> React
          </p>
          <p className="small">
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </ThemeProvider>
    </div>
  );
}

export default App;
