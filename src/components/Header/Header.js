import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getTypeOfCompetitions } from '../../store/reducer';
import NavBar from './NavBar';
import SportsSoccerSharpIcon from '@mui/icons-material/SportsSoccerSharp';

export default function Header(props) {
  const type = useSelector(getTypeOfCompetitions);
  const navigate = useNavigate();
  return (
    <AppBar color="primary" position="static">
      <Toolbar>
        <SportsSoccerSharpIcon fontSize="large" />
        <NavBar />
      </Toolbar>
    </AppBar>
  );
}
