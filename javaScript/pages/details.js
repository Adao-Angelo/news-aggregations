import { openUrl } from "../config/openUrl.js";

if (!sessionStorage.getItem("id")) {
  openUrl("home");
}

export function article() {
  let id = sessionStorage.getItem("id");
  fetch(`http://localhost:3000/articles/${id}`)
    .then((response) => response.json())
    .then((articles) =>
      sessionStorage.setItem("article", JSON.stringify(articles))
    );

  let arcticle = JSON.parse(sessionStorage.getItem("article"));

  let container1 = window.document.querySelector("#article");

  let articleHtml = `
         <div class="cont2">
        <div class="description">
          <h1 class="txtgrand semibold">
            ${arcticle.title}
          </h1>
          <div class="top2">
            <p class="semibold">
              By: ${arcticle.author}, Categriry:
              <span class="gray_color">${arcticle.cotegories}</span>
            </p>
            <p class="date">${arcticle.date}</p>
          </div>
        </div>

        <div class="divimage">
          <img src="${arcticle.urlImage}" />
          <p>
            ${arcticle.subtitle}
          </p>
        </div>
        <div class="text1">
          <p>
            ${arcticle.content}
          </p>
  
        </div>

        <div class="font2">
          <h2 class="font">thanks for read!!!</h2>
        </div>
      </div>
         
         `;

  container1.innerHTML = articleHtml;

  let number = localStorage.getItem("number");

  if (number == 1) {
    location.reload();

    localStorage.setItem("number", null);
  }
}

article();
