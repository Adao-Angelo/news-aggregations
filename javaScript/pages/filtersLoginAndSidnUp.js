import { openUrl } from "../config/openUrl.js";
import { signUp } from "../config/signup.js";
import { signIn } from "../config/signin.js";

import { getArticlesWithLimit } from "../Http/get.js";
import {articles} from "../config/watchArticles.js";
getArticlesWithLimit()
articles()


function signUpH() {
  let name = document.getElementById("name_up").value;
  let email = document.getElementById("email_up").value;
  let password = document.getElementById("password_up").value;

  signUp(name, email, password);
}

window.document.querySelector(".s_up").addEventListener("click", function () {
  signUpH();
});
function signInH() {
  let email = document.getElementById("email_in").value;
  let password = document.getElementById("password_in").value;

  signIn(email, password);
}
window.document.querySelector(".s_in").addEventListener("click", function () {
  signInH();
});
window.document
  .querySelector(".close_alert")
  .addEventListener("click", function () {
    window.document.querySelector(".alert").classList.remove("ative");
  });





  
  
 
  window.document.querySelector('.id1').addEventListener('click',
  function(){
   
   sessionStorage.setItem('id',1)
    openUrl('details')
  } )
  window.document.querySelector('.id2').addEventListener('click',
  function(){
   
   
   sessionStorage.setItem('id',2)
    openUrl('details')
  } )
  window.document.querySelector('.id3').addEventListener('click',
  function(){
    
    sessionStorage.setItem('id',3)
    openUrl('details')
  } )
  window.document.querySelector('.id4').addEventListener('click',
  function(){
    
    sessionStorage.setItem('id',4)
    openUrl('details')
  } )
  window.document.querySelector('.id5').addEventListener('click',
  function(){
    
    sessionStorage.setItem('id',5)
    openUrl('details')
  } )
  window.document.querySelector('.id6').addEventListener('click',
  function(){
    
    sessionStorage.setItem('id',6)
    openUrl('details')
  } )


  