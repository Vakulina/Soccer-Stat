import moment from 'moment';
import { RANGE_DATE_ERROR } from './errorsMessage';
const regex = /([0-9]{2}\/[0-9]{2}\/[0-9]{4})|([0-9]{4}-[0-9]{2}-[0-9]{2})/ //проверяет что введены ВСЕ цифры в дате

export default function isValideDates(start, end) {
  const isValidStart = regex.test(start);
  const isValidEnd = regex.test(end);
  if (moment(start).isAfter(end) && isValidStart && isValidEnd) {
    throw new RangeError(RANGE_DATE_ERROR);
  }
  return isValidStart && isValidEnd;
}