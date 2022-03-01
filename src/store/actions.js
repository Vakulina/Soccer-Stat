import fetchData from '../utils/fetchData'

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
    fetchData(`/v2/competitions`)
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res;
      })
      .then((res) => {
        return res.json()
      })
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
        dispatch(setError(err));
      });
  };
}