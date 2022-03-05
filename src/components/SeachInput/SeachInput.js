import { useState, useEffect } from 'react';
import {TextField} from '@mui/material';
import { useSelector } from 'react-redux';

import { getTypeOfCompetitions, getSearchLine } from '../../store/reducer';

export default function SearchInput() {

  const seachLine = useSelector(getSearchLine);
  const [query, setQuery]= useState(seachLine)

  const handleSeachTextField =(event)=>{
    setQuery(event.target.value)
    console.log(query)
  }


  return(
<TextField
label="seach"
value={query}
onChange={handleSeachTextField}
>

  </TextField>
  )
}