import axiosInstance from "../../api/axiosInterceptor.js";
import { AUTH_TOKEN, LOCAL_STORAGE_PROFILE_KEY, NOT_FOUND } from "../../api/constants.js";
import { redirectToHome, redirectToLoginPage, userLoggedIn } from "../../helpers/requestHelper.js";

let loginButton = document.querySelector('.login-button')

loginButton.addEventListener("click", function (event) {
    event.preventDefault();
    
    const formData = new FormData(document.querySelector('form'))
    const payload = Object.fromEntries(formData.entries())
 
    console.log(payload)
    axiosInstance.post('/auth/signin', payload)
      .then(function (response) {
        console.log(response)
        // localStorage.setItem(LOCAL_STORAGE_PROFILE_KEY, JSON.stringify(response.data.data));
        localStorage.setItem(AUTH_TOKEN, response.data.token);
        
        redirectToLoginPage()
      })
      .catch(function (error) {
        console.log(error)
        if(error.response.status === NOT_FOUND)
        {
            alert(error.response.data.err)
        } else {
            alert('something went wrong')
        }
      });
  });
  
  window.addEventListener("load", function(){
    if(userLoggedIn())
    {
      redirectToHome()
    }
  });
  