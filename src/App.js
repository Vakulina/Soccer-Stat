import './App.css';
import 'typeface-roboto'
import Header from './components/Header/Header';
import { Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/SoccerStat' element={(
          <>
            <Header />
            <Teams />
          </>
        )} />
      </Routes>

    </div>
  );
}

export default App;
