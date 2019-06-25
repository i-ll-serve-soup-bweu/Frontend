import axios from 'axios';

export default function () {
  const token = localStorage.getItem('soupUserToken')
    ? localStorage.getItem('soupUserToken')
    : 'false';

  const instance = axios.create({
    headers: {
      Authorization: token,
    },
  });

  return instance;
}
