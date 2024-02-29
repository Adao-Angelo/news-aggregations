const guides = document.querySelectorAll(".container_sima .guide");
const filtersElement = document.querySelector(".top2 #search");
filtersElement.addEventListener("input", filtersCard);
function filtersCard(element) {
  if (filtersElement.value != "") {
    for (let guide of guides) {
      let title = guide.querySelector("h2");
      title = title.textContent.toLowerCase();
      let filterstext = filtersElement.value.toLowerCase();
      if (!title.includes(filterstext)) {
        guide.style.display = "none";
      } else {
        guide.style.display = "block";
      }
    }
  } else {
    for (let guide of guides) {
      guide.style.display = "block";
    }
  }
}

const guidesS = document.querySelectorAll(".container_sima .guide");
const filtersElementS = document.querySelector(".top2 #sources");
filtersElementS.addEventListener("input", filtersCardS);
function filtersCardS(element) {
  if (filtersElementS.value != "") {
    for (let guide of guidesS) {
      let title = guide.querySelector(".author");
      title = title.textContent.toLowerCase();
      let filterstext = filtersElementS.value.toLowerCase();
      if (!title.includes(filterstext)) {
        guide.style.display = "none";
      } else {
      }
    }
  } else {
    for (let guide of guides) {
      guide.style.display = "block";
    }
  }
}

const guidesC = document.querySelectorAll(".container_sima .guide");

const filtersElementC = document.querySelector(".top2 #categories");
filtersElementC.addEventListener("input", filtersCardC);

function filtersCardC(element) {
  if (filtersElementC.value != "") {
    for (let guide of guidesC) {
      let title = guide.querySelector(".categoryF");
      title = title.textContent.toLowerCase();
      let filterstext = filtersElementC.value.toLowerCase();
      if (!title.includes(filterstext)) {
        guide.style.display = "none";
      } else {
      }
    }
  } else {
    for (let guide of guides) {
      guide.style.display = "block";
    }
  }
}

const guidesD = document.querySelectorAll(".container_sima .guide");

const filtersElementD = document.querySelector(".top2 #date");
filtersElementD.addEventListener("input", filtersCardD);

function filtersCardD(element) {
  if (filtersElementD.value != "") {
    for (let guide of guidesD) {
      let title = guide.querySelector(".date");
      title = title.textContent.toLowerCase();
      let filterstext = String(filtersElementD.value.toLowerCase());
      console.log(filterstext);
      if (!title.includes(filterstext)) {
        guide.style.display = "none";
      } else {
      }
    }
  } else {
    for (let guide of guides) {
      guide.style.display = "block";
    }
  }
}
