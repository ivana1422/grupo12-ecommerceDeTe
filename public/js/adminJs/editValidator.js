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
const inputFile = document.getElementById("avatar")
const spanFile = document.getElementById("file__error")
const form = document.querySelector("form")
const avatarPreview = document.getElementById("imagePreview")

let emailBoolean = true;
let nameBoolean = true;
let surnameBoolean = true;

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
        if(emailBoolean && nameBoolean && surnameBoolean){
            form.submit()
        } else if (!emailBoolean || !nameBoolean || !surnameBoolean){
            if(!inputName.classList.contains("input__valid") && !nameBoolean){
                invalidInput(inputName,iconName)
            }
            if(!inputSurname.classList.contains("input__valid") && !surnameBoolean){
                invalidInput(inputSurname,iconSurname)
            }
            if(!inputEmail.classList.contains("input__valid") && !emailBoolean){
                invalidInput(inputEmail,iconEmail)
            }
            alert("Debe Completar los campos")
        }
    })