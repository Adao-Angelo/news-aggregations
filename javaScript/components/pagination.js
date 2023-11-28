

sessionStorage.setItem('numberPage', 0)

export function  paginationPro(){

   let numberPage = Number(sessionStorage.getItem('numberPage'))

  

     
}


 window.document.querySelector('.proximo').addEventListener('click', function(){

     paginationPro()
 })

 window.document.querySelector('.anterior').addEventListener('click', function(){

    paginationAnt()
})