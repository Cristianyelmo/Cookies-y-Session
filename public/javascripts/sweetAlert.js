const formcreate = document.getElementById("form-colores")












    
formcreate.addEventListener("submit",function(event){
event.preventDefault();

Swal.fire({
    position: 'middle',
    imageUrl: 'https://media.tenor.com/ZRmKGlWN4XEAAAAC/sakuragi-hanamichi.gif',
  imageHeight: 300,
  imageWidth: 300,
    title: 'Listou!',
    showConfirmButton: false,
  timer: 4300 
  })


  formcreate.submit()










})

