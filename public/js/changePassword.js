function qs (element) {
    return document.querySelector(element)
}

window.addEventListener('load', () => {
    // let inputCActual = qs('#inCA');
    // let span = qs('#spanchange')

    // let divChange2 = qs('#primerDivChange2');
    // let divChange3 = qs('#primerDivChange3');
    // let divButtons = qs('#primerDivButtons');

    // let buttonVerificar = qs('#BVerificar');
    
    // inputCActual.addEventListener('blur', () => {
    //     switch(true) {
    //         case !inputCActual.value.trim():
    //             inputCActual.style.border= '4px solid red'
    //             span.innerHTML = "Campo requerido"
    //             break;
            
    //         default:
    //             inputCActual.style.border= 'none'
    //             span.innerHTML= ""
    //     }
    // })

    let  contra = "tatito123"
    let pass = bcrypt.compareSync(contra, "$2a$10$0ZIGkgMRShqaXMFGyXcjUuwVxxT7tz73V6vBLW7./Uk")
    console.log(pass + " este es el resultado")
})