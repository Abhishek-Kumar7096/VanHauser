let slide = document.getElementById("slide")
let backBtn = document.getElementById("backBtn")
let nextBtn = document.getElementById("nextBtn")

let slideImages = ["images/pic-1.jpg", "images/pic-2.jpg", "images/pic-3.jpg", "images/pic-4.jpg"]
let i = 0;
nextBtn.onclick = function(){
    if(i < 3){
        slide.src = slideImages[i+1]
        i++
    }
    else{
        slide.src = slideImages[0]
        i = 0
    }
}
backBtn.onclick = function(){
    if(i > 0){
        slide.src = slideImages[i-1]
        i--
    }
    else{
        slide.src = slideImages[3]
        i = 3
    }
}