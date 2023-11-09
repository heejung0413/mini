const API_URL = 'http://www.boredapi.com/api/activity/';

/**
 * bored 객체를 bored 서버로부터 하나 받아올 수 있어요.
 */
export const fetchBored = ({ participants }) => {
  return fetch(`${API_URL}?participants=${participants}`)
  .then(data => data.json())
  .catch(err => console.error(err));
}


fetchBored({ participants: 1 });
