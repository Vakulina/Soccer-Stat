import fetchData from '../service/fetchData'

export const setError = (err) => {
  console.log(err)
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

export const leagesSuccessFetch = (items) => {
  return {
    type: 'SET_LEAGES',
    items,
  };
}
export const teamsSuccessFetch = (items) => {
  return {
    type: 'SET_TEAMS',
    items,
  };
}
export const installFilter = (filter) => {
  return {
    type: 'INSTALL_FILTER',
    filter,
  }
}

export const setTypeOfCompetitions = (typeOfCompetitions) => {
  return {
    type: 'SET_TYPE_OF_COMPETITIONS',
    typeOfCompetitions,
  }
}

export function fetchLeagesItems() {
  return (dispatch) => {
    dispatch(switchSpinner(true));
   return fetchData(`/v2/competitions`)
      .then((res) => {
        const listArr = [];
        res.competitions.forEach((item) => {
          listArr.push(item);
        });
        return listArr;
      }
      )
      .then((items) => {
        dispatch(setTypeOfCompetitions('leages'));
        dispatch(leagesSuccessFetch(items));
        dispatch(switchSpinner(false));
        dispatch(setError(null));
      })
      .catch((err) => {
        dispatch(switchSpinner(false));
        dispatch(setError(err));
      });
  };
}
  export function fetchTeamsItems() {
    return (dispatch) => {
      dispatch(switchSpinner(true));
     return fetchData(`/v2/teams`)
        .then((res) => {
          const listArr = [];
          res.teams.forEach((item) => {
            listArr.push(item);
          });
         
          return listArr;
        }
        )
        .then((items) => {
          dispatch(setTypeOfCompetitions('teams'));
          dispatch(teamsSuccessFetch(items));
          dispatch(switchSpinner(false));
          dispatch(setError(null));
        })
        .catch((err) => {
          dispatch(switchSpinner(false));
          dispatch(setError(err));
        });
    };
  }
  
  export function fetchLeagesMathes({id, dateFrom, dateTo}) {
    return (dispatch) => {
      dispatch(switchSpinner(true));
     return fetchData(`/v2/competitions/${id}/matches?dateFrom=${dateFrom}&dateTo=${dateTo}`)
        .then((res) => {
          const listMatches = [];
          res.matches.forEach((item) => {
            listMatches.push(item);
          });
          console.log(listMatches)
          return listMatches;
        }
        )
        .then((items) => {
          dispatch(switchSpinner(false));
          dispatch(setError(null));
          return items
        })
        .catch((err) => {
          dispatch(switchSpinner(false));
          console.log(err)
          dispatch(setError(err));
        });
  }}