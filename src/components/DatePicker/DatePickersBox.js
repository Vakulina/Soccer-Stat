import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { setDateEnd, setDateStart, switchSpinner, setError } from '../../store/actions';
import { getStartDate, getEndDate } from '../../store/reducer';
import { Box, Typography } from '@mui/material';
import isValideDates from '../../service/isValideDates';
import moment from 'moment';


export default function DatePickersBox() {
  const dispatch = useDispatch();

  const [start, setStart] = React.useState(useSelector(getStartDate));
  const [end, setEnd] = React.useState(useSelector(getEndDate));

  const handleStartPicker = (e, newValue) => {
    setStart(moment(newValue, 'DD/MM/YYYY').format('YYYY-MM-DD'));
  }

  const handleEndPicker = (e, newValue) => {
    setEnd(moment(newValue, 'DD/MM/YYYY').format('YYYY-MM-DD'));
  }

  React.useEffect(() => {
    let isValid
    try {
      isValid = isValideDates(start, end);
    }
    catch (err) {
      dispatch(switchSpinner(false));
      dispatch(setError(err));
    }
    if (isValid) {
      dispatch(setDateEnd(end));
      dispatch(setDateStart(start));
    }
  return function clearDate(){
    dispatch(switchSpinner(true));
    dispatch(setDateEnd(null));
    dispatch(setDateStart(null));
  }
  }, [end, start])

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', margin: 1, alignItems: 'center' }}>
      <LocalizationProvider dateAdapter={AdapterDateFns} >
        <Typography sx={{ margin: 0.5 }}>с</Typography>
        <DatePicker
        inputFormat="dd/MM/yyyy"
          label={'дата начала'}
          value={start}
          onChange={handleStartPicker.bind(this)}
          renderInput={(params) => <TextField {...params} />}
        />
        <Typography sx={{ margin: 0.5 }}>по</Typography>
        <DatePicker
        inputFormat="dd/MM/yyyy"
          label={'дата окончания'}
          value={end}
          onChange={handleEndPicker.bind(this)}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Box>
  );
}