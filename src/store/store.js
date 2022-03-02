

import moment from 'moment';


const dateFromValue = moment().subtract(3, 'months');
const dateToValue = moment();
//.format('YYYY-MM-DD');

const initialState = {
  typeOfCompetitions: 'leages', /* teams  */
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


