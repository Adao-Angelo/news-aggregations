export function openUrl(url) {
  let rota = "../../pages/";
  let extention = ".html";
  let urlC = `${rota}${url}${extention}`;
  window.open(urlC, "_self");
}
