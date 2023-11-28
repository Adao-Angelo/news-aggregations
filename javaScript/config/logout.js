import {  openUrl  } from "./openUrl.js";

export function logout(){

    localStorage.removeItem('session')
     
    openUrl('home')
    
    

}