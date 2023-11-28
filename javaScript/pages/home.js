document.querySelector(".alert").classList.remove("ative");
import { getArticlesWithLimit } from "../Http/get.js";
import {articles} from "../config/watchArticles.js";


getArticlesWithLimit()
articles()
let local = localStorage.getItem("session");

if (!local) {
} else {
  openUrl("User_authenticated");
}

import { openUrl } from "../config/openUrl.js";
import { signUp } from "../config/signup.js";
import { signIn } from "../config/signin.js";
window.document
  .querySelector(".show_filters")
  .addEventListener("click", function () {
    openPageFilters();
  });
function openPageFilters() {
  openUrl("filters_page");
}
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

 



 

    


  
