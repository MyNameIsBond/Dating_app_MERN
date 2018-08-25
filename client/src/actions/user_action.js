import { FETCH_USERS } from './types';

export const fetchUsers = () => dispatch => {
  console.log('fetching');
  fetch('http://127.0.0.1:8080/')
    .then(res => console.log(res.json()))
    .then(users =>
      dispatch({
        type: FETCH_USERS,
        payload: users
      })
    );
};

async function fetchUserss() {
  const respn = await fetch('https://jsonplaceholder.typicode.com/posts');
  alert(respn);
}

fetchUserss();
