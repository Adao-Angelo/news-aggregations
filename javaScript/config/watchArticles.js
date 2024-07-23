import { openUrl } from "./openUrl.js";
export function articles(n1, n2, n3, n4, n5, n6) {
  let articles = JSON.parse(sessionStorage.getItem("articles"));

  let sima1 = [articles[0], articles[1], articles[2]];

  let sima2 = [articles[3], articles[4], articles[5]];
  organisationOfGuide(sima1, sima2);
}

function organisationOfGuide(sima1, sima2) {
  watchSima1(sima1);
  watchSima2(sima2);
}

function watchSima1(sima1) {
  let container = document.querySelector(".sima1");

  for (let index = 0; index < sima1.length; index++) {
    let guide = sima1[index];
    let guideHtml = `
    <div class="guide id${guide.id}"  onclick="addIDonDetails(${guide.id})" >
    <p class="categoryF">
    ${guide.cotegories}
  </p>
    <div class="guide_top">
      <img src="${guide.urlImage}"image" />
      <div class= "sp">
        <h2 class="txtgrand">
        ${guide.title}
      </h2>
      </div>
   
      <p class="txtmine">
       ${guide.subtitle}
        seletio ero.
      </p>
    </div>
    <div class="guide_footer">
      <p class="txtmine semibold author">By:${guide.author}</p>
      <p class="txtmine date">${guide.date}</p>
    </div>
  </div>`;

    container.innerHTML += guideHtml;
  }
}

function watchSima2(sima2) {
  let container = document.querySelector(".sima2");

  for (let index = 0; index < sima2.length; index++) {
    let guide = sima2[index];
    console.log();
    let guideHtml = `
    <div class="guide  id${guide.id}" onclick="addIDonDetails(${guide.id})">
    <p class="categoryF">
    ${guide.cotegories}
  </p>
    <div class="guide_top">
      <img src="${guide.urlImage}"image" />
      <h2 class="txtgrand">
        ${guide.title}
      </h2>
      <p class="txtmine">
       ${guide.subtitle}
        seletio ero.
      </p>
    </div>
    <div class="guide_footer">
      <p class="txtmine semibold author">By:${guide.author}</p>
      <p class="txtmine">${guide.date}</p>
    </div>
  </div>`;

    container.innerHTML += guideHtml;
  }
}
