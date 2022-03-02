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
      <Routes>

        <Route path='/leages' element={(
          <>
            <Header />
            <LeagesPage />
          </>
        )} />

<Route path="*" element={<Navigate to="/leages" />} />
      </Routes>

    </div>
    </>
  );
}

export default App;
