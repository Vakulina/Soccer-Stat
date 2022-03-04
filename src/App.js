import './App.css';
import 'typeface-roboto'
import Header from './components/Header/Header';
import { Route, Routes, Navigate } from 'react-router-dom';
import LeagesList from './components/LeagesList/LeagesList';

function App() {
  return (

    <div className="App">
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

    </div>

  );
}

export default App;
