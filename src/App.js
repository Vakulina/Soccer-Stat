import './App.css';
import 'typeface-roboto'
import Header from './components/Header/Header';
import { Route, Routes, Navigate } from 'react-router-dom';
import LeagesList from './components/LeagesPage/LeagesPage';
import {Container } from '@mui/material'

function App() {
  return (

    <Container className="app" maxWidth={false} 
    sx={{ flexDirection: 'column',
    minHeight:'100vh',
    justifyContent:'flex-end',
    position:'relative',
    paddingBottom:'60px' }}>
    <Header />
      <Routes>
  
        <Route path='/leages' element={(
          <>
            
            <LeagesList />
          </>
        )} />
        <Route path="/leages/:id" element={<div />} />

<Route path="*" element={<Navigate to="/leages" />} />
      </Routes>

    </Container>

  );
}

export default App;
