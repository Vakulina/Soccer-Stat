import './App.css';
import 'typeface-roboto'
import Header from './components/Header/Header';
import { Route, Routes, Navigate } from 'react-router-dom';
import LeagesList from './components/LeagesList/LeagesList';
import { Container } from '@mui/material'
import { useEffect } from 'react';
import {   useLocation, matchPath} from 'react-router-dom';
import{setTypeOfCompetitions, fetchLeagesItems, fetchTeamsItems} from './store/actions'
import {useDispatch} from 'react-redux'
import TeamsList from './components/TeamsList/TeamsList'

import MatchesPage from './components/MatchesPage/MatchesPage'
function App() {
  const { pathname } =  useLocation();
  const dispatch = useDispatch();

  useEffect(()=>{
   let type 
    if(pathname.startsWith('/leages')){type = 'leages'}
    if(pathname.startsWith('/teams')){type = 'teams'}
  dispatch(setTypeOfCompetitions(type));
  
  if(type === 'leages'){
    dispatch(fetchLeagesItems())
  }
  if(type === 'teams'){
    dispatch(fetchTeamsItems())
  }

  }, [])
  
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
        <Route path="/leages/:id" element={<MatchesPage />} />
        <Route path='/teams' 
        element={<TeamsList />} 
        />
        <Route path="/teams/:id" element={<MatchesPage />} />

        <Route path="*" element={<Navigate to="/leages" />} />
      </Routes>

    </Container>

  );
}

export default App;
