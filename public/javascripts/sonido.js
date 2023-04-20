 const sonidoxd = document.getElementById('sonidoxd')
const xd = document.getElementById('xd') 



let audio = new Audio




const playTune = (key) =>{
    
   
    if(sonidoxd){

        audio.src = `/sound/MagicCartoon CTE01_93.3_preview.mp3`

        audio.play()
    
    }

     if(xd){
        audio.src = `/sound/Efecto de sonido - Error.mp3`

        audio.play()
    }
 

    
    
}



(sonidoxd||xd).addEventListener('click',()=>playTune())






