const formcreate = document.getElementById("form-colores")

formcreate.addEventListener("submit",function(event){
event.preventDefault();
const nameUser = event.target.dataset.user

Swal.fire({
    position: 'middle',
    imageUrl: 'https://media.tenor.com/ZRmKGlWN4XEAAAAC/sakuragi-hanamichi.gif',
  imageHeight: 300,
  imageWidth: 300,
    title: `Bienvenido ${nameUser}`,
    showConfirmButton: false,
  timer: 2000 ,
  background: 'linear-gradient(270deg, rgba(255, 255, 255, 0.07) 0%, rgba(2, 152, 227, 0.7) 33.33%, rgba(1, 58, 87, 0.7) 66.67%, rgba(0, 0, 0, 0.7) 100%)',
  color:'white'
  }).then(() => 
    formcreate.submit() 
    )



})

