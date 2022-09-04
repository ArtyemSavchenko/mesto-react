export const BASE_URL = 'https://auth.nomoreparties.co';

export const statusCheck = res => {
  if (res.ok) {
    return res.json();
  }
  return res.json().then(err => {
    err.status = res.status;
    return Promise.reject(err);
  });
};

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  }).then(statusCheck);
};

export const authorization = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  }).then(statusCheck);
};

export const tokenCheck = jwt => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`
    }
  }).then(statusCheck);
};