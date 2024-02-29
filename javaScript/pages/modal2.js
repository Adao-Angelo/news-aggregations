import { openUser } from "../config/open_modal.js";
import { closeUser } from "../config/close_modal.js";
function openUserH(modal) {
  openUser(modal);
}

function closeUserH(modal) {
  closeUser(modal);
}
window.document.querySelector(".open").addEventListener("click", function () {
  openUser("logout");
});

window.document
  .querySelector(".close_user")
  .addEventListener("click", function () {
    closeUserH("logout");
  });

window.document.querySelector(".open2").addEventListener("click", function () {
  openUser("custom_f");
});
window.document
  .querySelector(".close_modal2")
  .addEventListener("click", function () {
    closeUserH("custom_f");
  });
