import { AppBar, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getTypeOfCompetitions } from '../../store/reducer';
import { Tabs, Box, Tab } from '@mui/material';
import SportsSoccerSharpIcon from '@mui/icons-material/SportsSoccerSharp';
import {useState, useEffect} from 'react'

export default function Header(props) {
  const type = useSelector(getTypeOfCompetitions);
  
  const navigate = useNavigate();

  const linkHandleChange=(link)=>{
    navigate(link)
  }
  const startPage=(type==='leages')?0:1
  console.log(type, startPage)
  const [value, setValue] = useState(startPage);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(()=>{
    setValue(startPage)
  },[startPage])


  return (
    <AppBar color="primary" position="fixed">
      <Toolbar>
        <SportsSoccerSharpIcon fontSize="large" />
        <Box >
      <Tabs textColor='secondary'
        onChange={handleChange}
        value={value}
        aria-label="Tabs where selection follows focus"
        selectionFollowsFocus
      >
        <Tab label="Лиги" onClick={linkHandleChange.bind(this, '/leages')}  />
        <Tab label="Команды" onClick={linkHandleChange.bind(this, '/teams')} />

      </Tabs>
    </Box>
      </Toolbar>
    </AppBar>
  );
}

