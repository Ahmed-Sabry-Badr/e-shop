import axiosInstance from "../../api/axiosInterceptor.js";
import { redirectToHome, redirectToLoginPage, userLoggedIn } from "../../helpers/requestHelper.js";

const registerButton = document.querySelector('.register-button')

console.log(registerButton)

registerButton.addEventListener('click', function(event){
    event.preventDefault()

    const formData = new FormData(document.querySelector('form'))
    const payload = Object.fromEntries(formData.entries())
 
    console.log(payload)
    axiosInstance.post('/auth/signup', payload)
      .then(function (response) {
        console.log(response)
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