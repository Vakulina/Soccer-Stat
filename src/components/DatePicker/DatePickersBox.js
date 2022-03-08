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
      dispatch(setDateEnd(moment(end, 'DD/MM/YYYY').format('YYYY-MM-DD')));
      dispatch(setDateStart(moment(start, 'DD/MM/YYYY').format('YYYY-MM-DD')));
    }
    return function clearDate() {
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
        
          label={'дата начала'}
          value={start}
          onChange={(newValue) => {
            setStart(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        <Typography sx={{ margin: 0.5 }}>по</Typography>
        <DatePicker

         label={'дата окончания'}
          value={end}
          onChange={(newValue) => {
            setEnd(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Box>
  );
}