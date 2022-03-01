import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getTypeOfCompetitions } from '../../store/reducer';
import NavBar from './NavBar';

export default function Header(props) {
  const type = useSelector(getTypeOfCompetitions);
  const navigate = useNavigate();
  return (
    <AppBar color="primary" position="static">
      <Toolbar>
        <TypoGraphy variant="body1"
          color="inherit">
          My header
        </TypoGraphy>
<NavBar />

      </Toolbar>
    </AppBar>
  );
}
