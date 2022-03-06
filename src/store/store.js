

import moment from 'moment';


const dateFromValue = moment().subtract(3, 'months').format('YYYY-MM-DD')
const dateToValue = moment().format('YYYY-MM-DD')
//.format('YYYY-MM-DD');

const initialState = {
  typeOfCompetitions: '', 
  date: {
    dateFrom: dateFromValue,
    dateTo: dateToValue,
  },
  isError: false,
  error: {},
  ListLeages: [],
  ListTeams: [],
  Filter: '',
  isFetching: true,
};


export { initialState};


