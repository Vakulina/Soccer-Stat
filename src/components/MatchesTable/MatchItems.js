import React from 'react';
import MatchItem from './MatchItem';
import { useSelector } from 'react-redux';
import { getError } from '../../store/reducer'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function MatchItems(props) {

  const isError = useSelector(getError);
  return (
    <>
      {!isError &&
        <TableContainer component={Paper}>
          <Table size="small" aria-label="таблица матчей" >
            <TableHead>
              <TableRow style={{ backgroundColor: 'rgb(113, 158, 222)' }}>
                <TableCell style={{minWidth:'76'}}>Дата</TableCell>
                <TableCell align="right">Статус</TableCell>
                <TableCell align="right">Домашняя&nbsp;команда&nbsp;</TableCell>
                <TableCell align="right">Счет</TableCell>
                <TableCell align="right">Приглашенная команда</TableCell>
              </TableRow>
            </TableHead>
            <TableBody >
              {props.data.map((item, i) => (
                <MatchItem data={item} key={i} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      }
    </>
  );
}