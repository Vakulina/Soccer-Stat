import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import moment from 'moment';

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

const reducer = (state = initialStore, action) => {
  switch (action.type) {
    case 'SET_ERROR':
      return {
        ...state,
        isError: action.err ? true : false,
        error: action.err,
      };
    case 'SET_DATE':
      return {
        ...state, date: action.date,
      };
    case 'SWITCH_SPINNER':
      return {
        ...state, isFetching: action.bool,
      };

    case 'SET_LEAGES':
      return {
        ...state, ListLeages: action.list,
      };
      case 'SET_TEAMS':
        return {
          ...state, ListTeams: action.list,
        };
    case 'INSTALL_FILTER':
      return {
        ...state, Filter: action.filter,
      };
    case 'SET_TYPE_OF_COMPETITIONS':
      return {
        ...state, typeOfCompetitions: action.typeOfCompetitions,
      }
    default:
      return state;
  }
};

const store = createStore(reducer, initialStore, applyMiddleware(thunk));
export default store;

