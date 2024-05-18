import { AUTH_TOKEN } from "../api/constants.js";

export function inLoginRoute()
{
    console.log(window.location.pathname)

    window.location.pathname.includes('login.html');
}

export function userLoggedIn()
{
    return !! localStorage.getItem(AUTH_TOKEN);
}

export function redirectToLoginPage()
{
    window.location.replace('/login.html');
}

export function redirectToHome()
{
    window.location.replace('/home.html');
}