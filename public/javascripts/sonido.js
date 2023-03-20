const sonidoxd = document.getElementById('sonidoxd')

let audio = new Audio


const playTune = (key) =>{
    
    
    audio.src = `/sound/MagicCartoon CTE01_93.3_preview.mp3`


    
    audio.play()
}

sonidoxd.addEventListener('click',()=>playTune())