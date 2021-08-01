import { getAuthHeaderValue } from "./jwt";
import { jwtAuthFailCatcherFactory } from "./redirectToLogin";


/*******************************************
* NEEDS UPDATED EVERY TIME THE API URL CHANGES!!!
> > > */
const apiBaseUrl = "http://localhost:8080";
/********************************************/


const buildUrl = routePath => {
  const missingSlash = routePath[0] === "/" ? "" : "/";
  return (apiBaseUrl + missingSlash + routePath);
};

const doFetch = (routePath, method = "GET", body, isRestrictedRoute = false) => {
  let options = { method, headers: new Headers() };
  if (isRestrictedRoute) {
    options.headers.append('Authorization', getAuthHeaderValue());
  }
  if (body) {
    options.headers.append('Content-Type', 'application/json');
    options.body = JSON.stringify(body);
  }
  return (
    fetch(buildUrl(routePath), options)
      .then(jwtAuthFailCatcherFactory(isRestrictedRoute)) // if restricted route + auth failed, throws to prevent execution of .then() calls in component where this util method is implemented
  );
};

export { doFetch };
