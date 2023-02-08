import './App.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <Container>
          <Box sx={{ my: 2 }}>
            Van Phan
          </Box>
        </Container>
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="small">
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
