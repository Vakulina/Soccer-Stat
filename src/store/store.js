import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import moment from 'moment';

const dateFromValue = moment().subtract(3, 'months');
const dateToValue = moment()
//.format('YYYY-MM-DD');

const initialStore = {
  typeOfCompetitions: 'leages', /* teams  */
  date:{dateFrom: dateFromValue,
  dateTo: dateToValue,},
  isError: false,
  error: {},
  ListItems: [],
  Filter: '',
  isFetching: false,
};

const reducer = (state = initialStore, action) => {
  switch (action.type) {

    case 'SET_ERROR':
      return {
        ...state, 
        isError: action.err ? true:false,
        error: action.err,
      };


    case 'SHOW_SPINNER':
      return {
        ...state, isFetching: true, isError: false, error: '', 
      };
    case 'HIDE_SPINNER':
      return { ...state, isFetching: false };
    case 'SET_TYPECOMPETITIONS':
      return { ...state, typeOfCompetitions: action.typeCompetitions };
    case 'SHOW_ALL_COMPETITIONS':
      return {
        ...state, typeOfCompetitions: 'competitions', isFetching: false, ListItems: action.list, isError: false, error: '',
      };
    case 'SHOW_LEADING_LEAGES':
      return {
        ...state, isFetching: false, typeOfCompetitions: 'leages', ListItems: action.list, isError: false, error: '',
      };
    case 'INSTALL_FILTER':
      return { ...state, Filter: action.filter, isError: false };

      case 'SET_DATE':
        return{
          ...state, date: action.date, isFetching: true,
        }
      case 'SHOW_TEAMS':
        return {
          ...state, typeOfCompetitions: 'teams', isFetching: false, ListItems: action.list, isError: false, error: '',
        }
        case 'CLEAR_MATCHES_LIST':
          return {
        ...state, ListItems: [],
        }
      default:
        return state;
    }
};

const store = createStore(reducer, initialStore, applyMiddleware(thunk));
export default store;


export const setError = (err) => {
  return {
    type: 'SET_ERROR',
    err,
  };
}
export const setDate = (date) => {
  return {
    type: 'SET_DATE',
    date,
  }
}

export const switchSpinner = (bool) => {
  return {
    type: 'SWITCH_SPINNER',
    bool,
  };
}

export const dataSuccessFetch = (items) => {
  return {
    type: 'SET_ITEMS',
    items,
  };
}

export const installFilter = (filter) => {
  return {
    type: 'INSTALL_FILTER',
    filter,
  }
}

