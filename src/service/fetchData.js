const token = process.env.REACT_APP_USER_TOKEN;
const url = process.env.REACT_APP_API_URL;

export default function fetchData(path) {
  return fetch(`${url}${path}`, {
  method: 'GET',
  headers: {
    'X-Auth-Token': token,
  },
})
}