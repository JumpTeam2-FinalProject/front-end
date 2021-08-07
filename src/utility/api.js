import { getAuthHeaderValue } from "./jwt";
import { jwtAuthFailCatcherFactory } from "./redirectToLogin";

/*******************************************
* NEEDS UPDATED EVERY TIME THE API URL CHANGES!!!
> > > */
const apiBaseUrl =
    "http://ec2-3-133-145-247.us-east-2.compute.amazonaws.com:8080/api";
    // "http://localhost:8080/api";
/********************************************/


const buildUrl = (routePath) => {
    const missingSlash = routePath[0] === "/" ? "" : "/";
    return apiBaseUrl + missingSlash + routePath;
};

const doFetch = (
    routePath,
    method = "GET",
    body,
    isRestrictedRoute = false,
    shouldPreventRedirectToLogin = false
) => {
    let options = { method, headers: new Headers() };
    if (isRestrictedRoute) {
        options.headers.append("Authorization", getAuthHeaderValue());
    }
    if (body) {
        options.headers.append("Content-Type", "application/json");
        options.body = JSON.stringify(body);
    }
    return fetch(buildUrl(routePath), options).then(
        jwtAuthFailCatcherFactory(isRestrictedRoute, !shouldPreventRedirectToLogin)
    ); // if restricted route + auth failed, throws to prevent execution of .then() calls in component where this util method is implemented
};

export { doFetch };
