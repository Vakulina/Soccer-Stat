import { initialState } from './store';
import filterCompetitionList from '../service/filterCompetitionList';

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
          ...state, ListTeams: action.items,
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
const getLeagesItems = (state) => filterCompetitionList(state);
const getTeamsItems = (state) =>  filterCompetitionList(state);
const getError = (state) => state.error;
const getFilter = (state) => state.Filter;
const getItems=({typeOfCompetitions, ListTeams, ListLeages})=>{
  if(typeOfCompetitions ==='leages'){return ListLeages}
  if(typeOfCompetitions ==='teams'){return ListTeams}
}
const getStartDate =((state)=>   state.date.dateFrom)
const getEndDate =((state)=>   state.date.dateTo)

export {getTypeOfCompetitions, getFetchingStatus, getErrorStatus,
   getLeagesItems, getTeamsItems, getItems, getError, getFilter, getStartDate, getEndDate
  };

