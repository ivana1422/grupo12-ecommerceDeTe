function qs (element) {
    return document.querySelector(element)
}

//taiel

let abrirPopupTaiel = qs('#linkT');
let overlay = qs('#overlay');
let popup = qs('#popup');
let cerrarPopupTaiel = qs('#cerrar-popup');

abrirPopupTaiel.addEventListener('click', () => {
    overlay.classList.add('active')
    popup.classList.add('active')
})
cerrarPopupTaiel.addEventListener('click', () => {
    overlay.classList.remove('active')
    popup.classList.remove('active')
})

//adrian

let abrirPopupAdrian = qs('#linkAdri');
let overlayAdrian = qs('#overlayAdrian');
let popupAdrian = qs('#popupAdrian');
let cerrarPopupAdrian = qs('#cerrar-popupAdrian');

abrirPopupAdrian.addEventListener('click', () => {
    overlayAdrian.classList.add('active')
    popupAdrian.classList.add('active')
})
cerrarPopupAdrian.addEventListener('click', () => {
    overlayAdrian.classList.remove('active')
    popupAdrian.classList.remove('active')
})


let boton = qs('#bnC');

let inputConocenos = qs('#conoc');

boton.addEventListener('click', () => {
    if(boton.innerHTML == "Conocenos "){
        // inputConocenos.style.display = 'flex'
        // inputConocenos.style.height = '325px'
        inputConocenos.classList.add('active')
        boton.innerHTML = "dejar de mostrar "
    }else {
        inputConocenos.classList.remove('active')
        // inputConocenos.style.height = '150px'
        // inputConocenos.style.display = 'none'
        boton.innerHTML = "Conocenos "
    }
})

 
    

