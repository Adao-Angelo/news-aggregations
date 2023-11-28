
import { openUrl } from "./openUrl.js";
import { getUsers } from "../Http/get.js";
 export function signIn(email , password) {
  getUsers()
  let users =JSON.parse( sessionStorage.getItem('users'))
   let index = 0 
  for(let user of users ){
      if (email == user.email && password == user.password) {
       
        const session = {
          name: user.name,
          email:user.email,   
     
      } 
    
      localStorage.setItem("session", JSON.stringify(session))
      openUrl('User_authenticated')
      
     }else if(email != user.email && password != user.password){
        index++

        if(index >= users.length) {
          document.querySelector('.alert').classList.add('ative')
          
       } 

        
      }

  }

}


