const TOKEN_PROP_NAME = 'my_jwtoken';

function saveToken(jwt) {
  window.sessionStorage.setItem(TOKEN_PROP_NAME, jwt);
}

function deleteToken() {
  window.sessionStorage.removeItem(TOKEN_PROP_NAME);
}

function getAuthHeaderValue() {
  const jwt = window.sessionStorage.getItem(TOKEN_PROP_NAME);
  return jwt ? ('Bearer ' + jwt) : undefined;
}

export {
  saveToken,
  deleteToken,
  getAuthHeaderValue
};
