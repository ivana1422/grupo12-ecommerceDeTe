let expression={
    name_surname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    pass: /^.{8,12}$/, // 8 a 12 digitos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const inputEmail = document.getElementById("input__create__email");
const iconEmail = document.getElementById("icon__create__email");
const inputName = document.getElementById("input__create__name");
const iconName = document.getElementById("icon__create__name");
const inputSurname = document.getElementById("input__create__surname");
const iconSurname = document.getElementById("icon__create__surname");
const inputPass = document.getElementById("input__create__pass");
const iconPass = document.getElementById("icon__create__pass")
const inputFile = document.getElementById("avatar")
const spanFile = document.getElementById("file__error")
const form = document.querySelector("form")
const avatarPreview = document.getElementById("imagePreview")

let emailBoolean = false;
let passBoolean = false;
let nameBoolean = false;
let surnameBoolean = false;

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

    inputName.addEventListener("keyup",(e)=>{
        if(e.target.value == ''){
            invalidInput(inputName,iconName)
            nameBoolean = false
        } else{
            if(expression.name_surname.test(e.target.value)){
                validInput(inputName,iconName)
                nameBoolean = true
            }else{
                invalidInput(inputName,iconName)
                nameBoolean = false
            }
        }
        console.log(nameBoolean)
    })

    inputSurname.addEventListener("keyup",(e)=>{
        if(e.target.value == ''){
            invalidInput(inputSurname,iconSurname)
            surnameBoolean = false
        } else {
            if(expression.name_surname.test(e.target.value)){
                validInput(inputSurname,iconSurname)
                surnameBoolean = true
            }else{
                invalidInput(inputSurname,iconSurname)
                surnameBoolean = false
            }
        }
        console.log(surnameBoolean)
    })

    inputEmail.addEventListener("keyup",(e)=>{
        if(e.target.value == ''){
            invalidInput(inputEmail,iconEmail)
            emailBoolean = false
        } else {

            if(expression.email.test(e.target.value)){
                validInput(inputEmail,iconEmail)
                emailBoolean = true
            }else{
                invalidInput(inputEmail,iconEmail)
                emailBoolean = false
            }
        }
        console.log(emailBoolean)
    })

    inputPass.addEventListener("keyup",(e)=>{
        if(e.target.value == ''){
            invalidInput(inputPass,iconPass)
            passBoolean = false
        }else{
            if(expression.pass.test(e.target.value)){
                validInput(inputPass,iconPass)
                passBoolean = true
            }else{
                invalidInput(inputPass,iconPass)
                passBoolean = false
            }
        }
        console.log(passBoolean)
    })

    inputFile.addEventListener('change',
            function fileValidation(){
                let filePath = inputFile.value
                let allowefExtensions = /(.jpg|.png)$/i
                if(!allowefExtensions.exec(filePath)){
                    spanFile.innerHTML = 'imagen no válida, solo se permiten con extensión .jpg .png';
                    inputFile.value = '';
                    return false;
                } else {
                    spanFile.innerHTML = ''
                }
            })

    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        if(emailBoolean && passBoolean && nameBoolean && surnameBoolean){
            form.submit()
        } else if (!emailBoolean || !passBoolean || !nameBoolean || !surnameBoolean){
            if(!inputName.classList.contains("input__valid") && !nameBoolean){
                invalidInput(inputName,iconName)
                /*inputName.classList.remove("input__valid")
                inputName.classList.add("input__invalid")
                iconName.classList.remove("fa-circle-check","icon__valid")
                iconName.classList.add("fa-solid","fa-circle-exclamation","icon__invalid")*/
            }
            if(!inputSurname.classList.contains("input__valid") && !surnameBoolean){
                invalidInput(inputSurname,iconSurname)
                /*inputSurname.classList.remove("input__valid")
                inputSurname.classList.add("input__invalid")
                iconSurname.classList.remove("fa-circle-check","icon__valid")
                iconSurname.classList.add("fa-solid","fa-circle-exclamation","icon__invalid")*/
            }
            if(!inputEmail.classList.contains("input__valid") && !emailBoolean){
                invalidInput(inputEmail,iconEmail)
                /*inputEmail.classList.remove("input__valid")
                inputEmail.classList.add("input__invalid")
                iconEmail.classList.remove("fa-circle-check","icon__valid")
                iconEmail.classList.add("fa-solid","fa-circle-exclamation","icon__invalid")*/
            }
            if(!inputPass.classList.contains("input__valid") && !passBoolean){
                invalidInput(inputPass,iconPass)
                /*inputPass.classList.remove("input__valid")
                inputPass.classList.add("input__invalid")
                iconPass.classList.remove("fa-circle-check","icon__valid")
                iconPass.classList.add("fa-solid","fa-circle-exclamation","icon__invalid")*/
            }
            alert("Debe Completar los campos")
        }
    })