import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { setDateEnd, setDateStart, switchSpinner, setError } from '../../store/actions';
import { getStartDate, getEndDate } from '../../store/reducer';
import { Box, Typography } from '@mui/material';
import isValideDates from '../../service/isValideDates'

export default function DatePickersBox() {
  const dispatch = useDispatch();

  const [start, setStart] = React.useState(useSelector(getStartDate));
  const [end, setEnd] = React.useState(useSelector(getEndDate));

  const handleStartPicker = (e, newValue) => {
    setStart(newValue);
  }

  const handleEndPicker = (e, newValue) => {
    setEnd(newValue);
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

  }, [end, start])

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', margin: 1, alignItems: 'center' }}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Typography sx={{ margin: 0.5 }}>с</Typography>
        <DatePicker required
          label={'дата начала'}
          value={start}
          onChange={handleStartPicker.bind(this)}
          renderInput={(params) => <TextField {...params} />}
        />
        <Typography sx={{ margin: 0.5 }}>по</Typography>
        <DatePicker required
          label={'дата окончания'}
          value={end}
          onChange={handleEndPicker.bind(this)}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Box>
  );
}