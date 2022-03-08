import {isAfter}  from 'date-fns'
import { RANGE_DATE_ERROR } from './errorsMessage';

export default function isValideDates(start, end) {
  const isValidStart = isAfter(start, new Date(2000, 1, 1))
  const isValidEnd = isAfter(end, new Date(2000, 1, 1))
    if (!isAfter(end, start)&&isValidStart&&isValidEnd){
    throw new RangeError(RANGE_DATE_ERROR);
  }
  return isValidStart && isValidEnd;
}
