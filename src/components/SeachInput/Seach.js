import React from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { installFilter } from '../../store/actions';
import { TextField } from '@mui/material';

export default function Seach() {
  const [searchTerm, setSearchTerm] = React.useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();// eslint-disable-line no-unused-vars

  const handleChange = (event) => {
    const currentPage = event.target.value||'';
   (currentPage==='')? navigate(``) : navigate(`?search=${currentPage}`)
   setSearchTerm(currentPage);
   dispatch(installFilter(currentPage));
  };

  React.useEffect(() => {
    const lineSearch = searchParams.get('search');
    if (lineSearch) {
      setSearchTerm(lineSearch);
      dispatch(installFilter(lineSearch));
    }
  }, [dispatch, searchParams]);

  return (
       <TextField 
        id="seach"
        type="text"  
        placeholder="Find on this page"
        data-title="Enter the name of competition or team"
        value={searchTerm}
        onChange={handleChange}
      />

  );
}
