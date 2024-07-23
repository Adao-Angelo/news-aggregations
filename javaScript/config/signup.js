import { openUrl } from "./openUrl.js";
import { postData } from "../Http/post.js";
export function signUp(name, email, password) {
  let user = {
    name: name,
    email: email,
    password: password,
  };

  let session = {
    name: name,
    email: email,
  };
  localStorage.setItem("session", JSON.stringify(session));

  postData(user);

  openUrl("User_authenticated");
}
