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

export function fetchLeagesItems() {
  return (dispatch) => {
    dispatch(switchSpinner(true));
    fetchData(`/v2/competitions`)
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        dispatch(switchSpinner(false));
        return res;
      })
      .then((res) => {
        return res.json()
      })
      .then((res)=>
      {
        const listArr = [];
        res.competitions.forEach((item) => {
          listArr.push(item);
        });
        return listArr;
      }
      )
      .then((items) => {
       dispatch(dataSuccessFetch(items));
       dispatch(switchSpinner(false));
      })
      .catch(() => dispatch(setError(true)));
  };
}