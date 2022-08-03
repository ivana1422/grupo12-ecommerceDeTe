window.addEventListener('load',()=>{
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

    //Modo oscuro
    let link = document.querySelector('#darkModeLink');
    let btnDarkMode = document.getElementById('checkDarkMode');

    const darkModeCss = '<link rel="stylesheet" href="/css/darkmode.css">'

    if(localStorage.getItem('darkmode') === 'true'){
        link.innerHTML = '<link rel="stylesheet" href="/css/darkmode.css"></link>'
        btnDarkMode.checked = true
    }
    

    btnDarkMode.addEventListener('change',(e)=>{
        if(e.target.checked){
            link.innerHTML = '<link rel="stylesheet" href="/css/darkmode.css"></link>'
            localStorage.setItem('darkmode',true)
        } else {
            link.innerHTML = '<link rel="stylesheet" href=""></link>'
            localStorage.setItem('darkmode',false)
        }
    })


})
