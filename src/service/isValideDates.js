import moment from 'moment';
import { RANGE_DATE_ERROR } from './errorsMessage';
const regex1 = /[0-9]{2}\/[0-9]{2}\/[0-9]{4}/ 
const regex2 = /[0-9]{4}-[0-9]{2}-[0-9]{2}/   //регулярка нужна только для того, чтобы убедить, что введены ВСЕ цифры

export default function isValideDates(start, end) {

  const isValidStart = regex1.test(start) || regex2.test(start)
  const isValidEnd = regex1.test(end) || regex2.test(end)

if(moment(start).isAfter(end) && isValidStart && isValidEnd ) {
  throw new RangeError(RANGE_DATE_ERROR);
}
  return isValidStart&&isValidEnd;
}