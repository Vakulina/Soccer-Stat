import React, { useState } from 'react';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import BreadCrumbsItem from '../BreadCrumbs/BreadCrumbsItem';
import { useParams } from 'react-router-dom';
import { getEndDate, getStartDate, getErrorStatus, getFetchingStatus } from '../../store/reducer';
import { fetchMathes, setTypeOfCompetitions, getNameTeam, setError } from '../../store/actions'
import ErrorOfFetch from '../ErrorOfFetch/ErrorOfFetch';
import MatchItems from '../MatchesTable/MatchItems';
import Spinner from "../Spinner/Spinner"
import { Pagination } from '@mui/material';
import DatePickersBox from '../DatePicker/DatePickersBox';

export default function LeagesMatchesPage() {

  const dateFrom = useSelector(getStartDate);
  const dateTo = useSelector(getEndDate);
  const params = useParams();
  const isError = useSelector(getErrorStatus);
  const [data, setMatches] = useState([]);
  const [name, setName] = useState('');
  const isFetching = useSelector(getFetchingStatus);
  const dispatch = useDispatch();
  const [countItems, setCountItems] = useState(0);
  const [page, setPage] = useState(1);
  const pageSize = 12;
  const [oneListItems, setOneListItems] = useState([])

  const actionPaginationHandler = (event, number) => {
    setPage(number);
    const startIndex = (number - 1) * pageSize;
    const endIndex = number * pageSize
    setOneListItems(data.slice(startIndex, endIndex))
  }

  React.useEffect(() => {
    dispatch(setTypeOfCompetitions('teams'))
    const id = params.id;
    dispatch(getNameTeam(id))
      .then((res) => {
        setName(res.name);
        dispatch(fetchMathes({ id, dateFrom, dateTo, link: 'teams' }))
          .then((res) => {
            if('matches' in res) {
            setMatches(res.matches);
            setCountItems(res.matches.length)
            setOneListItems(res.matches.slice(0, pageSize))
          }
          })
         

      }) 
      .catch((err)=>dispatch(setError(err.message)))
  }, [dateFrom, dateTo, dispatch, params.id])

  return (
    <>
      <BreadCrumbsItem name={name} />
      <DatePickersBox />
      {isError && <ErrorOfFetch />}
      {isFetching && <Spinner />}
      {(!!data.length) && <MatchItems data={oneListItems} />}
      {(!data.length) && (!isError) && (<Typography >Ничего не найдено</Typography>)}  
      {!isError&&<Pagination sx={{ position: 'absolute', bottom: 20 }}
        size='small'
        totalсount={countItems}
        page={page}
        onChange={actionPaginationHandler.bind(this)}
        variant="outlined"
        shape="rounded"
        count={Math.ceil(countItems / pageSize)}
      />}
    </>
  );
}
