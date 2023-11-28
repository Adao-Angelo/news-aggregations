

export function getUsers(){
    
    fetch('http://localhost:3000/users')
     .then(response => response.json())
     .then(user => sessionStorage.setItem('users',JSON.stringify(user)))
     
 
} 
 

export function getArticlesWithLimit(page){
    
    fetch('http://localhost:3000/articles')
     .then(response => response.json())
     .then(articles => sessionStorage.setItem('articles',JSON.stringify(articles)))
     
 
} 