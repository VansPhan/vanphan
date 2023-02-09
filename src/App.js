import React, { useState } from 'react';
import './App.css';
import { ThemeProvider, Box, Container } from '@mui/material';
import { theme } from './Components/Theme';
import { Pages } from './Utilities/Pages';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home';
import { Footer } from './Components/Footer';

function App() {
  const [page, setPage] = useState(Pages.HOME);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <body className="App-body">
          <Navbar onPageChange={setPage}></Navbar>
          <Container>
            <Box sx={{ my: 2 }}>
              { page === Pages.HOME && <Home /> }
              { page === Pages.BLOG && <h1>YAAHH</h1> }
            </Box>
          </Container>
          { Footer }
        </body>
      </ThemeProvider>
    </div>
  );
}

export default App;
