import { openUrl } from "./javaScript/config/openUrl.js";

let local = localStorage.getItem("session");

if (!local) {
  openUrl("home");
} else {
  openUrl("User_authenticated");
}
