

function qs (element) {
    return document.querySelector(element)
}

window.addEventListener('load', () => {
    let inputName = qs("#name")
    let spanNameError = qs("#nameError")
    let inputCategory = qs("#category")
    let divCategory = qs('#divCategoryFather')
    let categoryError = qs('#categoryError')
    let inputPrice = qs("#price")
    let priceError = qs('#priceError')
    let inputStock = qs("#stock")
    let stockError = qs('#stockError')
    let inputDiscount = qs("#discount")
    let discountError = qs('#discountError')
    let inputDescription = qs("#description")
    let descriptionError = qs('#descriptionError')
    let inputIngredient1 = qs("#ingredient1")
    let inputIngredient2 = qs("#ingredient2")
    let inputIngredient3 = qs("#ingredient3")
    let ingredient1Error = qs('#ingredient1Error')
    let ingredient2Error = qs('#ingredient2Error')
    let ingredient3Error = qs('#ingredient3Error')

    let inputComent = qs("#coment")
    let comentError = qs('#comentError')

    let form = qs('#form')
    let submitError = qs('#submitError')

    let regExAlpha = /^[a-zA-z\sñáéíóúü]*$/
    let validarNum = /^[0-9]*(\.?)[0-9]+$/
    let unoACien = /^[1-9][0-9]?$|^100$/



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

    inputCategory.addEventListener('blur' ,() => {
        switch(true){
            case !inputCategory.value == undefined && !inputCategory.value == null:
                divCategory.style.border = '4px solid red';
                categoryError.innerHTML = "Seleccione una opcion";
            
            default:
                divCategory.style.border = '4px solid green';
                categoryError.innerHTML = "";
        }       
    })

    inputPrice.addEventListener('blur', () => {
        switch(true) {
            case !inputPrice.value.trim():
                priceError.innerHTML = "Campo requerido.";
                inputPrice.style.border = '4px solid red';
                break;
            
            case !validarNum.test(inputPrice.value):
                priceError.innerHTML = "Precio Invalido. utilice puntos para los centavos, solo numeros y el precio no puede ser 0";
                inputPrice.style.border = '4px solid red';
                break;

            default:
                inputPrice.style.border = '4px solid green';
                priceError.innerHTML = "";

        }
    })

    inputStock.addEventListener('blur', () => {
        switch(true) {
            case !inputStock.value.trim():
                stockError.innerHTML = "Campo requerido.";
                inputStock.style.border = '4px solid red';
                break;

            default:
                inputStock.style.border = '4px solid green';
                stockError.innerHTML = "";
        }
    })


    inputDescription.addEventListener('blur', () => {
        switch(true) {
            case !inputDescription.value.trim():
                descriptionError.innerHTML = "Campo requerido.";
                inputDescription.style.border = '4px solid red';
                break;

            default:
                inputDescription.style.border = '4px solid green';
                descriptionError.innerHTML = "";
        }
    })

    inputIngredient1.addEventListener('blur', () => {
        switch(true) {
            case !inputIngredient1.value.trim():
                ingredient1Error.innerHTML = "Campo requerido.";
                inputIngredient1.style.border = '4px solid red';
                break;
            
            case !regExAlpha.test(inputIngredient1.value):
                ingredient1Error.innerHTML = "Ingrediente Invalido.";
                inputIngredient1.style.border = '4px solid red';
                break;

            default:
                inputIngredient1.style.border = '4px solid green';
                ingredient1Error.innerHTML = "";
                
        }
    })
    
    inputIngredient2.addEventListener('blur', () => {
        switch(true) {
            case !inputIngredient2.value.trim():
                ingredient2Error.innerHTML = "Campo requerido.";
                inputIngredient2.style.border = '4px solid red';
                break;
            
            case !regExAlpha.test(inputIngredient2.value):
                ingredient2Error.innerHTML = "Ingrediente Invalido.";
                inputIngredient2.style.border = '4px solid red';
                break;

            default:
                inputIngredient2.style.border = '4px solid green';
                ingredient2Error.innerHTML = "";
                
        }
    })


    inputIngredient3.addEventListener('blur', () => {
        switch(true) {
            case !inputIngredient3.value.trim():
                ingredient3Error.innerHTML = "Campo requerido.";
                inputIngredient3.style.border = '4px solid red';
                break;
            
            case !regExAlpha.test(inputIngredient3.value):
                ingredient3Error.innerHTML = "Ingrediente Invalido.";
                inputIngredient3.style.border = '4px solid red';
                break;

            default:
                inputIngredient3.style.border = '4px solid green';
                ingredient3Error.innerHTML = "";
                
        }
    })

    inputComent.addEventListener('blur', () => {
        switch(true) {
            case !inputComent.value.trim():
                comentError.innerHTML = "Campo requerido.";
                inputComent.style.border = '4px solid red';
                break;

            default:
                inputComent.style.border = '4px solid green';
                comentError.innerHTML = "";
        }
    })

    form.addEventListener("submit" , function (event) {
        event.preventDefault()
        let elementsForm = this.elements
        let errores = false;

        for(let j = 0; j < elementsForm.length -1 ; j++){

            if(elementsForm[j].checked == true && elementsForm[j].type == 'radio') {
                divCategory.style.border = '4px solid green';
                errores = false
                break
            }else if(elementsForm[j].checked == false && elementsForm[j].type == 'radio'){
                divCategory.style.border = '4px solid red';
                errores = true
                submitError.innerHTML = "los campos senalados son obligatorios"
            }

        }

        for(let i = 0; i < elementsForm.length - 1 ; i++ ){
            if(elementsForm[i].value == ""
                && elementsForm[i].type !== 'file'
                && elementsForm[i].name !== 'discount'){
                elementsForm[i].style.border = '4px solid red'
                submitError.innerHTML = "los campos senalados son obligatorios"
                errores = true
                
            }
        }

        if(!errores){
            form.submit()
        }
    })


})