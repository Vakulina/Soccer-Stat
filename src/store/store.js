import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import moment from 'moment';
import reducer from './reducer';

const dateFromValue = moment().subtract(3, 'months');
const dateToValue = moment();
//.format('YYYY-MM-DD');

const initialStore = {
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
  isFetching: false,
};

const store = createStore(reducer, initialStore, applyMiddleware(thunk));
export default store;
export { initialStore };


