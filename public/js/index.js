let button = document.querySelector("#btn-menu")

let menu = document.querySelector("#menu")

button.addEventListener("click", function(){
    
    menu.classList.toggle("active")

})

function shareProduct(id){
    navigator.share({
        url:`/productos/${id}`
    })
}

const arrowSliderRight = document.querySelector('.arrowSliderRight')

const arrowSliderLeft = document.querySelector('.arrowSliderLeft')

const slider = document.querySelector('.slider')

arrowSliderLeft.addEventListener('click',()=>{
    slider.scrollLeft -= 300
})

arrowSliderRight.addEventListener('click',()=>{
    slider.scrollLeft += 300
})

setInterval(()=>{
    slider.scrollLeft += 300
},4000)