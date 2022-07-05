function qs (element) {
    return document.querySelector(element)
}

window.addEventListener('load', () => {

    let inputName = qs('#name')
    let form = qs('#form')
    let regExAlpha = /^[a-zA-z\sñáéíóúü]*$/
    let spanNameError = qs("#nameError")



    inputName.addEventListener('blur', () => {
        switch(true) {
            case !inputName.value.trim():
                spanNameError.innerHTML = "Campo requerido.";
                inputName.style.border = '4px solid red';
                break;
            
            case !regExAlpha.test(inputName.value):
                spanNameError.innerHTML = "Nombre Invalido.";
                inputName.style.border = '4px solid red';
                break;

            default:
                inputName.style.border = '4px solid green';
                spanNameError.innerHTML = "";

        }
    })



    form.addEventListener("submit" , function (event) {

        event.preventDefault()
        let errores = false;

        if(inputName.value == ""){
            inputName.style.border = '4px solid red'
            submitError.innerHTML = "Debe colocar una categoria"
            errores = true
        }else if (regExAlpha.test(inputName.value)) {
            inputName.style.border = '4px solid green'
            submitError.innerHTML = ""
            errores = false
        }

        if(!errores){
            form.submit()
        }
    })

})