
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
