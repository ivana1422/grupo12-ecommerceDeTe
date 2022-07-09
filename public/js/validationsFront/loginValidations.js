let expression={
    name_surname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    pass: /^.{8,12}$/, // 8 a 12 digitos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const inputEmail = document.getElementById("input__login__email");
const inputPass = document.getElementById("input__login__pass");
const iconEmail = document.getElementById("icon__login__email");
const iconPass = document.getElementById("icon__login__pass");
const form = document.querySelector("form")

let emailBoolean = false;
let passBoolean = false;

const validInput = (input,icon)=>{
    input.classList.remove("input__invalid")
    input.classList.add("input__valid")
    icon.classList.remove("fa-circle-exclamation","icon__invalid")
    icon.classList.add("fa-solid", "fa-circle-check","icon__valid")
}

const invalidInput = (input,icon)=>{
    input.classList.remove("input__valid")
    input.classList.add("input__invalid")
    icon.classList.remove("fa-circle-check","icon__valid")
    icon.classList.add("fa-solid","fa-circle-exclamation","icon__invalid")
}

//let errors = []

    inputEmail.addEventListener("keyup",(e)=>{
        if(e.target.value == ''){
            invalidInput(inputEmail,iconEmail)
            emailBoolean = false
        } else {
            if(expression.email.test(e.target.value)){
                validInput(inputEmail,iconEmail)
                emailBoolean = true
                /*inputEmail.classList.remove("input__invalid")
                inputEmail.classList.add("input__valid")
                iconEmail.classList.remove("fa-circle-exclamation","icon__invalid")
                iconEmail.classList.add("fa-solid", "fa-circle-check","icon__valid")*/
            }else{
                invalidInput(inputEmail,iconEmail)
                emailBoolean = false
                /*inputEmail.classList.remove("input__valid")
                inputEmail.classList.add("input__invalid")
                iconEmail.classList.remove("fa-circle-check","icon__valid")
                iconEmail.classList.add("fa-solid","fa-circle-exclamation","icon__invalid")
                let mailVacio = e.target.value
                errors.push(mailVacio)*/
            }
        }
        
    })

    inputPass.addEventListener("keyup",(e)=>{
        if(e.target.value == ''){
            invalidInput(inputPass,iconPass)
            passBoolean = false
        } else{
            if(expression.pass.test(e.target.value)){
                validInput(inputPass,iconPass)
                passBoolean = true
                /*inputPass.classList.remove("input__invalid")
                inputPass.classList.add("input__valid")
                iconPass.classList.remove("fa-circle-exclamation","icon__invalid")
                iconPass.classList.add("fa-solid", "fa-circle-check","icon__valid")*/
            }else{
                invalidInput(inputPass,iconPass)
                passBoolean = false
                /*inputPass.classList.remove("input__valid")
                inputPass.classList.add("input__invalid")
                iconPass.classList.remove("fa-circle-check","icon__valid")
                iconPass.classList.add("fa-solid","fa-circle-exclamation","icon__invalid")
                let passVacio = e.target.value
                errors.push(passVacio)*/
            }
        }
        
    })

    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        if(emailBoolean && passBoolean){
            form.submit()
        } else if (!emailBoolean || !passBoolean){
            if(!inputEmail.classList.contains("input__valid")){
                invalidInput(inputEmail,iconEmail)
                /*inputEmail.classList.remove("input__valid")
                inputEmail.classList.add("input__invalid")
                iconEmail.classList.remove("fa-circle-check","icon__valid")
                iconEmail.classList.add("fa-solid","fa-circle-exclamation","icon__invalid")*/
            }
            if(!inputPass.classList.contains("input__valid")){
                invalidInput(inputPass,iconPass)
                /*inputPass.classList.remove("input__valid")
                inputPass.classList.add("input__invalid")
                iconPass.classList.remove("fa-circle-check","icon__valid")
                iconPass.classList.add("fa-solid","fa-circle-exclamation","icon__invalid")*/
            }
            alert("Debe Completar los campos")
        }
    })
    /*form.addEventListener("submit",(e)=>{
        e.preventDefault()
        if(errors.length == 0){

            alert("Debe Completar los campos")
            inputPass.classList.remove("input__valid")
            inputPass.classList.add("input__invalid")
            iconPass.classList.remove("fa-circle-check","icon__valid")
            iconPass.classList.add("fa-solid","fa-circle-exclamation","icon__invalid")
            inputEmail.classList.remove("input__valid")
            inputEmail.classList.add("input__invalid")
            iconEmail.classList.remove("fa-circle-check","icon__valid")
            iconEmail.classList.add("fa-solid","fa-circle-exclamation","icon__invalid")
        } else if(inputEmail.classList.contains("input__valid") && inputPass.classList.contains("input__valid")){
            form.submit()
        }
    })*/