import { logout } from "../config/logout.js";
import { openUrl } from "../config/openUrl.js";
import { getArticlesWithLimit } from "../Http/get.js";
import {articles} from "../config/watchArticles.js";
getArticlesWithLimit()
articles()

let local = localStorage.getItem('session')

if (!local) {
      
        openUrl('home')
}else{
}

function vUser(){
  const user = localStorage.getItem('session')
  const userConvert = JSON.parse(user)
 

  let name = window.document.querySelector('.name_user')
  let email = document.querySelector('.email_user')

  let nameM = window.document.querySelector('.name_userM')
  let emailM = document.querySelector('.email_userM')



  name.innerHTML = `${userConvert.name}`
  email.innerHTML= `${userConvert.email}`
  nameM.innerHTML = `${userConvert.name}`
  emailM.innerHTML= `${userConvert.email}`

}
 
vUser()

window.document.querySelector('.logout2').addEventListener('click' ,function(){
  logout()
})

 function custonF(){
   
  const guides = document.querySelectorAll(".container_sima .guide");
  
  let sources = document.querySelector('.inputSources').value
  let author = document.querySelector('.inputAuthor').value
  let categories = document.querySelector('.inputCategories').value


 
    if (sources != '') {
      for (let guide of guides) {

        let title = guide.querySelector("h2");

        title = title.textContent.toLowerCase();

        let filterstext = sources.toLowerCase();
    
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
    window.document.querySelector('.custom_f').classList.remove('modal')
    if (author != "") {
      for (let guide of guides) {
        let title = guide.querySelector(".author");
        console.log(title)
        title = title.textContent.toLowerCase();
        let filterstext = author.toLowerCase();
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
    window.document.querySelector('.custom_f').classList.remove('modal')
 
    if (categories != "") {
      
      for (let guide of guides) {
        let title = guide.querySelector(".categoryF");
        console.log(title)
        title = title.textContent.toLowerCase();
        let filterstext = categories.toLowerCase();
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
  
   
    window.document.querySelector('.custom_f').classList.remove('modal')
   
 }
 document.querySelector('.custom').addEventListener('click', function(){
  custonF()
 })

 
 
 window.document.querySelector('.id1').addEventListener('click',
 function(){
  
  sessionStorage.setItem('id',1)
   openUrl('details')
 } )
 window.document.querySelector('.id2').addEventListener('click',
 function(){
  
  
  sessionStorage.setItem('id',2)
   openUrl('details')
 } )
 window.document.querySelector('.id3').addEventListener('click',
 function(){
   
   sessionStorage.setItem('id',3)
   openUrl('details')
 } )
 window.document.querySelector('.id4').addEventListener('click',
 function(){
   
   sessionStorage.setItem('id',4)
   openUrl('details')
 } )
 window.document.querySelector('.id5').addEventListener('click',
 function(){
   
   sessionStorage.setItem('id',5)
   openUrl('details')
 } )
 window.document.querySelector('.id6').addEventListener('click',
 function(){
   
   sessionStorage.setItem('id',6)
   openUrl('details')
 } )


 