import { initialState } from './store';


export default function reducer(state = initialState, action ){
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
        ...state, ListLeages: action.items,
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
const getTypeOfCompetitions = (state) => state.typeOfCompetitions;
const getFetchingStatus = (state) => state.isFetching;
const getErrorStatus = (state) => state.isError;
const getLeagesItem = (state) => state.ListLeages;
const getError = (state) => state.error;

export {getTypeOfCompetitions, getFetchingStatus, getErrorStatus, getLeagesItem, getError};

