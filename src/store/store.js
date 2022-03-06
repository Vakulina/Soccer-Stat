

import moment from 'moment';


const dateFromValue = moment().subtract(6, 'months').format('YYYY-MM-DD')
const dateToValue = moment().format('YYYY-MM-DD')
//.format('YYYY-MM-DD');

const initialState = {
  typeOfCompetitions: '', 
  dateFrom: dateFromValue,
  dateTo: dateToValue,
  isError: false,
  error: null,
  ListLeages: [],
  ListTeams: [],
  Filter: '',
  isFetching: true,
};

export { initialState};


