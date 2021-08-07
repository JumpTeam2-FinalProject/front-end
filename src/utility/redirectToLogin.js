let redirectToLogin;

const registerRedirectToLogin = __redirectToLogin => redirectToLogin = __redirectToLogin;

const jwtAuthFailCatcherFactory = (doesRequireAuth, shouldRedirectOnFail = true) => (
  response => {
    if (
      doesRequireAuth &&
      (response.status === 401 || response.status === 403) &&
      redirectToLogin
    ) {
      console.log("User is not authenticated.");
      if (shouldRedirectOnFail) redirectToLogin();
      const err = new Error(
        `Unauthorized request. User ${shouldRedirectOnFail ? "must be" : "is not"} authenticated.`
      );
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
