import { postArticles } from "../Http/post.js";

function vUser() {
  const user = localStorage.getItem("session");
  const userConvert = JSON.parse(user);

  let name = window.document.querySelector(".name_user");
  let email = document.querySelector(".email_user");

  let nameM = window.document.querySelector(".name_userM");
  let emailM = document.querySelector(".email_userM");

  name.innerHTML = `${userConvert.name}`;
  email.innerHTML = `${userConvert.email}`;
  nameM.innerHTML = `${userConvert.name}`;
  emailM.innerHTML = `${userConvert.email}`;
}
vUser();

function TextOfInputs() {
  let title = window.document.querySelector("#title").value;
  let cotegories = document.querySelector("#categories1").value;
  let urlImage = document.querySelector("#urlImage").value;
  let subtitle = document.querySelector("#subtitle").value;
  let content = document.querySelector("#content").value;
  let author = document.querySelector("#author").value;
  let date = dateAtul;
  let arcticles = {
    title: title,
    cotegories: cotegories,
    urlImage: urlImage,
    subtitle: subtitle,
    content: content,
    author: author,
    date: date,
  };
  enviarONpost(arcticles);
}

const date = new Date();
let dia = String(date.getDate()).padStart(2, "0");
const mes = String(date.getMonth() + 1).padStart(2, "0");
const ano = date.getFullYear();
let hora = String(date.getHours()).padStart(2, "0");
let minuto = String(date.getMinutes()).padStart(2, "0");

let dateAtul = `${dia}/${mes}/${ano} ${hora}:${minuto}`;

document.querySelector(".add").addEventListener("click", TextOfInputs);

function enviarONpost(arcticles) {
  postArticles(arcticles);
}
