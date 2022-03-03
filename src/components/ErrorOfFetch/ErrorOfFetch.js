import React from 'react';
import './ErrorOfFetch.css';
import { useSelector } from 'react-redux';
import { getError} from '../../store/reducer';
import {TOO_MANY_REQUEST, FORBIDDEN, NOT_FOUND_MESSAGE, DEFAULT } from '../../service/errorsMessage'

const image = require('../../images/error.png');

export default function ErrorOfFetch() {
  const [helperText, setHelperText] = React.useState('');

  const error = useSelector(getError);
  React.useEffect(() => {
    console.log(error)

    if(error.message === 'Failed to fetch'){
      setHelperText(TOO_MANY_REQUEST)
    }
    switch (error.errorCode) {
      case 403: {setHelperText(FORBIDDEN );
      break; }
      case 429: { setHelperText(TOO_MANY_REQUEST);
      break;}
      case 404: { setHelperText(NOT_FOUND_MESSAGE);
      break; }
      default: { setHelperText(DEFAULT); }
    }
  }, [error] )
 
  return (
    <div className="error">
      <img src={image} alt="" />
      <p className="error__message">{`${helperText}`}</p>
    </div>
  );
}

