import React from 'react';

export default React.createContext({
  token: null,
  userId: null,
  tokenExpiration: null,
  role: null,
  // eslint-disable-next-line
  login: (token, userId, tokenExpiration, role) => {},
  logout: () => {},
});