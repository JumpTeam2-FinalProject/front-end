let redirectToLogin;

const registerRedirectToLogin = __redirectToLogin => redirectToLogin = __redirectToLogin;

const jwtAuthFailCatcherFactory = doesRequireAuth => (
  response => {
    if (
      doesRequireAuth &&
      (response.status === 401 || response.status === 403) &&
      redirectToLogin
    ) {
      redirectToLogin();
      const err = new Error("Unauthorized request. User must be authenticated");
      err.isAuthFail = true;
      throw err;
    }
    return response;
  }
);

const isJwtFailError = err => !!(err && err.isAuthFail);

export {
  registerRedirectToLogin,
  jwtAuthFailCatcherFactory,
  isJwtFailError
};
