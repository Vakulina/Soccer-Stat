import * as React from 'react';
import { useDispatch} from 'react-redux';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { setDateEnd, setDateStart, switchSpinner, setError } from '../../store/actions';
import { Box, Typography } from '@mui/material';
import isValideDates from '../../service/isValideDates';
import { format } from 'date-fns'

export default function DatePickersBox() {
  const dispatch = useDispatch();
  const [start, setStart] = React.useState(new Date());
  const [end, setEnd] = React.useState(new Date());

  React.useEffect(() => {
    let isValid
    try {
      isValid = isValideDates(new Date(start), new Date(end));
    }
    catch (err) {
      dispatch(switchSpinner(false));
      dispatch(setError(err));
    }
    if (isValid) {
      dispatch(switchSpinner(true))
      dispatch(setDateEnd(format(new Date(end), 'yyyy-MM-dd')));
      dispatch(setDateStart(format(new Date(start), 'yyyy-MM-dd')));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [end, start])

React.useEffect(()=>{
  return function clearDate() {
    dispatch(setError(null));
    dispatch(switchSpinner(true))
    dispatch(setDateEnd('00-00-0000'));
    dispatch(setDateStart('00-00-0000'));
  }
},
[dispatch])

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', margin: 1, alignItems: 'center' }}>
      <LocalizationProvider dateAdapter={AdapterDateFns} >
        <Typography sx={{ margin: 0.5 }}>с</Typography>
        <DatePicker
          inputFormat="dd/MM/uuuu"
          label={'дата начала'}
          value={start}
          onChange={(newValue) => {
            setStart(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        <Typography sx={{ margin: 0.5 }}>по</Typography>
        <DatePicker
          inputFormat="dd/MM/uuuu"
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