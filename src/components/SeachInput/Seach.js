import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { installFilter } from '../../store/actions';

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
    <label className="search__label" htmlFor="search">
      <input
        id="search"
        type="text"
        className="search"
        placeholder="Find on this page"
        data-title="Enter the name of competition or team"
        value={searchTerm}
        onChange={handleChange}
      />
    </label>
  );
}
