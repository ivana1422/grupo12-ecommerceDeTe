window.addEventListener('load',()=>{
    
    
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
})