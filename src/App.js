import './App.css';
import 'typeface-roboto'
import Header from './components/Header/Header';
import { Route, Routes, Navigate } from 'react-router-dom';
import LeagesPage from './components/LeagesList/LeagesPage';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <>
    <CssBaseline />
    <div className="App">
    <Header />
      <Routes>
  
        <Route path='/leages' element={(
          <>
            
            <LeagesPage />
          </>
        )} />
        <Route path="/leages/:id" element={<div />} />

<Route path="*" element={<Navigate to="/leages" />} />
      </Routes>

    </div>
    </>
  );
}

export default App;
