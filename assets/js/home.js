import { redirectToLoginPage, userLoggedIn } from "../../helpers/requestHelper.js";

if(! userLoggedIn())
{
    redirectToLoginPage()
}