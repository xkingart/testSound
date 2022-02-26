
let next = document.getElementById('next')
let previous = document.getElementById('previous')
let audio = document.getElementById('nowPlaying')

var x = 0;

let playlist = ['assets/someFile.mp3','assets/someFile2.mp3','assets/someFile3.mp3']




previous.addEventListener('click',function(){

     
    console.log("test")

    if (x > 0)
    {    
        console.log("test2")
    x--
    audio.setAttribute("src",playlist[x])
    }
    
    

})

next.addEventListener('click',function(){

    console.log("test")

    if (x < (playlist.length -1))
    {     
        console.log("test2")   
    x++    
    audio.setAttribute("src",playlist[x])
    }
    

})




