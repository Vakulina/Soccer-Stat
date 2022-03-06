import './App.css';
import 'typeface-roboto'
import Header from './components/Header/Header';
import { Route, Routes, Navigate } from 'react-router-dom';
import LeagesList from './components/LeagesList/LeagesList';
import { Container } from '@mui/material'
import TeamsList from './components/TeamsList/TeamsList'
import LeagesMatchesPage from './components/MatchesPages/LeagesMatchesPage'
import TeamsMatchesPage from './components/MatchesPages/TeamsMatchesPage'

function App() {
  return (
    <Container className="app" maxWidth={false}
      sx={{
        flexDirection: 'column',
        minHeight: '100vh',
        justifyContent: 'flex-end',
        position: 'relative',
        paddingBottom: '60px'
      }}>
      <Header />
      <Routes>
        <Route path='/leages'
          element={<LeagesList />}
        />
        <Route path="/leages/:id" element={<LeagesMatchesPage />} />
        <Route path='/teams'
          element={<TeamsList />}
        />
        <Route path="/teams/:id" element={<TeamsMatchesPage />} />

        <Route path="*" element={<Navigate to="/leages" />} />
      </Routes>
    </Container>
  );
}

export default App;
