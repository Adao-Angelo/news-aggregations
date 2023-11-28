
export function postData(user){
    let userJson = user
    let name = userJson.name
    let email = userJson.email
    let password = userJson.password
   
    
    fetch('http://localhost:3000/users', {
        method: "POST",
        headers:{
            "Content-type":"application/json;charset=UTF-8"
        },
        body: JSON.stringify({
           
            "name":`${name}`,
            "email":`${email}`,
            "password":`${password}`
        })
    })
    .then(response =>response.json())
    .then(data =>{console.log(data)})
     
        
}



export function postArticles(arcticles){
   let title = arcticles.title
   let  cotegories = arcticles.cotegories
   let  urlImage = arcticles.urlImage
   let  subtitle = arcticles.subtitle
   let  content = arcticles.content
   let  author= arcticles.author
   let date = arcticles.date
 console.log(arcticles)
    fetch('http://localhost:3000/articles', {
        method: "POST",
        headers:{
            "Content-type":"application/json;charset=UTF-8"
        },
        body: JSON.stringify({
         
        "title":`${title}`,
        "cotegories":`${cotegories}`,  
        "urlImage":`${urlImage}`, 
        "subtitle":`${subtitle}`,
        "content":`${content}`, 
         "author":`${author}`,   
          "date":`${date}` 
        })
    })
    .then(response =>response.json())
    .then(data =>{console.log(data)})
     
        
    

}

