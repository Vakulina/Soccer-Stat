import React from 'react';
import './ErrorOfFetch.css';
import { useSelector } from 'react-redux';
import { getError } from '../../store/reducer';
import { TOO_MANY_REQUEST, FORBIDDEN, NOT_FOUND_MESSAGE, DEFAULT, RANGE_DATE_ERROR } from '../../service/errorsMessage'

const image = require('../../images/error.png');

export default function ErrorOfFetch() {
  const [helperText, setHelperText] = React.useState('');

  const error = useSelector(getError);

  React.useEffect(() => {
    if ((error instanceof RangeError)&&(error.message === RANGE_DATE_ERROR)){
      setHelperText(RANGE_DATE_ERROR);
    }
    else{
    switch (error) {
      case '403': {
        setHelperText(FORBIDDEN);
        break;
      }
      case '429': {
        setHelperText(TOO_MANY_REQUEST);
        break;
      }
      case '404': {
        setHelperText(NOT_FOUND_MESSAGE);
        break;
      }
      case '400': {
        setHelperText(NOT_FOUND_MESSAGE);
        break;
      }
      default: { setHelperText(DEFAULT); }
    }
  }
  }, [error])

  return (
    <div className="error">
      <img src={image} alt="" />
      <p className="error__message">{`${helperText}`}</p>
    </div>
  );
}

